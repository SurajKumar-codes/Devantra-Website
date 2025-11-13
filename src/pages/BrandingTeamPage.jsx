import React, { useEffect, useRef } from "react";
import Header from "../components/sections/Header";

import TeamCard from "../components/cards/TeamCard";
import { brandingTeamMembers } from "../CustomData/brandingTeam";

/**
 * BrandingTeam page - hero with parallax, animated stats, grid of branding members.
 * Uses the same visual system (glass cards, accent halo, btn styles) as other pages.
 */
export default function BrandingTeam() {
  const bgRef = useRef(null);
  const statRefs = useRef([]);

  // parallax using rAF
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          bgRef.current.style.transform = `translateY(${y * 0.36}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stats animation
  useEffect(() => {
    const items = statRefs.current.filter(Boolean);
    if (!items.length) return;

    const animateCounter = (element) => {
      const text = element.dataset.target || element.textContent;
      const target = parseInt(String(text).replace(/[^\d]/g, ""), 10);
      if (isNaN(target)) return;
      let start = 0;
      const duration = 1500;
      const step = Math.max(1, target / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          clearInterval(timer);
          element.textContent = text;
        } else {
          element.textContent = Math.floor(start) + "+";
        }
      }, 16);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numEl = entry.target.querySelector(".branding-stat-number");
            if (numEl) {
              numEl.dataset.target = numEl.textContent;
              animateCounter(numEl);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.7 }
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

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-[62vh] flex items-center pt-[110px] pb-12 overflow-hidden">
          <div ref={bgRef} className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-cover bg-center opacity-28" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=60")', mixBlendMode: "overlay" }} />
            <div className="absolute left-8 top-12 w-44 h-44 rounded-full bg-gradient-to-br from-[#ffd36b] to-[#ff7a1a] opacity-12 blur-3xl pointer-events-none" />
            <div className="absolute right-8 bottom-12 w-36 h-36 rounded-full bg-gradient-to-tr from-[#6bd7ff] to-[#6b8cff] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,255,255,0.03)_0%,transparent_40%)]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
            <h1 className="hero-title-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">
              Branding Team
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Our Branding team crafts compelling visual identities and brand strategies that resonate with audiences.
              We create stunning designs and media that leave lasting impressions.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
              <div ref={(el) => (statRefs.current[0] = el)} className="branding-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400 branding-stat-number" data-target="500+">500+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Designs</div>
              </div>

              <div ref={(el) => (statRefs.current[1] = el)} className="branding-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400 branding-stat-number" data-target="150+">150+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Brands</div>
              </div>

              <div className="branding-stat min-w-[140px] p-5 rounded-xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 text-center">
                <div className="text-4xl font-bold text-orange-400">10+</div>
                <div className="text-xs uppercase text-white/70 tracking-wider mt-1">Awards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-transparent py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Our Creative Experts</h2>
                <p className="text-white/70 mt-1">Talented designers and brand strategists who bring visions to life through innovative design and creative excellence.</p>
              </div>

              <div className="hidden sm:flex gap-3">
                <button className="btn-ghost px-4 py-2 rounded-full">All</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Design</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Motion</button>
                <button className="btn-ghost px-4 py-2 rounded-full">Content</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandingTeamMembers.map((member, idx) => (
                <TeamCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}