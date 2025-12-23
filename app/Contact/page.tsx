import Link from 'next/link';

export default function ContactPage() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto flex flex-col gap-12">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm w-fit rotate-[-2deg]">
          Let's Get To Work
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
          Apply For <br/>
          <span className="decoration-8 underline underline-offset-8 decoration-black">Coaching</span>.
        </h1>
        <p className="text-xl font-medium text-black max-w-xl">
          Fill out the form below to apply for a spot. Serious inquiries only. We build athletes here.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <form className="flex flex-col gap-8">
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-black text-black uppercase text-sm ml-2">Full Name / Nom complet *</label>
            <input 
              type="text" 
              id="name" 
              required
              placeholder="YOUR NAME"
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-black uppercase text-sm ml-2">Phone number / Numero de telephone *</label>
            <p className="text-xs font-bold text-black ml-2 mb-1">(Please download WhatsApp if you don’t have it so I can contact you)</p>
            <input 
              type="tel" 
              id="phone" 
              required
              placeholder="+123 456 789"
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <label htmlFor="country" className="font-black uppercase text-sm ml-2">Country / Pays *</label>
            <input 
              type="text" 
              id="country" 
              required
              placeholder="YOUR COUNTRY"
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-2">
            <label htmlFor="dob" className="font-black uppercase text-sm ml-2">Date of birth / Date De Naissance *</label>
            <input 
              type="date" 
              id="dob" 
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          {/* Height and Weight */}
          <div className="flex flex-col gap-2">
            <label htmlFor="stats" className="font-black uppercase text-sm ml-2">Height and Weight / Taille et Poids *</label>
            <input 
              type="text" 
              id="stats" 
              required
              placeholder="e.g. 185cm, 80kg"
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Gender / Sexe *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gender" value="male" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Male</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gender" value="female" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Female</span>
              </label>
            </div>
          </div>

          {/* Training Experience */}
          <div className="flex flex-col gap-2">
            <label htmlFor="experience" className="font-black uppercase text-sm ml-2">How long you’ve been training in the gym and did you do any other sports growing up? / Durée d’entraînement en salle et est-ce que vous avez fait d’autres sports? *</label>
            <textarea 
              id="experience" 
              rows={3}
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>

          {/* Online Coach History */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Have you ever had an Online Coach? / Vous Avez deja eu un Coach Online? *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="online_coach" value="yes" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Yes / Oui</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="online_coach" value="no" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">No / Non</span>
              </label>
            </div>
          </div>

          {/* Fitness Goals */}
          <div className="flex flex-col gap-2">
            <label htmlFor="goals" className="font-black uppercase text-sm ml-2">What are your fitness goals? *Please explain / Quelle sont vos Objectifs dans le Sport? *veuillez expliquer *</label>
            <textarea 
              id="goals" 
              rows={4}
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>

          {/* Gym Access */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Do You Have Access to a Gym? / Avez-vous Accès a une Salle de Sport? *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gym_access" value="yes" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Yes / Oui</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gym_access" value="no" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">No / Non</span>
              </label>
            </div>
          </div>

          {/* Job/Occupation */}
          <div className="flex flex-col gap-2">
            <label htmlFor="job" className="font-black uppercase text-sm ml-2">What Kind of Job do you have and What does your work hours look like? / Quelle est votre Job/occupation et quelle sont vos horaires de travail? *</label>
            <textarea 
              id="job" 
              rows={2}
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>

          {/* Structured Training History */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Have you Had Experience With Structured Training? / Vous Avez deja eu une Période D’entraînement Structuré? *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="structured_training" value="yes" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Yes / Oui</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="structured_training" value="no" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">No / Non</span>
              </label>
            </div>
          </div>

          {/* Health Issues */}
          <div className="flex flex-col gap-2">
            <label htmlFor="health" className="font-black uppercase text-sm ml-2">Any Health issues or Injuries? / Avez-vous Des blessures ou bien des Problèmes de Santé? *</label>
            <textarea 
              id="health" 
              rows={2}
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>

          {/* Nutrition */}
          <div className="flex flex-col gap-2">
            <label htmlFor="nutrition" className="font-black uppercase text-sm ml-2">Current calories & macros intake if you did count them before, would you like a meal plan or a IIFYM approach? / vos Calories et macro-nutriments... *</label>
            <p className="text-xs font-bold text-black ml-2 mb-1">IIFYM : if it fits your macros , c’est une approche de nutrition ou on a une flexibilité au niveau des sources d’aliments et repas qu’on mange tant que les calories sont respectées</p>
            <textarea 
              id="nutrition" 
              rows={4}
              required
              className="w-full bg-white border-2 border-black rounded-xl px-6 py-4 font-bold placeholder:text-black/50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>

          {/* PEDs */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Did you take PED or looking to take any? / Avez-vous pris des produits dopants et voulez-vous en prendre? *</label>
            <p className="text-xs font-bold text-black ml-2 mb-1">PED : Performance Enhancing Drugs</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="ped" value="yes" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">Yes / Oui</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="ped" value="no" className="w-6 h-6 border-2 border-black accent-black" required />
                <span className="font-bold uppercase">No / Non</span>
              </label>
            </div>
          </div>

          {/* Offer Selection */}
          <div className="flex flex-col gap-4">
            <label className="font-black uppercase text-sm ml-2">Pick your offer / Choisis ton offre *</label>
            <p className="text-xs font-bold text-black ml-2 mb-1">Online coaching, personalized training plan, personalized diet plan with 24/7 support on WhatsApp</p>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="cursor-pointer">
                <input type="radio" name="offer" value="1month" className="peer sr-only" required />
                <div className="bg-white border-2 border-black rounded-xl px-4 py-3 font-bold text-center uppercase peer-checked:bg-black peer-checked:text-white transition-all hover:bg-black hover:text-white">
                  1 Month (€100)
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="offer" value="3months" className="peer sr-only" required />
                <div className="bg-white border-2 border-black rounded-xl px-4 py-3 font-bold text-center uppercase peer-checked:bg-black peer-checked:text-white transition-all hover:bg-black hover:text-white">
                  3 Months (€225)
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="offer" value="6months" className="peer sr-only" required />
                <div className="bg-white border-2 border-black rounded-xl px-4 py-3 font-bold text-center uppercase peer-checked:bg-black peer-checked:text-white transition-all hover:bg-black hover:text-white">
                  6 Months (€450)
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-black text-white px-8 py-5 rounded-full font-black uppercase text-xl hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all active:scale-95 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] mt-4"
          >
            Submit Application
          </button>

        </form>
      </div>

      {/* WhatsApp Alternative */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-[2px] bg-black flex-1"></div>
            <span className="font-black uppercase text-sm">OR</span>
            <div className="h-[2px] bg-black flex-1"></div>
        </div>
        
        <Link 
          href="https://wa.me/1234567890" // Replace with actual WhatsApp number
          target="_blank"
          className="flex items-center gap-3 bg-[#25D366] text-white border-4 border-black px-8 py-4 rounded-full font-black uppercase text-lg hover:brightness-110 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Chat on WhatsApp
        </Link>
      </div>

    </section>
  )
}
