"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MobileHeader = ({ children }: { children?: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <Fragment>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-border bg-sidebar/95 px-4 shadow-sm backdrop-blur-sm md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/fr" className="font-bold text-xl text-foreground">
            ENTROPIE
          </Link>
        </div>

        <div className="h-10 w-10" />
      </header>

      {isMenuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 h-full w-64 transform bg-sidebar transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
            <Link href="/fr" className="font-bold text-xl text-foreground">
              ENTROPIE
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Fermer le menu</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </aside>
    </Fragment>
  );
};

export default MobileHeader;