import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
        {
            id: 1,
            title: "Premium Electronics Collection",
            subtitle: "Discover the latest in technology",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
            cta: "Shop Now"
        },
        {
            id: 2,
            title: "iPhone 15 Series Now Available",
            subtitle: "Experience the future in your hands",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&h=600&fit=crop",
            cta: "Pre-order Now"
        },
        {
            id: 3,
            title: "Gaming Setup Essentials",
            subtitle: "Build your ultimate gaming experience",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop",
            cta: "Explore Gaming"
        }
    ];
    // Auto-advance hero carousel
    useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
    }, []);

  return (
    <section className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl lg:max-w-2xl">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl lg:text-2xl mb-4 md:mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <button className="bg-yellow-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-yellow-700 transition-colors transform hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
