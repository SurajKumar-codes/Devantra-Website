import React, { useEffect, useRef,useState } from "react";
import Header from "../components/sections/Header";
import PRTeamCard from "../components/cards/prTeamMembersCard";
import { prTeamMembers } from "../CustomData/prTeamData";
import TeamCard from "../components/cards/TeamCard";

/**
 * PRTeam page - mirrors the structure and animation behavior of the TechnicalTeam page,
 * but uses PR-specific stats and member dataset.
 *
 * Features implemented:
 *  - hero with parallax background (requestAnimationFrame)
 *  - stat counters (supports K and % suffixes)
 *  - card reveal with stagger (IntersectionObserver)
 *  - smooth page fade-in
 */
export default function PRTeam() {
  const bgRef = useRef(null);
  const statRefs = useRef([]);

  const [preloading, setPreloading] = useState(true);
  
    // simulate preloader similar to original page image overlay
    useEffect(() => {
      const t = setTimeout(() => setPreloading(false), 600);
      return () => clearTimeout(t);
    }, []);
  // hero parallax using rAF for smooth performance
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          bgRef.current.style.transform = `translateY(${y * 0.38}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stat counters: supports values with 'K' and '%' suffix (mirrors original logic)
  useEffect(() => {
    const items = statRefs.current.filter(Boolean);
    if (!items.length) return;

    function animateCounter(element) {
      const text = element.dataset.target || element.textContent;
      const isK = text.includes("K");
      const isPercent = text.includes("%");
      const num = parseInt(text.replace(/[^\d]/g, ""), 10);
      if (isNaN(num)) return;
      let start = 0;
      const duration = 1500;
      const increment = Math.max(1, num / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= num) {
          clearInterval(timer);
          element.textContent = text;
        } else {
          const currentVal = Math.floor(start);
          if (isK) {
            element.textContent = currentVal + "K+";
          } else if (isPercent) {
            element.textContent = currentVal + "%";
          } else {
            element.textContent = currentVal + "+";
          }
        }
      }, 16);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector(".pr-stat-number");
            if (numberElement) {
              numberElement.dataset.target = numberElement.textContent;
              animateCounter(numberElement);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // page fade-in
  useEffect(() => {
    document.body.style.opacity = "0";
    const t = setTimeout(() => {
      document.body.style.transition = "opacity 0.45s ease";
      document.body.style.opacity = "1";
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Header />
      {preloading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <img src="/images/Pr_team.png" alt="Loading" className="w-56 h-auto animate-fadeUp" />
        </div>
      )}

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-[62vh] flex items-center pt-[110px] pb-12 overflow-hidden">
          <div ref={bgRef} className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&q=60")', mixBlendMode: "overlay" }} />
            <div className="absolute left-10 top-12 w-44 h-44 rounded-full bg-gradient-to-br from-[#ffd36b] to-[#ff7a1a] opacity-12 blur-3xl pointer-events-none" />
            <div className="absolute right-10 bottom-10 w-36 h-36 rounded-full bg-gradient-to-tr from-[#6bd7ff] to-[#6b8cff] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.03)_0%,transparent_40%)]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
            <h1 className="hero-title-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">PR Team</h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Public relations, storytelling and outreach — the people who shape how audiences perceive our work.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
              <div ref={(el) => (statRefs.current[0] = el)} className="pr-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400 pr-stat-number" data-target="25K+">25K+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Reach</div>
              </div>

              <div ref={(el) => (statRefs.current[1] = el)} className="pr-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400 pr-stat-number" data-target="92%">92%</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Satisfaction</div>
              </div>

              <div className="pr-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400">Active</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-transparent py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Our PR Members</h2>
                <p className="text-white/70 mt-1">Communicators, creators and event experts building narratives that resonate.</p>
              </div>

              <div className="hidden sm:flex gap-3">
                <button className="btn-ghost px-4 py-2 rounded-full">All</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Content</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Social</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Events</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {prTeamMembers.map((member, idx) => (
                <TeamCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}