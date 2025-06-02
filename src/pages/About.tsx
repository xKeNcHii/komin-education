
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
      name: 'Koh Zhe Wei',
      role: language === 'en' ? 'Founder & CEO' : language === 'kr' ? '창립자 & CEO' : '创始人兼首席执行官',
      bio: language === 'en' 
        ? '?'
        : language === 'kr'
        ? '?'
        : '?',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhAWFRUVFRUVFRcVFRUXFRgWFRUWFhUXFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLS0tLS0uLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS8tLS0tLS0tLS8tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABEEAABAwIDBQUFBQYFAgcAAAABAAIDBBEFITEGEkFRcQcTImGBMpGhsfAUQlLB0RUjYnLh8RYzgpLCk9IIFyRDU2OD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA7EQACAQMBBQQJAwIGAwEAAAAAAQIDBBEhBRIxQVETYXGRBiIygaGxwdHwFEJSI+EVM2JykvGCouIk/9oADAMBAAIRAxEAPwDTrsHmB7QkNCnguORGYPI8/rmq5LeL6NTcfDKejXVffmujCKE31FjoRyKjvZRZKluy01T1T7vzj36BcsGXRJS1CUNCCOLNTbK1HUsWU/xHxVLkaVAHw2n3XOb53Cqh6uUbK8u0UZc8YLk09xdLPIio8yWmjSbJxWo+pp7j64JRkE4ZRGyO46qTZFRyZvGYbP6/ktdF5RzLmOJFY/RWy4FEFlkMXLnl+ZVUdNDXU1een4gloVpjJgxLJPB0MSyCQnNRkGiBymVnEAVWIzl1wMm8Tz8gsVeo5aLgd6wt40mpT1lyXTvZksV/suJcHv8AZfAr2vssuTsjy0HRADWPLSkJpMtaata8bsgTz1M86bi8xI6zDy3xNzb8QholCsno+IEColw9pKAJGzpYFglEgKAwIxgoFkYafkjI8kboUZDJA+IhPJLImv5oAdZAj01e0PhQ+M5pMceIdHHdVNmiMR1PDZ31pwUJ/wAkX0nlbj9353ly2C46hU7xp7MCbDZwVu9lGdQwy1igy6Zqhy1NcYaEclNZ9+aExtYWA6FuSgyyK0Hblilke7qTbqiTB2ssSPcp5yitLDKfaSmy3lot5a4MV7T0yZotWp8Dmx4jaeE3z6fqqY+0b6jW5hBcMV1a2Y4xyEvisq1ItccCZD+qbkCiRTMTTISQI8KxMqaIJRfLhx81CXraF1LEHnn8gKpgyWepDQ6VtW9Yz1fh/F3oFy61HnI9fY3+ijT8yjqI7HRc+awz01Ce9Ei6KJeSNeDkUANcwhDQcQ6gxIsyOYSTwU1KKlwDZ6Fko34jY8QpcSqNWVN4kVEgc02cLFRwak1JZR1rgkA6yAEHkIAlbOUsCwStmBSwLA/dBQBDJSck8jyQGBwTyPKPSWlezTyfDJRwzqZEs6B9+qpmsGqk8h7otHDgqs8jRu8y3pWXHxWaXE3w1RFVU3EKUZFdSHMMphkCoSLYLQrNrcep6GnNRUOIa0gANAL3uOjWAkXOvoClkk45KbZntIwyrIZHUhkhsAyYd24k6AE+Fx8gUNgo4NkQkM6EARzt48k0Rl1B8RiD4z0U4PEiutHegZRlMfitrkchU2Emlsq94vcORNT0uYCJSHCmSVEOajFkpx1OCP4/JPIboNURqcWVTiASRqxMoawQFnFSIAtQ8AKubSRpt4SnLCKDEKtui4t1VPcbKs5YXQqJIgc7rlybb1PV00orCInUgSyWZIX0aeR7w0REa6J5Hka+n4hMMnaed7DcXURSipFwyeOcbrxZ3ApqWeJlcJ0nmJW12HOj8xwIRgvp1VMGa5BaPvdIQ0oGda9AhwkIQBPHUJYFgnEwSFg3i9sfDcjmhIEiamfukFRksonB7rNLS2c3qsctGdSniSDKHLLkq59S+lpoGPZdQTLmsnIm2yQxRWD5y7ftoDPXimaf3dK0NtwMkgDnn0G630KiTPMEAegbD9qtZQkRyONTT5Du5HHfYP8A6nm5H8puOiAPofZjaWmr4e+ppQ9ujgcnsd+F7TmD8DwTIlsHXCA4kMY1afoKT6la6ALKPxHLiSrXPQoVH1h76XxBJS0JOn6xJHT2ck5aElDUHqY81KLK5x1OMiTyJRB6iG+SlFlU4gMlP7grFIocCsrHgK1aIpa3ngzeJVh0b7/0XPuKreiPTbMsktZ+RRTR3z4rlzXU9dQmlhICc8hZpI6lN5RKya6rwWtEgkSEO3kCGk+SBjSWnUJgNs3mhoA6nq8t11nDzQm0UypLOUQ1FA0+JnuTyTjNrRgZpilksyNMRTyPIwxoDI0tIQMQPogB4cgR6WvaHwofEkxxC2xXVbZco5LLC5beEqmos6mqhLGhcsOYPoVnZtXHIc0qtovRFW1DYo3yvNmxtc9x5NaC4/AIHg+McYr3VE8s7tZZHyH/AFuLrfFIYGgBIAutktpp6CobUQOsRk9lzuyMvmx/MfI5oA9txLtxoWRh8MMssjm3MZAY1jvwveb36tBTyR3dTEYl24Yi914ooIRw8Jkd6lxsfcjI91ZyQUPbXijHhz+5lbfNrog3LjYsIIPvRkMI9a2B7TKTEnCIjuKnP9043DrDMxvsA7obHI5EC6MiwbvdRkMAkseasT0KZR1GvFkIT0I+6yuVLJHd0KfE6gDwt+uqvgubMdaXJGbrr2Tm9CVvHDyZ+rCwVD0tqysc0k5LHKLZ3IVIwSbHfYSR4hZQ/Tyxlk1tOmniLyCS0ZByVTotvCRuhfR3cyZNQUEkx3Y2F3M8B1KsqUKNpHfvJ7q/itZP3cjm3G3lL1LSO8/5PSK+5cP2WmaPauemXwJWFbd2bN7rotLk1LX350+Jzlc7Tg95VU+5x093MDlwuZurL9CPkbFaY1tmVvYrOL/1R+qL4bavaf8Am0VL/a8fB5BZYSPaaR1B+avWz5VNaM4z8JLPkzVD0ktVpWjKHjFteaz8iMxgqipbV6X+ZBr3HVt9o2tw8UqkW+mdfLj8AeSmPAqjJtydp6p7DnmPNLApQUi3iDJh4Tuu5FCwZnKdN68ACpLmGz22+RRul8JKayiMTtKMEsDxulIBpgBTDJzuEsjyehL2x8LOtKARaUJByVEzXSeQ/wCz8Rr81VvGjc5ljTuuLKqWjNMHlBkZyVbL48DO9p9Z3eE1jucDo/8Aqfu/+SgyaPkhAxIASAEgBIASAEgCSCZzHB7HFrmkFrmkhwI0IIzBQB9V9le137RohI//ADoiIpvNwAIePJwN+oKBGrkCkiDIAOJUyHiA1dUXeFnvU4xxqymcm9EUla5rfMq9ZZlkkngoqklyUk3wLacox1YN+zb+0VD9NniaHtTcWIIlFGxug/VT7KMeBQ72rVfrMidRudoLeZUXRci2N7Cnxee5GOx972yjUNaS0jzGpP5dFfaU4wbfMLi+nWSzpHoejbNVbJIGljQ0jwuDRYBw/XX1XzDb9nUtb2cZttPWLby2n393D3HorGrGpSTXLRlnI8NBJNgMyuPCDnJRjxZrbwsspnbTUh1eT/8Am/8ARehXortRfsX/ACj9zmvatr/L4MLpWwTM32C7SSLgFuYNjkuXd29zY1uyraSWHyfHvNdGrTrw3ocDMbVUrWOG6La8M8xfNeu9HbmpcWtxTnJv1U1lt9f7GGpCNK/tppY9fHmUDZlDB9AHXaUgOCKxu02SE9eJYR1Ie3clFxz4pqWDPKk4vegV1dhhb4meJqlxLqdbOjAGkhBcSB55pCHd47mjAHpK9ofCjoSBBlIbFQmXU3hmjpSHBY5aM6dPVErWWKWck0sMOiF81UzRHgYDt3mDcIlb+OWFo9Hh/wDwSZJHzGkMSAEgBIASAEgBIASAN52SbctwyoeJgTBOGtkLc3MLT4ZAOIAc64GfLSxAPoL/ABthrrWxGmzF/wDPjv7idVJEZDP2pHMbRTMcP4Xtdl6FXRSSMcm5PANU1dvBGOp4qSXNicklhABpXHVXIySfQQpOQU1JFTi2MfBbVPOSDjghc0BSSINsYU2JIy+1lDfxjR2R/mGh93yVW9uSUjZSW9HdK3ZvG3UxOW8CLFpNsxob21GYVG2djU9pUoxb3WnlPGdOa5cfmjTY7Q/Tt58i7qtsmvYW91a/Hf8A6LgUfQx05qfbcP8AT/8AR0ZbbjKON34mLmieZMvZI19BqvUQuak7qVNLMVxfTQpr2FGnYwruTU5apcms44YzwPRtioZGxu3m2YSC0nUm1nEDlkF4b0wrW1WvDspZnFNSxy1016p505G7Y1OrCEt5aPVfUg20b7J6fJ39FL0Pea1Wn1g/miW1pbnZ1P4zTMY1y0LgfQpaMddPAjolISwMe2pHFRaDAXBVcikRlHI2ela7MZFPIk2gKSnI4IyWZI7+SYHpYC9mfC8EjGFJskkGU8arky+ES8oW2WaZvpLBZOjVOTTgkhy1SZOJ80dsO3Rr6gwxO/8ASwOIZb/3HjJ0h8tQ3yz4qJM87QAkAJACQAkAJACQAkAJACQB0FAGgwrbfEKewjq3lo+68iRvSz75dFJTkiuVKEuKPSdl+2CF5ayth7onLvY7uj6uYfE0dN5WKr1KXbpeyemGdj2B8bw9jgC1zCC0g6EEZEK6OpkqaaFfP0V8TJMDeFYUsYUMayCVzGvYWHQ8teYKqm1g1UabzlmcqMDHBzvUBZZzqr2W0dmhToP2kn7irkw8NeGhxcSQLZAXJAAKnQjXlF1JzaisvjxxxLLmpaUpKnClFz71oumft5m4wbZlkdny2e/l91v6leG2p6S1K0ewtVuU/wD2fj093Hm2b6Nlmfa13vT+C8PpyXIPxjGI6dviN3H2Wg5nzPILBsnYtfaE8x0guMnwXcur/Gyd5ewt1h6yfBc/z8Rh62tknfvyHyaBoB5DgvYOpQs6P6ayWF+6XOT8fxdDZszY1SpUV1e8f2w5Lvff3e966IR1MsCZ6sZ3JTyIRiTyIjfEmSUiFzCEmiaY6Ksc3zUWhOKZaU8zZONj5qPApeYifSm+iBqojdRr2rPiSDIGeSqbLootKWEKmTNdOKLaniCokzZCKDGtVZckYbtl2iNHhr9w2kqD3DCDYgPaS9w45NBF+bgkPB8tIGJACQAkAJACQAkAJACQAkAJACQAkATUdK+V7Y42lz3uDGtHFzjYBAm8H1HguHso6WGmad7umBpPNxJc4+riVrpweDm1qibyRTzrTGJhlMEcbqeCrI0tRgakMe1RaLIzYBWts0nkCfgs9RHTtampldn4y6eIHjIwn0dvH5JXs+y2TUf+ifxTX1FBdptB/wC6PwweoSus0nkCfgvj8VmSR7BnmGJyEyvLiSd93wOS+l15yp2NvShpFwTa66Iq9HbanUuK9eazKMsJ9OPD5fIY1/muXg9gO7whGBYHtkBRgBXCMCO3CBCMYKMjIJKQFPJJSIvshGYKMjzkMirJALEXUcIolRi2b2Ne1Z8UiWVI0qmRppouqVqzSZuposI1UzSidqiWI8A/8R+Jl1VT0wOUcRkP80jiPkwe9IZ4+gBIASAEgBIASAEgBIASAEgBIASAEgD2HsU2RIviE8Ztm2mBHPJ0o8tWj/V5K2nHXJnrzxoenVW7yIWuOTmTwV0jQrlkzSSISpEBXQxpZIZZgNSqpVIriaaVtUm9EUmM4mwRv8X3TxHKyxVbmHU71psqvjO78DOYRiQhkbJYEtJIBvbMEajquhdWau7R28m0pJLK8zkU7hULiU+ak/saX/HAIIMTcwRcPPHyLV5SXoTBPMK798f7o6q271gvP+xm6iUPcXA6lx15m63bUp9jGjSzndgl5YX0PR+ikt+lWqdZ/TP1GtNlyT1ZOxyBHTHxGqMiOtPAoDB3cUskGhbhTEcuUtBnC4o3USTG975Jboz0BpXsz4agunmtxKhKOS6E8FzRVn8SzzgbqVXvLmCS6ztG2MshTVAtR8v9u0xdjEwP3I4Wjp3Yd83FIZ5+gBIASAEgBIASAEgBIASAEgBIAQCAPTOzHsyfWbtVVAspgQWtIIdP00LY9PFx0HMNLJCcsI92e8MaGtADWgAACwAAsABwFlojFGOc2iuqJgVekZJyTK2dysTwUuGQGacj7vxVc6rXI00LWMnrLHuK2eueNGD/AHLDUuZfx+J6C12ZQerqP/iCOrb+0wD1uskqsnxSO5SsaMPZk37ipxvc7vLMuyFsvPNV04qVRb/DOpouqkqdCSpp72NM9SHZmjjqHCM2abG2mZGdtOXyXX2rdSsLbt6ME8PXuT56d54i2Tuqm5Vk9TVN2Ob+L5f9q8m/TS45Qj8fudL/AAWl1fw+xn9oMN7o2F/6jX4WK69G+ltSylUklvwedP4v8fkbNkyVhfxpZ9Sosa/yWq+3vKhshXPwe6wStekLARHLzSwLBMQCEhDQSNUwJAUZE0dDgUyGGhOZyQNMjI8k8jN2vZnw86CkCC6aSyhJF0JYLSXGo6eGSeT2ImOe6wubNFzYc1kqR5nRoVMvB5NiXb1Vlx+z0kLGXy73fkcR57rmgFZjoYPONq9opa+pdVTNY2RwaCIw4Ns0boycSeHNAFOgBIASAEgBIASAEgBIASAEgBIA9U7A9mqeqnqJaiISfZxEWNdmzekL83N0dbc4oEz6BmYLWGXy9FYngqmslVWRnmr4tGOomUtSOYWiJimBSMB/uVPdTK1Nx4A76Vp5/wC4/qq5UIPr5minf1YcMeS+wLNhbTxd/uKzVLGD4N+bOpb7erQeqj/xRW1OFOGhJ9VzqthNeyz0ln6Q0Je3FL3FRiGGPLSLG+o6hZFTqweqOzK9ta9NqMkUWF1ToZmm9jcEdQbj9PVeht3C5t3Sq8GnF+9Hhr+j2Fffp8M7y+vxN5UbexN0Zn/E8fIArylP0Lef6ldY7ln5tfI0y2w/2w83goMS2m+0uAEdySLBoOtraut9Bd7Z2yrXZm9JVG8rDzjGPAy1Kl3eSioQw85WM6Px4EkmG35LkSis+rwPo9OtLC3uPPxBJKBwVe6XKqmQFjhqEsE1JMcx9khhMcoORSFg7u26I4kTpbdACa8jVSItEu8EsiwbZe0PiJ0IAmhCgyyKLmjpGuBa4AtcCHA5ggixBHEWWeozdQhzPDu0vsylonOqKZrpKQ+I2zdDn7L+JZyf7+ZxtHTi8nnCRISAEgBIASAEgBIASAEgBIASAEgD6T7BMI7nDe+I8VTI6TMWO4z92zqMnOH8yaE2egVDrZqyKKJsraiUO6/H0KuisGackypqXEa5q6Jjm8AL/JWrJQ8EJKTk0NQT5kT5DyVUq2OKNNO2UuZX1Vdu63HoVlndRR17XZcp8MeaKWrxfkfgufVulLgz09nsdxw5L4menpmvcSSLXuMueqphd1IZ3WdCpsalUeZcPeTw4ZDzv7gqp3VaXGTLqWyranwj8gyGlazNosqu0b4myNGEPZQSyocFJTG6aYRHWA6hSyVOk1wJNxjkYRH1kDzYYDoo7pONZriBSUTgouJdGomJjyMiFBolxH24hIBBwKZFoeAgDWtxGO9mu3jybn8l679RT4J58D4/LZtwlvTjurq9AmN5P3bdVam3yMk4Ri8Zz4f3DKZRkOBdUcnJZ5I205F3TNyz9brNI3wMPtf2SUFW174o/s85Di10VmxufY27yOxFr2vu2PmoFp8zVlM+KR8UjS17HFjmnUOabEe8IAhQAkAJACQAkAJACQAkAJAFpsxgr6yqhpowbyva0kfdZfxvPk1tz6IA+vqalZDEyKNu6yNjWMA4NaLAe4KaK5MBqZ7K6McmScmipqZVoijFOQG+fgVYolLmDuUisaSgCN7goSa5l1OMuQLPIzisdVUnxOvbQuc+qVlVDE5cytCH7WektKt1HGclPUYcDmwg9Fhqpw4o9Da3TnzyAvp3t4KtTRvUkxNncOaejHgnZWc0boYJWuaeKMtER4BGhTUwaRKyocFLeIOmmEMrAdQnkqdLoddGx3kloCcokDqMj2VFxLFV6g80B6FR4FikmDmQjIjNA8Gnw6UkARQ7rfxPy9zRn77L0tCbaxThhdX9j5jtGjGEnK6rb0ukdfNvTyyW8bD951z7h7luUXzZwJ1It+qsLzYVC4JMjF6l7htlmqZOhRwXsLxwWZo3xaJt5RJ5PHO27s8M29iNIy72tvURjV7WiwkaPxADMcQL6jNEjwNACQAkAJACQAkAJACQA+KMuIa0EkkAAC5JOQAHEoA+k+yLYH9nxGoqGj7VK2xGvdRk33AfxGwLj5W4XLSItm8qJclZFFE5aFFWyg5LTGJhnPoU8+9wP5hWbj/aytVoPSpH6MFfM4e031H6JdpKPtLyJKhRqf5c9ekvuvsjjKlpyBz5aH3FNV4vmKdhVgstadVqvNZQ/vQpdoir9NN8CCorom+3I1vHMhS9pZEqc4vgDzwMeAWm4IuCCslehGWjR1rO9q0nx8zPPoHyS9zE4m/tng0cbkaefVYXQoWcHdXD9VcF1fJd/wCckdy421WuIfpqKSk+Mui+/f073o/EoI4X7kMm+ABe3Aiw4ZeizupXvLV1rqHZyT9XOmY9McdOTfEnsWat7rsaPrQftY13X1zw7mCisHFcpxPa7nQeHMcrFQqtZUX5MzyuKUHhzWfFfcY+jaVB5i8PQujVUllPKIHUZGhT3ie8hoa9qeR6Ejag8QjQWCVsrT5IDBI3yKMiwSMlI4p7xFwTJxUg5OCeUyvs2uA0xNOhCW6hqTXI1UTLBeyisI+L1ZuUssepFZLCoslEsaaXhw4qmSNUHyLqnnsPr3LO1k3RlgNjlFrkjLU8PMqtovjLJ5Ztt22RQudDQMbO4XBmcf3IP8ABvJ1yHVVlx4LiNY6aV8rw0OkcXkMaGtu43O61uQCAB0AJACQAkAJACQA6KMuIa0EucQAALkkmwAHEoA+jOy/swbQWqqrdfVW8LRmyEH8J4yc3cNBzLSItnoc09lYolEplHjeORU7d+V27c7rRxc7WzRxKvhTcnhFDll6GXNRV1XiZaCI5tJ8UjhwPILl7Q2/aWMnSSc5riuCT739smq32XKt60tEd/wALNOck8rzzLivO1PTC8b9SEUvDP1OnHZFBLXLB6nApYRvwTONsy1xu0+h+a3WHpdKU1G6isPnHRr3Ga52NBx/p8SL9oRuhMj2WsbObbMOva2a9fVjTxrquKOJSdelP+nLBSYFMah4jmle3ecQ1rNNTlcnIWHmsW05VbK1dW3hF4y3vN6LTgv8ApG+hUV1VSqS46LCSz44XxepYYls211RHDGDu233uNzax1Pny87Lj7P8ASKasatzcvMlJKKwlrjRLHm+41V7BdtGnSWE1qdx3D5KUEwvsx2QBzs7mL8cvz6T2NtaW006NTSotVJLTHevzz4zrUYWb38JwejT4+KYNh2zcrI7zVAiDv/kdZzrm9nadbG60V/SKl2nZ21J1pR1yllLllaN+/wCJmhs943pyUE+X34CxLBpKdhc0tc0iwd5nTPiqrLaVttOt2UoShU6ZbTxxT5ryN0atzs+nmDUo+CTXR95PsxgLZ4d+Rzrh27keQF/iSqtv7Zns+vCjQhH2cvKzxb+xVY06lzCVSpUnx/kw3CMCjLZt9l915ay/INB/NYdrekFylbujPd3oKUsdW8fQLTZtLNRTjnEsLP53maLd0Odc+G97eS6m0oKdxv8A8kn5o9LsGr/+BJ/scl5P7M5gjpJnlpkAJPg3gLcLNy4nNaa1tbW1kq0qTlzeHhpY1fHgscDgVdrXkr2VOnV3VlpJpNceHDJYYnRSQN3pGAjP2DmbC+QPRc6zVltByjaykpJZ3ZJY80b3tu8tnH9RGLi3jMcp+XAF3bgHdcAeJBt7wrZ7MqqThCcZNcUms+TNlD0mt5JOpGUU+bWV5rI0x8bA9FhqU505OE1hrkd6hc068FUpvKfMQHkVEuydCBiLkAc70c0Bg3C9sfDRr5ANTZRckuJZClObxFEE+JMYNc+XHy6Kipcwgss32uzK1d6LTry/PlzDKCR58T8hwbx9UoqU/Wlp3Eq8qNF7lJ5fN/b88OpbQzn65qTiZ4zZjO27EposPYxhc1s8u5I4G3hDC7cJGm8R6hpHNZap0Ldc2eBKk1HEAbTYPs5q8Re07joqfIvme0gEcogfbd0yHFAGnx/sJrIyXUk0c7NQ1/7uXpxaetx0QBgcT2OxCA2loZ2+Yjc5p6PaC0+hQAAMFqb2+zTX5d0+/usgBmIYXPBu9/Tyxb4JZ3kb2bwGpbvAX9EACIAPwLFH0s8dRG1hfE7faJG7zbgZXH1mgD6k2K2wixKmE8Y3Xjwyx3uWPt8WnUH8wVOOpVPQNq5FoijFUZ51t/RukIcSSPufwuGo9frRXQe7JPkVRnlY5gOz20xgjET27w3hbO26CfHlx5geZXI216Nq+rdvTluvGuntNezzXg30OjY7T7OG61nXy6/c3FYC6J246xLTuuHS4IXzi3caVeLqxyk1lPueqPRzzKD3WZnZLEJXPeJHudG2MueXm+64EcTzG9l5L2PpPYW8KUJUYJTc0o7qxvRa6LjrjD7zk7Or1HJqb0S1zy1/7K6CJ8kcp8LIny333XuTfwtY0e0cl36l1TtY07TDnUUVmKeMJLVyb0SMCourOVbOI54+/kO/w86llZU33gC0vAyIaDnlfW11zaW3KO0qdS03d2U04xecxba01wvcaZWU7fdqJ5UXl6YeOZuO8bu94MwWggjMuFri3v8Aivn/AGc1U7GemHh54J8HnwO7vJx3l0MNLXyS1kZnaWMD2hrToBf48LlfSbezpW2zKsLOSk3BtyT1csdOK04L65PPVKkqlxCVbT1uHJLx56lzjWCSTVLXucRC1udjn5tA1uV5rZm16FnYbsf8zeeFwTyliUn0j0/udOvbyqVXleq0teaxxS73pryAsdw2oljuG93GwWjjB8Qba287gCursralha1uzcnOpU9upjTL4JZ13e/HR46Ybm1r1Y7ySUY8I93fyz+ZLfZJ7BStz0Lt6+WZdzPkQuN6VU6stpvK4qO7jXTHTxybNlSirZa83nzLbdawOOg8TneupXnU51pRitXokvkvidD1Ypv3mGNGywlkJDZpLRtvu3BPtvd91q+lqvLf/S0YqVSlTW/LG9wXsxjlZbfPKRwI1Jqm5ObjTnJtRTxnPOT4pacA6rwiOBwmhs58W65zdfCb5X9D8FzLPa9xex/S3ccRq5hGSWGnpy4Nar7k69pCh/VovLh6zWc5+zLTaZgkpt9uejh0Oa4/o9N2m1Y05vm4P5fM2bRj21o5R6J/U5jNoaQMsN7dbGDlqQAT81LZa/xDbDqy9nelN+CeV9EK5zQs1TjxworxehlIyLWBuu1cT7WpKo+byews7ZW1vCiv2pL7v3sdZZ8GpM5ZGB5GmO6N0N4hdRfxKW6x9oy1r9pGt8LPEfgu7W2ilpDU8HY+i85+vW0Xx8iobXyvcMy57vZaP+I/M5BYVXqTl1b/AD8Z6B7PtaFN6KMI8W/q/otX3GowjCtzxynekOfMN6cz5+5da2tNz16msvl/fvPGbV212/8ARt1u0/Jy8ei/0+ZctK2M4KDYJAFXJF0WkHudHM0xSRtkY7JzHtDmnqDkqJQ6mynV5Iqv/KvB3nedQgE/hlna30DXgLO0boSb4lzhOwuGU5BioYQRo5ze8cOjn3Kjgnk0bQOCQHbpgN3kYDJwPRgWSn2o2dpq+EwVMe83Vrhk9jvxMdwPz0N0YDJ4Btf2P1tMXOpgaqLMjcH75o5Oj1d1bfoEYHvI8/qqOSI7ssb4zye1zT7iEhnpPYVTVLax0oa9tOYnNkcQQxxuDGBwc4HPLQX5qcE2ymtKKWp7bVfRWmJiqFHilIJGFh0PrY8CFctVgyttPKPPtqMM7k3bnYBwPEjR11OE3GWGydPEtUa3YrExNTht847N/wBNvCfmP9K+eelVh2F520V6tTX/AMv3L6+89Vs2vv0tx8Y/LkUe1mImImmjYI2FwLravLr5uPK49cui9B6NWcK8I3teTnNeqs8IJdO/H5zMG0arg3SgsLi+8vqnCRNSxMjdu7rWuafO2vz9685S2rUsdqVq1WO825Rku7PD4LHcb5W0a1tGEXjRNMjnp3wwSyVEvePcwMHLjYDmST8Fop3FPaF7RoWdFU4qW88e7LfRJLCXeVunK3pTnWnvNrC6eC8QbE8Rlo6emtbwsAeCL3s0Zc8vJaLKztdq313Kpndy3Fp4a9bj017yurVq2tCio8eD8jkWN0tZHuSWjceJ9m/83D1siWxdobLqq4tH2kV044745192fcNXlC5h2dZbrfl7mPqq6rpWXeWSMGTXG+95aHPqi2tNl7WrNRjKlPVtLG7px4rTwwKpUurWHFSXBdTK122E07hH7LXageEWtfPUn1K9DsrZWzqFTNGO9Jfulrjw4LPfx7zPf/q1TTrNLP7V7uPmabEMVgFF3ccguGtBFiDlbeOY6lcaz2Tff4x+puIervSlnKa54XF9ywTq3dD9H2VN64SxqumSGDFX1AdHfP7Pbq4EEu9R+a0XOyqOzMXHJVlLwjyXub+RXSu53OaXPca95b01NDVU8bTqxoaQNWuaACCOGi4F3Wu9k7RqVYP2m2nylFvK8TfRjSureMJclhrmmgerpY4ozS04vJKbHO5A4vfyAHBbLWvc3lxHaN88UqWq0wm+UYrm2+L1KK0KdKm7ah7U9OuFwy/cWlBunvI9WxuYwA/wsaVwr3eUaVzwlU35f+7RvoYblT5RwvgmZ3bequ9sY+6Lnq7+i9BsCl2FhVuHxm1BeC9r87iVCn+p2lSp8oLffj+346mWAcFce0HtmcOKCLSJ2VbuIBRqQcAhlU06iyN5kXFkwLfxJdp3EMvoUNPTOc4Ma3eceHDq4/QV1OEpyUYrLJXFxTo03Vqy3Yrnz8F+ZNxguDthFz4pD7TvyHIL0VraRorL1lzf2Pl+2NtVL+e7H1aa4R+r7y0Ww4g4FIeRzCSUMa1ZeYewNHmVlqPJvopRRdwvyWdo3Reg/vbmwSwS3svQlMlgo4JOQ0vTwGSOSTgmkQcsHIn6oaCLE96aQOQL9pzUt0q39RtYGvFntDuW8AfmhRCUtCtmlsLcOSvijJOQKakjop7pT2mAeV/JSSINlFtFBvxE2zZn6feHuz9EpcCVJ6mS2Or/ALNVGNx8BNs/wO0Pobe8rnbZsv11jKC9qPrR8VxXvWTs2lbsqsZcnoy97QKEOLDe28LXGoIzB+HxXF9Dq8nSq0uWkl8n9DXtaKTjNeBTYTj9ZA3uwzfHD2XDPkLgjou3e7IsL6faVotS5uLw34/mTDRvZ0ViEtOjI8bxKqkezvQcibsFvDkCMtLm/n1V9hbWdinGjDd6t6t+/wDEQq1aldb0nnp0LM1k1YQJWBsbOIyOY4Zm5WSzsrGw3+y3m5aPLX2RfVncXCXBY1RW4ls09vjhO9/LkfUf3W6FSUdabyuhVvxb3biOH1X5qAU+JzW7l+8W3va+QtxsdPRVyuLVTdacVGphrONXnvXE20NnXFSUY0XvRynx0WH38Aaqo94k7xufJcKFzKHsv4nuK2zaVVtyS96yDmlcB7XzGVlpjtGtw3mYamwbfDaivz6hGD4y+ndvtzIFhfgLEWsRnkV0J3NtdUHRuU2njOM8nlcNTzdbZNelV37fHdnj784DqrGzKHPaNxwGZaLX65lFOpbWlu6dGbl/FSe9juXRFdLZl1cV1KtDC/c1p4eOp3Z3aE07y9w33G4z03SWnhx8PxUb+lbbTto0atTGGnp1w1z8SH6Sva1nUpU8rDXXTOc6G32QxBsomkJA3379r523baHPgvL+k1g6EbanTTcYxcc4573zeS3ZlbflVlLRt5x7jM1tUJJXvJ9px917D4LrXNNW9Gjar9kdf90tWd/0cpb8at2/3ywv9scpfHPkQ7oWLJ6Q53YUsiF3YUiOp0RjmjAsseIxzRgW8anCcPbE3m46nj/ZeltLWNCOnHqfK9sbWq31TMniK4IPWw4wkAJABEJsoSLIFlRv4lUyRqpvUsPtPD681VumjtCaOaw8yotZLFPCJDN+nrxS3SW+dE3Hl9FLd5D3+ZDPN4rfXNSjHQrlPU4yp4/Xmm4iUztRPZEYjnPBW1M9jf681bFGacsaj/tNwlu6jdTQBqJOKtiiicgR7lYkUNkW8ngjkjkF1FoshLGphMTwKUzDu2+ySLkZFh0BPrzVUKjpyOpDEolzheCWf3k7993Budr8zxPQ3U41cLCwl0WhTW3n9y+jYwG4a0HmAAfepKSMUoSRBV0THXO63ePGwv71XVgpI0WteVKSzwM1Xzyxm1zZcS4bg8M97s+hRuIb0QRmOyN4rKqzi8o6c9kUamkloGQY9G7/ADIm3OrgBf1Wj9RCqt2qsnMnsKrbS7S1m13DpzCcw248tViq2jWtOWUb7a6qt7lZYfwBbU5+8W9Vk/qLkdL+qhfs+N2kjT1sjtZLkRdR/uic/ZFh4Q23lZSVfPEI1IJYxgDqsJJHhaAb8vhkrYV8PLZXWpwqRxHCBaejna4AEgdQQBxsF2Ke2pxjh4f55HnKvo1SqT0zH4+XMNdTG+9c3yuL5ZcQuZWrurNzlxZ6aztoW1KNKGcJYX51fM40lVGod39kYDBKyYFAsD7BCYsHLKW8LdN1kAvZaJHxHWTGRu3s+HDzUU97UnOHZ6PiSKZUdCAJGKLJoLjl5KDRbGROyZQ3SxTJYp9T6D81FosUuYpan4D+6FEHPXBL9p0HqVHdJufIHlqb2Pnb81NR5FMqmdSIVOqluke0HzVNwkojlUyAy1Fx0T4Ma9ZYORT8OBU8FWcZRxz1JIqbIiUyI0oBDSUElpqgSoH9D+R81nqI6FvLmvevr4dSufVFpsSsjqbrO1C2VRZQ5mI801WIy2e1wRKMSHFP9R1Kv8MfGKBqyVkgsVlryjUWGdXZ9GrbS3olHPRNuuROLiz2VGv2iyDPouSjkvyM7lw0uFJSaIyjGXFEboyhvJKKSWENMZQSOtle3Rx96W6nxIuMXyJmYlIPvX6qDpRIOjF8ghmLni0FR7FcmRdDoStrmHhZPdaDckiZjmFJpilGXIeYGHiFHeZHelzQz9ng6I7RoTqtHDQkcVJVMklVTG/Z3J7yH2iP/9k=',
      education: '?'
    },
    {
      name: '?',
      role: language === 'en' ? 'Director of Student Services' : language === 'kr' ? '학생 서비스 디렉터' : '学生服务总监',
      bio: language === 'en'
        ? '?'
        : language === 'kr'
        ? '?'
        : '?',
      image: 'https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg',
      education: '?'
    },
    {
      name: '?',
      role: language === 'en' ? 'Academic Director' : language === 'kr' ? '학업 디렉터' : '学术总监',
      bio: language === 'en'
        ? '?'
        : language === 'kr'
        ? '?'
        : '?',
      image: 'https://agreatdream.com/wp-content/uploads/2012/04/question-mark.jpg',
      education: '?'
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
