export default function Footer() {
  return (
    <footer className="relative border-t-2 border-[#1A202C] pt-16 pb-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 0%, rgba(0,217,255,0.06) 0%, transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p className="display text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-none text-[#1A202C] select-none">
          RESONANCE
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-[#1A202C] pt-10">
          <div>
            <p className="eyebrow mb-4">PRODUCT</p>
            <ul className="space-y-3 text-sm text-[#8B96A5]">
              <li><a href="#lineup" className="hover:text-[#00D9FF] transition-colors">Aura Mini</a></li>
              <li><a href="#lineup" className="hover:text-[#00D9FF] transition-colors">Aura X1</a></li>
              <li><a href="#lineup" className="hover:text-[#00D9FF] transition-colors">Aura Max</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">DETAIL</p>
            <ul className="space-y-3 text-sm text-[#8B96A5]">
              <li><a href="#specs" className="hover:text-[#00D9FF] transition-colors">Specifications</a></li>
              <li><a href="#reviews" className="hover:text-[#00D9FF] transition-colors">Field reports</a></li>
              <li><a href="#order" className="hover:text-[#00D9FF] transition-colors">Warranty terms</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">SUPPORT</p>
            <ul className="space-y-3 text-sm text-[#8B96A5]">
              <li><a href="mailto:support@resonance.audio" className="hover:text-[#00D9FF] transition-colors">support@resonance.audio</a></li>
              <li><a href="#order" className="hover:text-[#00D9FF] transition-colors">Returns & exchanges</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">SIGNAL</p>
            <ul className="space-y-3 text-sm text-[#8B96A5]">
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#00D9FF] transition-colors">YouTube — teardowns</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-[#8B96A5]/70">
          © {new Date().getFullYear()} Resonance Audio Co. Engineered in small
          batches.
        </p>
      </div>
    </footer>
  );
}
