import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import site from '@/content/site.json'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/photos', label: 'Photos' },
  { to: '/video', label: 'Reel' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `text-sm ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'}`}
            >
              {n.label}
            </NavLink>
          ))}
          <a href={site.resumeUrl} className="btn-primary ml-2" download>Résumé</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-white/10" aria-label="Toggle menu" onClick={() => setOpen((v)=>!v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 space-y-2">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className="block px-2 py-2 rounded-lg hover:bg-white/10">
                {n.label}
              </NavLink>
            ))}
            <a href={site.resumeUrl} className="btn-primary w-full" download>Résumé</a>
          </div>
        </div>
      )}
    </header>
  )
}
