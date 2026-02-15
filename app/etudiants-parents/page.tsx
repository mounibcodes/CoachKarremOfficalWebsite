import Link from 'next/link';

const checklist = [
  {
    time: '12 mois avant',
    items: [
      'Recherche approfondie de programmes et destinations',
      'Évaluation de votre niveau de langue',
      'Préparation linguistique si nécessaire',
      'Établissement d\'un budget réaliste',
      'Recherche de bourses et financements'
    ]
  },
  {
    time: '9 mois avant',
    items: [
      'Choix final des destinations et programmes',
      'Préparation des tests de langue (TOEFL, IELTS, DELF)',
      'Début de la collecte des documents',
      'Contact avec les universités pour informations',
      'Préparation des lettres de recommandation'
    ]
  },
  {
    time: '6 mois avant',
    items: [
      'Soumission des candidatures',
      'Suivi régulier des statuts de candidature',
      'Finalisation de tous les documents',
      'Préparation administrative (traductions, certifications)',
      'Recherche de logement'
    ]
  },
  {
    time: '3 mois avant',
    items: [
      'Finalisation des inscriptions après admission',
      'Démarches de visa',
      'Réservation du logement',
      'Souscription d\'une assurance santé',
      'Préparation au départ (bagages, documents finaux)'
    ]
  }
];

export default function StudentsParentsPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Pour vous
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Étudiants &{' '}
            <span className="text-[#ff8c42]">Parents</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Un accompagnement adapté à chaque profil, de l'orientation à l'admission
          </p>
        </div>

        {/* Students Section */}
        <section id="etudiants" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">🎓</div>
              <h2 className="text-4xl font-black">Pour les Étudiants</h2>
            </div>
            
            <p className="text-xl font-medium leading-relaxed mb-8 text-white/90">
              Nous vous accompagnons de l'orientation initiale jusqu'à l'admission, en vous donnant les outils et la compréhension nécessaires pour réussir votre parcours d'études à l'étranger.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-black mb-4">Ce que nous vous offrons :</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Analyse approfondie de votre profil et de vos objectifs',
                    'Matching avec les meilleurs programmes et destinations',
                    'Préparation complète de votre dossier de candidature',
                    'Suivi continu et support personnalisé',
                    'Guidance dans toutes les démarches administratives',
                    'Préparation au départ et à la vie étudiante à l\'étranger'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-black mb-4">Notre approche :</h3>
                <p className="font-medium leading-relaxed mb-4 text-white/90">
                  Nous croyons en votre autonomie et en votre capacité à comprendre et maîtriser les processus. Notre rôle est de vous guider, de vous informer et de vous soutenir à chaque étape, tout en vous donnant les connaissances nécessaires pour prendre des décisions éclairées.
                </p>
                <p className="font-medium leading-relaxed text-white/90">
                  Vous serez impliqué dans chaque décision importante, et nous vous tiendrons informé de l'avancement de votre dossier en toute transparence.
                </p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Commencer mon parcours →
            </Link>
          </div>
        </section>

        {/* Parents Section */}
        <section id="parents" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-[#ff8c42] to-[#ffc947] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.4)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">👨‍👩‍👧‍👦</div>
              <h2 className="text-4xl font-black">Pour les Parents</h2>
            </div>
            
            <p className="text-xl font-medium leading-relaxed mb-8 text-white/90">
              Nous comprenons vos préoccupations en tant que parents. Notre approche professionnelle, éthique et transparente vous rassure et vous tient informé à chaque étape du parcours de votre enfant.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-black mb-4">Notre engagement envers vous :</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Transparence totale sur les processus et les coûts',
                    'Mises à jour régulières sur l\'avancement du dossier',
                    'Éthique professionnelle et intégrité dans toutes nos interactions',
                    'Support pour toute la famille dans les décisions importantes',
                    'Réponses claires à toutes vos questions et préoccupations',
                    'Respect de votre budget et de vos contraintes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#ff8c42]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-black mb-4">Comment nous vous tenons informés :</h3>
                <p className="font-medium leading-relaxed mb-4 text-white/90">
                  Nous organisons des réunions régulières avec les familles pour discuter de l'avancement, répondre aux questions et ajuster la stratégie si nécessaire. Vous recevez des rapports périodiques sur les étapes accomplies et les prochaines actions.
                </p>
                <p className="font-medium leading-relaxed text-white/90">
                  Nous sommes disponibles pour répondre à vos questions à tout moment et nous nous engageons à maintenir une communication claire et honnête.
                </p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#ff8c42] px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Discuter avec nous →
            </Link>
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl md:text-4xl font-black text-[#2d0f47] text-center mb-12">
            Checklist de préparation
          </h2>
          <p className="text-lg font-medium text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Un guide pratique des actions à entreprendre à différentes étapes de votre parcours
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((period, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all">
                <div className="text-2xl font-black text-[#4a1a6b] mb-4 pb-3 border-b-2 border-gray-300">
                  {period.time}
                </div>
                <ul className="flex flex-col gap-3">
                  {period.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42] mt-1.5 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-gray-600 mb-4">
              Cette checklist est un guide général. Les délais peuvent varier selon la destination et le type de programme.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Obtenir un plan personnalisé
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#ff8c42] to-[#ffc947] rounded-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.4)]">
          <div className="flex flex-col px-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Des questions ?</h3>
            <p className="font-bold text-white/90">Contactez-nous pour discuter de votre situation spécifique</p>
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

