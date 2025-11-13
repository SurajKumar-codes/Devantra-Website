import React, { useEffect, useRef, useState } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import TeamCard from "../components/cards/TeamCard";
import { teamMembers } from "../CustomData/technicalTeamMembers";

export default function TechnicalTeam() {
  const bgRef = useRef(null);
  const statRefs = useRef([]);

  // Hero parallax (requestAnimationFrame friendly)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // subtle half-speed translate
          bgRef.current.style.transform = `translateY(${y * 0.35}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stat counters: animate when in view
  useEffect(() => {
    const items = statRefs.current.filter(Boolean);
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const num = entry.target.querySelector(".stat-number");
            if (!num) return;
            const raw = num.dataset.target ?? num.textContent;
            if (raw === "24/7") {
              obs.unobserve(entry.target);
              return;
            }
            const target = parseInt(String(raw).replace(/[^\d]/g, ""), 10);
            if (isNaN(target)) {
              obs.unobserve(entry.target);
              return;
            }
            let start = 0;
            const duration = 1500;
            const step = Math.max(1, target / (duration / 16));
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                clearInterval(timer);
                num.textContent = `${target}+`;
              } else {
                num.textContent = `${Math.floor(start)}+`;
              }
            }, 16);
            // small pulse after counting
            num.classList.add("play");
            setTimeout(() => num.classList.remove("play"), 500);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.7 }
    );
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative min-h-[64vh] flex items-center pt-[110px] pb-12 overflow-hidden">
          {/* decorative blobs */}
          <div ref={bgRef} className="absolute inset-0 pointer-events-none">
            <div className="bg-blob left-[-8%] top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#ff7a1a] to-[#ff4f6a]" style={{ animation: "floatY 8s ease-in-out infinite" }} />
            <div className="bg-blob right-[-6%] top-36 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#00d4ff] to-[#6b8cff]" style={{ animation: "floatY 9s ease-in-out infinite", opacity: 0.12 }} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.04)_0%,transparent_40%)]" />
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=60")', mixBlendMode: "overlay" }} />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
            <h1 className="hero-title-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
              Technical Team
            </h1>
            <p className="mt-6 text-lg text-white/80 mx-auto max-w-2xl">
              Brilliant engineers, designers and operators building delightful web and mobile experiences. Clean UI, reliable delivery and collaborative energy.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
              <div ref={(el) => (statRefs.current[0] = el)} className="stat-card min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 stat-number" data-target="50+">50+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Developers</div>
              </div>

              <div ref={(el) => (statRefs.current[1] = el)} className="stat-card min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 stat-number" data-target="100+">100+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Projects</div>
              </div>

              <div className="stat-card min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">24/7</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-transparent py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Our Team Members</h2>
                <p className="text-white/70 mt-1">Passionate developers, designers, and engineers working together to create exceptional digital experiences.</p>
              </div>

              <div className="hidden sm:flex gap-3">
                <button className="btn-ghost px-4 py-2 rounded-full">All</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Frontend</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Backend</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Design</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <TeamCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
}