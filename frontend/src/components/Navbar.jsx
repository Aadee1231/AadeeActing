// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const click = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight">{site.name}</Link>
        <nav className="hidden md:flex items-center gap-6">
          {items.map(i => (
            <button key={i.href} onClick={()=>click(i.href)} className="text-sm text-neutral-300 hover:text-white">
              {i.label}
            </button>
          ))}
          <a href={site.resumeUrl} className="btn-primary ml-2" download>Résumé</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          {open? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 space-y-2">
            {items.map(i => (
              <button key={i.href} onClick={()=>click(i.href)} className="block w-full text-left px-2 py-2 rounded-lg hover:bg-white/10">
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
