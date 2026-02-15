import Link from 'next/link';

const categories = [
  {
    name: 'Préparer sa candidature',
    icon: '📝',
    articles: [
      'Comment rédiger une lettre de motivation percutante',
      'Les documents essentiels pour votre dossier',
      'Comment obtenir de bonnes lettres de recommandation',
      'Timeline idéale pour préparer votre candidature'
    ]
  },
  {
    name: 'Comprendre les systèmes éducatifs',
    icon: '🎓',
    articles: [
      'Le système éducatif français : guide complet',
      'Étudier au Canada : ce qu\'il faut savoir',
      'Les universités allemandes : admission et coûts',
      'Comparaison des systèmes éducatifs européens'
    ]
  },
  {
    name: 'Langue & préparation aux tests',
    icon: '🌐',
    articles: [
      'Comment réussir le TOEFL : stratégies et conseils',
      'Préparation à l\'IELTS : guide pratique',
      'DELF/DALF : tout ce qu\'il faut savoir',
      'Améliorer son niveau de langue rapidement'
    ]
  },
  {
    name: 'Témoignages & conseils étudiants',
    icon: '💬',
    articles: [
      'Mon parcours : de l\'Algérie à la France',
      'Conseils pour s\'adapter à la vie étudiante à l\'étranger',
      'Gérer son budget en tant qu\'étudiant international',
      'Trouver un logement étudiant à l\'étranger'
    ]
  }
];

const featuredArticles = [
  {
    title: '10 erreurs à éviter lors de votre candidature',
    excerpt: 'Découvrez les erreurs les plus courantes que commettent les étudiants et comment les éviter pour maximiser vos chances d\'admission.',
    category: 'Préparer sa candidature',
    date: '15 Jan 2024'
  },
  {
    title: 'Guide complet : étudier en France en 2024',
    excerpt: 'Tout ce que vous devez savoir sur les études en France : admission, coûts, visa, logement et vie étudiante.',
    category: 'Comprendre les systèmes éducatifs',
    date: '10 Jan 2024'
  },
  {
    title: 'Comment financer vos études à l\'étranger',
    excerpt: 'Bourses, prêts étudiants, travail étudiant : toutes les options pour financer votre projet d\'études internationales.',
    category: 'Témoignages & conseils étudiants',
    date: '5 Jan 2024'
  }
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Hero Section */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Ressources & Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Ressources &{' '}
            <span className="text-[#ff8c42]">Conseils</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Guides pratiques, conseils d'experts et témoignages pour vous accompagner dans votre parcours d'études à l'étranger
          </p>
        </div>

        {/* Featured Articles */}
        <section>
          <h2 className="text-3xl font-black text-[#2d0f47] mb-8">Articles à la une</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link 
                key={index}
                href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all flex flex-col gap-4 group"
              >
                <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-3 py-1 rounded-full font-bold text-xs w-fit">
                  {article.category}
                </div>
                <h3 className="text-xl font-black text-[#2d0f47] group-hover:text-[#4a1a6b] transition-colors">
                  {article.title}
                </h3>
                <p className="font-medium text-gray-600 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-500">{article.date}</span>
                  <span className="text-[#4a1a6b] font-bold text-sm group-hover:gap-2 transition-all flex items-center gap-1">
                    Lire plus
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-black text-[#2d0f47] mb-8 text-center">Parcourir par catégorie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#6b3a8f] shadow-[6px_6px_0px_0px_rgba(107,58,143,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(107,58,143,0.5)] transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-2xl font-black text-[#2d0f47]">{category.name}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {category.articles.map((article, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42] mt-2 shrink-0"></div>
                      <Link 
                        href={`/blog/${article.toLowerCase().replace(/\s+/g, '-')}`}
                        className="font-medium text-gray-700 hover:text-[#4a1a6b] hover:underline transition-colors"
                      >
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 md:p-12 text-white text-center shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Besoin d'aide personnalisée ?</h2>
          <p className="text-xl font-medium mb-8 max-w-2xl mx-auto text-white/90">
            Nos articles vous donnent des conseils généraux, mais chaque parcours est unique. Contactez-nous pour un accompagnement sur mesure.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Prendre rendez-vous
          </Link>
        </section>

      </div>
    </main>
  )
}

