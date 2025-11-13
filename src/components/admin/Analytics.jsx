import React, { useEffect, useMemo, useState } from "react";
import { adminApi } from "../../services/adminApi";

/**
 * Lightweight analytics view with KPIs and a simple SVG sparkline.
 */
function Sparkline({ data = [], color = "rgba(255,122,0,0.9)" }) {
  const w = 240;
  const h = 60;
  const max = Math.max(...data, 1);
  const points = data.map((d, i) => `${(i / (data.length - 1 || 1)) * w},${h - (d / max) * h}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="rounded">
      <polyline fill="none" stroke={color} strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Analytics({ onKpiChange }) {
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    Promise.all([adminApi.getUsers(), adminApi.getContent()]).then(([u, c]) => {
      setUsers(u);
      setContent(c);
      if (onKpiChange) {
        onKpiChange({
          activeUsers: u.filter((x) => x.status === "active").length,
          pendingPosts: c.filter((x) => x.status === "pending").length,
          reports: 0,
        });
      }
    });
  }, [onKpiChange]);

  const weeklyUsers = useMemo(() => [12, 18, 22, 28, 33, 40, 46], []);
  const weeklyPosts = useMemo(() => [2, 5, 7, 6, 11, 9, 12], []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl card-glass border border-white/6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/70">Weekly Active Users</div>
              <div className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</div>
            </div>
            <Sparkline data={weeklyUsers} />
          </div>
        </div>

        <div className="p-5 rounded-xl card-glass border border-white/6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/70">New Content This Week</div>
              <div className="text-2xl font-bold">{weeklyPosts.reduce((a, b) => a + b, 0)}</div>
            </div>
            <Sparkline data={weeklyPosts} color="rgba(59,130,246,0.95)" />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl card-glass border border-white/6">
        <h3 className="font-semibold mb-3">Top Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 bg-transparent rounded">
            <div className="text-sm text-white/70">Average Response Time</div>
            <div className="font-bold">2.4h</div>
          </div>
          <div className="p-3 bg-transparent rounded">
            <div className="text-sm text-white/70">Retention</div>
            <div className="font-bold">82%</div>
          </div>
          <div className="p-3 bg-transparent rounded">
            <div className="text-sm text-white/70">Uptime</div>
            <div className="font-bold">99.99%</div>
          </div>
          <div className="p-3 bg-transparent rounded">
            <div className="text-sm text-white/70">Budget Used</div>
            <div className="font-bold">36%</div>
          </div>
        </div>
      </div>
    </div>
  );
}