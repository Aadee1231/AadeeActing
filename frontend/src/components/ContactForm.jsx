// src/components/ContactForm.jsx
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import site from '@/content/site.json'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '') // e.g. https://<your>.modal.run

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success('Message sent! I’ll get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      toast.error('Could not send. Please email or text me directly.')
    } finally {
      setLoading(false)
    }
  }

  const dial = site.phone ? site.phone.replace(/[^+\d]/g, '') : null

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Direct contact card */}
      <div className="card p-5">
        <h3 className="font-medium text-lg">Direct Contact</h3>
        <div className="mt-3 space-y-2 text-neutral-300">
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </p>
          {site.phone && (
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${dial}`} className="underline">{site.phone}</a>
            </p>
          )}
          <p className="text-xs opacity-70">For time-sensitive inquiries, text is best.</p>
        </div>
      </div>

      {/* Contact form */}
      <form onSubmit={onSubmit} className="card p-5 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm">Name</span>
            <input name="name" required className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2" />
          </label>
        </div>
        <label className="block">
          <span className="text-sm">Phone (optional)</span>
          <input name="phone" type="tel" className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2" />
        </label>

        {/* these help your backend craft the email */}
        <input type="hidden" name="to" value={site.email} />
        <input type="hidden" name="subject" value="Website contact — Aadee Chheda" />

        <button disabled={loading} className="btn-primary">{loading ? 'Sending…' : 'Send'}</button>
        <p className="text-xs text-neutral-400">By submitting you agree to be contacted about bookings and auditions.</p>
      </form>
    </div>
  )
}
