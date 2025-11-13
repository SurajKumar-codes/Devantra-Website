import React, { useEffect, useState } from "react";
import { adminApi } from "../../services/adminApi";

/**
 * Content moderation UI: list pending posts, approve/reject, ban author (deactivate)
 */
export default function ContentModeration() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminApi.getContent().then((c) => {
      setItems(c);
      setLoading(false);
    });
  }, []);

  function setStatus(itemId, status) {
    adminApi.updateContent(itemId, { status }).then((updated) => {
      setItems((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    });
  }

  function banAuthor(authorId) {
    adminApi.updateUser(authorId, { status: "inactive" }).then(() => {
      // reflect changes locally if needed
      setItems((prev) => prev.map((p) => (p.authorId === authorId ? { ...p, authorStatus: "inactive" } : p)));
    });
  }

  if (loading) return <div>Loading content...</div>;

  return (
    <div className="space-y-4">
      <div className="text-sm text-white/70">Pending content for review</div>
      {items.map((it) => (
        <div key={it.id} className="p-4 rounded-lg card-glass border border-white/6 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-white">{it.title}</div>
              <div className="text-sm text-white/60">by {it.authorId} • {it.createdAt}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStatus(it.id, "approved")} className="btn-primary px-3 py-2 rounded-md">Approve</button>
              <button onClick={() => setStatus(it.id, "rejected")} className="btn-ghost px-3 py-2 rounded-md">Reject</button>
            </div>
          </div>

          <div className="text-sm text-white/70">{it.excerpt}</div>

          <div className="flex items-center gap-3">
            <button className="btn-ghost px-3 py-1 rounded-md" onClick={() => banAuthor(it.authorId)}>Deactivate Author</button>
            <button className="btn-ghost px-3 py-1 rounded-md" onClick={() => adminApi.exportCSV([it], `content_${it.id}.csv`)}>Export</button>
          </div>
        </div>
      ))}
    </div>
  );
}