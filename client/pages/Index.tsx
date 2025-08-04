import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, TrendingUp, Award, Zap, Target, Palette, Code, BarChart, Globe, CheckCircle, Clock, Shield, Lightbulb, Headphones, Rocket, Calendar, Building, Car, Heart, GraduationCap, ShoppingBag, Home, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ConsultationForm from '@/components/ConsultationForm';
import HeroCarousel from '@/components/HeroCarousel';
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';

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

      {/* About Instantlly Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">About Instantlly</h2>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
                Founded with a vision to revolutionize digital marketing in India, Instantlly has emerged as a leading marketing agency that combines creativity with data-driven strategies.
              </p>
              <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed">
                We specialize in creating instant impact for brands through innovative campaigns, cutting-edge technology, and deep market insights. Our team of experts works tirelessly to deliver results that exceed expectations and drive sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-sm md:text-base text-foreground/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-sm md:text-base text-foreground/60">Brands Served</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <div className="glass rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Zap className="h-8 w-8 text-neon-blue" />
                      </div>
                      <h3 className="font-bold text-gradient mb-2">Innovation</h3>
                      <p className="text-sm text-foreground/70">Cutting-edge solutions for modern challenges</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-orange/20 to-neon-orange/40 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Target className="h-8 w-8 text-neon-orange" />
                      </div>
                      <h3 className="font-bold text-gradient mb-2">Precision</h3>
                      <p className="text-sm text-foreground/70">Data-driven strategies that hit the mark</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Users className="h-8 w-8 text-neon-blue" />
                      </div>
                      <h3 className="font-bold text-gradient mb-2">Partnership</h3>
                      <p className="text-sm text-foreground/70">Your success is our primary goal</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-orange/20 to-neon-orange/40 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Award className="h-8 w-8 text-neon-orange" />
                      </div>
                      <h3 className="font-bold text-gradient mb-2">Excellence</h3>
                      <p className="text-sm text-foreground/70">Award-winning campaigns and results</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-blue/20 rounded-full blur-2xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-orange/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trusted by 500+ Brands Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-neon-blue/5 via-background to-neon-orange/5">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">Trusted by 500+ Brands Across India</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's why brands choose us again and again.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: '98%', label: 'Client Satisfaction', icon: Star },
              { metric: '4.9/5', label: 'Average Rating', icon: Award },
              { metric: '95%', label: 'Client Retention', icon: Shield },
              { metric: '2 Hours', label: 'Response Time', icon: Clock },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center glass border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue/20 to-neon-orange/40 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="h-8 w-8 text-neon-blue" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.metric}</div>
                  <div className="text-sm md:text-base text-foreground/70">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
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

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">How We Work</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Our proven 4-step process ensures every project delivers exceptional results from strategy to execution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We deep-dive into your business, market, and goals to create a comprehensive strategy.',
                icon: Lightbulb,
                color: 'neon-blue'
              },
              {
                step: '02',
                title: 'Creative Development',
                description: 'Our creative team brings your brand to life with compelling visuals and messaging.',
                icon: Palette,
                color: 'neon-orange'
              },
              {
                step: '03',
                title: 'Campaign Execution',
                description: 'We launch multi-channel campaigns with precision timing and flawless execution.',
                icon: Rocket,
                color: 'neon-blue'
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Continuous monitoring and optimization to maximize performance and ROI.',
                icon: TrendingUp,
                color: 'neon-orange'
              }
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative text-center">
                  <div className="glass border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                        process.color === 'neon-blue' ? 'from-neon-blue to-neon-blue' : 'from-neon-orange to-neon-orange'
                      } flex items-center justify-center text-background font-bold text-sm`}>
                        {process.step}
                      </div>
                    </div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                      process.color === 'neon-blue' ? 'from-neon-blue/20 to-neon-blue/40' : 'from-neon-orange/20 to-neon-orange/40'
                    } flex items-center justify-center mb-6 mx-auto mt-4 group-hover:scale-110 transition-transform duration-300`}>
                      <process.icon className={`h-8 w-8 ${
                        process.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-orange'
                      }`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{process.title}</h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Success Stories</h2>
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

      {/* Our Pan-India Presence Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Our Pan-India Presence</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto px-4">
              From Mumbai to Delhi, Bangalore to Kolkata, we've established a strong footprint across India, serving clients nationwide with localized expertise and global standards.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { city: 'Mumbai', clients: '150+', icon: '🏙️' },
              { city: 'Delhi NCR', clients: '120+', icon: '🏛️' },
              { city: 'Bangalore', clients: '180+', icon: '🌆' },
              { city: 'Chennai', clients: '90+', icon: '🏢' },
              { city: 'Hyderabad', clients: '110+', icon: '🌃' },
              { city: 'Pune', clients: '85+', icon: '🏘️' },
              { city: 'Kolkata', clients: '75+', icon: '🌉' },
              { city: 'Ahmedabad', clients: '65+', icon: '🏗️' },
            ].map((location, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center glass border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="text-3xl md:text-4xl mb-3">{location.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gradient mb-2">{location.city}</h3>
                  <p className="text-sm md:text-base text-foreground/70">{location.clients} Clients</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              From startups to enterprises, we've helped businesses across diverse industries achieve their marketing goals with tailored strategies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {[
              { name: 'Technology', icon: Code, description: 'SaaS, Apps, Software' },
              { name: 'E-commerce', icon: ShoppingBag, description: 'Online Retail, Marketplaces' },
              { name: 'Healthcare', icon: Heart, description: 'Medical, Wellness, Pharma' },
              { name: 'Education', icon: GraduationCap, description: 'EdTech, Training, Courses' },
              { name: 'Finance', icon: Briefcase, description: 'FinTech, Banking, Insurance' },
              { name: 'Real Estate', icon: Home, description: 'Property, Construction' },
              { name: 'Automotive', icon: Car, description: 'Cars, Motors, Parts' },
              { name: 'Manufacturing', icon: Building, description: 'Industrial, B2B, Supply' },
            ].map((industry, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-orange/40 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="h-8 w-8 text-neon-blue" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all duration-300">{industry.name}</h3>
                    <p className="text-sm text-foreground/70">{industry.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Don't see your industry CTA */}
          <AnimatedSection className="text-center">
            <div className="glass border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-4">Don't see your industry?</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                We work with businesses across all sectors. Let's discuss how we can help your specific industry.
              </p>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
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
                avatar: '👨🏽���💼',
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

      {/* Why Choose Instantlly Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Why Choose Instantlly?</h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              We don't just create campaigns—we build partnerships that drive sustainable growth for your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Approach',
                description: 'Every decision backed by comprehensive analytics and market research for maximum impact.',
                icon: BarChart,
                color: 'neon-blue'
              },
              {
                title: 'Creative Excellence',
                description: 'Award-winning creative team that brings fresh perspectives to every campaign.',
                icon: Award,
                color: 'neon-orange'
              },
              {
                title: 'Instant Response',
                description: 'Quick turnaround times and 24/7 support to keep your campaigns running smoothly.',
                icon: Zap,
                color: 'neon-blue'
              },
              {
                title: 'Proven Track Record',
                description: '500+ successful campaigns with measurable results across diverse industries.',
                icon: TrendingUp,
                color: 'neon-orange'
              },
              {
                title: 'Personal Attention',
                description: 'Dedicated account managers who understand your business inside and out.',
                icon: Users,
                color: 'neon-blue'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock assistance to ensure your marketing never sleeps.',
                icon: Headphones,
                color: 'neon-orange'
              }
            ].map((reason, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                      reason.color === 'neon-blue' ? 'from-neon-blue/20 to-neon-blue/40' : 'from-neon-orange/20 to-neon-orange/40'
                    } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className={`h-8 w-8 ${
                        reason.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-orange'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{reason.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Grow Your Brand Section */}
      <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-orange/10" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Ready to Grow Your Brand?</h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto px-4">
              Take the first step towards transforming your marketing strategy. Book a free consultation with our experts and discover how we can accelerate your growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <ConsultationForm />
          </AnimatedSection>

          <AnimatedSection delay={500} className="text-center mt-8">
            <p className="text-sm text-foreground/60">
              🔒 Your information is secure and will only be used to contact you about your consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
