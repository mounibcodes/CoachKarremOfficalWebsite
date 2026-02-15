import Link from 'next/link';

const journeySteps = [
  {
    step: '1',
    title: 'Premier contact & analyse des besoins',
    description: 'Nous commençons par comprendre votre profil, vos objectifs académiques, votre niveau de langue, vos contraintes budgétaires et vos préférences de destination.'
  },
  {
    step: '2',
    title: 'Choix de la destination & du programme',
    description: 'Basé sur votre profil, nous identifions les meilleures destinations et programmes qui correspondent à vos aspirations et à votre situation.'
  },
  {
    step: '3',
    title: 'Préparation du dossier & candidature',
    description: 'Nous vous accompagnons dans la collecte, traduction et certification des documents, et dans le remplissage des candidatures selon les exigences de chaque institution.'
  },
  {
    step: '4',
    title: 'Suivi avec les institutions',
    description: 'Nous maintenons une communication régulière avec les universités, suivons l\'avancement de vos candidatures et gérons les réponses et demandes supplémentaires.'
  },
  {
    step: '5',
    title: 'Support pré-départ',
    description: 'Une fois admis, nous vous guidons dans les démarches administratives finales, visa, logement, assurance et préparation à la vie étudiante à l\'étranger.'
  }
];

const destinations = [
  {
    region: 'Europe',
    countries: ['France', 'Allemagne', 'Espagne', 'Italie', 'Pays-Bas', 'Belgique', 'Suisse'],
    description: 'Destinations populaires avec des systèmes éducatifs reconnus et des opportunités variées'
  },
  {
    region: 'Amérique du Nord',
    countries: ['Canada', 'États-Unis'],
    description: 'Excellence académique et opportunités de carrière internationales'
  },
  {
    region: 'Asie',
    countries: ['Japon', 'Corée du Sud', 'Singapour', 'Malaisie'],
    description: 'Innovation technologique et croissance économique rapide'
  },
  {
    region: 'Autres',
    countries: ['Australie', 'Nouvelle-Zélande', 'Royaume-Uni'],
    description: 'Diverses options selon vos objectifs et préférences'
  }
];

const faqs = [
  {
    question: "Quand dois-je commencer à préparer mon projet d'études à l'étranger ?",
    answer: "Idéalement, commencez 12 à 18 mois avant la date de départ souhaitée. Cela vous laisse le temps de rechercher les programmes, préparer les tests de langue, rassembler les documents et soumettre vos candidatures. Pour certaines destinations et programmes compétitifs, un délai plus long peut être nécessaire."
  },
  {
    question: "Quels documents sont généralement requis pour une candidature ?",
    answer: "Les documents varient selon le pays et l'établissement, mais incluent généralement : diplômes et relevés de notes (traduits et certifiés), lettres de recommandation, CV, lettre de motivation, résultats de tests de langue (TOEFL, IELTS, DELF, etc.), et parfois un portfolio ou des tests d'aptitude spécifiques."
  },
  {
    question: "Quelle est l'importance des notes dans le processus d'admission ?",
    answer: "Les notes sont importantes mais ne sont pas le seul critère. Les universités évaluent aussi votre lettre de motivation, vos lettres de recommandation, votre expérience, et votre profil global. Un dossier bien préparé peut compenser des notes moyennes."
  },
  {
    question: "Quel niveau de langue (français/anglais) est nécessaire ?",
    answer: "Cela dépend de la destination et du programme. Pour des études en anglais, un niveau B2-C1 (TOEFL 80-100, IELTS 6.5-7.5) est généralement requis. Pour le français, un niveau B2-C1 (DELF B2, DALF C1) est souvent demandé. Certains programmes acceptent des niveaux plus bas avec une année préparatoire."
  },
  {
    question: "Combien coûte généralement une année d'études à l'étranger ?",
    answer: "Les coûts varient considérablement selon la destination, le type d'établissement (public/privé) et le niveau d'études. En Europe, certaines universités publiques ont des frais très bas, tandis que d'autres pays peuvent coûter plusieurs dizaines de milliers d'euros par an. Nous vous aidons à identifier les options qui correspondent à votre budget."
  },
  {
    question: "Puis-je travailler pendant mes études à l'étranger ?",
    answer: "Cela dépend du pays et du type de visa. Certains pays permettent aux étudiants internationaux de travailler à temps partiel (généralement 20 heures par semaine), tandis que d'autres ont des restrictions plus strictes. Nous vous informons sur les réglementations spécifiques à chaque destination."
  }
];

export default function StudyAbroadPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Études à l'étranger
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Votre parcours{' '}
            <span className="text-[#ff8c42]">commence ici</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Planifier et réussir vos études à l'étranger nécessite une préparation rigoureuse et un accompagnement expert. Découvrez comment nous vous guidons à chaque étape.
          </p>
        </div>

        {/* Overview */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
          <h2 className="text-3xl md:text-4xl font-black text-[#2d0f47] mb-6">Pourquoi une planification et un accompagnement sont essentiels</h2>
          <div className="space-y-4 text-lg font-medium text-gray-700 leading-relaxed">
            <p>
              Les études à l'étranger représentent un investissement important en temps, argent et énergie. Une planification rigoureuse et un accompagnement professionnel peuvent faire la différence entre un parcours réussi et des obstacles évitables.
            </p>
            <p>
              Chez Qoodwa, nous comprenons les défis spécifiques auxquels font face les étudiants algériens. Nous vous aidons à naviguer dans les systèmes éducatifs internationaux, à comprendre les exigences de chaque destination, et à préparer des dossiers compétitifs qui maximisent vos chances de succès.
            </p>
          </div>
        </section>

        {/* Journey Steps */}
        <section>
          <h2 className="text-4xl font-black text-[#2d0f47] text-center mb-12">Les étapes de votre parcours</h2>
          <div className="flex flex-col gap-8">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:border-[#6b3a8f] shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)] transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#2d0f47] mb-3">{step.title}</h3>
                    <p className="text-lg font-medium text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Destinations populaires</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(107,58,143,0.3)]">
                <h3 className="text-2xl font-black mb-3">{dest.region}</h3>
                <p className="font-medium text-white/90 mb-4">{dest.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.countries.map((country, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 font-medium text-white/90">
            Nous vous aidons à identifier la destination qui correspond le mieux à vos objectifs, votre budget et vos préférences.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-4xl font-black text-[#2d0f47] text-center mb-12">Questions fréquentes</h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all"
              >
                <h3 className="text-xl font-black text-[#2d0f47] mb-3">{faq.question}</h3>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#ff8c42] to-[#ffc947] rounded-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.4)]">
          <div className="flex flex-col px-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Prêt à commencer votre parcours ?</h3>
            <p className="font-bold text-white/90">Contactez-nous pour une consultation personnalisée</p>
          </div>
          <Link 
            href="/contact" 
            className="bg-white text-[#4a1a6b] px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-all hover:shadow-lg whitespace-nowrap"
          >
            Prendre rendez-vous
          </Link>
        </section>

      </div>
    </main>
  )
}

