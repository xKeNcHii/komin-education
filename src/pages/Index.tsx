
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import WhatWeDo from '@/components/sections/WhatWeDo';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import WhySingapore from '@/components/sections/WhySingapore';
import OurPackages from '@/components/sections/OurPackages';
import SuccessStories from '@/components/sections/SuccessStories';
import FinalCTA from '@/components/sections/FinalCTA';

interface IndexProps {
  language?: 'en' | 'kr' | 'cn';
}

const Index = ({ language = 'en' }: IndexProps) => {
  return (
    <Layout language={language}>
      <HeroSection language={language} />
      <WhatWeDo language={language} />
      <WhoWeHelp language={language} />
      <WhySingapore language={language} />
      <OurPackages language={language} />
      <SuccessStories language={language} />
      <FinalCTA language={language} />
    </Layout>
  );
};

export default Index;
