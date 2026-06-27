import { useState } from "react";
import { LayoutDashboard, Folder, Database, Settings } from "lucide-react";
import "./Sidebar.css";

const NAV_ITEMS = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "files", icon: Folder, label: "Files" },
  { id: "datasets", icon: Database, label: "Datasets" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav className="sidebar">
      {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          type="button"
          className={`sidebar-item${active === id ? " sidebar-item-active" : ""}`}
          title={label}
          aria-label={label}
          aria-current={active === id ? "page" : undefined}
          onClick={() => setActive(id)}
        >
          <Icon size={18} strokeWidth={1.75} />
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;