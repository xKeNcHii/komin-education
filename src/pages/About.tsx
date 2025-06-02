
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, GraduationCap, Star, Users, Award } from 'lucide-react';

interface AboutProps {
  language?: 'en' | 'kr' | 'cn';
}

const About = ({ language = 'en' }: AboutProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'About KoMin Education',
      subtitle: 'Meet the team dedicated to your Singapore university journey',
      mission: 'Our Mission',
      missionText: 'To bridge the gap between talented Korean and Chinese students and Singapore\'s world-class universities through personalized guidance and comprehensive support.',
      stats: {
        students: '500+ Students Placed',
        experience: '10+ Years Experience',
        rate: '98% Admission Rate',
        universities: '15+ Partner Universities'
      },
      teamTitle: 'Our Leadership Team',
      cta: 'Ready to Start Your Journey?',
      ctaText: 'Schedule a consultation with our expert team today.',
      ctaButton: 'Book Free Consultation'
    },
    kr: {
      title: 'KoMin Education 소개',
      subtitle: '싱가포르 대학교 여정을 위해 헌신하는 팀을 만나보세요',
      mission: '우리의 사명',
      missionText: '개인별 가이드와 종합적인 지원을 통해 재능 있는 한국과 중국 학생들과 싱가포르의 세계적 수준의 대학교들 사이의 격차를 해소하는 것입니다.',
      stats: {
        students: '500+ 학생 배치',
        experience: '10+ 년 경험',
        rate: '98% 입학률',
        universities: '15+ 파트너 대학교'
      },
      teamTitle: '우리의 리더십 팀',
      cta: '여정을 시작할 준비가 되셨나요?',
      ctaText: '오늘 전문가 팀과 상담을 예약하세요.',
      ctaButton: '무료 상담 예약'
    },
    cn: {
      title: '关于KoMin Education',
      subtitle: '认识致力于您新加坡大学之旅的团队',
      mission: '我们的使命',
      missionText: '通过个性化指导和全面支持，在有才华的中韩学生与新加坡世界级大学之间架起桥梁。',
      stats: {
        students: '500+ 学生录取',
        experience: '10+ 年经验',
        rate: '98% 录取率',
        universities: '15+ 合作大学'
      },
      teamTitle: '我们的领导团队',
      cta: '准备开始您的旅程了吗？',
      ctaText: '今天就与我们的专家团队安排咨询。',
      ctaButton: '预约免费咨询'
    }
  };

  const content = texts[language];

  const teamMembers = [
    {
      name: 'Dr. Sarah Kim',
      role: language === 'en' ? 'Founder & CEO' : language === 'kr' ? '창립자 & CEO' : '创始人兼首席执行官',
      bio: language === 'en' 
        ? 'PhD in Education from NUS. Former admissions counselor with 15+ years helping Korean students navigate Singapore\'s education system.'
        : language === 'kr'
        ? 'NUS 교육학 박사. 한국 학생들이 싱가포르 교육 시스템을 탐색하는 데 15년 이상 도움을 준 전 입학 카운슬러.'
        : 'NUS教育学博士。前招生顾问，拥有15年以上帮助韩国学生了解新加坡教育体系的经验。',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      education: 'PhD Education, NUS'
    },
    {
      name: 'Michael Chen',
      role: language === 'en' ? 'Director of Student Services' : language === 'kr' ? '학생 서비스 디렉터' : '学生服务总监',
      bio: language === 'en'
        ? 'MBA from NTU. Specializes in visa processes, accommodation, and student life integration for international students.'
        : language === 'kr'
        ? 'NTU MBA. 국제 학생들의 비자 절차, 숙박 및 학생 생활 통합을 전문으로 합니다.'
        : 'NTU MBA。专门负责国际学生的签证流程、住宿和学生生活融合。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      education: 'MBA, NTU'
    },
    {
      name: 'Dr. Li Wei',
      role: language === 'en' ? 'Academic Director' : language === 'kr' ? '학업 디렉터' : '学术总监',
      bio: language === 'en'
        ? 'Former professor at Beijing University. Expert in curriculum planning and academic preparation for Singapore universities.'
        : language === 'kr'
        ? '전 베이징 대학교 교수. 싱가포르 대학교를 위한 커리큘럼 계획 및 학업 준비 전문가.'
        : '前北京大学教授。新加坡大学课程规划和学术准备专家。',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      education: 'PhD Mathematics, Beijing University'
    }
  ];

  return (
    <Layout language={language}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{content.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">{content.mission}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{content.missionText}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-navy mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">500+</div>
                <div className="text-gray-600">{content.stats.students}</div>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-navy mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">10+</div>
                <div className="text-gray-600">{content.stats.experience}</div>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-navy mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">98%</div>
                <div className="text-gray-600">{content.stats.rate}</div>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-navy mx-auto mb-4" />
                <div className="text-3xl font-bold text-navy mb-2">15+</div>
                <div className="text-gray-600">{content.stats.universities}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-16">{content.teamTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                  <p className="text-soft-red font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-navy/70 mb-4">{member.education}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 bg-light-gray rounded-full hover:bg-navy hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-light-gray rounded-full hover:bg-navy hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">{content.cta}</h2>
            <p className="text-xl text-white/90 mb-8">{content.ctaText}</p>
            <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90 text-white">
              <Link to={`${getBasePath()}/consult`}>{content.ctaButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
