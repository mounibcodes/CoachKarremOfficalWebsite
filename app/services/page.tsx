import Link from 'next/link';

const services = [
  {
    id: 'conseil',
    icon: '🎓',
    title: 'Study Abroad Counseling',
    tagline: 'Personalized guidance to define your study project',
    description: '1:1 support to define a realistic study abroad project tailored to your profile. We analyze your goals, constraints, and aspirations to identify the best options.',
    benefits: [
      'In-depth profile and goals analysis',
      'Personalized plan with detailed timeline',
      'Curated list of programs and destinations',
      'Advice on admission strategies'
    ],
    audience: 'High school & university students, young professionals, parents',
    cta: 'Request a consultation',
  },
  {
    id: 'candidature',
    icon: '📝',
    title: 'Application & Admission Support',
    tagline: 'Comprehensive support for your applications',
    description: 'Detailed support in collecting documents, completing applications, and aligning with university requirements. We help you prepare complete and competitive applications.',
    benefits: [
      'File verification & review',
      'Submission assistance',
      'Automatic deadline reminders',
      'Support communicating with institutions'
    ],
    audience: 'Students who have selected their programs and are ready to apply',
    cta: 'Start my application',
  },
  {
    id: 'orientation',
    icon: '🧭',
    title: 'Educational & Career Orientation',
    tagline: 'Find the academic path that fits you',
    description: 'Help students choose the right academic path based on their interests, skills, and career goals. Ideal for high school students and those considering a change in direction.',
    benefits: [
      'Profile and interest assessment',
      'Program matching',
      'Career orientation advice',
      'Support for major academic decisions'
    ],
    audience: 'High school students, students changing direction, young people unsure of their path',
    cta: 'Request guidance',
  },
  {
    id: 'preparation',
    icon: '🌐',
    title: 'Language & Academic Preparation',
    tagline: 'Strengthen your skills to succeed',
    description: 'Language preparation (English/French) and academic skills support needed to succeed in an international environment. We help you reach required proficiency levels.',
    benefits: [
      'Language test preparation (TOEFL, IELTS, DELF)',
      'Academic skills strengthening',
      'Writing & communication workshops',
      'Ongoing level improvement support'
    ],
    audience: 'Students needing to improve language or academic skills',
    cta: 'Improve my skills',
  },
  {
    id: 'administratif',
    icon: '📋',
    title: 'Administrative & Visa Guidance',
    tagline: 'Understand and navigate administrative procedures',
    description: 'High-level assistance to understand administrative procedures (enrollment, key documents, deadlines). We guide you through processes but do not provide legal immigration representation.',
    benefits: [
      'Comprehensive administrative guide',
      'Understanding processes and timelines',
      'Support preparing administrative documents',
      'Pre-departure guidance'
    ],
    audience: 'Admitted students or applicants needing administrative support',
    cta: 'Need administrative help'
  },
  {
    id: 'ateliers',
    icon: '🎤',
    title: 'Workshops & Information Sessions',
    tagline: 'Learn from experts and the community',
    description: 'Événements réguliers expliquant les procédures, documents requis, erreurs courantes à éviter, et meilleures pratiques. Sessions interactives avec opportunités de poser vos questions.',
    benefits: [
      'Sessions régulières sur différents sujets',
      'Conseils pratiques et astuces d\'experts',
      'Échanges avec la communauté d\'étudiants',
      'Ressources et guides téléchargeables'
    ],
    audience: 'Tous les étudiants et parents intéressés par les études à l\'étranger',
    cta: 'Voir les prochains ateliers'
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Nos Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Un accompagnement{' '}
            <span className="text-[#ff8c42]">complet</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            De l'orientation initiale à la préparation au départ, nous vous accompagnons dans toutes les étapes de votre parcours d'études à l'étranger.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <section 
              key={index} 
              id={service.id}
              className="scroll-mt-24"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-4 py-1 rounded-full font-bold text-xs mb-4">
                    {service.tagline}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#2d0f47] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-black text-lg text-[#4a1a6b] mb-3">Bénéfices :</h3>
                    <ul className="flex flex-col gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(107,58,143,0.2)]">
                    <p className="font-semibold text-sm text-gray-600 mb-1">Pour qui ?</p>
                    <p className="font-medium text-gray-700">{service.audience}</p>
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-6 py-3 rounded-full font-black transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    {service.cta} →
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-12 aspect-square flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
                    <div className="text-9xl opacity-50">{service.icon}</div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white text-center shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Prêt à commencer ?</h2>
          <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans votre parcours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Prendre rendez-vous
            </Link>
            <Link 
              href="/etudes-a-l-etranger" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-black text-lg transition-all"
            >
              En savoir plus sur les études à l'étranger
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}

