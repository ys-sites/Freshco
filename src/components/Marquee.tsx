import { motion } from 'motion/react';

const specialties = [
  "Boucherie Halal", "Légumes Locaux", "Épices du Monde", "Cuisine Maison", "Service Excellent", "Qualité Garantie",
  "Boucherie Halal", "Légumes Locaux", "Épices du Monde", "Cuisine Maison", "Service Excellent", "Qualité Garantie",
];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-4 flex items-center border border-theme-border rounded-[20px] shadow-sleek">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {specialties.map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-theme-primary font-bold text-sm uppercase tracking-wide">{item}</span>
            <span className="mx-8 text-theme-accent text-lg">♦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
