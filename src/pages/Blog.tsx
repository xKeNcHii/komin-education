
import React from 'react';
import Layout from '@/components/Layout';
import SocialIcons from '@/components/SocialIcons';

interface BlogProps {
  language?: 'en' | 'kr' | 'cn';
}

const Blog = ({ language = 'en' }: BlogProps) => {
  const texts = {
    en: {
      title: 'Blog',
      subtitle: 'Latest insights and updates on Singapore education',
      followUs: 'Follow us on social media for more updates'
    },
    kr: {
      title: '블로그',
      subtitle: '싱가포르 교육에 대한 최신 정보와 업데이트',
      followUs: '더 많은 업데이트를 위해 소셜 미디어를 팔로우하세요'
    },
    cn: {
      title: '博客',
      subtitle: '新加坡教育的最新见解和更新',
      followUs: '关注我们的社交媒体获取更多更新'
    }
  };

  const content = texts[language];

  return (
    <Layout language={language}>
      <div className="min-h-screen py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 animate-fade-in">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-[fade-in_1s_ease-out_200ms_both]">
              {content.subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center animate-[fade-in_1s_ease-out_400ms_both]">
            <p className="text-lg text-gray-600 mb-8">{content.followUs}</p>
            <SocialIcons variant="horizontal" size="lg" className="justify-center" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
