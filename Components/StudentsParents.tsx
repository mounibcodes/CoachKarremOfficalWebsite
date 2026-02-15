import Link from 'next/link';

export default function StudentsParents() {
  return (
    <section id="students-parents" className="py-20 px-4 max-w-7xl mx-auto flex flex-col gap-16 bg-white">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit">
          Pour vous
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#2d0f47] tracking-tight leading-tight">
          Étudiants &{' '}
          <span className="text-[#ff8c42]">Parents</span>
        </h2>
        <p className="text-xl font-medium text-gray-600 max-w-3xl">
          Un accompagnement adapté à chaque profil, de l'orientation à l'admission
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Students Section */}
        <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-10 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)] flex flex-col gap-6">
          <div className="text-5xl mb-2">🎓</div>
          <h3 className="text-3xl font-black">Pour les Étudiants</h3>
          <p className="font-medium text-lg leading-relaxed text-white/90">
            Nous vous accompagnons de l'orientation initiale jusqu'à l'admission, en vous donnant les outils et la compréhension nécessaires pour réussir votre parcours.
          </p>
          
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Analyse de votre profil et de vos objectifs</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Matching avec les meilleurs programmes</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Préparation complète de votre dossier</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#ffc947] flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#4a1a6b]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Suivi continu et support personnalisé</p>
            </div>
          </div>

          <Link 
            href="/etudiants-parents#etudiants" 
            className="mt-auto bg-white text-[#4a1a6b] px-6 py-3 rounded-full font-black text-center hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            En savoir plus →
          </Link>
        </div>

        {/* Parents Section */}
        <div className="bg-gradient-to-br from-[#ff8c42] to-[#ffc947] rounded-3xl p-8 md:p-10 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.4)] flex flex-col gap-6">
          <div className="text-5xl mb-2">👨‍👩‍👧‍👦</div>
          <h3 className="text-3xl font-black">Pour les Parents</h3>
          <p className="font-medium text-lg leading-relaxed text-white/90">
            Nous comprenons vos préoccupations. Notre approche professionnelle, éthique et transparente vous rassure et vous tient informé à chaque étape.
          </p>
          
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#ff8c42]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Transparence totale sur les processus</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#ff8c42]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Mises à jour régulières sur l'avancement</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#ff8c42]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Éthique professionnelle et intégrité</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#ff8c42]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-medium">Support pour toute la famille</p>
            </div>
          </div>

          <Link 
            href="/etudiants-parents#parents" 
            className="mt-auto bg-white text-[#ff8c42] px-6 py-3 rounded-full font-black text-center hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            En savoir plus →
          </Link>
        </div>
      </div>

      {/* Checklist Preview */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
        <h3 className="text-3xl font-black text-[#2d0f47] text-center mb-8">Checklist de préparation</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { time: '12 mois', items: ['Recherche de programmes', 'Préparation linguistique', 'Budget'] },
            { time: '9 mois', items: ['Choix des destinations', 'Préparation des documents', 'Tests de langue'] },
            { time: '6 mois', items: ['Soumission des candidatures', 'Suivi des dossiers', 'Préparation administrative'] },
            { time: '3 mois', items: ['Finalisation des inscriptions', 'Préparation au départ', 'Visa et logement'] }
          ].map((period, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)]">
              <div className="text-2xl font-black text-[#4a1a6b] mb-4">{period.time}</div>
              <ul className="flex flex-col gap-2">
                {period.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42] mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

