import {
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
} from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Hanif Kurniawan',
    role: 'CEO / Founder',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/1.svg',
  },
  {
    name: 'Vani',
    role: 'Head of Design',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/3.svg',
  },
  {
    name: 'Adit',
    role: 'Project Manager',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/4.svg',
  },
  {
    name: 'Rara',
    role: 'Business Development',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/2.svg',
  },
  {
    name: 'Zaki',
    role: 'Lead Backend Developer',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/6.svg',
  },
  {
    name: 'Ayu',
    role: 'Frontend Developer',
    github: '#',
    linkedin: '#',
    avatar: '/avatars/founders/5.svg',
  },
];

export default function TeamSection() {
  return (
    <section className='text-center pt-4'>
      <h2 className='text-3xl font-bold text-gray-800 mb-4'>
        Tim <span className='text-sky-500'>Profesional</span>{' '}
        <span className='font-extrabold uppercase'>
          PT. Maulida Rafa Kurnia
        </span>
      </h2>
      <p className='text-gray-600 mb-8'>
        Dengan dedikasi dan keahlian, tim kami siap menghadirkan solusi
        teknologi terbaik untuk kebutuhan bisnis Anda.
      </p>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
        {teamMembers.map((member, index) => (
          <div
            data-aos='fade-up'
            data-aos-delay={index * 50}
            key={index}
            className='rounded-4xl px-5 pt-2 pb-0 border border-slate-200 transition-all text-left bg-white'
          >
            <div className='flex items-center space-x-4'>
              <Image
                src={member.avatar}
                alt={member.name}
                loading='lazy'
                width={112}
                height={130}
                className='h-[130px] w-[112px]  object-contain object-bottom'
              />

              <div>
                <h3 className='text-xl font-semibold flex items-center gap-1'>
                  {member.name}
                  <FaCheckCircle size={16} className='text-sky-500' />
                </h3>
                <p className='text-gray-600 text-sm'>{member.role}</p>
                <div className='flex justify-start mt-3 space-x-2 '>
                  <a
                    href={member.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Github ${member.name}`}
                  >
                    <FaGithub className='text-gray-700 hover:text-sky-500 text-xl' />
                  </a>
                  <a
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Linkedin ${member.name}`}
                  >
                    <FaLinkedin className='text-gray-700 hover:text-sky-500 text-xl' />
                  </a>
                  {/* <a
                    href={member.telegram}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Telegram ${member.name}`}
                  >
                    <FaTelegramPlane className='text-gray-700 hover:text-sky-500 text-xl' />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
