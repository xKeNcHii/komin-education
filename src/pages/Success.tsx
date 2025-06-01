
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

interface SuccessProps {
  language?: 'en' | 'kr' | 'cn';
}

const Success = ({ language = 'en' }: SuccessProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Success Stories',
      subtitle: 'Real families, real results. See how we\'ve helped students achieve their Singapore university dreams.',
      stats: {
        admissionRate: '98%',
        admissionRateLabel: 'Admission Success Rate',
        studentsHelped: '500+',
        studentsHelpedLabel: 'Students Successfully Placed',
        universities: '6',
        universitiesLabel: 'Partner Universities',
        countries: '15+',
        countriesLabel: 'Countries Served'
      },
      cta: 'Start Your Success Story',
      readMore: 'Read Full Story',
      stories: [
        {
          name: 'Kim Min-Ji',
          age: 18,
          from: 'Seoul, South Korea',
          university: 'National University of Singapore',
          program: 'Computer Science',
          year: '2023',
          image: 'https://images.pexels.com/photos/1091956/pexels-photo-1091956.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin made my dream of studying at NUS come true. From application to settling in Singapore, they were with me every step of the way.',
          details: 'Min-Ji came to us with strong academics but needed guidance on university selection and application strategy. We helped her craft compelling essays and prepared her for interviews, resulting in acceptance to her top choice program.',
          achievements: ['Full scholarship recipient', 'Dean\'s List student', 'Student council member']
        },
        {
          name: 'Li Wei',
          age: 19,
          from: 'Beijing, China',
          university: 'Nanyang Technological University',
          program: 'Mechanical Engineering',
          year: '2023',
          image: 'https://images.pexels.com/photos/29335871/pexels-photo-29335871/free-photo-of-young-man-reading-in-a-huaian-bookstore.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'The visa process seemed impossible until KoMin stepped in. They handled everything professionally and I got my visa approved quickly.',
          details: 'Li Wei faced challenges with visa documentation due to complex family circumstances. Our immigration specialists worked closely with Singapore authorities to ensure a smooth approval process.',
          achievements: ['Engineering society president', 'Research publication', 'Industry internship']
        },
        {
          name: 'Sarah Park',
          age: 17,
          from: 'Busan, South Korea',
          university: 'Singapore Management University',
          program: 'Business Administration',
          year: '2024',
          image: 'https://images.pexels.com/photos/32311362/pexels-photo-32311362/free-photo-of-asian-woman-in-graduation-attire-holding-diploma.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'As a young student, I was overwhelmed by the application process. KoMin\'s team guided me through everything with such care and expertise.',
          details: 'Sarah was one of our youngest applicants, requiring special attention to both academic and personal development. Our comprehensive support helped her transition smoothly to university life.',
          achievements: ['Business case competition winner', 'Student ambassador', 'Startup founder']
        },
        {
          name: 'Chen Ming',
          age: 20,
          from: 'Shanghai, China',
          university: 'Singapore University of Technology and Design',
          program: 'Architecture',
          year: '2022',
          image: 'https://images.pexels.com/photos/14217715/pexels-photo-14217715.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin didn\'t just help me get admitted - they helped me find the perfect housing and even connected me with other students. I felt at home immediately.',
          details: 'Chen Ming needed extensive support with portfolio development for architecture programs. Our academic specialists worked with him to create a standout application that showcased his creative abilities.',
          achievements: ['Design competition finalist', 'Architecture society VP', 'Published designer']
        }
      ]
    },
    kr: {
      title: '성공 사례',
      subtitle: '실제 가족들, 실제 결과. 학생들이 싱가포르 대학교 꿈을 실현하도록 어떻게 도왔는지 확인해보세요.',
      stats: {
        admissionRate: '98%',
        admissionRateLabel: '입학 성공률',
        studentsHelped: '500+',
        studentsHelpedLabel: '성공적으로 배치된 학생',
        universities: '6',
        universitiesLabel: '파트너 대학교',
        countries: '15+',
        countriesLabel: '서비스 제공 국가'
      },
      cta: '당신의 성공 스토리 시작하기',
      readMore: '전체 스토리 읽기',
      stories: [
        {
          name: '김민준',
          age: 18,
          from: '서울, 대한민국',
          university: '싱가포르 국립대학교',
          program: '컴퓨터 공학',
          year: '2023',
          image: 'https://images.pexels.com/photos/1091956/pexels-photo-1091956.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin이 NUS에서 공부하는 제 꿈을 실현시켜 주었습니다. 지원부터 싱가포르 정착까지 모든 과정에서 함께해 주었습니다.',
          details: '민준이는 우수한 학업 성적을 가지고 있었지만 대학 선택과 지원 전략에 대한 안내가 필요했습니다. 설득력 있는 에세이 작성을 도우고 면접을 준비시켜 첫 번째 선택 프로그램에 합격하게 했습니다.',
          achievements: ['전액 장학금 수혜자', '학장상 수상', '학생회 임원']
        },
        {
          name: '리웨이',
          age: 19,
          from: '베이징, 중국',
          university: '난양기술대학교',
          program: '기계공학',
          year: '2023',
          image: 'https://images.pexels.com/photos/29335871/pexels-photo-29335871/free-photo-of-young-man-reading-in-a-huaian-bookstore.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin이 개입하기 전까지 비자 절차는 불가능해 보였습니다. 전문적으로 모든 것을 처리해 주어서 비자를 빠르게 승인받았습니다.',
          details: '리웨이는 복잡한 가족 상황으로 인해 비자 서류 문제에 직면했습니다. 우리의 이민 전문가들이 싱가포르 당국과 긴밀히 협력하여 원활한 승인 과정을 보장했습니다.',
          achievements: ['공학회 회장', '연구 논문 발표', '산업 인턴십']
        },
        {
          name: '박세라',
          age: 17,
          from: '부산, 대한민국',
          university: '싱가포르 경영대학교',
          program: '경영학',
          year: '2024',
          image: 'https://images.pexels.com/photos/32311362/pexels-photo-32311362/free-photo-of-asian-woman-in-graduation-attire-holding-diploma.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: '어린 학생으로서 지원 과정에 압도당했습니다. KoMin 팀이 세심한 배려와 전문성으로 모든 것을 안내해 주었습니다.',
          details: '세라는 우리의 가장 어린 지원자 중 한 명으로, 학업과 개인 발달 모두에 특별한 관심이 필요했습니다. 우리의 종합적인 지원이 그녀가 대학 생활에 원활하게 적응하도록 도왔습니다.',
          achievements: ['비즈니스 케이스 경연대회 우승', '학생 홍보대사', '스타트업 창업자']
        },
        {
          name: '첸밍',
          age: 20,
          from: '상하이, 중국',
          university: '싱가포르 기술디자인대학교',
          program: '건축학',
          year: '2022',
          image: 'https://images.pexels.com/photos/14217715/pexels-photo-14217715.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin은 입학만 도와준 것이 아니라 완벽한 숙소를 찾는 것과 다른 학생들과 연결해 주는 것까지 도와주었습니다. 즉시 집처럼 느껴졌습니다.',
          details: '첸밍은 건축 프로그램을 위한 포트폴리오 개발에 광범위한 지원이 필요했습니다. 우리의 학업 전문가들이 그와 함께 작업하여 그의 창의적 능력을 보여주는 뛰어난 지원서를 만들었습니다.',
          achievements: ['디자인 경연대회 결선 진출', '건축학회 부회장', '출간 디자이너']
        }
      ]
    },
    cn: {
      title: '成功案例',
      subtitle: '真实家庭，真实结果。看看我们如何帮助学生实现新加坡大学梦想。',
      stats: {
        admissionRate: '98%',
        admissionRateLabel: '录取成功率',
        studentsHelped: '500+',
        studentsHelpedLabel: '成功安置学生',
        universities: '6',
        universitiesLabel: '合作大学',
        countries: '15+',
        countriesLabel: '服务国家'
      },
      cta: '开始您的成功故事',
      readMore: '阅读完整故事',
      stories: [
        {
          name: '金敏俊',
          age: 18,
          from: '首尔，韩国',
          university: '新加坡国立大学',
          program: '计算机科学',
          year: '2023',
          image: 'https://images.pexels.com/photos/1091956/pexels-photo-1091956.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin让我在新加坡国立大学学习的梦想成真。从申请到定居新加坡，他们在每一步都陪伴着我。',
          details: '敏俊有着优秀的学术成绩，但需要大学选择和申请策略的指导。我们帮助他撰写了有说服力的文书并为面试做准备，最终被他的首选专业录取。',
          achievements: ['全额奖学金获得者', '院长榜学生', '学生会成员']
        },
        {
          name: '李伟',
          age: 19,
          from: '北京，中国',
          university: '南洋理工大学',
          program: '机械工程',
          year: '2023',
          image: 'https://images.pexels.com/photos/29335871/pexels-photo-29335871/free-photo-of-young-man-reading-in-a-huaian-bookstore.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: '直到KoMin介入，签证程序看起来不可能完成。他们专业地处理了一切，我的签证很快就获得了批准。',
          details: '李伟由于复杂的家庭情况在签证文件方面面临挑战。我们的移民专家与新加坡当局密切合作，确保了顺利的批准过程。',
          achievements: ['工程协会主席', '研究发表', '行业实习']
        },
        {
          name: '朴莎拉',
          age: 17,
          from: '釜山，韩国',
          university: '新加坡管理大学',
          program: '工商管理',
          year: '2024',
          image: 'https://images.pexels.com/photos/32311362/pexels-photo-32311362/free-photo-of-asian-woman-in-graduation-attire-holding-diploma.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: '作为一名年轻学生，申请过程让我感到不知所措。KoMin团队以如此细心和专业的方式指导我完成了一切。',
          details: '莎拉是我们最年轻的申请者之一，需要在学术和个人发展方面给予特别关注。我们的全面支持帮助她顺利过渡到大学生活。',
          achievements: ['商业案例竞赛获胜者', '学生大使', '初创公司创始人']
        },
        {
          name: '陈明',
          age: 20,
          from: '上海，中国',
          university: '新加坡科技设计大学',
          program: '建筑学',
          year: '2022',
          image: 'https://images.pexels.com/photos/14217715/pexels-photo-14217715.jpeg?auto=compress&cs=tinysrgb&w=600',
          quote: 'KoMin不只是帮我录取 - 他们帮我找到了完美的住房，甚至把我和其他学生联系起来。我立即感到宾至如归。',
          details: '陈明需要在建筑专业作品集开发方面的广泛支持。我们的学术专家与他合作，创建了一个突出展示他创意能力的出色申请。',
          achievements: ['设计竞赛决赛选手', '建筑协会副主席', '出版设计师']
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <Layout language={language}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">{content.stats.admissionRate}</div>
                <div className="text-gray-600">{content.stats.admissionRateLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">{content.stats.studentsHelped}</div>
                <div className="text-gray-600">{content.stats.studentsHelpedLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">{content.stats.universities}</div>
                <div className="text-gray-600">{content.stats.universitiesLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">{content.stats.countries}</div>
                <div className="text-gray-600">{content.stats.countriesLabel}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {content.stories.map((story, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-navy text-white p-4 rounded-xl shadow-lg">
                        <div className="text-sm font-medium">{story.university}</div>
                        <div className="text-xs text-white/80">{story.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-navy">{story.name}</h3>
                          <Badge variant="outline">{story.age}</Badge>
                        </div>
                        <p className="text-gray-600">{story.from}</p>
                        <p className="text-lg font-medium text-navy">{story.program}</p>
                      </div>

                      {/* Quote */}
                      <div className="bg-light-gray p-6 rounded-xl relative">
                        <Quote className="w-8 h-8 text-navy/20 absolute top-4 left-4" />
                        <p className="text-lg italic text-gray-700 pl-8">{story.quote}</p>
                      </div>

                      {/* Story Details */}
                      <p className="text-gray-600">{story.details}</p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-navy mb-3">Current Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {story.achievements.map((achievement, achievementIndex) => (
                            <Badge key={achievementIndex} className="bg-navy/10 text-navy">
                              <Star className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who achieved their Singapore university dreams with our help.
            </p>
            <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90">
              <Link to={`${getBasePath()}/consult`}>{content.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
