import React, { useMemo, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import Overview from "../components/admin/Overview";
import UserManagement from "../components/admin/UserManagement";
import ContentModeration from "../components/admin/ContentModeration";
import Analytics from "../components/admin/Analytics";
import SystemConfig from "../components/admin/SystemConfig";
import Reports from "../components/admin/Reports";
import { adminApi } from "../services/adminApi";

/**
 * AdminDashboard: orchestrates the admin modules and stitches data together.
 * Tabs: overview, users, content, analytics, config, reports
 */
export default function AdminDashboard() {
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [kpis, setKpis] = useState({ activeUsers: 0, pendingPosts: 0, reports: 0 });

  const content = useMemo(() => null, []); // placeholder for possible future props

  async function resetData() {
    await adminApi.reset();
    // full page reload to reinitialize demo data; in production use a better state refresh
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white flex">
      <Sidebar active={tab} onChange={setTab} />
      <div className="flex-1">
        <Topbar search={search} onSearch={setSearch} kpis={kpis} />
        <main className="p-4 md:p-6">
          {tab === "overview" && <Overview kpis={kpis} onResetData={resetData} />}
          {tab === "users" && <UserManagement searchQuery={search} />}
          {tab === "content" && <ContentModeration />}
          {tab === "analytics" && <Analytics onKpiChange={setKpis} />}
          {tab === "config" && <SystemConfig />}
          {tab === "reports" && <Reports />}
        </main>
      </div>
    </div>
  );
}