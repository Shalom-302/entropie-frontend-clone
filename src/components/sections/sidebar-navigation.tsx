"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Lock,
  CalendarCheck,
  History,
  CalendarDays,
  Flame,
  Radio,
  Sun,
  MoonStar,
  Languages,
  Globe,
  PanelLeft,
  Command,
} from "lucide-react";

const EntropieLogo = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <a href="/fr" className="flex h-12 items-center">
    <div className="group-data-[collapsible=icon]:hidden ml-2">
      <svg width="107" height="22" viewBox="0 0 107 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="fill-foreground">
          <path d="M96.069 3.125H86.291V21.875H82.291V3.125H72.513V0H100.069V3.125H96.069Z" />
          <path d="M57.653 3.125H47.875V8.5H57.653V11.625H47.875V18.75H57.653V21.875H43.875V0H57.653V3.125Z" />
          <path d="M70.528 21.875V0H66.528V21.875H70.528Z" />
          <path d="M107 21.875V0H103V18.75H103V21.875H107Z" />
          <path d="M37.382 13.375L40.007 3.125H43.132L38.257 21.875H34.632L29.757 3.125H32.882L35.507 13.375L37.382 13.375Z" />
          <path d="M22.257 21.875V0H26.257V18.75H32.632V21.875H22.257Z" />
          <path d="M12.382 8.5H18.757V11.625H12.382V18.75H18.757V21.875H8.382V0H18.757V3.125H12.382V8.5Z" />
          <path d="M3.757 21.875V0H0V21.875H3.757Z" />
        </g>
        <path d="M47.875 8.5H57.653V11.625H47.875V8.5Z" fill="url(#paint0_linear_logo_expanded)" />
        <path d="M12.382 8.5H18.757V11.625H12.382V8.5Z" fill="url(#paint0_linear_logo_expanded)" />
        <defs>
          <linearGradient id="paint0_linear_logo_expanded" x1="12.382" y1="10.0625" x2="57.653" y2="10.0625" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="hidden group-data-[collapsible=icon]:flex">
       <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-foreground">
         <path d="M22.5 0H7.5C3.3585 0 0 3.3585 0 7.5V22.5C0 26.6415 3.3585 30 7.5 30H22.5C26.6415 30 30 26.6415 30 22.5V7.5C30 3.3585 26.6415 0 22.5 0ZM18 20.625H12V23.25H9.375V6.75H12V11.25H18V13.875H12V18H18V20.625Z"/>
         <path d="M12 11.25H18V13.875H12V11.25Z" fill="url(#paint0_linear_logo_collapsed)" />
         <defs>
          <linearGradient id="paint0_linear_logo_collapsed" x1="12" y1="12.5625" x2="18" y2="12.5625" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="sr-only">Entropie</span>
  </a>
);

