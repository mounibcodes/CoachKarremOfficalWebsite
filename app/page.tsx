import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Programs from "@/Components/Programs";
import FAQ from "@/Components/FAQ";
import SuccessStories from "@/Components/SuccessStories";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Programs/>
      <SuccessStories/>
      <FAQ/>
    </main>

  )
  ;
}
