import React, { useState, useEffect } from 'react';

const HeroTitle = () => {
  const rotatingTexts = [
    "İnşaat & Tadilat",
    "Elektrik Dekorasyonu",
    "Daire Yenileme",
    "Mağaza İnşaatı",
    "Prefabrik Ev İnşaatı",
    "Kaliteli İşçilik"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500); // Fade out süresi
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up drop-shadow-lg text-center px-4">
        Elbeyi Usta
      </h1>
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary animate-fade-in-up animation-delay-300 relative text-center px-4">
        <span 
          className={`transition-all duration-500 ease-in-out transform block ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-4 scale-95'
          }`}
        >
          {rotatingTexts[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default HeroTitle;
