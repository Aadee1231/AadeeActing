import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Photos from '@/pages/Photos'
import Video from '@/pages/Video'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <div className="min-h-dvh bg-grid-radial">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}
