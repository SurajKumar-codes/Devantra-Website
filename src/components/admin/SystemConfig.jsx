import React, { useEffect, useState } from "react";
import { adminApi } from "../../services/adminApi";

/**
 * SystemConfig: toggles and budget allocation
 */
export default function SystemConfig() {
  const [config, setConfig] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    adminApi.getConfig().then(setConfig);
  }, []);

  function toggleFlag(path) {
    const parts = path.split(".");
    const next = { ...config };
    let cur = next;
    for (let i = 0; i < parts.length - 1; i++) {
      cur[parts[i]] = { ...cur[parts[i]] };
      cur = cur[parts[i]];
    }
    const last = parts[parts.length - 1];
    cur[last] = !cur[last];
    setConfig(next);
  }

  function save() {
    setSaving(true);
    adminApi.updateConfig(config).then(() => setSaving(false));
  }

  if (!config) return <div>Loading settings...</div>;

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl card-glass border border-white/6">
        <h3 className="font-semibold mb-2">Platform Settings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 rounded bg-transparent flex items-center justify-between">
            <div>
              <div className="font-medium">Registrations</div>
              <div className="text-sm text-white/60">Allow new user registrations</div>
            </div>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={config.registrationsOpen} onChange={() => toggleFlag("registrationsOpen")} />
              <span className="text-sm text-white/70">{config.registrationsOpen ? "Open" : "Closed"}</span>
            </label>
          </div>

          <div className="p-3 rounded bg-transparent flex items-center justify-between">
            <div>
              <div className="font-medium">Maintenance Mode</div>
              <div className="text-sm text-white/60">Temporarily freeze access</div>
            </div>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={config.maintenanceMode} onChange={() => toggleFlag("maintenanceMode")} />
              <span className="text-sm text-white/70">{config.maintenanceMode ? "On" : "Off"}</span>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <div className="font-medium mb-2">Feature Flags</div>
          <div className="flex gap-3 flex-wrap">
            {Object.keys(config.featureFlags).map((k) => (
              <button key={k} onClick={() => toggleFlag(`featureFlags.${k}`)} className={`px-3 py-2 rounded-md ${config.featureFlags[k] ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black" : "bg-white/5 text-white/80"}`}>
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="font-medium mb-2">Budget Allocation</div>
          <div className="flex items-center gap-4">
            <input type="range" min="0" max="200000" value={config.budget} onChange={(e) => setConfig({ ...config, budget: Number(e.target.value) })} className="w-full" />
            <div className="w-28 text-right font-semibold">${config.budget.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button onClick={save} disabled={saving} className="btn-primary px-4 py-2 rounded-full">{saving ? "Saving..." : "Save Settings"}</button>
          <button onClick={() => adminApi.reset()} className="btn-ghost px-4 py-2 rounded-full">Reset Demo Data</button>
        </div>
      </div>
    </div>
  );
}