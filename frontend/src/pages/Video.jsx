import VideoPlayer from '@/components/VideoPlayer'

export default function Video(){
  return (
    <section className="section">
      <h1 className="title">Reel</h1>
      <p className="subtitle mt-2">Latest cut. Full scenes on request.</p>
      <div className="mt-6">
        <VideoPlayer />
      </div>
    </section>
  )
}
