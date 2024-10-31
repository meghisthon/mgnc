import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !titleRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position relative to center
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      // Parallax effect for background
      heroRef.current.style.setProperty('--x-offset', `${xPos * 20}px`);
      heroRef.current.style.setProperty('--y-offset', `${yPos * 20}px`);

      // Subtle title movement
      titleRef.current.style.transform = `
        translate(${xPos * 10}px, ${yPos * 10}px)
        rotateX(${yPos * 5}deg)
        rotateY(${xPos * 5}deg)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-circuit-pattern animate-circuit"></div>
        <div className="absolute inset-0 bg-gradient-radial-dots animate-pulse-slow"></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-cube"
            style={{
              '--delay': `${i * 0.5}s`,
              '--x-pos': `${Math.random() * 100}%`,
              '--y-pos': `${Math.random() * 100}%`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center perspective-1000">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold text-white mb-8 transition-transform duration-300 ease-out text-glow"
            >
              Şirketinizdeki Dijital Dönüşümü
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                MEGNOC
              </span>
              ile Yaşayın
            </h1>
            <p className="text-xl text-blue-100 mb-12 animate-fade-in">
              Transform your ISP operations with next-generation management tools
              and AI-powered solutions.
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-primary group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary-light group">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>
    </section>
  );
}