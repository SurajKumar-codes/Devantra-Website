import React from "react";

export default function Sidebar({ active, onChange }) {
  const items = [
    { key: "overview", label: "Overview", icon: "📊" },
    { key: "users", label: "User Management", icon: "👥" },
    { key: "content", label: "Content Moderation", icon: "✍️" },
    { key: "analytics", label: "Analytics", icon: "📈" },
    { key: "config", label: "System Configuration", icon: "⚙️" },
    { key: "reports", label: "Reporting", icon: "📁" },
  ];

  return (
    <aside className="w-64 bg-[#070707] border-r border-white/6 min-h-screen px-4 py-6 hidden md:block">
      <div className="mb-8">
        <div className="text-white font-bold text-lg mb-2">Admin Dashboard</div>
        <div className="text-sm text-white/70">Manage the community & platform</div>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => onChange(it.key)}
            className={`text-left px-3 py-2 rounded-lg flex items-center gap-3 transition ${
              active === it.key ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold" : "text-white/80 hover:bg-white/2"
            }`}
          >
            <span className="text-xl">{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 text-sm text-white/60">
        <div className="mb-2">Role & Responsibilities</div>
        <ul className="space-y-1 list-disc ml-4">
          <li>Platform management</li>
          <li>Community moderation</li>
          <li>Strategic planning</li>
          <li>Resource allocation</li>
          <li>Performance monitoring</li>
        </ul>
      </div>
    </aside>
  );
}