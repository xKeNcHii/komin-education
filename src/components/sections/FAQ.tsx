
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  language?: 'en' | 'kr' | 'cn';
}

const FAQ = ({ language = 'en' }: FAQProps) => {
  const texts = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Get answers to common questions about studying in Singapore',
      faqs: [
        {
          question: 'What are the admission requirements for Singapore universities?',
          answer: 'Requirements vary by university and program. Generally, you need strong academic grades (A-levels, IB, or equivalent), English proficiency (IELTS/TOEFL), and may need SAT/ACT scores. We help assess your profile and guide you through specific requirements.'
        },
        {
          question: 'How much does it cost to study in Singapore?',
          answer: 'Tuition fees range from S$25,000-50,000 per year for international students. Living costs are approximately S$12,000-18,000 annually. We provide detailed cost breakdowns and help you explore scholarship opportunities.'
        },
        {
          question: 'Do I need a student visa for Singapore?',
          answer: 'Yes, international students need a Student Pass. We handle the entire visa application process, including document preparation, submission, and follow-up with immigration authorities.'
        },
        {
          question: 'When should I start my university application?',
          answer: 'We recommend starting 12-18 months before your intended intake. This allows time for academic preparation, application processing, and visa arrangements. Early applications often have better chances of acceptance.'
        },
        {
          question: 'What support do you provide after I arrive in Singapore?',
          answer: 'We offer comprehensive onboarding including airport pickup, accommodation assistance, university orientation, banking setup, and ongoing academic support throughout your studies.'
        },
        {
          question: 'Can you help with scholarship applications?',
          answer: 'Yes, we help identify and apply for various scholarships including government scholarships, university merit awards, and private foundation grants. We guide you through the entire scholarship application process.'
        }
      ]
    },
    kr: {
      title: '자주 묻는 질문',
      subtitle: '싱가포르 유학에 대한 일반적인 질문에 대한 답변을 얻으세요',
      faqs: [
        {
          question: '싱가포르 대학교 입학 요건은 무엇인가요?',
          answer: '요건은 대학교와 프로그램에 따라 다릅니다. 일반적으로 우수한 학업 성적(A-levels, IB 또는 이에 상응하는 자격), 영어 능력(IELTS/TOEFL), SAT/ACT 점수가 필요할 수 있습니다. 저희는 귀하의 프로필을 평가하고 구체적인 요건을 안내해드립니다.'
        },
        {
          question: '싱가포르에서 공부하는 데 얼마나 비용이 드나요?',
          answer: '국제 학생의 등록금은 연간 S$25,000-50,000입니다. 생활비는 연간 약 S$12,000-18,000입니다. 자세한 비용 분석과 장학금 기회 탐색을 도와드립니다.'
        },
        {
          question: '싱가포르 학생 비자가 필요한가요?',
          answer: '네, 국제 학생은 학생 패스가 필요합니다. 서류 준비, 제출, 출입국 당국과의 후속 조치를 포함한 전체 비자 신청 과정을 처리해드립니다.'
        },
        {
          question: '언제 대학교 지원을 시작해야 하나요?',
          answer: '희망하는 입학 시기 12-18개월 전에 시작할 것을 권장합니다. 이를 통해 학업 준비, 지원서 처리, 비자 준비 시간을 확보할 수 있습니다. 조기 지원이 종종 더 나은 합격 기회를 제공합니다.'
        },
        {
          question: '싱가포르 도착 후 어떤 지원을 제공하나요?',
          answer: '공항 픽업, 숙박 지원, 대학교 오리엔테이션, 은행 개설, 학업 기간 동안의 지속적인 학업 지원을 포함한 종합적인 정착 지원을 제공합니다.'
        },
        {
          question: '장학금 신청을 도와주시나요?',
          answer: '네, 정부 장학금, 대학교 우수 장학금, 사립 재단 보조금을 포함한 다양한 장학금을 식별하고 신청하는 데 도움을 드립니다. 전체 장학금 신청 과정을 안내해드립니다.'
        }
      ]
    },
    cn: {
      title: '常见问题',
      subtitle: '获取有关在新加坡留学的常见问题的答案',
      faqs: [
        {
          question: '新加坡大学的入学要求是什么？',
          answer: '要求因大学和专业而异。通常需要优秀的学术成绩（A-levels、IB或同等学历）、英语能力（IELTS/TOEFL），可能需要SAT/ACT成绩。我们帮助评估您的背景并指导您了解具体要求。'
        },
        {
          question: '在新加坡学习需要多少费用？',
          answer: '国际学生的学费每年S$25,000-50,000不等。生活费每年约S$12,000-18,000。我们提供详细的费用分析并帮助您探索奖学金机会。'
        },
        {
          question: '我需要新加坡学生签证吗？',
          answer: '是的，国际学生需要学生准证。我们处理整个签证申请过程，包括文件准备、提交和与移民当局的后续跟进。'
        },
        {
          question: '我应该什么时候开始大学申请？',
          answer: '我们建议在您预期入学时间前12-18个月开始。这为学术准备、申请处理和签证安排留出时间。早期申请通常有更好的录取机会。'
        },
        {
          question: '我到达新加坡后您提供什么支持？',
          answer: '我们提供全面的入学服务，包括机场接机、住宿协助、大学迎新、银行开户以及整个学习期间的持续学术支持。'
        },
        {
          question: '您能帮助申请奖学金吗？',
          answer: '是的，我们帮助识别和申请各种奖学金，包括政府奖学金、大学优秀奖学金和私人基金会资助。我们指导您完成整个奖学金申请过程。'
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {content.faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-light-gray rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
