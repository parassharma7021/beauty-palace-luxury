import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Instagram, Facebook, MapPin, Phone, Mail, MessageCircle,
  Sparkles, Scissors, Palette, Heart, Award, GraduationCap,
  Menu, X, Star, ChevronDown, Users, Clock, ShieldCheck,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import founder from "@/assets/founder.png.asset.json";
import storefront from "@/assets/storefront.png.asset.json";
import int1 from "@/assets/int1.png.asset.json";
import int2 from "@/assets/int2.png.asset.json";
import int3 from "@/assets/int3.png.asset.json";
import int4 from "@/assets/int4.png.asset.json";
import int5 from "@/assets/int5.png.asset.json";
import int6 from "@/assets/int6.png.asset.json";
import nails from "@/assets/nails.png.asset.json";
import heroImg from "@/assets/hero.jpg";
import bridalImg from "@/assets/bridal.jpg";
import makeupImg from "@/assets/makeup.jpg";
import academyImg from "@/assets/academy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandigarh Beauty Palace & Training Institute | Luxury Salon in Ambala" },
      { name: "description", content: "Premium unisex luxury salon & Gills Makeover Academy in Ambala. Bridal makeup, hair, skin, nails, hair patches & professional beauty courses by Suresh Kumar Gill." },
      { property: "og:title", content: "Chandigarh Beauty Palace & Training Institute" },
      { property: "og:description", content: "Luxury salon & beauty academy in Ambala — where beauty meets elegance." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        name: "Chandigarh Beauty Palace & Training Institute",
        image: storefront.url,
        telephone: "+917206006006",
        email: "sureshkumargill7@gmail.com",
        founder: "Suresh Kumar Gill",
        address: {
          "@type": "PostalAddress",
          streetAddress: "108–109, IDS Showroom Complex, Model Town, Urban Estate, Sector 7",
          addressLocality: "Ambala",
          addressRegion: "Haryana",
          postalCode: "134003",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.instagram.com/gillsmakeover",
          "https://www.facebook.com/suresh.gill.56",
        ],
      }),
    }],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/917206006006?text=Hi%20Chandigarh%20Beauty%20Palace%2C%20I%27d%20like%20to%20book%20an%20appointment.";
const INSTAGRAM = "https://www.instagram.com/gillsmakeover?igsh=emoxazl4dW1mN3dn";
const FACEBOOK = "https://www.facebook.com/suresh.gill.56?mibextid=rS40aB7S9Ucbxw6v";
const MAPS = "https://maps.app.goo.gl/Chpucj6Q1wrScRKcA";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Palette, title: "Bridal & Party Makeup", desc: "Signature bridal artistry, HD & airbrush makeup crafted for your most beautiful moments." },
  { icon: Scissors, title: "Hair Styling & Treatments", desc: "Precision cuts, colour, keratin, botox and luxury hair spa rituals for lustrous strands." },
  { icon: Sparkles, title: "Skin & Facial Therapies", desc: "Advanced facials, glow treatments and result-driven skincare tailored to your skin story." },
  { icon: Heart, title: "Nail Studio", desc: "Extensions, gel, chrome, French, and custom nail art in a hygienic couture nail bar." },
  { icon: Award, title: "Hair Patch & Extensions", desc: "Non-surgical hair patches, tape-ins, keratin bonds & clip-ins by certified specialists." },
  { icon: Users, title: "Unisex Salon", desc: "A refined experience curated equally for him and her — grooming redefined." },
];

const COURSES = [
  { title: "Professional Makeup Artistry", duration: "3 Months", level: "Beginner → Pro" },
  { title: "Advanced Hair Styling", duration: "3 Months", level: "Certified" },
  { title: "Skin & Beauty Therapy", duration: "2 Months", level: "Diploma" },
  { title: "Nail Technician Course", duration: "1 Month", level: "Certified" },
  { title: "Bridal Makeup Masterclass", duration: "6 Weeks", level: "Advanced" },
  { title: "Complete Beautician Diploma", duration: "6 Months", level: "All-in-One" },
];

