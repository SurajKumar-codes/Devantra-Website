import React, { useEffect, useState } from "react";
import { adminApi } from "../../services/adminApi";

/**
 * Reports: generate simple CSV reports (users/content), save entries
 */
export default function Reports() {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    adminApi.getReports().then(setReports);
  }, []);

  async function generate(type) {
    if (type === "users") {
      const users = await adminApi.getUsers();
      adminApi.exportCSV(users, "users_report.csv");
      const r = await adminApi.saveReport({ type: "users", rows: users.length });
      setReports((p) => [r, ...p]);
    } else if (type === "content") {
      const content = await adminApi.getContent();
      adminApi.exportCSV(content, "content_report.csv");
      const r = await adminApi.saveReport({ type: "content", rows: content.length });
      setReports((p) => [r, ...p]);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button onClick={() => generate("users")} className="btn-primary px-4 py-2 rounded-full">Export Users CSV</button>
        <button onClick={() => generate("content")} className="btn-ghost px-4 py-2 rounded-full">Export Content CSV</button>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Saved Reports</h3>
        <div className="space-y-2">
          {reports.length === 0 && <div className="text-white/60">No saved reports yet.</div>}
          {reports.map((r) => (
            <div key={r.id} className="p-3 rounded card-glass border border-white/6 flex justify-between items-center">
              <div>
                <div className="font-semibold">{r.type} report</div>
                <div className="text-xs text-white/60">Generated: {new Date(r.createdAt).toLocaleString()}</div>
              </div>
              <div className="text-sm text-white/60">{r.rows} rows</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}