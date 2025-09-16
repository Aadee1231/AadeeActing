import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import site from '@/content/site.json'

const items = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#credits', label: 'Credits' },
  { href: '#reel', label: 'Reel' },
  { href: '#training', label: 'Training' },
  { href: '#photos', label: 'Photos' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const go = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        {/* 🔗 Brand acts as 'Home' */}
        <button
          onClick={() => go('#home')}
          className="flex items-center gap-2 font-display text-xl tracking-tight hover:opacity-90"
          aria-label="Go to home"
        >
          {/* small inline logo mark (optional) */}
          <img src="/favicon.svg" alt="" className="h-6 w-6" />
          <span>{site.name}</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {items.map(i => (
            <button key={i.href}
                    onClick={() => go(i.href)}
                    className="text-sm text-neutral-300 hover:text-white">
              {i.label}
            </button>
          ))}
          <a href={site.resumeUrl} className="btn-primary ml-2" download>Résumé</a>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 space-y-2">
            {items.map(i => (
              <button key={i.href}
                      onClick={() => go(i.href)}
                      className="block w-full text-left px-2 py-2 rounded-lg hover:bg-white/10">
                {i.label}
              </button>
            ))}
            <a href={site.resumeUrl} className="btn-primary w-full" download>Résumé</a>
          </div>
        </div>
      )}
    </header>
  )
}
