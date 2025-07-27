import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Project images - 27 photos
const images = [
  '/images/project1.jpg',
  '/images/project2.jpg',
  '/images/project3.jpg',
  '/images/project4.jpg',
  '/images/project5.jpg',
  '/images/project6.jpg',
  '/images/project7.jpg',
  '/images/project8.jpg',
  '/images/project9.jpg',
  '/images/project10.jpg',
  '/images/project11.jpg',
  '/images/project12.jpg',
  '/images/project13.jpg',
  '/images/project14.jpg',
  '/images/project15.jpg',
  '/images/project16.jpg',
  '/images/project17.jpg',
  '/images/project18.jpg',
  '/images/project19.jpg',
  '/images/project20.jpg',
  '/images/project21.jpg',
  '/images/project22.jpg',
  '/images/project23.jpg',
  '/images/project24.jpg',
  '/images/project25.jpg',
  '/images/project26.jpg',
  '/images/project27.jpg',
];

const Projects = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // ESC tuşu ile modal kapatma
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Arka plan scroll'unu engelle
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="projeler" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-brand-dark text-white scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center px-4">
            İmzamı Taşıyan Projeler
          </h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/80 px-4">
            30 yıllık deneyimimle gerçekleştirdiğim projeler
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            loop={true}
            navigation={false}
            onSwiper={setSwiperInstance}
            className="my-6 sm:my-8"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="group aspect-[4/3] flex items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-construction-yellow/30 to-construction-orange/10 border-2 border-construction-yellow/60 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
                  style={{ boxShadow: '0 6px 32px 0 rgba(31,41,55,0.10), 0 1.5px 6px 0 rgba(251,191,36,0.10)' }}
                >
                  <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl border border-white/40" style={{boxShadow:'0 0 0 2px #FBBF24, 0 8px 32px 0 rgba(31,41,55,0.08)'}}></div>
                  <img
                    src={src}
                    alt={`Proje ${idx + 1}`}
                    className="object-cover w-full h-full rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    draggable="false"
                    onClick={() => openModal(src)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons - Desktop Only */}
          <button
            ref={prevRef}
            onClick={() => swiperInstance?.slidePrev()}
            className="hidden md:flex items-center justify-center absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/90 border-2 border-construction-yellow shadow-xl rounded-full text-construction-yellow hover:bg-construction-yellow hover:text-white hover:scale-110 transition-all duration-300 group"
            aria-label="Önceki"
            tabIndex={0}
          >
            <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            onClick={() => swiperInstance?.slideNext()}
            className="hidden md:flex items-center justify-center absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 bg-white/90 border-2 border-construction-yellow shadow-xl rounded-full text-construction-yellow hover:bg-construction-yellow hover:text-white hover:scale-110 transition-all duration-300 group"
            aria-label="Sonraki"
            tabIndex={0}
          >
            <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Modal - Tam Boyut Fotoğraf */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Tam boyut proje fotoğrafı"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
