import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-20 bg-white">
      
      {/* Header & Company Profile */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit">
            About Us
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2d0f47] tracking-tight leading-tight">
            SARL QOODWA{' '}
            <span className="text-[#ff8c42]">INTERNATIONAL EDUCATION</span>
          </h2>
          <p className="text-xl font-medium text-gray-700 max-w-xl leading-relaxed">
            Hub multidisciplinaire spécialisé dans l'éducation et le soutien aux jeunes talents dans leur parcours d'études à l'étranger. Basé à <span className="font-bold text-[#4a1a6b]">Bab Ezzouar, Alger</span>, nous accompagnons les étudiants et leurs familles dans la planification et la gestion de leurs projets d'études à l'étranger.
          </p>
          
          {/* Location Badge */}
          <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#4a1a6b]">Bab Ezzouar, Alger</span>
              <span className="text-sm font-medium text-gray-600">Daïra Dar El Beïda, Algérie</span>
            </div>
          </div>
        </div>

        {/* Mission Card */}
          <div className="flex-1 w-full">
          <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)] flex flex-col gap-6 text-white">
            <h3 className="text-3xl font-black uppercase text-center border-b-2 border-white/30 pb-4">Our Mission</h3>
            <p className="font-medium text-lg leading-relaxed">
              Innover dans l'éducation et soutenir les jeunes talents dans l'accès réussi aux opportunités d'études internationales. Nous construisons avec passion pour apporter le changement en Algérie.
            </p>
            <div className="mt-4 pt-4 border-t border-white/30">
              <h4 className="font-bold text-lg mb-2">Our Vision</h4>
              <p className="font-medium">
                Devenir une référence en Algérie pour un accompagnement structuré, éthique et efficace des études à l'étranger.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Qoodwa Idea Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-block bg-[#ff8c42] text-white px-6 py-2 rounded-full font-bold text-sm mb-6">
              <span className="sf-arabic">🫆 فكرة قدوة</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#2d0f47] mb-6">
              L'idée Qoodwa
            </h3>
            <p className="text-lg font-medium text-gray-700 leading-relaxed mb-4">
              <span className="font-bold text-[#4a1a6b]">Qoodwa</span> means <span className="sf-arabic">"قدوة"</span> — a guide and role model. This is where your journey begins. We built this hub with passion to bring change in Algeria, offering young talents the tools and support needed to succeed in studying abroad.
            </p>
            <p className="text-lg font-medium text-gray-700 leading-relaxed">
              Nous croyons que chaque étudiant mérite une chance équitable d'accéder à une éducation internationale de qualité. Notre approche combine expertise, méthodologie structurée et suivi continu pour transformer les rêves en réalité.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#4a1a6b] via-[#6b3a8f] to-[#8b5fb3] flex items-center justify-center shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-32 h-32 text-white">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 2 6 6 10 4-4 6-7 6-10 0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="2" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Approach/Methodology */}
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-black text-[#2d0f47] mb-4">
            Our Approach
          </h3>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Une méthodologie structurée en 5 étapes pour garantir votre succès
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: '1', title: 'Analyse des besoins', desc: 'Profil, notes, niveau de langue' },
            { step: '2', title: 'Matching programme', desc: 'Destination et programme adaptés' },
            { step: '3', title: 'Préparation du dossier', desc: 'Documents et candidatures' },
            { step: '4', title: 'Suivi avec institutions', desc: 'Accompagnement continu' },
            { step: '5', title: 'Préparation au départ', desc: 'Guidance pré-départ' }
          ].map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all flex flex-col gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] text-white rounded-full flex items-center justify-center font-black text-xl">
                {item.step}
              </div>
              <h4 className="font-black text-lg text-[#2d0f47]">{item.title}</h4>
              <p className="font-medium text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
        <h3 className="text-4xl font-black text-center mb-12">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🤝', title: 'Service client', desc: 'Engagement total envers la satisfaction et le succès de nos étudiants' },
            { icon: '⚖️', title: 'Éthique professionnelle', desc: 'Transparence, intégrité et respect dans toutes nos interactions' },
            { icon: '💡', title: 'Créativité', desc: 'Solutions innovantes adaptées à chaque parcours unique' },
            { icon: '👥', title: 'Travail d\'équipe', desc: 'Collaboration multidisciplinaire pour votre réussite' },
            { icon: '🇩🇿', title: 'Engagement local', desc: 'Fierté algérienne et mission de changement' },
            { icon: '🎯', title: 'Excellence', desc: 'Méthodologie rigoureuse et suivi continu' }
          ].map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(107,58,143,0.3)] flex flex-col gap-4">
              <div className="text-4xl">{value.icon}</div>
              <h4 className="font-black text-xl">{value.title}</h4>
              <p className="font-medium text-white/90">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#ff8c42] to-[#ffc947] rounded-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.4)]">
        <div className="flex flex-col px-4 text-center md:text-left">
          <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Ready to start your journey?</h4>
          <p className="font-bold text-white/90">Join over 14,000 people following us on Instagram</p>
        </div>
        <Link 
          href="/contact" 
          className="bg-white text-[#4a1a6b] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all hover:shadow-lg whitespace-nowrap"
        >
          Nous contacter
        </Link>
      </div>

    </section>
  )
}
