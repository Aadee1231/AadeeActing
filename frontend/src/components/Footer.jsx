import site from '@/content/site.json'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="section flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          {site.socials.instagram && <a className="hover:underline" href={site.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>}
          {site.socials.youtube && <a className="hover:underline" href={site.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>}
          {site.socials.imdb && <a className="hover:underline" href={site.socials.imdb} target="_blank" rel="noreferrer">IMDb</a>}
        </div>
      </div>
    </footer>
  )
}
