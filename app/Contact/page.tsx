'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams?.get('subject') || '';

  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-6">
          <div className="inline-block bg-gradient-to-r from-[#4a1a6b] to-[#6b3a8f] text-white px-6 py-2 rounded-full font-bold text-sm w-fit mx-auto">
            Contactez-nous
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2d0f47] tracking-tight leading-tight">
            Prendre{' '}
            <span className="text-[#ff8c42]">rendez-vous</span>
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous sommes là pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
            <h2 className="text-2xl font-black text-[#2d0f47] mb-6">Formulaire de contact</h2>
            <form className="flex flex-col gap-6">
              
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-[#4a1a6b] text-sm">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Votre nom"
                  className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-[#4a1a6b] transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-[#4a1a6b] text-sm">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="votre.email@exemple.com"
                  className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-[#4a1a6b] transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-bold text-[#4a1a6b] text-sm">Téléphone / WhatsApp *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  placeholder="+213 XXX XXX XXX"
                  className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-[#4a1a6b] transition-all"
                />
              </div>

              {/* Request Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="requestType" className="font-bold text-[#4a1a6b] text-sm">Type de demande *</label>
                <select 
                  id="requestType" 
                  required
                  defaultValue={subject || ''}
                  className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-[#4a1a6b] transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="etudes-etranger">Études à l'étranger</option>
                  <option value="orientation">Orientation éducative</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="carrieres">Carrières / Recrutement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-[#4a1a6b] text-sm">Message *</label>
                <textarea 
                  id="message" 
                  rows={6}
                  required
                  placeholder="Décrivez votre demande ou posez vos questions..."
                  className="w-full bg-white border-2 border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:border-[#4a1a6b] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 mt-4"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="flex flex-col gap-8">
            
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#4a1a6b] to-[#6b3a8f] rounded-3xl p-8 text-white shadow-[12px_12px_0px_0px_rgba(107,58,143,0.5)]">
              <h2 className="text-2xl font-black mb-6">Informations de contact</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2">Adresse</h3>
                    <p className="font-medium text-white/90">Bab Ezzouar</p>
                    <p className="font-medium text-white/90">Daïra Dar El Beïda</p>
                    <p className="font-medium text-white/90">Alger, Algérie</p>
                    <a 
                      href="https://maps.app.goo.gl/DK9wKgiftHcZjaLL9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ffc947] font-semibold hover:underline mt-2 inline-block"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15.75h-1.5a.75.75 0 01-.75-.75v-4.5A.75.75 0 0110.5 17h-3a.75.75 0 01-.75-.75v-3A.75.75 0 017.5 12.5h3a.75.75 0 01.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75v-3A.75.75 0 0110.5 6h3a.75.75 0 01.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-4.5A.75.75 0 0017.25 3h-3a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V6.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2">Téléphone / WhatsApp</h3>
                    <p className="font-medium text-white/90">+213 XXX XXX XXX</p>
                    <p className="text-sm font-medium text-white/70 mt-1">(À remplacer par le numéro réel)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-2">Email</h3>
                    <a href="mailto:contact@qoodwa.com" className="font-medium text-[#ffc947] hover:underline">
                      contact@qoodwa.com
                    </a>
                    <p className="text-sm font-medium text-white/70 mt-1">(À remplacer par l'email réel)</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white/30">
                <h3 className="font-black text-lg mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/qoodwa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
              <h2 className="text-2xl font-black text-[#2d0f47] mb-6">Horaires d'ouverture</h2>
              <div className="flex flex-col gap-3 font-medium text-gray-700">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-bold text-[#4a1a6b]">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-bold text-[#4a1a6b]">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-bold text-gray-400">Fermé</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mt-4">
                * Les horaires peuvent varier. Contactez-nous pour confirmer.
              </p>
            </div>

            {/* Map */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(107,58,143,0.3)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.123456789!2d3.1891509!3d36.7148496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsNDIsMTMuNkUgMywxMSwyOC45NEU!5e0!3m2!1sfr!2sdz!4v1234567890123!5m2!1sfr!2sdz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/213XXXXXXXXX" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
          
          <a 
            href="tel:+213XXXXXXXXX" 
            className="flex items-center justify-center gap-3 bg-[#ff8c42] hover:bg-[#ffc947] text-white px-8 py-4 rounded-full font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15.75h-1.5a.75.75 0 01-.75-.75v-4.5A.75.75 0 0110.5 17h-3a.75.75 0 01-.75-.75v-3A.75.75 0 017.5 12.5h3a.75.75 0 01.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75v-3A.75.75 0 0110.5 6h3a.75.75 0 01.75.75v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75v-4.5A.75.75 0 0017.25 3h-3a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V6.75z" />
            </svg>
            Appeler
          </a>
        </div>

      </div>
    </main>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-24 pb-20 px-4 text-center">Chargement...</div>}>
      <ContactForm />
    </Suspense>
  )
}
