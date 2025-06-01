
import React from 'react';
import Layout from '@/components/Layout';

interface SuccessProps {
  language?: 'en' | 'kr' | 'cn';
}

const Success = ({ language = 'en' }: SuccessProps) => {
  return (
    <Layout language={language}>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Success Stories</h1>
          <p className="text-xl text-gray-600">Success stories page coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
