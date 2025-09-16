import site from '@/content/site.json'

export default function HeadshotGrid(){
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {site.headshots.map((h, idx) => (
        <figure key={idx} className="card overflow-hidden">
          <img src={h.src} alt={h.alt} loading="lazy" className="w-full h-full object-cover hover:scale-[1.02] transition" />
        </figure>
      ))}
    </div>
  )
}
