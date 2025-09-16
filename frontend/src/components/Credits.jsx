import site from '@/content/site.json'

export default function Credits(){
  return (
    <ul className="grid md:grid-cols-2 gap-3">
      {site.credits.map((c, i) => (
        <li key={i} className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-neutral-400 text-sm">{c.role}</p>
            </div>
            <span className="badge">{c.year}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
