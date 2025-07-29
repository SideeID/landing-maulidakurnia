import React from 'react'
import { Pattern } from '../common/Pattern'
import Navbar from '../layout/Navbar'

export default function HeroSection() {
    return (
      <section
        id='home'
        className='relative min-h-svh bg-gradient-to-t from-sky-50 to-slate-white '
      >
        <Pattern />
        <header className='z-10 h-svh flex flex-col items-center justify-start gap-8 p-6 pt-10 text-center'>
          <Navbar />
          <div className='z-10 flex flex-1 h-full flex-col justify-center items-center gap-4'>
            <img
              data-aos='zoom-in'
              src='./logo-compressed.png'
              alt='logo'
              width='200'
              height='200'
              className='w-80 lg:w-96 drop-shadow-xl z-10'
            />

            <div
              data-aos='fade-up'
              className='flex flex-col  gap-3 items-center mt-4 sm:mt-8'
            >
              <h1 className='text-4xl font-bold text-sky-700'>
                <strong>PT. Maulida Rafa Kurnia</strong>
              </h1>
              <p className='max-w-xl text-gray-600 text-sm'>
                Selamat datang di landing page resmi PT. Maulida Rafa Kurnia,
                tempat berkumpulnya para profesional dan penggemar teknologi
                untuk berbagi pengetahuan, pengalaman, dan inovasi. Bergabunglah
                dengan kami untuk menjelajahi dunia teknologi yang penuh
                inspirasi dan peluang.
              </p>
              <div className='flex gap-4 pt-4 text-sm w-full'>
                <a
                  href='#testimony'
                  className='flex-1 whitespace-nowrap bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-6 py-3 transition'
                >
                  Lihat Testimoni
                </a>
                <a
                  href='#product'
                  className='flex-1 whitespace-nowrap border-3 border-dashed border-sky-200 bg-white  text-sky-400 hover:bg-sky-50 font-semibold rounded-lg px-6 py-3 transition'
                >
                  Lihat Produk
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
}