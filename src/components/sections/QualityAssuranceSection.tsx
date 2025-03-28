
import React from 'react';
import { CheckCircle, TestTube } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const QualityAssuranceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Futuristic Laboratory Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/5382abee-9878-4565-8122-b86d9255baf0.png)',
            filter: 'brightness(1.2) contrast(0.9) saturate(0.8)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-transparent" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal animation="slide-in-right">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-elevated border border-neutral-100 relative h-80">
                <div className="flex justify-center items-center h-full">
                  <TestTube className="h-20 w-20 text-vitanium-600" />
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                Quality Assurance
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="heading-lg mb-6">
                The Science Behind Our Premixes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-neutral-700 mb-6">
                Our state-of-the-art laboratory ensures every batch of micronutrient premix meets the highest standards of quality and efficacy. We utilize advanced technology for precision analysis.
              </p>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              <ScrollReveal delay={300}>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Advanced Testing Equipment</h3>
                    <p className="text-neutral-600">HPLC, ICP-OES, AAS, and more for comprehensive analysis.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Stringent Quality Control</h3>
                    <p className="text-neutral-600">Rigorous testing at every stage of production.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Global Standards</h3>
                    <p className="text-neutral-600">Compliance with international food safety regulations.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={600}>
              <div className="mt-10">
                <Button asChild>
                  <Link to="/quality">
                    Learn More About Our Quality
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
