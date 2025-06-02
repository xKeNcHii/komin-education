
import React from 'react';

interface PartnerLogosProps {
  language?: 'en' | 'kr' | 'cn';
}

const PartnerLogos = ({ language = 'en' }: PartnerLogosProps) => {
  const texts = {
    en: {
      title: 'Trusted Partners & Universities',
      subtitle: 'We work with Singapore\'s top institutions and trusted partners'
    },
    kr: {
      title: '신뢰받는 파트너 & 대학교',
      subtitle: '싱가포르 최고의 기관 및 신뢰할 수 있는 파트너들과 협력합니다'
    },
    cn: {
      title: '可信赖的合作伙伴和大学',
      subtitle: '我们与新加坡顶尖院校和可信赖的合作伙伴合作'
    }
  };

  const content = texts[language];

  const universities = [
    {
      name: 'National University of Singapore',
      logo: 'https://iconlogovector.com/uploads/images/2024/09/sm-66fa7542d181e-National-University-of-Singapo.webp',
      alt: 'NUS Logo'
    },
    {
      name: 'Nanyang Technological University',
      logo: 'https://download.logo.wine/logo/Nanyang_Technological_University/Nanyang_Technological_University-Logo.wine.png',
      alt: 'NTU Logo'
    },
    {
      name: 'Singapore Management University',
      logo: 'https://images.seeklogo.com/logo-png/35/2/singapore-management-university-smu-logo-png_seeklogo-353772.png',
      alt: 'SMU Logo'
    }
  ];

  const partners = [
    {
      name: 'Singapore Tourism Board',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Singapore_Tourism_Board_text_logo.svg/1200px-Singapore_Tourism_Board_text_logo.svg.png',
      alt: 'STB Logo'
    },
    {
      name: 'Ministry of Education Singapore',
      logo: 'https://www.giving.sg/res/GetEntityGroupImage/80b6652d-703c-488e-9987-5bd9587996dc.jpg',
      alt: 'MOE Singapore Logo'
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">{content.title}</h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>

        {/* Universities */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-navy text-center mb-8">
            {language === 'en' ? 'Partner Universities' : 
             language === 'kr' ? '파트너 대학교' : '合作大学'}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {universities.map((university, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={university.logo}
                  alt={university.alt}
                  className="h-16 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Government Partners */}
        <div>
          <h3 className="text-xl font-semibold text-navy text-center mb-8">
            {language === 'en' ? 'Government Partners' : 
             language === 'kr' ? '정부 파트너' : '政府合作伙伴'}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-12 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
