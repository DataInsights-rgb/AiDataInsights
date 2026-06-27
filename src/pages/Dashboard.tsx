import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UploadCard from "../components/UploadCard";
import MetricCard from "../components/MetricCard";
import RecentFiles from "../components/RecentFiles";
import AIChat from "../components/AIChat";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <UploadCard />
          <div className="metrics-grid">
            <MetricCard label="Rows" value={1204} />
            <MetricCard label="Columns" value={8} />
            <MetricCard label="File size" value="2.3 MB" />
          </div>
          <RecentFiles />
        </main>
        <AIChat />
      </div>
    </div>
  );
}

export default Dashboard;