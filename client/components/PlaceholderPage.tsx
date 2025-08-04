import React from 'react';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="py-24 bg-background flex items-center justify-center px-6 min-h-[calc(100vh-140px)]">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="glass-dark rounded-3xl p-12 border border-white/10">
          <Construction className="h-24 w-24 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-4xl font-bold text-gradient mb-4">{title}</h1>
          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <p className="text-foreground/60 mb-8">
            This page is coming soon! Continue prompting to have me build out the content for this section.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
