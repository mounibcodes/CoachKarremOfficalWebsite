import Link from 'next/link';

const jobOffer = {
  title: 'Conseiller Commercial Junior',
  location: 'Bab Ezzouar, Daïra Dar El Beïda, Alger',
  contract: 'CDD / Stage',
  education: 'Bac+2 à Master',
  description: 'Nous recherchons un conseiller commercial junior passionné par l\'éducation et le conseil en études à l\'étranger. Vous serez responsable de la prospection, de l\'acquisition de clients et du suivi des dossiers étudiants.',
  responsibilities: [
    'Prospection et acquisition de nouveaux clients',
    'Suivi et accompagnement des étudiants dans leur parcours',
    'Vente de services de conseil et d\'accompagnement',
    'Rapportage et coordination avec l\'équipe',
    'Participation aux événements et ateliers'
  ],
  skills: [
    'Excellente communication et relation client',
    'Techniques de vente et négociation',
    'Maîtrise des outils CRM',
    'Excellent niveau de français (obligatoire)',
    'Anglais (atout)',
    'Sens du service client et empathie',
    'Capacité à travailler en équipe'
  ]
};

const profiles = [
  {
    title: 'Conseiller Commercial',
    description: 'Prospection, acquisition et suivi client dans le domaine de l\'éducation internationale'
  },
  {
    title: 'Personnel Administratif',
    description: 'Gestion des dossiers, coordination administrative et support opérationnel'
  },
  {
    title: 'Conseiller Académique',
    description: 'Orientation éducative, conseil en programmes et accompagnement des étudiants'
  },
  {
    title: 'Instructeur de Langue',
    description: 'Enseignement et préparation aux tests de langue (anglais/français)'
  }
];

export default function CareersPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Rejoignez notre équipe
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Carrières &{' '}
            <span className="text-[#ff8c42]">Recrutement</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Rejoignez une équipe passionnée par l'éducation, le conseil et la mobilité internationale
          </p>
        </div>

        {/* Intro */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl font-black text-[#2d0f47] mb-6">Pourquoi rejoindre Qoodwa ?</h2>
          <div className="space-y-4 text-lg font-medium text-gray-700 leading-relaxed">
            <p>
              Chez Qoodwa, nous croyons que chaque membre de notre équipe joue un rôle essentiel dans la transformation des rêves d'études internationales en réalités. Nous recherchons des personnes passionnées par l'éducation, le conseil et l'accompagnement des jeunes talents.
            </p>
            <p>
              Nous offrons un environnement de travail dynamique, collaboratif et orienté vers la croissance. Si vous partagez notre mission d'apporter le changement en Algérie à travers l'éducation, nous aimerions vous connaître.
            </p>
          </div>
        </section>

        {/* Typical Profiles */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black text-[#2d0f47] text-center mb-12">Profils recherchés</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all">
                <h3 className="text-2xl font-black text-[#4a1a6b] mb-4">{profile.title}</h3>
                <p className="font-medium text-gray-700 leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Offer Example */}
        <section className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1 rounded-full font-bold text-xs mb-6">
            Offre d'emploi actuelle
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-8">{jobOffer.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black mb-4">Informations générales</h3>
              <div className="space-y-3 font-medium text-white/90">
                <div>
                  <span className="font-bold">Lieu :</span> {jobOffer.location}
                </div>
                <div>
                  <span className="font-bold">Type de contrat :</span> {jobOffer.contract}
                </div>
                <div>
                  <span className="font-bold">Niveau d'études :</span> {jobOffer.education}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-black mb-4">Description</h3>
              <p className="font-medium text-white/90 leading-relaxed">{jobOffer.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4">Responsabilités</h3>
              <ul className="flex flex-col gap-2">
                {jobOffer.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="font-medium">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-black mb-4">Compétences requises</h3>
              <ul className="flex flex-col gap-2">
                {jobOffer.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30">
            <h3 className="text-xl font-black mb-4">Comment postuler</h3>
            <p className="font-medium text-white/90 mb-6">
              Envoyez votre CV et lettre de motivation à l'adresse indiquée dans le formulaire de contact ci-dessous, en mentionnant le poste pour lequel vous postulez.
            </p>
            <Link 
              href="/contact?subject=carrieres" 
              className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Postuler maintenant →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#ff8c42] to-[#ffc947] rounded-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.4)]">
          <div className="flex flex-col px-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Intéressé par une autre position ?</h3>
            <p className="font-bold text-white/90">Contactez-nous pour discuter des opportunités</p>
          </div>
          <Link 
            href="/contact?subject=carrieres" 
            className="bg-white text-[#4a1a6b] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all hover:shadow-lg whitespace-nowrap"
          >
            Nous contacter
          </Link>
        </section>

      </div>
    </main>
  )
}

