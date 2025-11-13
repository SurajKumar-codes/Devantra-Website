import React, { useEffect, useRef, useState } from "react";


export default function PRTeamCard({ member, index = 0 }) {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      aria-labelledby={`pr-${member.id}-name`}
      className="relative rounded-2xl accent-border card-glass p-6 flex flex-col shadow-xl overflow-hidden transform transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        animationFillMode: "both",
        animationName: visible ? "fadeUp" : undefined,
        animationDuration: visible ? "560ms" : undefined,
        animationDelay: visible ? `${index * 80}ms` : undefined,
      }}
    >
      <div className="absolute -top-6 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#ff7a1a] to-[#ff4f6a] opacity-10 blur-2xl pointer-events-none" />

      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-24 h-24 rounded-full flex items-center justify-center border-[2px] border-white/6 bg-gradient-to-br from-slate-800 to-slate-900 relative z-10">
          <svg width="64" height="64" viewBox="0 0 80 80" fill="none" aria-hidden>
            <circle cx="40" cy="30" r="15" stroke="#fff" strokeWidth="1.4" />
            <path d="M15 65c0-13.8 11.2-25 25-25s25 11.2 25 25" stroke="#fff" strokeWidth="1.4" />
          </svg>
        </div>

        <div className="w-full">
          <h3 id={`pr-${member.id}-name`} className="text-lg lg:text-xl font-semibold text-white">
            {member.name}
          </h3>
          <div className="text-sm font-semibold text-orange-400 uppercase tracking-wide mt-1">{member.role}</div>
          <p className="text-sm text-white/70 mt-3 mb-4">{member.bio}</p>

          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {member.skills.map((s) => (
              <button
                key={s}
                type="button"
                className="skill-chip"
                onClick={() => {
                  // micro-feedback: brief pulse on click (no-op behavior now)
                  const el = document.activeElement;
                }}
                aria-label={`Filter by ${s}`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              type="button"
              className="btn-resume"
              onClick={() => {
                window.alert(`Contacting ${member.name} (placeholder)`);
              }}
            >
              Contact
            </button>

            <button
              type="button"
              className="btn-ghost px-4 py-2 rounded-full text-sm"
              onClick={() => {
                window.alert(`Open profile for ${member.name} (placeholder)`);
              }}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}