import { useState, useEffect } from 'react'
import logoImg from '@/imports/file.png'

const LAUNCH_DATE = new Date('2026-10-15T00:00:00')

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, target.getTime() - Date.now())
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

const UNITS = [
  { id: 1, type: 'Apartment', name: '2BR Luxury Suite', floor: 4, size: 1200, price: 'PKR 1.8Cr', status: 'Available', facing: 'Park View', img: '1502672260266-1c1ef2d93688' },
  { id: 2, type: 'Apartment', name: '3BR Premium Flat', floor: 7, size: 1800, price: 'PKR 2.6Cr', status: 'Reserved', facing: 'City View', img: '1560448204-e02f11c3d0e2' },
  { id: 3, type: 'Apartment', name: '2BR Garden Suite', floor: 2, size: 1050, price: 'PKR 1.5Cr', status: 'Available', facing: 'Garden View', img: '1484154218962-a197022b5858' },
  { id: 4, type: 'Apartment', name: '4BR Penthouse', floor: 12, size: 3200, price: 'PKR 5.2Cr', status: 'Available', facing: 'Panoramic', img: '1600585154340-be6161a56a0c' },
  { id: 5, type: 'Office', name: 'Executive Office Suite', floor: 3, size: 800, price: 'PKR 1.2Cr', status: 'Available', facing: 'Main Road', img: '1497366216548-37526070297c' },
  { id: 6, type: 'Office', name: 'Corporate Floor Unit', floor: 5, size: 1600, price: 'PKR 2.4Cr', status: 'Sold', facing: 'City View', img: '1497366811353-6870744d04b2' },
  { id: 7, type: 'Office', name: 'Corner Business Suite', floor: 8, size: 950, price: 'PKR 1.6Cr', status: 'Available', facing: 'Corner View', img: '1504384308090-c5d1a1fb4875' },
  { id: 8, type: 'Showroom', name: 'Ground Floor Showroom A', floor: 0, size: 1400, price: 'PKR 2.1Cr', status: 'Reserved', facing: 'Main Boulevard', img: '1555636222-cae831e670b3' },
  { id: 9, type: 'Showroom', name: 'Ground Floor Showroom B', floor: 0, size: 1100, price: 'PKR 1.7Cr', status: 'Available', facing: 'Side Street', img: '1534237710431-e2fc698436d0' },
  { id: 10, type: 'Showroom', name: 'Mezzanine Display Unit', floor: 1, size: 900, price: 'PKR 1.4Cr', status: 'Available', facing: 'Interior Court', img: '1441984904996-e0b6ba687e04' },
]

const AMENITIES = [
  { icon: '🏋️', label: 'Gym & Fitness Center' },
  { icon: '🚗', label: 'Multi-Level Parking' },
  { icon: '🔒', label: '24/7 CCTV Security' },
  { icon: '⚡', label: 'Backup Power Generator' },
  { icon: '🛗', label: 'High-Speed Elevators' },
  { icon: '🕌', label: 'In-Building Mosque' },
  { icon: '🌿', label: 'Rooftop Garden' },
  { icon: '🌊', label: 'Swimming Pool' },
  { icon: '🎭', label: 'Community Hall' },
  { icon: '🛒', label: 'Retail Shops' },
  { icon: '♿', label: 'Wheelchair Access' },
  { icon: '📦', label: 'Package Lockers' },
]

const GALLERY = [
  { id: '1486325212027-8081e485255e', alt: 'Modern luxury building exterior', span: true },
  { id: '1545324418-cc1a3fa10c00', alt: 'Building interior lobby' },
  { id: '1582268611958-ebfd161ef9cf', alt: 'Luxury lobby interior' },
  { id: '1504307651254-35680f356dfd', alt: 'Construction progress' },
  { id: '1560518883-ce09059eeffa', alt: 'Real estate development' },
  { id: '1522708323590-d24dbb6b0267', alt: 'Premium apartment interior' },
]

type UnitType = 'Apartment' | 'Office' | 'Showroom'
type Unit = typeof UNITS[0]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const GoldDivider = () => (
  <div className="flex items-center justify-center py-2">
    <div className="h-px flex-1 max-w-32 bg-[#D4AF37]/20" />
    <div className="mx-4 text-[#D4AF37]/40 text-sm">✦</div>
    <div className="h-px flex-1 max-w-32 bg-[#D4AF37]/20" />
  </div>
)

const SectionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="h-px w-12 bg-[#D4AF37]/40" />
    <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase">{label}</span>
    <div className="h-px w-12 bg-[#D4AF37]/40" />
  </div>
)

function whatsappUrl(unit?: Unit) {
  const msg = unit
    ? `Hi, I'm interested in the ${unit.name} (${unit.type}, Floor ${unit.floor === 0 ? 'G' : unit.floor}, ${unit.size} sq ft, ${unit.price}). Please share more details.`
    : "Hi, I'm interested in your upcoming SHAHZAD Builders project. Please share more details."
  return `https://wa.me/923001234567?text=${encodeURIComponent(msg)}`
}

function statusBadge(status: string) {
  if (status === 'Available') return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
  if (status === 'Reserved') return 'text-amber-400 bg-amber-400/10 border-amber-400/30'
  return 'text-red-400 bg-red-400/10 border-red-400/30'
}

export default function App() {
  const [activeUnit, setActiveUnit] = useState<UnitType>('Apartment')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bookingUnit, setBookingUnit] = useState<Unit | null>(null)
  const [notifyForm, setNotifyForm] = useState({ name: '', phone: '', email: '', interest: '' })
  const [notifySubmitted, setNotifySubmitted] = useState(false)
  const countdown = useCountdown(LAUNCH_DATE)

  const filteredUnits = UNITS.filter(u => u.type === activeUnit)

  return (
    <div className="min-h-screen bg-[#0A1A3D] text-[#F5F0E8]" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A3D]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src={logoImg} alt="SHAHZAD Builders & Developers" className="h-14 w-auto object-contain" />
            <div className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide text-[#F5F0E8]/75">
              {['About', 'Project', 'Units', 'Amenities', 'Gallery', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="hover:text-[#D4AF37] transition-colors duration-200">
                  {link}
                </a>
              ))}
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="bg-[#D4AF37] text-[#0A1A3D] px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-[#e8c94a] transition-colors">
                Book Now
              </a>
            </div>
            <button className="md:hidden text-[#D4AF37] p-2 flex flex-col gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}>
              <span className="w-6 h-0.5 bg-current block" />
              <span className="w-6 h-0.5 bg-current block" />
              <span className="w-6 h-0.5 bg-current block" />
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden border-t border-[#D4AF37]/20 py-4 flex flex-col gap-4 text-sm pb-6">
              {['About', 'Project', 'Units', 'Amenities', 'Gallery', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#D4AF37] transition-colors px-1">
                  {link}
                </a>
              ))}
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="bg-[#D4AF37] text-[#0A1A3D] px-5 py-3 font-semibold text-center mt-2">
                Book Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&h=1000&fit=crop&auto=format"
            alt="Luxury building"
            className="w-full h-full object-cover opacity-18"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3D]/60 via-[#0A1A3D]/70 to-[#0A1A3D]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3D]/80 via-transparent to-[#0A1A3D]/80" />
        </div>

        {/* vertical gold lines */}
        <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent hidden xl:block" />
        <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent hidden xl:block" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <SectionLabel label="Flagship Project · Lahore" />

          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.04] mb-4 text-[#F5F0E8]">
            Coming<br />
            <em className="text-[#D4AF37] not-italic">Soon</em>
          </h1>

          <p className="text-[#F5F0E8]/65 text-lg md:text-xl mb-3 font-light tracking-wide max-w-xl mx-auto">
            A landmark mixed-use tower redefining urban living — Apartments, Offices & Showrooms
          </p>
          <p className="text-[#D4AF37]/70 text-xs tracking-[0.28em] uppercase font-medium mb-12">
            Johar Town · Main Boulevard · Lahore
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-2 md:gap-5 mb-12 max-w-md mx-auto">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Mins', value: countdown.minutes },
              { label: 'Secs', value: countdown.seconds },
            ].map(({ label, value }) => (
              <div key={label} className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-2 py-4 md:p-5 backdrop-blur-sm">
                <div style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#D4AF37] tabular-nums leading-none">
                  {String(value).padStart(2, '0')}
                </div>
                <div className="text-[#F5F0E8]/45 text-xs tracking-[0.15em] uppercase mt-2">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#notify"
              className="bg-[#D4AF37] text-[#0A1A3D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#e8c94a] transition-colors">
              Get Notified at Launch
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer"
              className="border border-[#D4AF37]/50 text-[#D4AF37] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-2">
              <WaIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#F5F0E8]/30 text-xs tracking-[0.25em] uppercase">Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel label="About Us" />
              <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Build Trust.<br />We Deliver Quality.
              </h2>
              <p className="text-[#F5F0E8]/65 text-lg leading-relaxed mb-5">
                SHAHZAD Builders & Developers is a premier real estate development company committed to
                creating landmark buildings that stand the test of time. Our flagship mixed-use project
                combines luxury residences, premium office spaces, and high-footfall commercial showrooms.
              </p>
              <p className="text-[#F5F0E8]/55 leading-relaxed mb-10">
                With deep roots in the Pakistani real estate market and an unwavering commitment to
                quality construction, we deliver projects that exceed expectations — on time, on standard,
                and on promise.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: '15+', label: 'Years Experience' },
                  { num: '500+', label: 'Happy Families' },
                  { num: '12', label: 'Floor Tower' },
                ].map(({ num, label }) => (
                  <div key={label} className="border-l-2 border-[#D4AF37] pl-4">
                    <div style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-3xl font-bold text-[#D4AF37]">{num}</div>
                    <div className="text-[#F5F0E8]/45 text-xs tracking-wide mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-[#132352]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1000&fit=crop&auto=format"
                  alt="SHAHZAD flagship building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3D]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#D4AF37] p-6 hidden md:block shadow-xl">
                <div style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-bold text-[#0A1A3D]">Q4 2026</div>
                <div className="text-[#0A1A3D]/75 text-xs tracking-wide font-semibold mt-0.5">Expected Possession</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ─── PROJECT HIGHLIGHTS ─── */}
      <section id="project" className="py-28 px-4 bg-[#0d2060]/25">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="The Project" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold mb-4">
              Flagship Mixed-Use Tower
            </h2>
            <p className="text-[#F5F0E8]/55 max-w-lg mx-auto text-base">
              12 floors of premium living and commercial space — designed to the highest standards of modern construction and lifestyle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📍', title: 'Prime Location', desc: "Situated on Main Boulevard, Johar Town, Lahore — Pakistan's fastest-growing mixed-use corridor." },
              { icon: '🏗️', title: 'Premium Construction', desc: 'Reinforced concrete structure with Italian marble lobbies, double-glazed windows, and top-tier imported finishes.' },
              { icon: '🔑', title: 'Flexible Possession', desc: 'Units available for booking now with possession scheduled Q4 2026 and flexible 2–4 year payment plans.' },
              { icon: '📐', title: 'G+12 Floors', desc: '48 apartments, 24 offices, and 8 ground-floor showrooms across ground plus 12 upper floors.' },
              { icon: '🌆', title: 'Panoramic Views', desc: "Upper-floor units offer open Lahore skyline views with expansive balconies and natural light." },
              { icon: '⚖️', title: 'NOC & Approvals Clear', desc: 'All regulatory approvals and NOC clearances in place. Full documentation transparency for every buyer.' },
            ].map(({ icon, title, desc }) => (
              <div key={title}
                className="border border-[#D4AF37]/18 bg-[#D4AF37]/3 p-7 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-default">
                <div className="text-3xl mb-5">{icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNITS ─── */}
      <section id="units" className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Available Units" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Units
            </h2>
            <p className="text-[#F5F0E8]/55 max-w-lg mx-auto">
              Browse by unit type and inquire directly — our sales team responds within hours.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex justify-center mb-10">
            <div className="border border-[#D4AF37]/25 flex">
              {(['Apartment', 'Office', 'Showroom'] as UnitType[]).map(type => (
                <button
                  key={type}
                  onClick={() => setActiveUnit(type)}
                  className={`px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeUnit === type
                      ? 'bg-[#D4AF37] text-[#0A1A3D]'
                      : 'text-[#F5F0E8]/55 hover:text-[#D4AF37]'
                  }`}
                >
                  {type}s
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredUnits.map(unit => (
              <div key={unit.id}
                className="border border-[#D4AF37]/18 bg-[#0d2060]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col">
                <div className="aspect-video overflow-hidden bg-[#132352] relative">
                  <img
                    src={`https://images.unsplash.com/photo-${unit.img}?w=600&h=380&fit=crop&auto=format`}
                    alt={unit.name}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 border rounded-full font-medium ${statusBadge(unit.status)}`}>
                    {unit.status}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-semibold mb-3 leading-snug">{unit.name}</h3>
                  <div className="grid grid-cols-2 gap-y-1.5 text-xs text-[#F5F0E8]/50 mb-4">
                    <span>Floor {unit.floor === 0 ? 'Ground' : unit.floor}</span>
                    <span>{unit.size.toLocaleString()} sq ft</span>
                    <span>{unit.facing}</span>
                    <span className="text-[#D4AF37] font-semibold text-sm">{unit.price}</span>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => setBookingUnit(unit)}
                      disabled={unit.status === 'Sold'}
                      className="flex-1 bg-[#D4AF37] text-[#0A1A3D] py-2.5 text-xs font-semibold hover:bg-[#e8c94a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                      {unit.status === 'Sold' ? 'Sold Out' : 'Inquire / Book'}
                    </button>
                    <a href={whatsappUrl(unit)} target="_blank" rel="noreferrer"
                      className="border border-[#D4AF37]/35 text-[#D4AF37] px-3 py-2.5 text-xs hover:bg-[#D4AF37]/10 transition-colors flex items-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING MODAL ─── */}
      {bookingUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#0A1A3D] border border-[#D4AF37]/35 w-full max-w-md p-8 relative shadow-2xl">
            <button onClick={() => setBookingUnit(null)}
              className="absolute top-4 right-5 text-[#F5F0E8]/35 hover:text-[#F5F0E8] text-3xl leading-none transition-colors">×</button>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-bold mb-1">Book / Inquire</h3>
            <p className="text-[#D4AF37] text-sm mb-6">{bookingUnit.name} &mdash; {bookingUnit.price}</p>
            <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setBookingUnit(null) }}>
              <input required placeholder="Full Name"
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              <input required type="tel" placeholder="Phone Number"
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              <input type="email" placeholder="Email (optional)"
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              <textarea placeholder="Message / Questions" rows={3}
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 resize-none rounded-none" />
              <button type="submit"
                className="bg-[#D4AF37] text-[#0A1A3D] py-3.5 font-semibold text-sm tracking-wide hover:bg-[#e8c94a] transition-colors">
                Submit Inquiry
              </button>
              <a href={whatsappUrl(bookingUnit)} target="_blank" rel="noreferrer"
                className="border border-[#D4AF37]/35 text-[#D4AF37] py-3 text-sm font-medium text-center hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-2">
                <WaIcon /> Continue on WhatsApp
              </a>
            </form>
          </div>
        </div>
      )}

      {/* ─── AMENITIES ─── */}
      <section id="amenities" className="py-28 px-4 bg-[#0d2060]/25">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Amenities" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold">
              World-Class Facilities
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {AMENITIES.map(({ icon, label }) => (
              <div key={label}
                className="border border-[#D4AF37]/15 bg-[#D4AF37]/3 p-5 flex flex-col items-center text-center gap-3 hover:border-[#D4AF37]/45 transition-colors group cursor-default">
                <span className="text-3xl">{icon}</span>
                <span className="text-[#F5F0E8]/65 text-sm group-hover:text-[#D4AF37] transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Gallery" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold">
              Renders & Progress
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((img, i) => (
              <div key={i}
                className={`overflow-hidden bg-[#132352] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}>
                <img
                  src={`https://images.unsplash.com/photo-${img.id}?w=${i === 0 ? '1000' : '600'}&h=${i === 0 ? '625' : '450'}&fit=crop&auto=format`}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAYMENT PLANS ─── */}
      <section className="py-28 px-4 bg-[#0d2060]/25">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Investment" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold mb-4">
              Flexible Payment Plans
            </h2>
            <p className="text-[#F5F0E8]/55 max-w-lg mx-auto">
              Book your unit with a minimum down payment and pay the remainder in easy monthly installments over 2–4 years.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: '2-Year Plan', down: '40%', months: '24', badge: '' },
              { plan: '3-Year Plan', down: '30%', months: '36', badge: 'Most Popular' },
              { plan: '4-Year Plan', down: '20%', months: '48', badge: '' },
            ].map(({ plan, down, months, badge }) => (
              <div key={plan}
                className={`border p-8 relative ${badge ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-[#D4AF37]/20 bg-[#0d2060]/20'}`}>
                {badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0A1A3D] text-xs font-bold px-3 py-1 tracking-widest whitespace-nowrap">
                    {badge.toUpperCase()}
                  </div>
                )}
                <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-bold mb-7 text-center">{plan}</h3>
                <div className="space-y-5 text-center mb-8">
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-5xl font-bold text-[#D4AF37]">{down}</div>
                    <div className="text-[#F5F0E8]/45 text-sm mt-1">Down Payment</div>
                  </div>
                  <div className="h-px bg-[#D4AF37]/20" />
                  <div>
                    <div className="text-xl font-semibold">{months} months</div>
                    <div className="text-[#F5F0E8]/45 text-sm mt-1">Easy Installments</div>
                  </div>
                </div>
                <a href="#notify"
                  className={`block text-center py-3 text-sm font-semibold transition-colors ${badge ? 'bg-[#D4AF37] text-[#0A1A3D] hover:bg-[#e8c94a]' : 'border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}>
                  Choose This Plan
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F5F0E8]/30 text-xs mt-8">
            * Plans are indicative. Final terms confirmed upon booking. Contact us for custom payment arrangements.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Testimonials" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Tariq Mahmood', role: 'Apartment Buyer', text: 'SHAHZAD delivered exactly what they promised. The build quality is exceptional and the team was transparent throughout the entire process. Highly recommended.' },
              { name: 'Amna Siddiqui', role: 'Office Unit Owner', text: 'Investing in a SHAHZAD property was the best financial decision I made. The location, amenities, and construction standard are truly top-tier.' },
              { name: 'Bilal Raza', role: 'Showroom Owner', text: 'Our showroom unit has driven significant business. The footfall from residential and office tenants is exactly what we needed to grow our brand.' },
            ].map(({ name, role, text }) => (
              <div key={name} className="border border-[#D4AF37]/15 p-8 hover:border-[#D4AF37]/35 transition-colors">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#F5F0E8]/65 leading-relaxed mb-6 italic text-sm">&ldquo;{text}&rdquo;</p>
                <div className="border-t border-[#D4AF37]/15 pt-5">
                  <div className="font-semibold text-sm">{name}</div>
                  <div className="text-[#D4AF37] text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTIFY / LEAD CAPTURE ─── */}
      <section id="notify" className="py-28 px-4 bg-[#D4AF37]/5 border-y border-[#D4AF37]/18">
        <div className="max-w-xl mx-auto text-center">
          <SectionLabel label="Stay Updated" />
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold mb-4">
            Get Notified at Launch
          </h2>
          <p className="text-[#F5F0E8]/55 mb-10">
            Be the first to access unit pricing and pre-booking offers when we officially launch.
          </p>

          {notifySubmitted ? (
            <div className="border border-[#D4AF37]/40 bg-[#D4AF37]/8 p-10">
              <div className="text-4xl mb-4">✓</div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-semibold mb-2">
                {"You're on the list!"}
              </p>
              <p className="text-[#F5F0E8]/55 text-sm">
                {"We'll be in touch as soon as we launch. Thank you for your interest in SHAHZAD Builders."}
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setNotifySubmitted(true) }} className="flex flex-col gap-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your Name"
                  value={notifyForm.name}
                  onChange={e => setNotifyForm({ ...notifyForm, name: e.target.value })}
                  className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
                <input required type="tel" placeholder="Phone Number"
                  value={notifyForm.phone}
                  onChange={e => setNotifyForm({ ...notifyForm, phone: e.target.value })}
                  className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              </div>
              <input type="email" placeholder="Email Address (optional)"
                value={notifyForm.email}
                onChange={e => setNotifyForm({ ...notifyForm, email: e.target.value })}
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              <select value={notifyForm.interest}
                onChange={e => setNotifyForm({ ...notifyForm, interest: e.target.value })}
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8]/65 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/55 rounded-none">
                <option value="">Interested in... (optional)</option>
                <option>Apartment</option>
                <option>Office</option>
                <option>Showroom</option>
                <option>Investment / Multiple Units</option>
              </select>
              <button type="submit"
                className="bg-[#D4AF37] text-[#0A1A3D] py-4 font-semibold tracking-wide hover:bg-[#e8c94a] transition-colors text-sm">
                Notify Me at Launch
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Contact Us" />
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold">
              Get In Touch
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="space-y-8">
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-semibold mb-5">Visit Our Sales Office</h3>
                <div className="space-y-4 text-[#F5F0E8]/65 text-sm">
                  {[
                    { icon: '📍', label: 'Address', val: 'Main Boulevard, Johar Town, Lahore, Punjab, Pakistan' },
                    { icon: '📞', label: 'Phone', val: '+92 300 1234567 · Mon–Sat, 9am–7pm' },
                    { icon: '✉️', label: 'Email', val: 'info@shahzadbuilders.com · Reply within 24h' },
                  ].map(({ icon, label, val }) => (
                    <div key={label} className="flex gap-4">
                      <span className="text-[#D4AF37] text-base mt-0.5 flex-shrink-0">{icon}</span>
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 font-semibold text-sm hover:bg-[#1db954] transition-colors">
                <WaIcon /> Chat on WhatsApp Now
              </a>
              {/* Map placeholder */}
              <div className="aspect-video bg-[#132352]/40 border border-[#D4AF37]/12 flex items-center justify-center">
                <div className="text-center text-[#F5F0E8]/25 text-sm">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div>Google Maps · Johar Town, Lahore</div>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-semibold mb-2">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Name" className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
                <input type="tel" placeholder="Phone" className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              </div>
              <input type="email" placeholder="Email" className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 rounded-none" />
              <select className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8]/65 px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/55 rounded-none">
                <option value="">What are you interested in?</option>
                <option>Apartment</option>
                <option>Office</option>
                <option>Showroom</option>
                <option>Investment Advice</option>
                <option>Site Visit</option>
              </select>
              <textarea placeholder="Your message..." rows={5}
                className="bg-[#132352]/50 border border-[#D4AF37]/20 text-[#F5F0E8] px-4 py-3 text-sm placeholder-[#F5F0E8]/30 focus:outline-none focus:border-[#D4AF37]/55 resize-none rounded-none" />
              <button type="submit"
                className="bg-[#D4AF37] text-[#0A1A3D] py-4 font-semibold tracking-wide hover:bg-[#e8c94a] transition-colors text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#D4AF37]/18 py-14 px-4 bg-[#060f24]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <img src={logoImg} alt="SHAHZAD Builders" className="h-16 object-contain mb-5" />
              <p className="text-[#F5F0E8]/40 text-sm leading-relaxed max-w-xs">
                Building landmark properties with trust, quality, and integrity. Your investment is our commitment.
              </p>
              <div className="flex gap-2 mt-5">
                {['IG', 'FB', 'YT'].map(s => (
                  <div key={s} className="w-9 h-9 border border-[#D4AF37]/18 flex items-center justify-center text-[#D4AF37]/50 text-xs hover:border-[#D4AF37]/55 hover:text-[#D4AF37] cursor-pointer transition-colors">
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Navigation</h4>
              <div className="flex flex-col gap-2 text-[#F5F0E8]/40 text-sm">
                {['About', 'Project', 'Units', 'Amenities', 'Gallery', 'Payment Plans', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#D4AF37] transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Units</h4>
              <div className="flex flex-col gap-2 text-[#F5F0E8]/40 text-sm mb-6">
                <a href="#units" className="hover:text-[#D4AF37] transition-colors">Apartments (2BR, 3BR, 4BR)</a>
                <a href="#units" className="hover:text-[#D4AF37] transition-colors">Executive Offices</a>
                <a href="#units" className="hover:text-[#D4AF37] transition-colors">Commercial Showrooms</a>
              </div>
              <h4 className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Contact</h4>
              <div className="flex flex-col gap-1.5 text-[#F5F0E8]/40 text-sm">
                <span>+92 300 1234567</span>
                <span>info@shahzadbuilders.com</span>
                <span>Johar Town, Lahore</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#D4AF37]/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[#F5F0E8]/25 text-xs">
            <span>&copy; 2026 SHAHZAD Builders & Developers. All rights reserved.</span>
            <span>Privacy Policy &middot; Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a href={whatsappUrl()} target="_blank" rel="noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-2xl hover:bg-[#1db954] transition-colors hover:scale-110 active:scale-95 duration-200">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
