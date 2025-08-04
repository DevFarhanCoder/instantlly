import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

interface SlideData {
  id: number;
  mainText: string;
  highlightText: string;
  description: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  features: string[];
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      mainText: "We Create",
      highlightText: "Powerful Experiences",
      description: "Transform your brand with cutting-edge marketing strategies that drive real results. Online and offline solutions that convert everywhere.",
      stats: [
        { number: '250+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '150%', label: 'Average ROI Increase' },
        { number: '24/7', label: 'Support Available' },
      ],
      features: ['Online + Offline Marketing', 'End-to-End Solutions', 'Data-Driven Results']
    },
    {
      id: 2,
      mainText: "We Build Brands.",
      highlightText: "We Build Markets.",
      description: "Instant marketing + pan-India distribution. From brand creation to market domination, we scale your business nationwide.",
      stats: [
        { number: '1000+', label: 'Channel Partners' },
        { number: '500+', label: 'Brands Scaled' },
        { number: '28', label: 'States Covered' },
        { number: '300%', label: 'Avg ROI Boost' },
      ],
      features: ['2-Hour Response Time', 'Pan-India Network', 'Instant Distribution']
    },
    {
      id: 3,
      mainText: "Beyond Marketing.",
      highlightText: "We Build, Distribute & Sell",
      description: "Complete brand transformation from concept to market leadership. We don't just promote your brand—we architect its entire journey to success.",
      stats: [
        { number: '360°', label: 'Brand Solutions' },
        { number: '15 Days', label: 'Market Launch' },
        { number: '5X', label: 'Faster Growth' },
        { number: '100%', label: 'Success Rate' },
      ],
      features: ['Complete Brand Ecosystem', 'Market Leadership Focus', 'Lightning-Fast Results']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleSlideChange = (newSlide: number) => {
    if (newSlide !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 300);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-neon-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div ref={heroRef} className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Content with Transition */}
          <div className={`transition-all duration-700 ease-out ${
            isTransitioning ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {currentSlide === 2 ? (
                <>
                  <span className="block">{currentSlideData.mainText}</span>
                  <span className="block text-gradient animate-pulse-glow">
                    {currentSlideData.highlightText}
                  </span>
                  <span className="block text-2xl md:text-4xl lg:text-5xl text-neon-orange font-medium mt-2">
                    — Faster Than Anyone Else
                  </span>
                </>
              ) : (
                <>
                  {currentSlideData.mainText}
                  <span className="block text-gradient animate-pulse-glow">
                    {currentSlideData.highlightText}
                  </span>
                  {currentSlide === 0 && "That Convert"}
                </>
              )}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              {currentSlideData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                {currentSlide === 1 ? 'Get Free Consultation' : currentSlide === 2 ? 'Start Your Journey' : 'Start Your Project'}
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group">
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5 group-hover:scale-110 transition-transform" />
                {currentSlide === 1 ? 'Partner With Us' : currentSlide === 2 ? 'Schedule Call' : 'Watch Our Work'}
              </Button>
            </div>
            
            {/* Stats Grid with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
              {currentSlideData.stats.map((stat, index) => (
                <div 
                  key={`${currentSlide}-${index}`}
                  className="text-center animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Indicators */}
          <div className={`mt-8 transition-all duration-700 delay-300 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
              {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-6000 ease-linear"
                style={{
                  width: isTransitioning ? '100%' : '0%',
                  animation: isTransitioning ? 'none' : 'progress 6s linear infinite'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