export default function SidebarNavigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="group peer hidden text-sidebar-foreground md:block" data-collapsible={isCollapsed ? 'icon' : 'expanded'}>
      <div className="relative h-svh w-[256px] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=icon]:w-[64px]"></div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden h-svh w-[256px] flex-col border-r border-sidebar-border bg-sidebar transition-[width] duration-200 ease-linear md:flex group-data-[collapsible=icon]:w-[64px]">
        <div data-sidebar="header" className="flex flex-col gap-2 p-2 px-4 pt-4 pb-2 group-data-[collapsible=icon]:px-2">
          <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
            <div className="flex w-full items-center justify-between group-data-[collapsible=icon]:flex-col">
              <EntropieLogo isCollapsed={isCollapsed} />
              <li data-sidebar="menu-item" className="group/menu-item relative">
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 justify-center whitespace-nowrap rounded-md p-2 text-sm font-medium text-sidebar-accent-foreground outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent focus-visible:ring-0 group-data-[collapsible=icon]:size-8">
                  <PanelLeft className="size-4 shrink-0" />
                  <span className="sr-only">Toggle Sidebar</span>
                </button>
              </li>
            </div>
          </ul>
          <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
            <div className="hidden md:flex px-2 group-data-[collapsible=icon]:hidden">
              <button className="relative flex h-9 w-full items-center justify-start gap-2 whitespace-nowrap rounded-lg bg-muted/50 px-3 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Naviguer…
                <kbd className="pointer-events-none absolute right-[0.5rem] top-[0.5rem] flex h-5 select-none items-center gap-1 rounded bg-muted px-2 font-semibold">
                  <span className="text-sm">⌘</span>
                  <span className="text-xs">K</span>
                </kbd>
              </button>
            </div>
            <li data-sidebar="menu-item" className="group/menu-item relative -mx-2 hidden group-data-[collapsible=icon]:flex">
              <button data-sidebar="menu-button" className="flex size-8 items-center justify-center rounded-md p-2 text-sm hover:bg-sidebar-accent">
                <Command className="size-4" />
              </button>
            </li>
          </ul>
        </div>

        <div data-sidebar="content" className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden">
          {/* Menu Groups */}
          <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2 px-4 group-data-[collapsible=icon]:px-2">
            <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Entropie</div>
            <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
              <li className="group/menu-item relative">
                <Link href="/fr/foryou" className="peer/menu-button flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 pr-8 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                  <Sparkles className="size-4 shrink-0 text-cyan-500" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">Pour vous</span>
                </Link>
                <div className="pointer-events-none absolute right-1 top-1.5 peer-hover/menu-button:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden"><Lock className="size-3 text-muted-foreground" /></div>
              </li>
            </ul>
          </div>

          <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2 px-4 group-data-[collapsible=icon]:px-2">
            <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">À la Une</div>
            <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1 text-sm">
              {[
                { href: "/fr/top/today", icon: CalendarCheck, text: "Aujourd'hui", active: true },
                { href: "/fr/top/yesterday", icon: History, text: "Hier" },
                { href: "/fr/top/week", icon: CalendarDays, text: "Cette semaine" },
              ].map(({ href, icon: Icon, text, active }) => (
                <li key={text} className="group/menu-item relative">
                  <Link href={href} data-active={active} className="flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                    <Icon className="size-4 shrink-0 text-violet-500" />
                    <span className="truncate group-data-[collapsible=icon]:hidden">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-sidebar="group" className="relative flex w-full min-w-0 flex-col p-2 px-4 group-data-[collapsible=icon]:px-2">
            <div data-sidebar="group-label" className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">Explorer</div>
            <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1 text-sm">
              {[
                { href: "/fr/explore/trending", icon: Flame, text: "Tendances" },
                { href: "/fr/explore/live", icon: Radio, text: "En direct" },
              ].map(({ href, icon: Icon, text }) => (
                <li key={text} className="group/menu-item relative">
                  <Link href={href} className="flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                    <Icon className="size-4 shrink-0 text-pink-500" />
                    <span className="truncate group-data-[collapsible=icon]:hidden">{text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-sidebar="group" className="relative mt-auto flex w-full min-w-0 flex-col p-2 px-4 group-data-[collapsible=icon]:px-2">
            <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
              <li data-sidebar="menu-item" className="group/menu-item relative">
                <button className="flex h-7 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                  <Sun className="block size-4 shrink-0 dark:hidden" />
                  <MoonStar className="hidden size-4 shrink-0 dark:block" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">Thème</span>
                </button>
              </li>
              <li data-sidebar="menu-item" className="group/menu-item relative">
                <button className="flex h-7 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                  <Languages className="size-4 shrink-0" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">Langue</span>
                </button>
              </li>
              <li data-sidebar="menu-item" className="group/menu-item relative">
                 <button className="flex h-7 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                  <Globe className="size-4 shrink-0" />
                  <span className="truncate group-data-[collapsible=icon]:hidden">Pays</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 pt-2 group-data-[collapsible=icon]:hidden">
          <button className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Inscription
          </button>
          <button className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Connexion
          </button>
        </div>
      </aside>
    </div>
  );
}