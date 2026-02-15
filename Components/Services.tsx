import Link from 'next/link';

const services = [
  {
    icon: '🎓',
    title: 'Study Abroad Counseling',
    description: 'Personalized 1:1 guidance to define a realistic study project (country, field, type of institution).',
    benefits: ['Personalized Plan', 'Program List', 'Detailed Timeline'],
    link: '/services#conseil'
  },
  {
    icon: '📝',
    title: 'Application & Admission Support',
    description: 'Support in document collection, application completion, and alignment with university requirements.',
    benefits: ['Verified Files', 'Submission Assistance', 'Automatic Reminders'],
    link: '/services#candidature'
  },
  {
    icon: '🧭',
    title: 'Educational & Career Orientation',
    description: 'Help students choose the right academic path, for high school students and students seeking reorientation.',
    benefits: ['Profile Assessment', 'Program Matching', 'Career Counseling'],
    link: '/services#orientation'
  },
  {
    icon: '🌐',
    title: 'Language & Academic Preparation',
    description: 'Language preparation (English/French) and support for necessary academic skills.',
    benefits: ['Language Tests', 'Academic Preparation', 'Key Skills'],
    link: '/services#preparation'
  },
  {
    icon: '📋',
    title: 'Administrative & Visa Guidance',
    description: 'High-level help understanding administrative procedures (enrollment, key documents, deadlines).',
    benefits: ['Administrative Guide', 'Process Understanding', 'Continuous Support'],
    link: '/services#administratif'
  },
  {
    icon: '🎤',
    title: 'Workshops & Information Sessions',
    description: 'Events explaining procedures, documents, and common mistakes to avoid.',
    benefits: ['Regular Sessions', 'Practical Tips', 'Community Exchanges'],
    link: '/services#ateliers'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-16 bg-gradient-to-b from-white to-gray-50">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit">
          Our Services
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#2d0f47] tracking-tight leading-tight">
          Complete{' '}
          <span className="text-[#ff8c42]">Support</span>{' '}
          at Every Step
        </h2>
        <p className="text-xl font-medium text-gray-600 max-w-3xl">
          From initial orientation to departure preparation, we accompany you through every step of your study abroad journey.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link 
            key={index}
            href={service.link}
            className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-[#6b3a8f] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.28)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] transition-all flex flex-col gap-6"
          >
            <div className="w-full h-40 rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src={`https://source.unsplash.com/collection/190727/800x600?sig=${index}`} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-2xl font-black text-[#2d0f47] group-hover:text-[#4a1a6b] transition-colors">
              {service.title}
            </h3>
            <p className="font-medium text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <ul className="flex flex-col gap-2 mt-auto">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-semibold text-[#4a1a6b]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42]"></div>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-[#4a1a6b] font-bold text-sm group-hover:gap-3 transition-all">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Why Choose Qoodwa */}
      <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.6)]">
        <h3 className="text-3xl md:text-4xl font-black text-center mb-8">Why Choose Qoodwa?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Multidisciplinary team with expertise in international education systems',
            'Personalized guidance and continuous follow-up',
            'Deep understanding of Algerian students\' context and goals',
            'Strategic location in Bab Ezzouar, near transport and business hubs',
            'Proven methodology and transparent processes',
            'Commitment to excellence and professional ethics'
          ].map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-6">
        <Link 
          href="/services" 
          className="bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
        >
          Discover All Our Services
        </Link>
      </div>

    </section>
  )
}

