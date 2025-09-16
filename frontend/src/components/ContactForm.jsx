import { useState } from 'react'
import toast from 'react-hot-toast'
import site from '@/content/site.json'

export default function ContactForm(){
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function submit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){ toast.error('Please complete all fields.'); return }

    setLoading(true)
    try {
      const res = await fetch(import.meta.env.VITE_API_BASE + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Failed to send')
      toast.success('Message sent! I’ll reply soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err){
      console.error(err)
      toast.error('Could not send message right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="card p-6 space-y-4 max-w-xl">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" name="name" value={form.name} onChange={onChange} required />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" name="email" value={form.email} onChange={onChange} required />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400" name="message" value={form.message} onChange={onChange} required/>
      </div>
      <div className="flex gap-3">
        <button disabled={loading} className="btn-primary disabled:opacity-50">{loading ? 'Sending…' : 'Send'}</button>
        <a href={`mailto:${site.email}`} className="btn-ghost">Email</a>
      </div>
    </form>
  )
}
