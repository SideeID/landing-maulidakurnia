import React from 'react';
import {
  PiStarLight,
  PiStarHalfLight,
  PiCrownLight,
  PiCalculatorLight,
  PiArchiveLight,
  PiReceiptLight,
} from 'react-icons/pi';

export default function ProductSection() {
  const products = [
    {
      icon: <PiStarHalfLight className='text-blue-500' />,
      title: 'Paket Standar',
      desc: 'Solusi dasar untuk manajemen meter dengan fitur pembacaan meter yang akurat dan mudah digunakan.',
      features: ['Baca Meter'],
      image: 'https://placehold.co/300x200/3B82F6/FFFFFF?text=Paket+Standar',
      color: 'bg-blue-100 border-blue-300',
    },
    {
      icon: <PiStarLight className='text-green-500' />,
      title: 'Paket Basic',
      desc: 'Paket lengkap dengan sistem billing dan pembayaran mobile untuk kemudahan transaksi.',
      features: ['Baca Meter', 'Billing Sistem', 'Mobile Payment'],
      image: 'https://placehold.co/300x200/10B981/FFFFFF?text=Paket+Basic',
      color: 'bg-green-100 border-green-300',
    },
    {
      icon: <PiCrownLight className='text-purple-500' />,
      title: 'Paket Full',
      desc: 'Solusi komprehensif dengan fitur lengkap termasuk akuntansi SAK-EP dan manajemen inventory.',
      features: [
        'Baca Meter',
        'Billing System',
        'Mobile Payment',
        'Akuntansi SAK-EP',
        'Inventory',
      ],
      image: 'https://placehold.co/300x200/8B5CF6/FFFFFF?text=Paket+Full',
      color: 'bg-purple-100 border-purple-300',
    },
  ];

  return (
    <section id='product' className='text-center pt-4'>
      <h2 className='text-4xl font-bold mb-4'>Produk Kami</h2>
      <p className='mb-12 text-gray-600'>
        <b>PT. Maulida Rafa Kurnia</b> menyediakan berbagai paket solusi
        perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan bisnis
        Anda. Pilih paket yang sesuai dengan skala dan kebutuhan perusahaan.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {products.map((product, i) => (
          <div
            key={i}
            data-aos='fade-up'
            data-aos-delay={i * 150}
            className={`relative p-6 border border-gray-200 rounded-2xl text-left transition-all duration-200 bg-white hover:scale-[1.02] group`}
          >
            {/* Border wrapper that spins on hover */}
            <div
              className={`absolute -top-6 w-14 h-14 flex items-center justify-center mb-4`}
            >
              <div
                className={`absolute w-full h-full border-2 border-dashed rounded-full ${product.color} group-hover:animate-spin-slow`}
              ></div>

              {/* Icon tetap diam */}
              <div className='text-3xl z-10 '>{product.icon}</div>
            </div>

            {/* Product Image */}
            <div className='mt-8 mb-4'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-32 object-cover rounded-lg'
                loading='lazy'
              />
            </div>

            <h3 className='text-xl font-semibold mb-2 text-gray-800'>
              {product.title}
            </h3>
            <hr className='my-3 border border-slate-200' />
            <p className='text-sm text-gray-600 mb-4'>{product.desc}</p>

            {/* Features List */}
            <div className='space-y-2'>
              <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                Fitur Termasuk:
              </h4>
              <ul className='space-y-1'>
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center text-sm text-gray-600'
                  >
                    <span className='w-2 h-2 bg-sky-500 rounded-full mr-2'></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
