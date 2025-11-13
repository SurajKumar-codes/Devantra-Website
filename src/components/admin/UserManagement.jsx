import React, { useEffect, useMemo, useState } from "react";
import useDebounce from "../../CustomHooks/UseDebounce";
import { adminApi } from "../../services/adminApi";

/**
 * UserManagement: search, filter, change role, toggle status, pagination, export
 */
export default function UserManagement({ searchQuery }) {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 6;
  const debouncedSearch = useDebounce(searchQuery, 250);

  useEffect(() => {
    adminApi.getUsers().then(setUsers);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, filter]);

  const filtered = useMemo(() => {
    let list = users;
    if (filter !== "all") {
      list = list.filter((u) => u.role.toLowerCase().includes(filter));
    }
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    return list;
  }, [users, debouncedSearch, filter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  function toggleStatus(user) {
    const newStatus = user.status === "active" ? "inactive" : "active";
    adminApi.updateUser(user.id, { status: newStatus }).then((u) => {
      setUsers((prev) => prev.map((p) => (p.id === u.id ? u : p)));
    });
  }

  function changeRole(user, role) {
    adminApi.updateUser(user.id, { role }).then((u) => {
      setUsers((prev) => prev.map((p) => (p.id === u.id ? u : p)));
    });
  }

  function exportUsers() {
    adminApi.exportCSV(users, "users_export.csv");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-[#0e0e0f] border border-white/6 px-3 py-2 rounded-md">
            <option value="all">All Roles</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="admin">Admin</option>
            <option value="full stack">Full Stack</option>
          </select>
          <button onClick={exportUsers} className="btn-ghost px-3 py-2 rounded-md">Export</button>
        </div>

        <div className="text-sm text-white/60">Showing {filtered.length} users</div>
      </div>

      <div className="grid gap-4">
        {pageItems.map((u) => (
          <div key={u.id} className="p-4 rounded-lg flex items-center justify-between card-glass border border-white/6">
            <div>
              <div className="font-semibold">{u.name} <span className="text-sm text-white/60">({u.email})</span></div>
              <div className="text-xs text-white/60">Joined: {u.joined}</div>
            </div>
            <div className="flex items-center gap-3">
              <select value={u.role} onChange={(e) => changeRole(u, e.target.value)} className="bg-transparent border border-white/6 px-2 py-1 rounded-md text-sm">
                <option>Admin</option>
                <option>Developer</option>
                <option>Full Stack</option>
                <option>Designer</option>
                <option>DevOps</option>
              </select>
              <button onClick={() => toggleStatus(u)} className={`px-3 py-2 rounded-md ${u.status === "active" ? "bg-green-500/80 text-black" : "bg-red-500/70 text-white"}`}>
                {u.status}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-white/60">Page {page} of {pageCount}</div>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="btn-ghost px-3 py-2 rounded-md">Prev</button>
          <button onClick={() => setPage((p) => Math.min(pageCount, p + 1))} className="btn-ghost px-3 py-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
}