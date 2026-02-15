import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            About Qoodwa
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            About Us
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Hub multidisciplinaire spécialisé dans l'éducation et le soutien aux jeunes talents
          </p>
        </div>

        {/* Company Profile */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl font-black text-[#2d0f47] mb-6">Profil de l'entreprise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-black text-xl text-[#4a1a6b] mb-3">Dénomination légale</h3>
              <p className="font-semibold text-lg mb-6">SARL QOODWA INTERNATIONAL EDUCATION</p>
              
              <h3 className="font-black text-xl text-[#4a1a6b] mb-3">Secteur d'activité</h3>
              <p className="font-medium text-gray-700 mb-6">Services, éducation, conseil en études à l'étranger, développement des talents de la jeunesse</p>
            </div>
            <div>
              <h3 className="font-black text-xl text-[#4a1a6b] mb-3">Siège social</h3>
              <p className="font-medium text-gray-700 mb-2">Bab Ezzouar</p>
              <p className="font-medium text-gray-700 mb-2">Daïra Dar El Beïda</p>
              <p className="font-medium text-gray-700 mb-6">Alger, Algérie</p>
              
              <div className="flex items-center gap-3 mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a 
                  href="https://maps.app.goo.gl/DK9wKgiftHcZjaLL9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4a1a6b] font-semibold hover:underline"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-10 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
            <h2 className="text-3xl font-black mb-6">Our Mission</h2>
            <p className="font-medium text-lg leading-relaxed">
              Innover dans l'éducation et soutenir les jeunes talents dans l'accès réussi aux opportunités d'études internationales. Nous construisons avec passion pour apporter le changement en Algérie à travers l'éducation et les opportunités.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#ff8c42] to-[#ffc947] rounded-3xl p-8 md:p-10 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.4)]">
            <h2 className="text-3xl font-black mb-6">Our Vision</h2>
            <p className="font-medium text-lg leading-relaxed">
              Devenir une référence en Algérie pour un accompagnement structuré, éthique et efficace des études à l'étranger. Être reconnu comme le partenaire de confiance des étudiants et de leurs familles.
            </p>
          </div>
        </section>

        {/* The Qoodwa Idea */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block bg-[#ff8c42] text-white px-6 py-2 rounded-full font-bold text-sm mb-6">
                🫆 Qoodwa Idea
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2d0f47] mb-6">
                The Qoodwa Idea
              </h2>
              <div className="space-y-4 text-lg font-medium text-gray-700 leading-relaxed">
                <p>
                  <span className="font-black text-[#4a1a6b]">Qoodwa</span> comes from <span className="sf-arabic">"قدوة"</span> (Qudwa) — a guide, a role model, a source of inspiration. This is where your study abroad journey begins.
                </p>
                <p>
                  Nous avons construit ce hub avec passion pour apporter le changement en Algérie. Notre mission est de transformer les rêves d'études internationales en réalités tangibles, en offrant aux jeunes talents algériens les outils, l'expertise et l'accompagnement nécessaires pour réussir.
                </p>
                <p>
                  Nous croyons fermement que chaque étudiant mérite une chance équitable d'accéder à une éducation internationale de qualité. Notre approche combine expertise professionnelle, méthodologie structurée et suivi continu pour garantir votre succès.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#4a1a6b] via-[#6b3a8f] to-[#8b5fb3] flex items-center justify-center shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-40 h-40 text-white">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 2 6 6 10 4-4 6-7 6-10 0-3.5-2.5-6-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="2" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Our Space */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl font-black text-[#2d0f47] mb-6">Notre espace à Bab Ezzouar</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-medium text-lg text-gray-700 leading-relaxed mb-6">
                Notre centre est situé à <span className="font-bold text-[#4a1a6b]">Bab Ezzouar</span>, un emplacement stratégique près des transports et des centres d'affaires d'Alger. C'est ici que nous accueillons les étudiants et leurs familles pour des consultations personnalisées, des ateliers et des sessions d'information.
              </p>
              <p className="font-medium text-lg text-gray-700 leading-relaxed">
                Nous avons inauguré notre espace avec fierté, marquant le début d'un nouveau chapitre dans l'accompagnement des études à l'étranger en Algérie. Rejoignez-nous pour découvrir comment nous pouvons transformer votre parcours.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 aspect-video flex items-center justify-center">
              <p className="text-gray-500 font-medium">📍 Emplacement: Bab Ezzouar, Alger</p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section>
          <h2 className="text-4xl font-black text-[#2d0f47] text-center mb-12">Notre Approche & Méthodologie</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { 
                step: '1', 
                title: 'Analyse des besoins', 
                desc: 'Évaluation complète de votre profil académique, notes, niveau de langue, objectifs de carrière et contraintes personnelles.' 
              },
              { 
                step: '2', 
                title: 'Matching programme & destination', 
                desc: 'Sélection des programmes et destinations qui correspondent le mieux à votre profil, vos aspirations et votre budget.' 
              },
              { 
                step: '3', 
                title: 'Préparation du dossier & candidature', 
                desc: 'Support complet dans la collecte, traduction et certification des documents, remplissage des candidatures selon les exigences.' 
              },
              { 
                step: '4', 
                title: 'Suivi avec institutions', 
                desc: 'Accompagnement continu dans la communication avec les universités, suivi des statuts de candidature et gestion des réponses.' 
              },
              { 
                step: '5', 
                title: 'Préparation au départ', 
                desc: 'Guidance pour les démarches administratives finales, visa, logement, assurance et préparation à la vie étudiante à l\'étranger.' 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all flex flex-col gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] text-white rounded-full flex items-center justify-center font-black text-xl">
                  {item.step}
                </div>
                <h3 className="font-black text-xl text-[#2d0f47]">{item.title}</h3>
                <p className="font-medium text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
          <h2 className="text-4xl font-black text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Service client', desc: 'Engagement total envers la satisfaction et le succès de nos étudiants et de leurs familles' },
              { icon: '⚖️', title: 'Éthique professionnelle', desc: 'Transparence, intégrité et respect dans toutes nos interactions et processus' },
              { icon: '💡', title: 'Créativité', desc: 'Solutions innovantes et adaptées à chaque parcours unique et objectif personnel' },
              { icon: '👥', title: 'Travail d\'équipe', desc: 'Collaboration multidisciplinaire pour garantir la meilleure expérience et résultats' },
              { icon: '🇩🇿', title: 'Engagement local', desc: 'Fierté algérienne et mission de changement à travers l\'éducation et les opportunités' },
              { icon: '🎯', title: 'Excellence', desc: 'Méthodologie rigoureuse, suivi continu et amélioration constante de nos services' }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(107,58,143,0.3)] flex flex-col gap-4">
                <div className="text-5xl">{value.icon}</div>
                <h3 className="font-black text-xl">{value.title}</h3>
                <p className="font-medium text-white/90 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl font-black text-[#2d0f47] mb-6">Notre Équipe</h2>
          <p className="font-medium text-lg text-gray-700 leading-relaxed mb-8">
            Qoodwa rassemble une équipe multidisciplinaire passionnée par l'éducation et l'accompagnement des jeunes talents. Nos conseillers académiques, spécialistes en admissions, et équipe de support client travaillent ensemble pour vous offrir une expérience complète et personnalisée.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: 'Conseillers académiques', desc: 'Expertise en systèmes éducatifs internationaux et orientation' },
              { role: 'Spécialistes admissions', desc: 'Support dans la préparation et soumission des candidatures' },
              { role: 'Support client', desc: 'Accompagnement continu et réponse à vos questions' }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)]">
                <h3 className="font-black text-xl text-[#4a1a6b] mb-3">{member.role}</h3>
                <p className="font-medium text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#ff8c42] to-[#ffc947] rounded-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.4)]">
          <div className="flex flex-col px-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Prêt à commencer votre parcours ?</h3>
            <p className="font-bold text-white/90">Rejoignez notre communauté de plus de 14 000 personnes sur Instagram</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-white text-[#4a1a6b] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all hover:shadow-lg whitespace-nowrap"
          >
            Nous contacter
          </Link>
        </section>

      </div>
    </main>
  )
}

