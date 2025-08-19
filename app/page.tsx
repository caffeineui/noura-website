import Header from "@/components/header"
import Hero from "@/components/hero"
import Brands from "@/components/brands"
import About from "@/components/about"
import Work from "@/components/work"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        <Hero />
        <div className="py-4" />
        <Brands />
        <About />
        <Work />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
