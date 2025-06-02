
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

interface IndexProps {
  language?: 'en' | 'kr' | 'cn';
}

const Index = ({ language = 'en' }: IndexProps) => {
  return (
    <Layout language={language}>
      <div id="hero" className="scroll-mt-16">
        <HeroSection language={language} />
      </div>
      <div id="services" className="scroll-mt-16">
        <WhatWeDo language={language} />
      </div>
      <div id="who-we-help" className="scroll-mt-16">
        <WhoWeHelp language={language} />
      </div>
      <div id="why-singapore" className="scroll-mt-16">
        <WhySingapore language={language} />
      </div>
      <div id="packages" className="scroll-mt-16">
        <OurPackages language={language} />
      </div>
      <div id="partners" className="scroll-mt-16">
        <PartnerLogos language={language} />
      </div>
      <div id="faq" className="scroll-mt-16">
        <FAQ language={language} />
      </div>
      <div id="contact-cta" className="scroll-mt-16">
        <FinalCTA language={language} />
      </div>
    </Layout>
  );
};

export default Index;
