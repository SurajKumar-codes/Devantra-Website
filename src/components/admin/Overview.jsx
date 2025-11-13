import React from "react";

/**
 * Simple overview with top KPIs and quick actions
 */
export default function Overview({ kpis, onResetData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl card-glass border border-white/6">
          <div className="text-sm text-white/70">Active Users</div>
          <div className="text-2xl font-bold">{kpis.activeUsers}</div>
        </div>

        <div className="p-5 rounded-xl card-glass border border-white/6">
          <div className="text-sm text-white/70">Pending Content</div>
          <div className="text-2xl font-bold">{kpis.pendingPosts}</div>
        </div>

        <div className="p-5 rounded-xl card-glass border border-white/6">
          <div className="text-sm text-white/70">Reports</div>
          <div className="text-2xl font-bold">{kpis.reports}</div>
        </div>
      </div>

      <div className="p-6 rounded-xl card-glass border border-white/6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <p className="text-sm text-white/70">Common admin tasks</p>
          </div>
          <div className="flex gap-3">
            <button onClick={onResetData} className="btn-ghost px-4 py-2 rounded-full">Reset Local Data</button>
            <button className="btn-primary px-4 py-2 rounded-full">Open Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}