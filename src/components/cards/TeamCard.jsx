import React, { useEffect, useRef, useState } from "react";

/**
 * TeamCard - clean UI, soft glass card, subtle halo and improved hover.
 * Accepts: member { id, name, role, bio, skills }, index (for stagger delay)
 */
export default function TeamCard({ member, index = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      aria-labelledby={`member-${member.id}-name`}
      className={`relative rounded-2xl accent-border card-glass p-6 lg:p-8 flex flex-col shadow-xl overflow-hidden transform transition-all duration-300`}
      style={{
        zIndex: 1,
        // staggered animation delay
        animationDelay: visible ? `${index * 80}ms` : "0ms",
        ...(visible ? { animationName: "fadeUp", animationDuration: "560ms", animationFillMode: "both" } : { opacity: 0, transform: "translateY(18px)" }),
      }}
    >
      {/* soft halo */}
      <div aria-hidden className="absolute -top-8 -right-16 w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ff4f6a] opacity-10 blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-24 h-24 rounded-full flex items-center justify-center border-[3px] border-orange-400/30 bg-gradient-to-br from-slate-800 to-slate-900 relative z-10">
          {/* placeholder avatar */}
          <svg width="72" height="72" viewBox="0 0 80 80" fill="none" aria-hidden>
            <circle cx="40" cy="30" r="15" stroke="#fff" strokeWidth="1.6" />
            <path d="M15 65c0-13.8 11.2-25 25-25s25 11.2 25 25" stroke="#fff" strokeWidth="1.6" />
          </svg>
        </div>

        <div className="w-full">
          <h3 id={`member-${member.id}-name`} className="text-lg lg:text-xl font-semibold text-white">{member.name}</h3>
          <div className="text-sm font-semibold text-orange-400 uppercase tracking-wide mt-1">{member.role}</div>
          <p className="text-sm text-white/70 mt-3 mb-4">{member.bio}</p>

          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {member.skills.map((s) => (
              <button
                key={s}
                type="button"
                className="skill-chip"
                onClick={() => {
                  // placeholder micro interaction - easily swapped for a filter action
                  // small visual feedback
                  const el = document.activeElement;
                  // no-op, kept for possible extension
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="btn-resume"
              onClick={() => {
                // TODO: replace with a real URL to resume files
                const safe = (member.name || "resume").toLowerCase().replace(/\s+/g, "_");
                // Example placeholder: download endpoint /resumes/{safe}.pdf
                // For now just notify
                window.alert(`Downloading resume for ${member.name} (placeholder)`);
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mr-2 inline-block">
                <path d="M8 11L3 6L4.4 4.6L7 7.2V0H9V7.2L11.6 4.6L13 6L8 11Z" fill="currentColor" />
                <path d="M0 14H16V16H0V14Z" fill="currentColor" />
              </svg>
              Resume
            </button>

            <button
              type="button"
              className="btn-ghost px-4 py-2 rounded-full text-sm"
              onClick={() => {
                // contact or profile
                window.alert(`Open profile / contact for ${member.name} (placeholder)`);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}