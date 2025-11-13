import React from "react";

/**
 * Topbar: search + quick KPIs + user menu stub
 */
export default function Topbar({ search, onSearch, kpis = {} }) {
  return (
    <header className="flex items-center justify-between gap-4 py-4 px-4 border-b border-white/6 bg-transparent">
      <div className="flex items-center gap-4">
        <div className="hidden md:block text-lg font-semibold text-white/80">Platform Admin</div>
        <div className="relative">
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search users, content, reports..."
            className="bg-[#0e0e0f] border border-white/6 placeholder:text-white/40 text-white px-3 py-2 rounded-lg w-72 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-4">
          <div className="text-center">
            <div className="text-sm text-white/70">Active Users</div>
            <div className="font-semibold text-lg">{kpis.activeUsers ?? "-"}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-white/70">Pending Posts</div>
            <div className="font-semibold text-lg">{kpis.pendingPosts ?? "-"}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-md bg-white/5 text-sm">🔔</button>
          <div className="px-3 py-2 rounded-md bg-white/5">Admin</div>
        </div>
      </div>
    </header>
  );
}