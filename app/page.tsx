import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import StudentsParents from "@/Components/StudentsParents";
import FAQ from "@/Components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <StudentsParents/>
      <FAQ/>
    </main>
  )
}
