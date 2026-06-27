import "./Navbar.css";

import { Sparkles, Bell, CircleUserRound } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">
          <Sparkles size={16} strokeWidth={2} />
        </span>
        <h2>AI Data Insights</h2>
      </div>
      <div className="navbar-actions">
        <button type="button" className="navbar-icon-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={1.75} />
        </button>
        <button type="button" className="navbar-icon-btn" aria-label="Account">
          <CircleUserRound size={20} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;