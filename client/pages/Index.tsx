import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, TrendingUp, Award, Zap, Target, Palette, Code, BarChart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div ref={heroRef} className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Create
              <span className="block text-gradient animate-pulse-glow">
                Digital Experiences
              </span>
              That Convert
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your brand with cutting-edge marketing strategies that drive real results. 
              We're not just an agency—we're your growth partners.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-8 py-4 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 px-8 py-4 text-lg group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: '250+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '150%', label: 'Average ROI Increase' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              From strategy to execution, we provide comprehensive marketing solutions that scale with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Brand Identity', description: 'Create memorable brands that resonate with your audience and stand out in the marketplace.', color: 'neon-blue' },
              { icon: Code, title: 'Web Development', description: 'Build fast, responsive websites optimized for conversions and user experience.', color: 'neon-orange' },
              { icon: BarChart, title: 'Digital Marketing', description: 'Data-driven campaigns across all channels to maximize your reach and ROI.', color: 'neon-blue' },
              { icon: Target, title: 'Strategy Consulting', description: 'Strategic guidance to align your marketing efforts with business objectives.', color: 'neon-orange' },
              { icon: Zap, title: 'Performance Optimization', description: 'Continuously improve and optimize your marketing performance for better results.', color: 'neon-blue' },
              { icon: Globe, title: 'Global Campaigns', description: 'Scale your brand internationally with localized marketing strategies.', color: 'neon-orange' },
            ].map((service, index) => (
              <Card key={index} className="glass border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                    service.color === 'neon-blue' ? 'from-neon-blue/20 to-neon-blue/40' : 'from-neon-orange/20 to-neon-orange/40'
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${
                      service.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-orange'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Case Studies</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              See how we've helped brands achieve remarkable growth and exceed their marketing goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              <Card key={index} className="glass border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{caseStudy.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">{caseStudy.client}</h3>
                    <p className="text-foreground/60">{caseStudy.industry}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neon-orange mb-2">Challenge</h4>
                    <p className="text-foreground/80">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-blue mb-2">Solution</h4>
                    <p className="text-foreground/80">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-orange mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-center text-foreground/80">
                          <TrendingUp className="h-4 w-4 text-neon-blue mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card key={index} className="glass border-white/10 p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neon-orange fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gradient">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-orange/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's create something extraordinary together. Get in touch and discover how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 px-8 py-4 text-lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
