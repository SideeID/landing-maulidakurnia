import Image from 'next/image';
import {
  PiLightbulbFilamentDuotone,
  PiSlideshowDuotone,
  PiUsersDuotone,
} from 'react-icons/pi';

import Illust from '@/assets/social.svg';

export default function AboutSection() {
  const companyHighlights = [
    {
      icon: <PiUsersDuotone className='text-sky-500' />,
      highlight: 'Tim Profesional',
      description: 'yang berpengalaman',
    },
    {
      icon: <PiSlideshowDuotone className='text-green-500' />,
      highlight: 'Solusi Inovatif',
      description: 'disesuaikan kebutuhan klien',
    },
    {
      icon: <PiLightbulbFilamentDuotone className='text-yellow-500' />,
      highlight: 'Teknologi Terbaru',
      description: 'untuk efisiensi maksimal',
    },
  ];
  return (
    <section id='about' className='pt-12 z-10'>
      <div
        data-aos='fade-right'
        className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
      >
        {/* Left Text */}
        <div>
          <h2 className='text-4xl font-bold mb-6'>
            Tentang Kami
          </h2>
          <p className='sm:text-lg mb-4'>
            <b className='font-bold text-sky-500 underline-offset-4'>
              PT. Maulida Rafa Kurnia
            </b>{' '}
            adalah perusahaan yang bergerak di bidang <b>konsultasi IT</b> dan{' '}
            <b>pengembangan perangkat lunak</b>. Kami membantu bisnis dalam
            mengadopsi teknologi terbaru untuk meningkatkan efisiensi, keamanan,
            dan skalabilitas operasional.
            <br />
            <br />
            Dengan <b>tim profesional yang berpengalaman</b>, kami menghadirkan
            solusi inovatif yang disesuaikan dengan kebutuhan klien. Percayakan
            transformasi digital perusahaan Anda kepada kami!
          </p>

          <div className='space-y-3 text-base'>
            {companyHighlights.map((highlight, index) => (
              <div key={index} className='flex items-start gap-3'>
                <span className={`${highlight.iconColor} text-xl`}>
                  {highlight.icon}
                </span>
                <span>
                  <strong>{highlight.highlight}</strong> {highlight.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-aos='fade-left' className=''>
          <Image
            src={Illust}
            className='-rotate-y-180 hidden md:block'
            alt='preview'
            width={500}
            height={500}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}