const TESTIMONIALS = [
  { name: "Ritika Sharma", role: "Bride", quote: "My bridal look was pure magic. Suresh sir and his team made me feel like royalty on my big day." },
  { name: "Aanya Malhotra", role: "Regular Client", quote: "The ambience, the service, the results — nothing in Ambala comes close to Chandigarh Beauty Palace." },
  { name: "Priya Verma", role: "Academy Graduate", quote: "Gills Makeover Academy changed my life. The hands-on training helped me start my own studio." },
  { name: "Neha Kapoor", role: "Bride", quote: "Flawless skin prep, dreamy makeup and hair that held all day. Absolutely worth every penny." },
];

const FAQ = [
  { q: "Do I need to book an appointment in advance?", a: "Yes, we recommend booking via WhatsApp at +91 7206006006 to ensure your preferred artist and time slot, especially on weekends and during wedding season." },
  { q: "Do you offer bridal packages?", a: "Absolutely. We offer bespoke bridal packages including trials, pre-bridal skincare, engagement, sangeet, wedding and reception looks." },
  { q: "Are the beauty courses certified?", a: "Yes. Gills Makeover Academy provides industry-recognised certifications along with hands-on salon-floor training." },
  { q: "Do you provide hair patch services?", a: "Yes, we are hair patch specialists offering premium non-surgical solutions with natural-looking, undetectable results." },
  { q: "Is the salon unisex?", a: "Yes, we welcome all guests. Our salon offers dedicated luxury experiences for both men and women." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Academy />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <FaqSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft py-2" : "py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Gills Makeover Academy" className="h-11 w-11 rounded-full object-cover ring-1 ring-rose-gold/40" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-base font-semibold text-plum">Chandigarh Beauty Palace</div>
            <div className="text-[10px] tracking-[0.25em] text-rose-gold-deep uppercase">& Training Institute</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-rose-gold-deep">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-rose px-5 py-2.5 text-sm font-medium text-white shadow-luxe transition-transform hover:scale-105">
            <MessageCircle className="h-4 w-4" /> Book Now
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden rounded-full glass p-2">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass mx-4 mt-2 rounded-2xl p-4">
          <nav className="flex flex-col gap-2">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-blush/40">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-4 py-2.5 text-sm font-medium text-white">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-gradient-soft pt-28 pb-16 lg:pt-32">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blush/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-rose-gold-deep">
            <Sparkles className="h-3.5 w-3.5" /> Since 1999 · Ambala
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-plum sm:text-6xl lg:text-7xl">
            Where Beauty
            <br />
            <span className="text-gradient-rose italic">meets Elegance</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            A luxury unisex salon and premier beauty academy crafted by <strong className="text-foreground">Suresh Kumar Gill</strong>.
            Signature bridal artistry, expert hair &amp; skin rituals, and career-defining beauty education under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition-transform hover:scale-105">
              <MessageCircle className="h-4 w-4" /> Book an Appointment
            </a>
            <a href="#academy"
              className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 bg-white/60 px-7 py-3.5 text-sm font-medium text-plum backdrop-blur hover:bg-white">
              Explore Academy <ChevronDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            <Stat n="25+" label="Years of Artistry" />
            <Stat n="5,000+" label="Brides Styled" />
            <Stat n="1,200+" label="Students Trained" />
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe ring-1 ring-rose-gold/20">
            <img src={heroImg} alt="Luxury bridal styling at Chandigarh Beauty Palace" width={1600} height={1808} className="h-[560px] w-full object-cover lg:h-[640px]" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden glass rounded-2xl p-4 shadow-soft md:flex md:items-center md:gap-3">
            <div className="flex -space-x-2">
              {[int2, int5, int3].map((i, k) => (
                <img key={k} src={i.url} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1 font-semibold">
                <Star className="h-3.5 w-3.5 fill-rose-gold text-rose-gold" /> 4.9 / 5
              </div>
              <div className="text-muted-foreground">Loved by our guests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-rose-gold-deep">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Bridal Makeup", "Hair Extensions", "Hair Patch", "Skin Therapy", "Nail Art", "Keratin", "Academy", "Party Makeup"];
  return (
    <div className="border-y border-rose-gold/20 bg-white/50 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs uppercase tracking-[0.3em] text-rose-gold-deep sm:text-sm">
        {items.map((i, k) => (
          <span key={k} className="flex items-center gap-3">
            <Sparkles className="h-3 w-3" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={founder.url} alt="Suresh Kumar Gill — Founder" className="h-[540px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden max-w-[240px] rounded-2xl bg-white p-5 shadow-soft ring-1 ring-rose-gold/20 sm:block">
            <div className="font-script text-2xl text-rose-gold-deep">Suresh Kumar Gill</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Founder & Master Artist</div>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Our Story</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            Crafting Confidence.<br /> <span className="italic text-gradient-rose">Celebrating Beauty.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Founded by visionary artist <strong className="text-foreground">Suresh Kumar Gill</strong>, Chandigarh Beauty Palace has been Ambala's most trusted address for luxury beauty for over two decades. Our sanctuary blends timeless glamour with modern techniques, delivering results that make every guest feel breathtakingly beautiful.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Alongside the salon, our sister institute — <strong className="text-foreground">Gills Makeover Academy</strong> — nurtures the next generation of beauty professionals with hands-on training, industry mentorship and certified courses.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Award, title: "Award-winning Team" },
              { icon: ShieldCheck, title: "Hygienic & Certified" },
              { icon: Heart, title: "Personalised Care" },
              { icon: GraduationCap, title: "Trusted Educators" },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-3 rounded-xl bg-white/70 p-4 shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-rose text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Signature Services</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            A Full Spectrum of <span className="italic text-gradient-rose">Luxury Beauty</span>
          </h2>
          <p className="mt-4 text-muted-foreground">From bridal glow to daily grooming, every service is a couture experience tailored to you.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-soft ring-1 ring-white/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-rose text-white shadow-luxe transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-plum">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blush/40 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Gills Makeover Academy</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            Build a Career in <span className="italic text-gradient-rose">Beauty</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Learn from India's leading beauty educators. Our courses combine timeless craft with the latest global techniques, offering real-world salon experience so you graduate ready to lead.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {COURSES.map((c) => (
              <div key={c.title} className="group rounded-2xl border border-rose-gold/20 bg-white p-5 transition-all hover:border-rose-gold hover:shadow-soft">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-rose-gold-deep">
                  <Clock className="h-3 w-3" /> {c.duration} · {c.level}
                </div>
                <div className="mt-2 font-serif text-lg text-plum">{c.title}</div>
              </div>
            ))}
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-sm font-medium text-white shadow-luxe hover:scale-105 transition-transform">
            <GraduationCap className="h-4 w-4" /> Enquire About Admission
          </a>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={academyImg} alt="Beauty academy" className="col-span-2 h-64 w-full rounded-3xl object-cover shadow-luxe sm:h-80" />
            <img src={makeupImg} alt="Makeup" className="h-48 w-full rounded-2xl object-cover shadow-soft sm:h-56" />
            <img src={bridalImg} alt="Bridal artistry" className="h-48 w-full rounded-2xl object-cover shadow-soft sm:h-56" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    { src: int1.url, alt: "Salon reception" },
    { src: int5.url, alt: "Salon interior" },
    { src: bridalImg, alt: "Bridal makeup" },
    { src: int2.url, alt: "Wash station" },
    { src: nails.url, alt: "Nail art" },
    { src: int6.url, alt: "Styling area" },
    { src: int3.url, alt: "Nail bar" },
    { src: makeupImg, alt: "Makeup close-up" },
    { src: int4.url, alt: "Salon floor" },
  ];
  return (
    <section id="gallery" className="relative bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Gallery</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
              Step Inside Our <span className="italic text-gradient-rose">Luxury Sanctuary</span>
            </h2>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 bg-white px-5 py-2.5 text-sm font-medium text-plum hover:bg-blush/30">
            <Instagram className="h-4 w-4" /> @gillsmakeover
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {shots.map((s, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft ${i % 5 === 0 ? "md:row-span-2" : ""}`}>
              <img src={s.src} alt={s.alt} loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 5 === 0 ? "h-full min-h-[400px]" : "h-56 sm:h-64"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, t: "25+ Years of Legacy", d: "A trusted name in Ambala since 1999, with generations of loyal clients." },
    { icon: Sparkles, t: "Luxury Ambience", d: "A sanctuary designed for indulgence, calm and total transformation." },
    { icon: Users, t: "Master Artists", d: "A hand-picked team of certified professionals led by Suresh Kumar Gill." },
    { icon: ShieldCheck, t: "Hygiene First", d: "Sterilised tools, single-use disposables and premium global products only." },
  ];
  return (
    <section className="relative overflow-hidden bg-plum py-24 text-primary-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,150,140,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(200,130,120,0.2),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold">Why Choose Us</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            An Address of <span className="italic text-gradient-rose">Distinction</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="glass-dark rounded-2xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-rose">
                <i.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{i.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Guest Stories</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            Loved by <span className="italic text-gradient-rose">Thousands</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-rose-gold/10">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-rose-gold text-rose-gold" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <footer className="mt-6 border-t border-border pt-4">
                <div className="font-serif text-base text-plum">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            Questions, <span className="italic text-gradient-rose">Answered</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQ.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-rose-gold/10">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-serif text-lg text-plum">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-rose-gold-deep transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Get in Touch</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
            Book Your <span className="italic text-gradient-rose">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground">We'd love to welcome you. Reach out for appointments, courses or bridal consultations.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={MapPin} title="Visit Us"
              body="108–109, IDS Showroom Complex, Model Town, Urban Estate, Sector 7, Ambala, Haryana – 134003"
              link={{ href: MAPS, label: "Open in Google Maps" }} />
            <InfoCard icon={Phone} title="Call / WhatsApp" body="+91 7206006006" link={{ href: WHATSAPP, label: "Chat on WhatsApp" }} />
            <InfoCard icon={Mail} title="Email" body="sureshkumargill7@gmail.com" link={{ href: "mailto:sureshkumargill7@gmail.com", label: "Send email" }} />
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-rose py-3.5 text-sm font-medium text-white shadow-luxe hover:scale-[1.02] transition-transform">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-rose-gold/40 bg-white py-3.5 text-sm font-medium text-plum hover:bg-blush/30">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl bg-white p-8 shadow-luxe ring-1 ring-rose-gold/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Interested In</label>
                <select className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/30">
                  <option>Bridal Makeup</option>
                  <option>Hair Services</option>
                  <option>Skin Treatments</option>
                  <option>Nail Services</option>
                  <option>Hair Patch / Extensions</option>
                  <option>Academy / Courses</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/30" />
              </div>
            </div>
            <button type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-sm font-medium text-white shadow-luxe hover:scale-[1.01] transition-transform sm:w-auto">
              {sent ? "Thank you — we'll be in touch!" : "Send Enquiry"}
            </button>
          </form>
        </div>
        <div className="mt-16 overflow-hidden rounded-3xl shadow-luxe ring-1 ring-rose-gold/10">
          <iframe
            title="Chandigarh Beauty Palace location"
            src="https://www.google.com/maps?q=IDS+Showroom+Complex+Model+Town+Sector+7+Ambala&output=embed"
            width="100%" height="420" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" className="block w-full" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body, link }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string; link?: { href: string; label: string } }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-rose-gold/10">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-rose text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="font-serif text-lg text-plum">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
          {link && (
            <a href={link.href} target="_blank" rel="noreferrer"
              className="mt-2 inline-block text-xs font-medium uppercase tracking-widest text-rose-gold-deep hover:underline">
              {link.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required}
        className="mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/30" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-plum text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Gills Makeover Academy" className="h-12 w-12 rounded-full ring-1 ring-rose-gold/40" />
            <div>
              <div className="font-serif text-lg">Chandigarh Beauty Palace</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-rose-gold">& Training Institute</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A luxury salon and premier beauty academy in Ambala, founded by master artist Suresh Kumar Gill. Where every guest is celebrated and every student is empowered.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-gradient-rose">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-gradient-rose">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-gradient-rose">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="font-serif text-lg">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-rose-gold">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-serif text-lg">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold" /> 108–109, IDS Complex, Model Town, Sector 7, Ambala – 134003</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-rose-gold" /> +91 7206006006</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-rose-gold" /> sureshkumargill7@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} Chandigarh Beauty Palace & Training Institute. All rights reserved.</div>
          <div>Crafted with <Heart className="inline h-3 w-3 fill-rose-gold text-rose-gold" /> in Ambala</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe animate-pulse-soft hover:scale-110 transition-transform">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
