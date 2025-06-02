
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import WhySingapore from '@/components/sections/WhySingapore';
import OurPackages from '@/components/sections/OurPackages';
import PartnerLogos from '@/components/sections/PartnerLogos';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import { ScrollAnimateWrapper } from '@/hooks/useScrollAnimations';

interface IndexProps {
  language?: 'en' | 'kr' | 'cn';
}

const Index = ({ language = 'en' }: IndexProps) => {
  return (
    <Layout language={language}>
      <div id="hero" className="scroll-mt-16">
        <HeroSection language={language} />
      </div>
      
      <ScrollAnimateWrapper animation="slide-up" delay={100}>
        <div id="services" className="scroll-mt-16">
          <WhatWeDo language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="fade-in" delay={200}>
        <div id="who-we-help" className="scroll-mt-16">
          <WhoWeHelp language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="slide-left" delay={100}>
        <div id="why-singapore" className="scroll-mt-16">
          <WhySingapore language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="zoom-in" delay={150}>
        <div id="packages" className="scroll-mt-16">
          <OurPackages language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="slide-right" delay={100}>
        <div id="partners" className="scroll-mt-16">
          <PartnerLogos language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="fade-in" delay={200}>
        <div id="faq" className="scroll-mt-16">
          <FAQ language={language} />
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="slide-up" delay={100}>
        <div id="contact-cta" className="scroll-mt-16">
          <FinalCTA language={language} />
        </div>
      </ScrollAnimateWrapper>
    </Layout>
  );
};

export default Index;
