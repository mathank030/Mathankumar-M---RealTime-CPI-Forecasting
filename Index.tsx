import { Activity } from "lucide-react";
import HeroForecast from "@/components/HeroForecast";
import CategoryCard from "@/components/CategoryCard";
import TrendChart from "@/components/TrendChart";
import AlertBanner from "@/components/AlertBanner";
import DownloadButton from "@/components/DownloadButton";
import { cpiData } from "@/data/cpiData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground tracking-tight">CPI Forecast</span>
            <span className="text-xs font-mono text-muted-foreground ml-2 hidden sm:inline">v1.0</span>
          </div>
          <DownloadButton />
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Alerts */}
        <AlertBanner alerts={cpiData.alerts} />

        {/* Hero */}
        <HeroForecast
          headline={cpiData.headline}
          core={cpiData.core}
          previous={cpiData.previous}
          previousCore={cpiData.previousCore}
          date={cpiData.date}
        />

        {/* Trend Chart */}
        <TrendChart
          historicalHeadline={cpiData.historicalHeadline}
          historicalCore={cpiData.historicalCore}
        />

        {/* Category Breakdown */}
        <div className="animate-fade-up-delay-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Category Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cpiData.categories.map((cat, i) => (
              <CategoryCard key={cat.name} category={cat} index={i} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-muted-foreground py-8 border-t border-border">
          <p>Data is AI-generated forecast projections for demonstration purposes.</p>
          <p className="mt-1 font-mono">Last updated: {cpiData.date}</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
