
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SuccessStoriesProps {
  language?: 'en' | 'kr' | 'cn';
}

const SuccessStories = ({ language = 'en' }: SuccessStoriesProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Success Stories',
      subtitle: 'Real students, real results. See how we\'ve helped families achieve their Singapore university dreams.',
      viewAll: 'View All Success Stories',
      readMore: 'Read More',
      stories: [
        {
          name: 'Sarah Kim',
          nationality: 'Korean',
          university: 'NUS Business School',
          quote: 'KoMin Education made my dream of studying at NUS a reality. Their support throughout the application process was incredible.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'David Chen',
          nationality: 'Chinese',
          university: 'NTU Engineering',
          quote: 'The visa support and housing arrangement services saved my family so much stress. Everything was handled professionally.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Jenny Park',
          nationality: 'Korean',
          university: 'SMU Information Systems',
          quote: 'From application to arrival, KoMin was there every step of the way. I felt supported and confident throughout my journey.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    kr: {
      title: '성공 사례',
      subtitle: '실제 학생들, 실제 결과. 우리가 어떻게 가족들의 싱가포르 대학교 꿈을 실현시켰는지 확인해보세요.',
      viewAll: '모든 성공 사례 보기',
      readMore: '더 읽기',
      stories: [
        {
          name: '김서아',
          nationality: '한국',
          university: 'NUS 경영대학',
          quote: 'KoMin Education이 제 NUS 진학의 꿈을 현실로 만들어주었습니다. 지원 과정 전반에 걸친 그들의 지원이 놀라웠습니다.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: '첸다비드',
          nationality: '중국',
          university: 'NTU 공과대학',
          quote: '비자 지원과 숙소 준비 서비스가 우리 가족의 스트레스를 많이 덜어주었습니다. 모든 것이 전문적으로 처리되었습니다.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: '박제니',
          nationality: '한국',
          university: 'SMU 정보시스템학과',
          quote: '지원부터 도착까지 KoMin이 모든 단계에서 함께했습니다. 여정 전반에 걸쳐 지원받고 자신감을 느꼈습니다.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    cn: {
      title: '成功案例',
      subtitle: '真实学生，真实结果。看看我们如何帮助家庭实现新加坡大学梦想。',
      viewAll: '查看所有成功案例',
      readMore: '阅读更多',
      stories: [
        {
          name: '金莎拉',
          nationality: '韩国',
          university: 'NUS商学院',
          quote: 'KoMin Education让我在NUS学习的梦想成为现实。他们在整个申请过程中的支持令人难以置信。',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: '陈大卫',
          nationality: '中国',
          university: 'NTU工程学院',
          quote: '签证支持和住房安排服务为我的家庭减轻了很多压力。一切都得到了专业处理。',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: '朴珍妮',
          nationality: '韩国',
          university: 'SMU信息系统',
          quote: '从申请到抵达，KoMin在每一步都陪伴着我。整个旅程中我感到得到支持和信心。',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {content.stories.map((story, index) => (
            <div 
              key={index}
              className="bg-light-gray p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              {/* Student Photo */}
              <div className="flex items-center mb-6">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-navy">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.nationality} • {story.university}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{story.quote}"
              </blockquote>

              {/* Read More Link */}
              <Link 
                to={`${getBasePath()}/success`}
                className="text-teal hover:text-teal/80 font-medium text-sm transition-colors"
              >
                {content.readMore} →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white">
            <Link to={`${getBasePath()}/success`}>{content.viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
