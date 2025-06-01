
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactProps {
  language?: 'en' | 'kr' | 'cn';
}

const Contact = ({ language = 'en' }: ContactProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our education consultants',
      quickContact: 'Quick Contact',
      fullConsultation: 'Schedule Full Consultation',
      officeHours: 'Office Hours',
      contactInfo: 'Contact Information',
      emergencySupport: '24/7 Emergency Support',
      emergencyText: 'For urgent matters involving current students in Singapore:',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      },
      offices: [
        {
          city: 'Singapore',
          address: '1 Marina Bay, Singapore 018989',
          phone: '+65 9123 4567',
          email: 'singapore@komin.edu',
          hours: 'Mon-Fri: 9AM-6PM SGT'
        },
        {
          city: 'Seoul',
          address: '123 Gangnam-gu, Seoul, South Korea',
          phone: '+82 2 1234 5678',
          email: 'seoul@komin.edu',
          hours: 'Mon-Fri: 9AM-6PM KST'
        },
        {
          city: 'Beijing',
          address: '456 Chaoyang District, Beijing, China',
          phone: '+86 10 1234 5678',
          email: 'beijing@komin.edu',
          hours: 'Mon-Fri: 9AM-6PM CST'
        }
      ]
    },
    kr: {
      title: '문의하기',
      subtitle: '교육 컨설턴트에게 연락하세요',
      quickContact: '빠른 문의',
      fullConsultation: '전체 상담 예약',
      officeHours: '운영 시간',
      contactInfo: '연락처 정보',
      emergencySupport: '24시간 긴급 지원',
      emergencyText: '싱가포르 재학생 관련 긴급 사항:',
      form: {
        name: '성명',
        email: '이메일 주소',
        subject: '제목',
        message: '메시지',
        send: '메시지 보내기'
      },
      offices: [
        {
          city: '싱가포르',
          address: '1 Marina Bay, Singapore 018989',
          phone: '+65 9123 4567',
          email: 'singapore@komin.edu',
          hours: '월-금: 오전 9시-오후 6시 (SGT)'
        },
        {
          city: '서울',
          address: '서울특별시 강남구 123',
          phone: '+82 2 1234 5678',
          email: 'seoul@komin.edu',
          hours: '월-금: 오전 9시-오후 6시 (KST)'
        },
        {
          city: '베이징',
          address: '중국 베이징시 차오양구 456',
          phone: '+86 10 1234 5678',
          email: 'beijing@komin.edu',
          hours: '월-금: 오전 9시-오후 6시 (CST)'
        }
      ]
    },
    cn: {
      title: '联系我们',
      subtitle: '与我们的教育顾问取得联系',
      quickContact: '快速联系',
      fullConsultation: '预约完整咨询',
      officeHours: '办公时间',
      contactInfo: '联系信息',
      emergencySupport: '24/7紧急支持',
      emergencyText: '新加坡在读学生紧急事务：',
      form: {
        name: '您的姓名',
        email: '电子邮箱',
        subject: '主题',
        message: '留言',
        send: '发送消息'
      },
      offices: [
        {
          city: '新加坡',
          address: '1 Marina Bay, Singapore 018989',
          phone: '+65 9123 4567',
          email: 'singapore@komin.edu',
          hours: '周一至周五: 上午9点-下午6点 (SGT)'
        },
        {
          city: '首尔',
          address: '韩国首尔江南区123号',
          phone: '+82 2 1234 5678',
          email: 'seoul@komin.edu',
          hours: '周一至周五: 上午9点-下午6点 (KST)'
        },
        {
          city: '北京',
          address: '中国北京市朝阳区456号',
          phone: '+86 10 1234 5678',
          email: 'beijing@komin.edu',
          hours: '周一至周五: 上午9点-下午6点 (CST)'
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
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{content.subtitle}</p>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-navy mb-6">{content.quickContact}</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.form.name}
                      </label>
                      <Input placeholder={content.form.name} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.form.email}
                      </label>
                      <Input type="email" placeholder={content.form.email} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.form.subject}
                      </label>
                      <Input placeholder={content.form.subject} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {content.form.message}
                      </label>
                      <Textarea 
                        placeholder={content.form.message}
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-navy hover:bg-navy/90">
                      {content.form.send}
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">Need comprehensive guidance?</p>
                    <Button asChild variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                      <Link to={`${getBasePath()}/consult`}>{content.fullConsultation}</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-8">{content.contactInfo}</h2>
                <div className="space-y-8">
                  {content.offices.map((office, index) => (
                    <div key={index} className="bg-light-gray p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-navy mb-4">{office.city}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-navy mt-0.5" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-navy" />
                          <span className="text-gray-700">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-navy" />
                          <span className="text-gray-700">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-navy" />
                          <span className="text-gray-700">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Messaging Apps */}
                <div className="mt-8 bg-light-gray p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-navy mb-4">Instant Messaging</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-navy" />
                      <span className="text-gray-700">WhatsApp: +65 9123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-navy" />
                      <span className="text-gray-700">WeChat: KoMinEducation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-navy" />
                      <span className="text-gray-700">KakaoTalk: KoMinEducation</span>
                    </div>
                  </div>
                </div>

                {/* Additional Contact Methods */}
                <div className="mt-8 bg-navy text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">{content.emergencySupport}</h3>
                  <p className="text-white/90 mb-4">
                    {content.emergencyText}
                  </p>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+65 9999 8888</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
