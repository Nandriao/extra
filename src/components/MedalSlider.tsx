import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Medal images
import Bronze from "@/assets/medalhas/bronze.png";
import Silver from "@/assets/medalhas/silver.png";
import Gold from "@/assets/medalhas/gold.png";
import Platinum from "@/assets/medalhas/platinum.png";
import Emerald from "@/assets/medalhas/emerald.png";
import Diamond from "@/assets/medalhas/diamond.png";

interface Medal {
  src: StaticImageData;
  alt: string;
}

const medals: Medal[] = [
  { src: Bronze, alt: "Bronze Medal" },
  { src: Silver, alt: "Silver Medal" },
  { src: Gold, alt: "Gold Medal" },
  { src: Platinum, alt: "Platinum Medal" },
  { src: Emerald, alt: "Emerald Medal" },
  { src: Diamond, alt: "Diamond Medal" },
];

const MedalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % medals.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100%] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={medals[currentIndex].src}
            alt={medals[currentIndex].alt}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MedalSlider; 