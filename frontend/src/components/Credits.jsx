import site from '@/content/site.json'

function normalizeBadge(text) {
  const t = (text || '').toLowerCase().trim()

  // Order matters; most specific first
  if (/\bsupport(ing)?\s*lead\b/.test(t) || /\bsupport(ing)?\b/.test(t))
    return { label: 'Supporting Lead', variant: 'support' }

  // co-lead / co lead / colead (avoid matching "comedic")
  if (/\bco[-\s]?lead\b/.test(t) || /\bcolead\b/.test(t))
    return { label: 'Co-Lead', variant: 'co' }

  // "Leading Comedic", "Comedic Lead", "Lead (Comedic)"
  if (/\b(leading\s+comedic|comedic\s+lead|lead\s*\(?\s*comedic\)?)/.test(t))
    return { label: 'Lead (Comedic)', variant: 'comedic' }

  // plain comedic/comedy/comic
  if (/\b(comedic|comedy|comic)\b/.test(t))
    return { label: 'Comedic', variant: 'comedic' }

  if (/\blead\b/.test(t))
    return { label: 'Lead', variant: 'lead' }

  // nice-to-have: ensemble/featured
  if (/\b(ensemble|featured)\b/.test(t))
    return { label: 'Ensemble', variant: 'support' }

  return null
}


export default function Credits(){
  const items = site.credits || []
  const half = Math.ceil(items.length / 2)
  const cols = [items.slice(0, half), items.slice(half)]

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {cols.map((col, cIdx) => (
        <ul key={cIdx} className="space-y-4">
          {col.map((it, i) => {
            const badge = normalizeBadge(it.year)  // <- your JSON stores type in "year"
            return (
              <li key={it.title + i} className="card p-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">
                    {it.title}
                  </h3>
                  {it.role && (
                    <p className="text-neutral-400 text-sm mt-1">{it.role}</p>
                  )}
                </div>
                {badge && (
                  <span className={`pill pill--${badge.variant}`}>{badge.label}</span>
                )}
              </li>
            )
          })}
        </ul>
      ))}
    </div>
  )
}
