import HeadshotGrid from '@/components/HeadshotGrid'

export default function Photos(){
  return (
    <section className="section">
      <h1 className="title">Photos</h1>
      <p className="subtitle mt-2">Headshots & on‑set stills.</p>
      <div className="mt-6">
        <HeadshotGrid />
      </div>
    </section>
  )
}
