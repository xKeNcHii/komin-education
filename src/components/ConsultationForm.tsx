
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Check } from 'lucide-react';

interface ConsultationFormProps {
  language?: 'en' | 'kr' | 'cn';
}

interface FormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  currentLocation: string;
  curriculum: string;
  gradeLevel: string;
  targetUniversity: string;
  intakeYear: string;
  additionalInfo: string;
}

const ConsultationForm = ({ language = 'en' }: ConsultationFormProps) => {
  const form = useForm<FormData>();

  const texts = {
    en: {
      title: 'Free Consultation Request',
      subtitle: 'Tell us about your goals and we\'ll create a personalized plan for your Singapore university journey.',
      studentInfo: 'Student Information',
      parentInfo: 'Parent/Guardian Information',
      academicInfo: 'Academic Information',
      additionalInfo: 'Additional Information',
      studentName: 'Student\'s Full Name',
      parentName: 'Parent/Guardian Name',
      email: 'Email Address',
      phone: 'Phone Number (with country code)',
      currentLocation: 'Current Location',
      curriculum: 'Current Curriculum',
      gradeLevel: 'Current Grade Level',
      targetUniversity: 'Target University in Singapore',
      intakeYear: 'Intended Intake Year',
      additionalDetails: 'Additional Information',
      additionalPlaceholder: 'Tell us about any specific concerns, requirements, or questions you have...',
      submit: 'Submit Consultation Request',
      processing: 'Processing...',
      benefits: [
        'Personalized university strategy',
        'Admission timeline planning',
        'Scholarship opportunities review',
        'Document preparation guidance'
      ],
      curriculumOptions: [
        'A-Levels',
        'International Baccalaureate (IB)',
        'Advanced Placement (AP)',
        'Korean High School',
        'Chinese High School',
        'Other'
      ],
      gradeOptions: [
        'Grade 9',
        'Grade 10',
        'Grade 11',
        'Grade 12',
        'Graduated',
        'Gap Year'
      ],
      universityOptions: [
        'National University of Singapore (NUS)',
        'Nanyang Technological University (NTU)',
        'Singapore Management University (SMU)',
        'Singapore University of Technology and Design (SUTD)',
        'Singapore Institute of Technology (SIT)',
        'Not sure yet'
      ]
    },
    kr: {
      title: '무료 상담 신청',
      subtitle: '목표를 알려주시면 싱가포르 대학교 진학을 위한 개인 맞춤형 계획을 세워드리겠습니다.',
      studentInfo: '학생 정보',
      parentInfo: '학부모/보호자 정보',
      academicInfo: '학업 정보',
      additionalInfo: '추가 정보',
      studentName: '학생 성명',
      parentName: '학부모/보호자 성명',
      email: '이메일 주소',
      phone: '전화번호 (국가번호 포함)',
      currentLocation: '현재 거주지',
      curriculum: '현재 교육과정',
      gradeLevel: '현재 학년',
      targetUniversity: '목표 대학교',
      intakeYear: '입학 희망 연도',
      additionalDetails: '추가 정보',
      additionalPlaceholder: '특별한 우려사항, 요구사항 또는 질문이 있으시면 알려주세요...',
      submit: '상담 신청하기',
      processing: '처리 중...',
      benefits: [
        '개인 맞춤형 대학교 전략',
        '입학 일정 계획',
        '장학금 기회 검토',
        '서류 준비 안내'
      ],
      curriculumOptions: [
        'A-Levels',
        '국제 바칼로레아 (IB)',
        'AP (Advanced Placement)',
        '한국 고등학교',
        '중국 고등학교',
        '기타'
      ],
      gradeOptions: [
        '중3',
        '고1',
        '고2',
        '고3',
        '졸업',
        '갭이어'
      ],
      universityOptions: [
        '싱가포르 국립대학교 (NUS)',
        '난양기술대학교 (NTU)',
        '싱가포르 경영대학교 (SMU)',
        '싱가포르 기술디자인대학교 (SUTD)',
        '싱가포르 기술대학교 (SIT)',
        '아직 확정되지 않음'
      ]
    },
    cn: {
      title: '免费咨询申请',
      subtitle: '告诉我们您的目标，我们将为您的新加坡大学之旅制定个性化计划。',
      studentInfo: '学生信息',
      parentInfo: '家长/监护人信息',
      academicInfo: '学术信息',
      additionalInfo: '附加信息',
      studentName: '学生姓名',
      parentName: '家长/监护人姓名',
      email: '电子邮箱',
      phone: '电话号码（含国家代码）',
      currentLocation: '当前居住地',
      curriculum: '当前课程体系',
      gradeLevel: '当前年级',
      targetUniversity: '目标大学',
      intakeYear: '计划入学年份',
      additionalDetails: '附加信息',
      additionalPlaceholder: '请告诉我们您的具体担忧、要求或问题...',
      submit: '提交咨询申请',
      processing: '处理中...',
      benefits: [
        '个性化大学策略',
        '入学时间规划',
        '奖学金机会评估',
        '文件准备指导'
      ],
      curriculumOptions: [
        'A-Levels',
        '国际文凭课程 (IB)',
        'AP课程',
        '中国高中',
        '韩国高中',
        '其他'
      ],
      gradeOptions: [
        '9年级',
        '10年级',
        '11年级',
        '12年级',
        '已毕业',
        '间隔年'
      ],
      universityOptions: [
        '新加坡国立大学 (NUS)',
        '南洋理工大学 (NTU)',
        '新加坡管理大学 (SMU)',
        '新加坡科技设计大学 (SUTD)',
        '新加坡理工大学 (SIT)',
        '尚未确定'
      ]
    }
  };

  const content = texts[language];

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-4">{content.title}</h2>
              <p className="text-gray-600 text-lg">{content.subtitle}</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Student Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">{content.studentInfo}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentName"
                      rules={{ required: "Student name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.studentName}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentLocation"
                      rules={{ required: "Current location is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.currentLocation}</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Seoul, Beijing, etc." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Parent Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">{content.parentInfo}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="parentName"
                      rules={{ required: "Parent name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.parentName}</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/,
                          message: "Please enter a valid email"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.email}</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>{content.phone}</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="+82 10-1234-5678" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">{content.academicInfo}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="curriculum"
                      rules={{ required: "Curriculum is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.curriculum}</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                              <option value="">Select curriculum</option>
                              {content.curriculumOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gradeLevel"
                      rules={{ required: "Grade level is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.gradeLevel}</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                              <option value="">Select grade</option>
                              {content.gradeOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="targetUniversity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.targetUniversity}</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                              <option value="">Select university</option>
                              {content.universityOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="intakeYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content.intakeYear}</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                              <option value="">Select year</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">{content.additionalInfo}</h3>
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.additionalDetails}</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder={content.additionalPlaceholder}
                            className="min-h-[120px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white py-3 text-lg">
                  {content.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-navy text-white rounded-2xl p-8 sticky top-8">
            <h3 className="text-xl font-bold mb-6">What You'll Get</h3>
            <div className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24-48h</div>
                <div className="text-white/80">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
