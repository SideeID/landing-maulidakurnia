import Head from 'next/head'
import { Plus_Jakarta_Sans } from 'next/font/google'
import HeroSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import ProductSection from '@/components/sections/Product'
// import TestimonialSection from '@/components/sections/Testimonial'
import FoundersSection from '@/components/sections/Founder'
import FAQSection from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. Maulida Rafa Kurnia - Landing Page</title>
        <meta name="description" content="Landing page for PT. Maulida Rafa Kurnia" />
      </Head>
      <main className={`${plusJakarta.className} relative bg-slate-50 `}>
        <HeroSection />
        <div className='max-w-6xl mx-auto px-6 pb-8 flex flex-col gap-18'>
          <AboutSection />
          <ProductSection />
          {/* <TestimonialSection /> */}
          <FoundersSection />
          <FAQSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
