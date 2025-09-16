import Hero from '@/components/Hero'
import Credits from '@/components/Credits'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home(){
  return (
    <>
      <Hero />

      <section className="section">
        <h2 className="title">Selected Credits</h2>
        <p className="subtitle mt-2">Recent film, web, and stage appearances.</p>
        <div className="mt-6">
          <Credits />
        </div>
      </section>

      <section className="section">
        <h2 className="title">Reel</h2>
        <p className="subtitle mt-2">Clips highlighting range and presence on camera.</p>
        <div className="mt-6">
          <VideoPlayer />
        </div>
      </section>
    </>
  )
}
