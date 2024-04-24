import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import ImageA from '@/images/resources/servers-worldwide-stream-fastest-vpn-man-headphones-md-ar.webp'
import ImageB from '@/images/resources/phone-auto-connection-servers-protected-md-ar.webp'
import ImageC from '@/images/resources/no-logs-policy-girl-laptop-nordvpn-md-ar.webp'

const resources = [
  {
    title: 'سرعة واستقرار الاتصال بالإنترنت. استمتع بتصفح سريع ومستقر دون تقطيع.',
    image: function FigmaImage() {
      return (
        <div className="absoute inset-0 flex items-center justify-center">
          <Image src={ImageA} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'تشفير عسكري لبياناتك. حماية فائقة مع تقنية التشفير AES 256-bit.',
    image: function FigmaImage() {
      return (
        <div className="absoute inset-0 flex items-center justify-center">
          <Image src={ImageB} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'حافظ على خصوصيتك وبقائك مجهول الهوية. لا تترك أي أثر على الإنترنت.',
    image: function FigmaImage() {
      return (
        <div className="absoute inset-0 flex items-center justify-center">
          <Image src={ImageC} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="benefits-title">
        الفوائد الرئيسية
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        تجربة تصفح فائقة السرعة
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        استمتع باتصال سريع وموثوق به دون انقطاعات، حتى خلال البث المباشر للفيديوهات.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h48 overflowhidden rounded2xl shadowlg sm:h60 lg:h40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
