import AnalyticsPanel from "./analytics-panel";
import GreetingPanal from "./greeting-panel";
import DashboardTopPanal from "./top-panel";

export default function DashboardPage() {
  return (
    <div className="h-full">
      <DashboardTopPanal />
      <div className="h-[calc(100%-78px)] overflow-auto">
        <GreetingPanal />
        <AnalyticsPanel />
      </div>
    </div>
  );
}
