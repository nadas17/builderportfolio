import React from 'react';

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    feedback: "Elbeyi Usta ile çalışmak harikaydı. Tadilat işimiz tam zamanında ve sorunsuz tamamlandı.",
    rating: 5
  },
  {
    name: "Zeynep Korkmaz",
    feedback: "Çok profesyonel ve güvenilir bir ekip. Herkese tavsiye ederim!",
    rating: 5
  },
  {
    name: "Mehmet Demir",
    feedback: "İşçilik ve iletişim mükemmeldi. Tekrar çalışmak isterim.",
    rating: 4
  }
];

const Testimonials = () => (
  <section id="feedbackler" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 animate-fade-in-up">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark px-4">
          Müşteri Yorumları
        </h2>
        <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-brand-secondary/80 px-4">
          Bizimle çalışan müşterilerimizin deneyimleri.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((item, idx) => (
          <div className={`bg-gray-50 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 animate-fade-in-up animation-delay-${idx * 150}`} key={item.name}>
            <div className="flex items-center mb-3 md:mb-4">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-construction-yellow mr-2">{item.name}</span>
              <span className="flex ml-auto">
                {Array.from({length: item.rating}).map((_, i) => <span className="text-yellow-400 text-sm md:text-base" key={i}>★</span>)}
                {Array.from({length: 5 - item.rating}).map((_, i) => <span className="text-gray-300 text-sm md:text-base" key={i}>★</span>)}
              </span>
            </div>
            <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">"{item.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;