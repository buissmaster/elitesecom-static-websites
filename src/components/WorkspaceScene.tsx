import { useEffect, useRef } from 'react';

export function WorkspaceScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const layers = container.querySelectorAll<HTMLElement>('[data-parallax]');
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.parallax || '1');
        const moveX = x * -16 * depth;
        const moveY = y * -12 * depth;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] lg:h-[460px]">

      {/* Layer 1: Ambient depth orbs */}
      <div data-parallax="0.2" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] right-[12%] w-36 h-36 rounded-full bg-slate-300/[0.06] blur-3xl" />
        <div className="absolute bottom-[10%] left-[8%] w-28 h-28 rounded-full bg-teal-500/[0.04] blur-2xl" />
      </div>

      {/* Layer 2: Main 3D hero scene — no frame, flows naturally */}
      <div data-parallax="0.8" className="absolute inset-0 flex items-center justify-center">
        <img
          src="/workflow-ref.png"
          alt="3D cartoon workflow scene inspired by reference — clock, team, and operational elements"
          className="w-[110%] h-auto max-h-[440px] object-contain animate-float-3d select-none"
          draggable={false}
        />
      </div>

      {/* Layer 3: One subtle animated gear (top-left area, enhances the scene) */}
      <div data-parallax="1.3" className="absolute top-[5%] left-[10%] animate-gear-spin-slow opacity-30 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="8" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          {[...Array(8)].map((_, i) => {
            const a = i * 45 * Math.PI / 180;
            const x = 24 + 13 * Math.cos(a);
            const y = 24 + 13 * Math.sin(a);
            return <rect key={i} x={x - 1.5} y={y - 3.5} width="3" height="7" rx="1" fill="#94a3b8" transform={`rotate(${i * 45} ${x} ${y})`} />;
          })}
        </svg>
      </div>

      {/* Layer 4: One small particle for ambient depth */}
      <div data-parallax="0.4" className="absolute top-[12%] right-[25%] pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-slate-300/20 animate-particle-float" />
      </div>
    </div>
  );
}
