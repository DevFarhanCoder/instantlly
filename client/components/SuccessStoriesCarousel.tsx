import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  rating: number;
  testimonial: string;
  author: string;
  authorRole: string;
  image?: string;
}

const SuccessStoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge: 'Increase user acquisition by 300%',
      solution: 'Comprehensive digital marketing strategy with optimized funnels',
      results: ['400% increase in qualified leads', '250% boost in conversion rates', '180% growth in monthly revenue'],
      logo: '🚀',
      rating: 5,
      testimonial: 'Instantlly transformed our entire digital presence. Their strategic approach delivered results beyond our wildest expectations.',
      author: 'Sarah Chen',
      authorRole: 'CEO, TechFlow Solutions'
    },
    {
      id: 2,
      client: 'EcoLife Brands',
      industry: 'E-commerce',
      challenge: 'Launch new product line in competitive market',
      solution: 'Brand positioning and multi-channel marketing campaign',
      results: ['$2M in first-quarter sales', '85% brand awareness increase', '500K+ social media impressions'],
      logo: '🌱',
      rating: 5,
      testimonial: 'From zero to market leader in just 6 months. Their creativity and execution excellence is unmatched in the industry.',
      author: 'Marcus Rodriguez',
      authorRole: 'Founder, EcoLife Brands'
    },
    {
      id: 3,
      client: 'FinanceForward',
      industry: 'FinTech',
      challenge: 'Scale operations across 15 Indian cities',
      solution: 'Localized marketing campaigns with data-driven optimization',
      results: ['500% increase in app downloads', '300% growth in user base', '200% improvement in retention'],
      logo: '💳',
      rating: 5,
      testimonial: 'Their pan-India expertise helped us scale faster than we ever imagined. True growth partners in every sense.',
      author: 'Priya Sharma',
      authorRole: 'CMO, FinanceForward'
    },
    {
      id: 4,
      client: 'HealthTech Pro',
      industry: 'Healthcare',
      challenge: 'Build trust in telemedicine platform',
      solution: 'Content marketing and influencer partnerships strategy',
      results: ['1M+ platform registrations', '95% patient satisfaction', '400% increase in consultations'],
      logo: '🏥',
      rating: 5,
      testimonial: 'They helped us build credibility in a sensitive industry. Their understanding of healthcare marketing is exceptional.',
      author: 'Dr. Rajesh Kumar',
      authorRole: 'Founder, HealthTech Pro'
    },
    {
      id: 5,
      client: 'EduGlobal',
      industry: 'EdTech',
      challenge: 'Compete with established online learning platforms',
      solution: 'Performance marketing with AI-driven personalization',
      results: ['800% growth in course enrollments', '90% completion rates', '150% increase in revenue per user'],
      logo: '🎓',
      rating: 5,
      testimonial: 'Instantlly made us a household name in online education. Their innovative approach set us apart from competitors.',
      author: 'Anita Desai',
      authorRole: 'CEO, EduGlobal'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % caseStudies.length;
      slides.push({
        ...caseStudies[index],
        position: i
      });
    }
    return slides;
  };

  return (
    <div className="relative w-full">
      {/* Main Carousel Container */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-3xl">
        <div className="flex items-center justify-center h-full perspective-1000">
          {getVisibleSlides().map((study, index) => {
            const isCenter = index === 1;
            const isLeft = index === 0;
            const isRight = index === 2;

            return (
              <div
                key={`${study.id}-${currentSlide}`}
                className={`absolute transition-all duration-700 ease-out transform-gpu ${
                  isTransitioning ? 'opacity-0 scale-90' : 'opacity-100'
                } ${
                  isCenter 
                    ? 'z-30 scale-110 translate-x-0 rotate-0' 
                    : isLeft 
                    ? 'z-20 scale-90 -translate-x-48 lg:-translate-x-64 rotate-y-12 opacity-70' 
                    : 'z-20 scale-90 translate-x-48 lg:translate-x-64 -rotate-y-12 opacity-70'
                }`}
                style={{
                  transform: `
                    translateX(${isCenter ? '0' : isLeft ? '-16rem' : '16rem'}) 
                    scale(${isCenter ? '1.1' : '0.9'}) 
                    rotateY(${isCenter ? '0' : isLeft ? '15deg' : '-15deg'})
                  `
                }}
              >
                <Card className="w-80 lg:w-96 h-80 lg:h-96 glass border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer group"
                      onClick={() => !isCenter && goToSlide(isLeft ? (currentSlide - 1 + caseStudies.length) % caseStudies.length : (currentSlide + 1) % caseStudies.length)}>
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{study.logo}</div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gradient">{study.client}</h3>
                          <p className="text-foreground/60">{study.industry}</p>
                        </div>
                      </div>

                      {isCenter ? (
                        <div className="space-y-4">
                          <div className="flex items-center mb-3">
                            {[...Array(study.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-neon-orange fill-current" />
                            ))}
                          </div>
                          <p className="text-foreground/80 text-sm lg:text-base italic leading-relaxed">
                            "{study.testimonial}"
                          </p>
                          <div className="border-t border-white/10 pt-4">
                            <p className="font-semibold text-gradient text-sm">{study.author}</p>
                            <p className="text-xs text-foreground/60">{study.authorRole}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-neon-orange mb-2 text-sm">Challenge</h4>
                            <p className="text-foreground/80 text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-neon-blue mb-2 text-sm">Results</h4>
                            <ul className="space-y-1">
                              {study.results.slice(0, 2).map((result, i) => (
                                <li key={i} className="flex items-center text-foreground/80 text-xs">
                                  <TrendingUp className="h-3 w-3 text-neon-blue mr-2 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {isCenter && (
                      <div className="text-center">
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        >
                          View Full Case Study
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 max-w-md mx-auto">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-5000 ease-linear"
            style={{
              width: isTransitioning ? '100%' : '0%',
              animation: isTransitioning ? 'none' : 'progress 5s linear infinite'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-12deg);
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SuccessStoriesCarousel;
