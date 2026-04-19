// Pure CSS marquee — no JS animation loop, runs on the compositor thread for buttery smoothness
const specialties = [
  "Boucherie Halal", "Légumes Locaux", "Épices du Monde", "Cuisine Maison", "Service Excellent", "Qualité Garantie",
  "Boucherie Halal", "Légumes Locaux", "Épices du Monde", "Cuisine Maison", "Service Excellent", "Qualité Garantie",
];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-4 flex items-center border border-theme-border rounded-[20px] shadow-sleek">
      {/* marquee-track is defined in index.css using @keyframes — runs on GPU compositor */}
      <div className="marquee-track whitespace-nowrap">
        {specialties.map((item, index) => (
          <span key={index} className="inline-flex items-center mx-6">
            <span className="text-theme-primary font-bold text-sm uppercase tracking-wide">{item}</span>
            <span className="mx-8 text-theme-accent text-lg">♦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

