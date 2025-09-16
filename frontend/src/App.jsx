import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import Credits from '@/components/Credits'
import VideoPlayer from '@/components/VideoPlayer'
import HeadshotGrid from '@/components/HeadshotGrid'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import site from '@/content/site.json'

export default function App(){
  return (
    <div className="min-h-dvh bg-grid-radial grain">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <AboutSection />

      {/* CREDITS (on charcoal) */}
      <section id="credits" className="section">
        <Reveal><h2 className="title">Selected Credits</h2></Reveal>
        <Reveal delay={.05}><p className="subtitle mt-2">Recent film, web, and stage appearances.</p></Reveal>
        <Reveal delay={.1} className="mt-6"><Credits /></Reveal>
      </section>

      {/* REEL (deep red tint) */}
      <section id="reel" className="section section-red">
        <Reveal><h2 className="title">Reel</h2></Reveal>
        <Reveal delay={.05}><p className="subtitle mt-2">Clips highlighting range and presence on camera.</p></Reveal>
        <Reveal delay={.1} className="mt-6"><VideoPlayer /></Reveal>
      </section>

      {/* TRAINING (alt background) */}
      <section id="training" className="section section-alt">
        <Reveal><h2 className="title">Training</h2></Reveal>
        <Reveal delay={.1}>
          <ul className="mt-6 grid md:grid-cols-2 gap-3">
            {site.training?.map((t,i)=>(
              <li key={i} className="card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{t.area}</p>
                    <p className="text-neutral-400 text-sm">{t.teacher} • {t.place}</p>
                  </div>
                  {t.years && <span className="badge">{t.years}</span>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* PHOTOS (dark) */}
      <section id="photos" className="section">
        <Reveal><h2 className="title">Photos</h2></Reveal>
        <Reveal delay={.05}><p className="subtitle mt-2">Headshots & on-set stills.</p></Reveal>
        <Reveal delay={.1} className="mt-6"><HeadshotGrid /></Reveal>
      </section>

      {/* CONTACT (alt) */}
      <section id="contact" className="section section-alt">
        <Reveal><h2 className="title">Contact</h2></Reveal>
        <Reveal delay={.05}><p className="subtitle mt-2">For bookings and auditions. Based in {site.location}.</p></Reveal>
        <Reveal delay={.1} className="mt-6"><ContactForm /></Reveal>
      </section>

      <Footer />
    </div>
  )
}
