import SidebarNavigation from "@/components/sections/sidebar-navigation";
import MainHeader from "@/components/sections/main-header";
import NewsFeed from "@/components/sections/news-feed";
import AnalyticsSidebar from "@/components/sections/analytics-sidebar";
import MobileHeader from "@/components/sections/mobile-header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <MobileHeader>
        <SidebarNavigation />
      </MobileHeader>

      <SidebarNavigation />

      <main className="md:ml-[256px] peer-data-[collapsible=icon]:md:ml-[64px] transition-[margin-left] duration-200 ease-linear">
        <div className="relative mx-auto max-w-5xl pt-14 md:pt-0">
          <MainHeader />
          
          <div className="px-4 pb-8 md:px-8">
            <NewsFeed />
          </div>
        </div>
      </main>

      <AnalyticsSidebar />
    </div>
  );
}