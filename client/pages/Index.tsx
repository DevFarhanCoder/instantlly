import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, TrendingUp, Award, Zap, Target, Palette, Code, BarChart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-neon-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div ref={heroRef} className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Create
              <span className="block text-gradient animate-pulse-glow">
                Digital Experiences
              </span>
              That Convert
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Transform your brand with cutting-edge marketing strategies that drive real results. 
              We're not just an agency—we're your growth partners.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group">
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
              {[
                { number: '250+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '150%', label: 'Average ROI Increase' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Our Services</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
              From strategy to execution, we provide comprehensive marketing solutions that scale with your business.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Palette, title: 'Brand Identity', description: 'Create memorable brands that resonate with your audience and stand out in the marketplace.', color: 'neon-blue' },
              { icon: Code, title: 'Web Development', description: 'Build fast, responsive websites optimized for conversions and user experience.', color: 'neon-orange' },
              { icon: BarChart, title: 'Digital Marketing', description: 'Data-driven campaigns across all channels to maximize your reach and ROI.', color: 'neon-blue' },
              { icon: Target, title: 'Strategy Consulting', description: 'Strategic guidance to align your marketing efforts with business objectives.', color: 'neon-orange' },
              { icon: Zap, title: 'Performance Optimization', description: 'Continuously improve and optimize your marketing performance for better results.', color: 'neon-blue' },
              { icon: Globe, title: 'Global Campaigns', description: 'Scale your brand internationally with localized marketing strategies.', color: 'neon-orange' },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${
                      service.color === 'neon-blue' ? 'from-neon-blue/20 to-neon-blue/40' : 'from-neon-orange/20 to-neon-orange/40'
                    } flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-6 w-6 md:h-8 md:w-8 ${
                        service.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-orange'
                      }`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Case Studies</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
              See how we've helped brands achieve remarkable growth and exceed their marketing goals.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                client: 'TechFlow Solutions',
                industry: 'SaaS',
                challenge: 'Increase user acquisition by 300%',
                solution: 'Comprehensive digital marketing strategy with optimized funnels',
                results: ['400% increase in qualified leads', '250% boost in conversion rates', '180% growth in monthly revenue'],
                logo: '🚀'
              },
              {
                client: 'EcoLife Brands',
                industry: 'E-commerce',
                challenge: 'Launch new product line in competitive market',
                solution: 'Brand positioning and multi-channel marketing campaign',
                results: ['$2M in first-quarter sales', '85% brand awareness increase', '500K+ social media impressions'],
                logo: '🌱'
              }
            ].map((caseStudy, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="glass border-white/10 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl md:text-4xl mr-4">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gradient">{caseStudy.client}</h3>
                      <p className="text-sm md:text-base text-foreground/60">{caseStudy.industry}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neon-orange mb-2 text-sm md:text-base">Challenge</h4>
                      <p className="text-foreground/80 text-sm md:text-base">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neon-blue mb-2 text-sm md:text-base">Solution</h4>
                      <p className="text-foreground/80 text-sm md:text-base">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neon-orange mb-2 text-sm md:text-base">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-center text-foreground/80 text-sm md:text-base">
                            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-neon-blue mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what industry leaders say about working with us.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO, Innovation Labs',
                content: 'Working with this agency transformed our digital presence. Their strategic approach and execution excellence delivered results beyond our expectations.',
                avatar: '👩🏻‍💼',
                rating: 5
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CMO, Growth Dynamics',
                content: 'The team\'s creativity and data-driven approach helped us achieve a 300% increase in qualified leads. Absolutely exceptional work.',
                avatar: '👨🏽‍💼',
                rating: 5
              },
              {
                name: 'Emily Watson',
                role: 'Founder, Bright Future Co',
                content: 'From brand strategy to campaign execution, they delivered at every touchpoint. Our revenue grew 250% in just 6 months.',
                avatar: '👩🏼‍💼',
                rating: 5
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="glass border-white/10 p-6 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-neon-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed italic text-sm md:text-base">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="text-2xl md:text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gradient text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-orange/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Ready to Transform Your Brand?</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 px-4">
              Let's create something extraordinary together. Get in touch and discover how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
