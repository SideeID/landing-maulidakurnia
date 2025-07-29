import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: 'Apa saja layanan yang disediakan PT. Maulida Rafa Kurnia?',
      answer:
        'Kami menyediakan layanan konsultasi IT dan pengembangan perangkat lunak, termasuk sistem billing, mobile payment, dan aplikasi manajemen bisnis.',
    },
    {
      question:
        'Apakah bisa konsultasi untuk kebutuhan teknologi perusahaan kami?',
      answer:
        'Tentu saja! Tim profesional kami siap membantu menganalisis kebutuhan teknologi dan memberikan solusi yang tepat untuk bisnis Anda.',
    },
    {
      question: 'Berapa lama waktu pengembangan software?',
      answer:
        'Waktu pengembangan tergantung kompleksitas proyek. Untuk estimasi yang akurat, silakan konsultasi dengan tim kami terlebih dahulu.',
    },
    {
      question: 'Apakah ada support dan maintenance setelah aplikasi selesai?',
      answer:
        'Ya, kami menyediakan layanan support dan maintenance berkelanjutan untuk memastikan aplikasi Anda berjalan optimal.',
    },
    {
      question: 'Bagaimana cara memulai proyek dengan PT. Maulida Rafa Kurnia?',
      answer:
        'Hubungi kami melalui kontak yang tersedia untuk konsultasi awal. Kami akan membantu merencanakan solusi terbaik sesuai kebutuhan Anda.',
    },
  ];

  const toggle = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <section className='text-center pt-4'>
      <h2 className='text-3xl font-bold text-gray-800 mb-4'>
        Pertanyaan yang Sering Diajukan
      </h2>
      <p className='text-gray-600 mb-8'>
        Temukan jawaban atas pertanyaan umum seputar layanan konsultasi IT dan
        pengembangan perangkat lunak kami.
      </p>

      <div className='text-left space-y-4'>
        {faqs.map((faq, idx) => (
          <div
            data-aos='fade-up'
            data-aos-delay={idx * 50}
            data-aos-offset='20'
            key={idx}
            className='cursor-pointer last:border-0 border-b border-slate-200 pb-4'
            onClick={() => toggle(idx)}
          >
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold sm:text-lg text-gray-800'>
                {faq.question}
              </h3>
              <span className='text-sky-500 text-2xl'>
                {active === idx ? '-' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {active === idx && (
                <motion.p
                  key='content'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-gray-600 mt-2 overflow-hidden'
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
