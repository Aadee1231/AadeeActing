import ContactForm from '@/components/ContactForm'
import site from '@/content/site.json'

export default function Contact(){
  return (
    <section className="section">
      <h1 className="title">Contact</h1>
      <p className="subtitle mt-2">For bookings and auditions. Based in {site.location}.</p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </section>
  )
}
