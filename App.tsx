import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sun,
  Palmtree,
  MapPin,
  Users,
  Bed,
  Calendar as CalendarIcon,
  Mail,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Clock,
  Navigation,
  Info,
  Quote,
  Star,
  Zap,
  Sparkles,
  Headphones,
  Moon,
  Tag,
  Waves,
  Sunrise,
  Monitor,
  Wifi,
  Wind,
  Accessibility,
  Sunset,
  RotateCcw,
  Wallet,
  ShieldCheck,
  Instagram,
  Facebook,
  Cookie,
  ArrowRight
} from 'lucide-react';
import { translations } from './i18n';
import { Language, Review } from './types';

// Luxury Logo Component
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="45" r="20" stroke="currentColor" strokeWidth="2.2" />
    <path d="M20 75C30 65 40 65 50 75C60 85 70 85 80 75" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M15 45C15 25.67 30.67 10 50 10C69.33 10 85 25.67 85 45V85H15V45Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="2.2" />
  </svg>
);

const AirbnbLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.411-6.202 3.611l-.332.022c-.158.007-.291.01-.397.01-3.48 0-6.356-2.417-6.356-6.479 0-1.029.253-2.04.786-3.313l.119-.283.137-.314c.983-2.296 5.101-11.05 7.101-15.143l.533-1.024C12.536 1.963 13.991 1 16 1zm0 2.667c-1.127 0-1.99.646-3.033 2.502l-.131.25c-2.083 4.14-5.834 11.965-7.042 14.937-.504 1.2-.661 2.016-.661 2.644 0 2.618 1.83 4 3.689 4 1.398 0 3.535-1.13 5.46-3.084l.65-.678.07-.07.07.07.65.678c1.925 1.953 4.062 3.084 5.46 3.084 1.859 0 3.69-1.382 3.69-4.001 0-.627-.156-1.442-.656-2.637l-.004-.01c-1.205-2.955-5.066-11.024-7.145-15.187l-.146-.282c-1.055-1.87-1.918-2.516-3.03-2.516zm.116 11.233c1.78.07 3.313 1.135 4.314 3.125l.135.289.06.14.07.19a4 4 0 011.057 2.66v.124l-.003.048c-.042 1.488-.696 2.584-1.925 3.161l-.226.095-.291.107-.251.08c-1.161.341-2.045.394-3.053.167l-.234-.06-.184-.055-.184.055-.234.06c-1.008.227-1.892.174-3.053-.167l-.251-.08-.291-.107-.226-.095c-1.229-.577-1.883-1.673-1.925-3.161l-.003-.048v-.124a4 4 0 011.057-2.66l.07-.19.06-.14.135-.289c1.001-1.99 2.533-3.055 4.314-3.125zm-.116 2.667c-.822 0-1.57.51-2.215 1.777l-.093.201-.059.137c-.332.846-.499 1.487-.499 1.985 0 .867.351 1.405 1.11 1.636l.206.059c.677.164 1.15.164 1.346.06l.204-.12.015-.01.074-.08a1.666 1.666 0 00.126-.179c.759-.23 1.11-.769 1.11-1.636 0-.498-.167-1.139-.499-1.985l-.059-.137-.093-.2c-.645-1.268-1.393-1.778-2.215-1.778z" />
  </svg>
);

// Image Carousel Component for Distribution Section
const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt={`Apartment view ${idx + 1}`}
            className="w-full h-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* Small manual buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prev}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm text-terracotta-900 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg active:scale-90"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm text-terracotta-900 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg active:scale-90"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-[2rem] border border-slate-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-900/5 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
          ))}
        </div>
        {review.source === 'Airbnb' && (
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-terracotta-600">
            <AirbnbLogo className="w-4 h-4 flex-shrink-0" />
            <span>Airbnb</span>
          </div>
        )}
      </div>

      <div className="relative mb-4 flex-grow">
        <p className="text-slate-600 italic leading-relaxed relative z-10 text-sm md:text-base">
          "{review.text}"
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <div className="font-bold text-slate-800 text-sm md:text-base">{review.name}</div>
          <div className="flex justify-between items-center w-full">
            <div className="text-[10px] text-terracotta-600 font-bold tracking-wider uppercase">{review.country}</div>
            <div className="text-[10px] text-slate-300 font-medium">{review.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCarousel: React.FC<{ items: Review[], title: string, subtitle: string }> = ({ items, title, subtitle }) => {
  const [isPaused, setIsPaused] = useState(false);
  // Repeat items multiple times for seamless scrolling
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-24 bg-terracotta-600 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">{title}</h2>
          <p className="text-terracotta-50 max-w-2xl mx-auto opacity-80 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className="flex overflow-hidden relative group cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 animate-marquee ${isPaused ? 'pause-animation' : ''}`}
          style={{ width: 'max-content' }}
        >
          {scrollItems.map((review, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[450px] shrink-0 h-full"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for smooth entry/exit fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-terracotta-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-terracotta-600 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

const GalleryView: React.FC<{
  items: { url: string; category: string; alt: string }[];
  t: any;
  navigateTo: (view: any, sectionId?: string) => void;
  lang: Language;
  setLang: (l: Language) => void
}> = ({ items, t, navigateTo, lang, setLang }) => {
  const [mainFilter, setMainFilter] = useState<'apartment' | 'pools' | 'surroundings'>('apartment');
  const [subFilter, setSubFilter] = useState<string | null>(null);

  const apartmentSubCategories = ['living', 'room1', 'room2', 'kitchen', 'dining', 'azotea', 'bathroom'];

  const filteredItems = useMemo(() => {
    if (mainFilter === 'apartment') {
      if (subFilter) return items.filter(img => img.category === subFilter);
      return items.filter(img => apartmentSubCategories.includes(img.category));
    }
    return items.filter(img => img.category === mainFilter);
  }, [mainFilter, subFilter, items]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-6 border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('main')} className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 text-terracotta-900 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(72,36,23,0.3)]" />
            <div className="text-xl md:text-2xl font-serif font-bold tracking-tight text-terracotta-900 transition-all duration-1000 group-hover:tracking-[0.15em] group-hover:text-terracotta-700">
              Anfi Beach Apartment
            </div>
          </button>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('main', 'booking')}
                className="hidden sm:block px-5 py-2 rounded-full font-bold text-sm transition-all bg-terracotta-600 text-white hover:bg-terracotta-700 shadow-md active:scale-95"
              >
                {t.hero.cta_book}
              </button>

              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent border border-slate-200 rounded px-2 py-1 text-sm outline-none text-slate-900 transition-colors hover:border-terracotta-300"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="no">NO</option>
              </select>
            </div>

            <button
              onClick={() => navigateTo('main')}
              className="text-slate-600 hover:text-terracotta-600 font-bold flex items-center gap-2 transition-colors text-sm"
            >
              <RotateCcw size={18} />
              <span className="hidden md:inline">{t.gallery.backToHome}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{t.gallery.title}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </div>

        {/* Hierarchical Filters */}
        <div className="space-y-6 mb-12">
          {/* Main Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {['apartment', 'pools', 'surroundings'].map((key) => (
              <button
                key={key}
                onClick={() => {
                  setMainFilter(key as any);
                  setSubFilter(null);
                }}
                className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest ${mainFilter === key ? 'bg-terracotta-600 text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                {t.gallery.categories[key as keyof typeof t.gallery.categories]}
              </button>
            ))}
          </div>

          {/* Apartment Sub-categories */}
          {mainFilter === 'apartment' && (
            <div className="flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
              <button
                onClick={() => setSubFilter(null)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${subFilter === null ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}
              >
                {lang === 'es' ? 'Ver todo' : lang === 'no' ? 'Se alt' : 'View all'}
              </button>
              {apartmentSubCategories.map((key) => (
                <button
                  key={key}
                  onClick={() => setSubFilter(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${subFilter === key ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}
                >
                  {t.gallery.categories[key as keyof typeof t.gallery.categories]}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="group aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 relative shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.alt}</span>
                <span className="text-terracotta-200 text-xs uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {t.gallery.categories[item.category as keyof typeof t.gallery.categories] || item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-serif italic text-xl">
            {lang === 'es' ? 'Próximamente más fotografías...' : lang === 'no' ? 'Flere bilder kommer snart...' : 'More photos coming soon...'}
          </div>
        )}
      </div>

      {/* Full Footer for Gallery View */}
      <footer className="bg-terracotta-900 text-white py-20 border-t border-terracotta-800 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-terracotta-800 pb-16">
            <div>
              <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => navigateTo('main')}>
                <Logo className="w-12 h-12 text-terracotta-200 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
                <div className="text-3xl font-serif font-bold text-terracotta-200 transition-all duration-1000 group-hover:tracking-wider group-hover:text-white">Anfi Beach Apartment</div>
              </div>
              <p className="text-terracotta-100/70 max-w-xs">{t.hero.subtitle}</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-terracotta-100 uppercase tracking-widest text-sm">Links</h4>
              <ul className="space-y-4 text-terracotta-100/60">
                <li><button onClick={() => navigateTo('main')} className="hover:text-white transition-colors block text-left">{t.gallery.backToHome}</button></li>
                <li><button onClick={() => navigateTo('legal')} className="hover:text-white transition-colors block text-left">{t.footer.legal}</button></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors block text-left">{t.footer.privacy}</button></li>
                <li><button onClick={() => navigateTo('cookies')} className="hover:text-white transition-colors block text-left">{lang === 'es' ? 'Política de Cookies' : lang === 'no' ? 'Informasjonskapsler' : 'Cookie Policy'}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-terracotta-100 uppercase tracking-widest text-sm">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-terracotta-800 flex items-center justify-center text-terracotta-100 hover:bg-terracotta-600 hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-terracotta-800 flex items-center justify-center text-terracotta-100 hover:bg-terracotta-600 hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-terracotta-300/50 text-sm">
            {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [view, setView] = useState<'main' | 'legal' | 'privacy' | 'cookies' | 'gallery'>('main');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'custom' | 'rejected' | null>(null);
  const [cookieLoaded, setCookieLoaded] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState({ analytics: false, marketing: false });
  const [showCookieCustomize, setShowCookieCustomize] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [visitorCount] = useState(() => Math.floor(Math.random() * 70) + 30);

  const [viewDate, setViewDate] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Ensure scroll to top on mount
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [bookedDates, setBookedDates] = useState<{ start: Date; end: Date }[]>([]);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const ICAL_URL = "https://www.airbnb.es/calendar/ical/1085260143807860616.ics?t=54bfcb89982d408390a60f549fe8e3eb";
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(ICAL_URL)}`;

        const response = await fetch(proxyUrl);
        const text = await response.text();

        const events: { start: Date; end: Date }[] = [];
        const lines = text.split('\n');
        let currentEvent: { start?: Date; end?: Date } = {};

        lines.forEach(line => {
          if (line.startsWith('BEGIN:VEVENT')) {
            currentEvent = {};
          } else if (line.startsWith('DTSTART')) {
            const dateStr = line.split(':')[1]?.trim(); // e.g., 20240315
            if (dateStr) {
              const y = parseInt(dateStr.substring(0, 4));
              const m = parseInt(dateStr.substring(4, 6)) - 1;
              const d = parseInt(dateStr.substring(6, 8));
              currentEvent.start = new Date(y, m, d);
            }
          } else if (line.startsWith('DTEND')) {
            const dateStr = line.split(':')[1]?.trim();
            if (dateStr) {
              const y = parseInt(dateStr.substring(0, 4));
              const m = parseInt(dateStr.substring(4, 6)) - 1;
              const d = parseInt(dateStr.substring(6, 8));
              currentEvent.end = new Date(y, m, d);
            }
          } else if (line.startsWith('END:VEVENT')) {
            if (currentEvent.start && currentEvent.end) {
              events.push(currentEvent as { start: Date; end: Date });
            }
          }
        });

        setBookedDates(events);
      } catch (error) {
        console.error("Error fetching calendar:", error);
      } finally {
        setIsCalendarLoading(false);
      }
    };

    fetchCalendar();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored === 'accepted' || stored === 'rejected' || stored === 'custom') {
      setCookieConsent(stored);
    }
    const storedPrefs = localStorage.getItem('cookiePrefs');
    if (storedPrefs) {
      try { setCookiePrefs(JSON.parse(storedPrefs)); } catch { /* ignore */ }
    }
    setCookieLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSocialProof(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleCookieAccept = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    setCookiePrefs(prefs);
    setCookieConsent('accepted');
  };

  const handleCookieReject = () => {
    const prefs = { analytics: false, marketing: false };
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    setCookiePrefs(prefs);
    setCookieConsent('rejected');
  };

  const handleCookieSave = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePrefs', JSON.stringify(cookiePrefs));
    setCookieConsent('custom');
    setShowCookieCustomize(false);
  };

  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xykngozr", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const body = await response.json().catch(() => ({}));
        console.error("Formspree error", response.status, body);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network error", error);
      setFormStatus('error');
    }
  };

  const calendarData = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sunday

    // Check which days are booked based on real iCal data
    const mockBooked: number[] = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const currentDay = new Date(year, month, d);
      const isBooked = bookedDates.some(event => {
        // DTEND in iCal is exclusive (the day the guest leaves)
        // Check if currentDay is between start (inclusive) and end (exclusive)
        return currentDay >= event.start && currentDay < event.end;
      });
      if (isBooked) mockBooked.push(d);
    }

    return { daysInMonth, firstDayOfWeek, mockBooked };
  }, [viewDate, bookedDates]);

  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const monthName = viewDate.toLocaleString(lang === 'es' ? 'es-ES' : lang === 'no' ? 'no-NO' : 'en-US', { month: 'long', year: 'numeric' });

  // Component references for icons
  const benefitIcons = [Clock, Moon, Tag, Sparkles, Headphones];
  const enjoyIcons = [Sun, Waves, Sunrise];
  const distributionIcons = [Users, Bed, Moon, Monitor, Wifi, Waves];
  const surroundingsIcons = [Waves, Accessibility, Sun];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigateTo = (newView: typeof view, sectionId?: string) => {
    setView(newView);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (view === 'gallery') {
    const galleryItems = [
      { url: '/hero-image.png', category: 'azotea', alt: 'Vistas mar desde azotea' },
      { url: '/pool-1.jpg', category: 'pools', alt: 'Piscina' },
      { url: '/pool-2.jpg', category: 'pools', alt: 'Piscina' },
      { url: '/living-1.png', category: 'living', alt: 'Salón del apartamento (Vista 1)' },
      { url: '/living-2.png', category: 'living', alt: 'Salón del apartamento (Vista 2)' },
      { url: '/living-3.png', category: 'living', alt: 'Salón del apartamento (Vista 3)' },
      { url: '/bedroom1-real.png', category: 'room1', alt: 'Dormitorio principal (Habitación 1)' },
      { url: '/tocadorhabitacion.png', category: 'room1', alt: 'Tocador Habitación 1' },
      { url: '/bedroom2-real.png', category: 'room2', alt: 'Dormitorio 2 (Planta 1)' },
      { url: '/habitacionplantabaja1.png', category: 'room2', alt: 'Habitación 2 planta baja' },
      { url: '/kitchen-1.png', category: 'kitchen', alt: 'Cocina equipada (Vista 1)' },
      { url: '/kitchen-2.png', category: 'kitchen', alt: 'Cocina equipada (Vista 2)' },
      { url: '/cocina1.png', category: 'kitchen', alt: 'Cocina (Vista 3)' },
      { url: '/cafetera.png', category: 'kitchen', alt: 'Cafetera' },
      { url: '/dining-real.png', category: 'dining', alt: 'Zona de comedor real' },
      { url: '/bathroom-real.png', category: 'bathroom', alt: 'Baño principal' },
      { url: '/ducha.png', category: 'bathroom', alt: 'Ducha' },
      { url: '/accesobaño.png', category: 'bathroom', alt: 'Acceso al baño' },
      { url: '/recibidor.png', category: 'living', alt: 'Recibidor' },
      { url: '/escaleras2planta.png', category: 'living', alt: 'Escaleras segunda planta' },
      { url: '/terraza1.png', category: 'azotea', alt: 'Terraza' },
      { url: '/surroundings-beach.jpg', category: 'surroundings', alt: 'Acceso a la playa' },
      { url: '/surroundings.jpg', category: 'surroundings', alt: 'Vistas de la bahía y puerto' },
      { url: '/surroundings-market.jpg', category: 'surroundings', alt: 'Supermercado cercano' },
      { url: '/anfi.png', category: 'surroundings', alt: 'Anfi del Mar' },
      { url: '/ascensorplaya.png', category: 'surroundings', alt: 'Ascensor a la playa' },
      { url: '/entorno.png', category: 'surroundings', alt: 'Entorno' },
      { url: '/horariosupermercado.png', category: 'surroundings', alt: 'Horario supermercado' }
    ];
    return <GalleryView items={galleryItems} t={t} navigateTo={navigateTo} lang={lang} setLang={setLang} />;
  }

  if (view !== 'main') {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation for Legal Pages */}
        <nav className="py-6 border-b border-slate-100 bg-white sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button onClick={() => navigateTo('main')} className="flex items-center gap-3 group">
              <Logo className="w-8 h-8 text-terracotta-900 group-hover:scale-110 transition-transform" />
              <div className="text-xl font-serif font-bold text-terracotta-900">Anfi Beach</div>
            </button>
            <button
              onClick={() => navigateTo('main')}
              className="text-slate-600 hover:text-terracotta-600 font-bold flex items-center gap-2 transition-colors"
            >
              <RotateCcw size={18} />
              {lang === 'es' ? 'Volver al Inicio' : lang === 'no' ? 'Tilbake til start' : 'Back to Home'}
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 max-w-4xl">
          {view === 'legal' && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-serif text-slate-900 mb-2 border-b pb-4">Aviso Legal</h1>
              <p className="text-xs text-slate-400 mb-8">Última actualización: marzo de 2026</p>
              <div className="space-y-8 text-slate-600 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">1. Datos Identificativos</h2>
                  <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Titular:</strong> Anfi Beach Apartment</li>
                    <li><strong>Domicilio:</strong> Calle Goya, Mogán, Gran Canaria, España</li>
                    <li><strong>Correo electrónico:</strong> booking@anfibeach.com</li>
                    <li><strong>Actividad:</strong> Alojamiento turístico vacacional (vivienda vacacional)</li>
                    <li><strong>Registro turístico:</strong> Inscrito en el Registro General de Empresas, Actividades y Establecimientos Turísticos de Canarias conforme al Decreto 113/2015, de 22 de mayo.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Objeto y Condiciones de Uso</h2>
                  <p>El presente sitio web tiene por objeto facilitar información sobre el apartamento vacacional Anfi Beach Apartment y permitir la solicitud de reservas. El acceso y uso del sitio web atribuye al usuario la condición de usuario e implica la aceptación plena de estas condiciones. El usuario se compromete a hacer un uso lícito del sitio web, absteniéndose de causar daños o deterioros que pudieran inutilizarlo.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">3. Propiedad Intelectual e Industrial</h2>
                  <p>Todos los contenidos del sitio web —incluyendo textos, fotografías, logotipos y diseño gráfico— son titularidad de Anfi Beach Apartment o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa del titular.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Exclusión de Responsabilidad</h2>
                  <p>Anfi Beach Apartment no se responsabiliza de los daños o perjuicios que pudieran derivarse del uso del sitio web, de la imposibilidad de acceso al mismo o de fallos en la conexión de red. Los enlaces a sitios web de terceros son facilitados únicamente a título informativo; no implican aprobación ni responsabilidad sobre sus contenidos.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">5. Legislación Aplicable y Jurisdicción</h2>
                  <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten, con renuncia a cualquier otro fuero, a los juzgados y tribunales de Las Palmas de Gran Canaria, salvo que la normativa aplicable establezca otro fuero imperativo.</p>
                </section>
              </div>
            </div>
          )}

          {view === 'privacy' && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-serif text-slate-900 mb-2 border-b pb-4">Política de Privacidad</h1>
              <p className="text-xs text-slate-400 mb-8">Última actualización: marzo de 2026</p>
              <div className="space-y-8 text-slate-600 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">1. Responsable del Tratamiento</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identidad:</strong> Anfi Beach Apartment</li>
                    <li><strong>Dirección postal:</strong> Calle Goya, Mogán, Gran Canaria, España</li>
                    <li><strong>Correo electrónico:</strong> booking@anfibeach.com</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Datos Tratados y Finalidades</h2>
                  <p>A través del formulario de contacto recabamos los siguientes datos: nombre, correo electrónico, fechas de interés y mensaje. Se tratan para:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Gestionar consultas y solicitudes de reserva.</li>
                    <li>Mantener la comunicación precontractual o contractual necesaria.</li>
                    <li>Cumplir con obligaciones legales aplicables.</li>
                  </ul>
                  <p className="mt-3">No se toman decisiones automatizadas ni se elaboran perfiles a partir de dichos datos.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">3. Base Jurídica del Tratamiento</h2>
                  <p>El tratamiento se ampara en las siguientes bases del art. 6 del Reglamento (UE) 2016/679 (RGPD):</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): cuando el interesado nos envía el formulario de contacto.</li>
                    <li><strong>Ejecución de un contrato o medidas precontractuales</strong> (art. 6.1.b RGPD): cuando la consulta está relacionada con una reserva.</li>
                    <li><strong>Cumplimiento de obligación legal</strong> (art. 6.1.c RGPD): en los supuestos requeridos por la normativa vigente.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Plazo de Conservación</h2>
                  <p>Los datos se conservarán mientras exista una relación con el usuario y, una vez finalizada, durante los plazos legales de prescripción aplicables (con carácter general, hasta 5 años para obligaciones civiles). Transcurrido dicho plazo serán suprimidos de forma segura.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">5. Destinatarios</h2>
                  <p>Los datos no se ceden a terceros salvo obligación legal. El envío de formularios se realiza a través de <strong>Formspree</strong> (procesador ubicado en EE. UU., adherido a las garantías adecuadas de transferencia internacional conforme al RGPD). No realizamos transferencias internacionales adicionales.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">6. Derechos del Interesado</h2>
                  <p>En cualquier momento puede ejercer los siguientes derechos ante el responsable del tratamiento (booking@anfibeach.com):</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
                    <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
                    <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                    <li><strong>Limitación:</strong> solicitar la restricción del tratamiento en determinados supuestos.</li>
                    <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y de uso común.</li>
                    <li><strong>Oposición:</strong> oponerse al tratamiento basado en interés legítimo.</li>
                    <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin efecto retroactivo.</li>
                  </ul>
                  <p className="mt-3">Si considera que el tratamiento vulnera la normativa, puede presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> — <em>www.aepd.es</em>.</p>
                </section>
              </div>
            </div>
          )}

          {view === 'cookies' && (
            <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-serif text-slate-900 mb-2 border-b pb-4">Política de Cookies</h1>
              <p className="text-xs text-slate-400 mb-8">Última actualización: marzo de 2026</p>
              <div className="space-y-8 text-slate-600 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">1. ¿Qué son las cookies?</h2>
                  <p>Las cookies son pequeños ficheros de texto que se descargan y almacenan en el navegador del usuario cuando visita una página web. Permiten que el sitio recuerde información sobre su visita (p. ej., preferencias de idioma) y mejoran la experiencia de navegación. Pueden ser propias (emitidas por este sitio) o de terceros (emitidas por un dominio externo).</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Marco Normativo</h2>
                  <p>Esta política se elabora en cumplimiento del <strong>artículo 22.2 de la LSSI-CE</strong>, de la <strong>Directiva 2009/136/CE</strong> (directiva e-Privacy) y del <strong>Reglamento (UE) 2016/679 (RGPD)</strong>, así como de las <em>Directrices sobre el uso de cookies</em> de la Agencia Española de Protección de Datos.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">3. Tipos de Cookies que Utilizamos</h2>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Categoría</th>
                          <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Finalidad</th>
                          <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Plazo</th>
                          <th className="text-left p-3 font-semibold text-slate-700 border border-slate-200">Consentimiento</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-slate-200 font-medium">Técnicas / necesarias</td>
                          <td className="p-3 border border-slate-200">Guardar preferencias de idioma y decisión de cookies (localStorage).</td>
                          <td className="p-3 border border-slate-200">Sesión / persistente</td>
                          <td className="p-3 border border-slate-200">No requerido (art. 22.2 LSSI-CE)</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-3 border border-slate-200 font-medium">Analíticas</td>
                          <td className="p-3 border border-slate-200">Medir el tráfico y comportamiento de los usuarios de forma anónima (p. ej. Google Analytics).</td>
                          <td className="p-3 border border-slate-200">Hasta 13 meses</td>
                          <td className="p-3 border border-slate-200">Requerido</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-slate-200 font-medium">Marketing</td>
                          <td className="p-3 border border-slate-200">Mostrar publicidad personalizada en otras plataformas según el perfil del usuario.</td>
                          <td className="p-3 border border-slate-200">Hasta 12 meses</td>
                          <td className="p-3 border border-slate-200">Requerido</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Gestión del Consentimiento</h2>
                  <p>Al acceder por primera vez a la web se muestra un panel de preferencias que permite aceptar todas las cookies, rechazar las no esenciales o personalizar la elección por categoría. Puede revocar o modificar su consentimiento en cualquier momento borrando las cookies de su navegador o utilizando las opciones de configuración de su navegador:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies.</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies.</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies.</li>
                  </ul>
                  <p className="mt-3">La retirada del consentimiento no afecta a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">5. Cookies de Terceros</h2>
                  <p>Cuando se aceptan cookies analíticas o de marketing, servicios de terceros pueden instalar sus propias cookies. Le remitimos a las políticas de privacidad de dichos terceros para más información sobre el tratamiento que realizan.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">6. Actualizaciones</h2>
                  <p>Esta política puede actualizarse para reflejar cambios en la normativa o en los servicios utilizados. Cuando se realicen cambios relevantes, el panel de consentimiento volverá a mostrarse para obtener una nueva aceptación informada.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-serif text-slate-800 mb-4">7. Contacto</h2>
                  <p>Para cualquier consulta sobre el uso de cookies puede dirigirse a: <strong>booking@anfibeach.com</strong>. Si considera que el tratamiento vulnera sus derechos puede reclamar ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> — <em>www.aepd.es</em>.</p>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Simplified Footer for Legal Pages */}
        <footer className="bg-slate-50 py-10 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
            © 2026 Anfi Beach Apartment. {t.footer.rights}
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-50 bg-white border-b border-slate-100 transition-all duration-300 ${isScrolled ? 'py-3 shadow-md' : 'py-5 shadow-sm'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
            <Logo className="w-10 h-10 text-terracotta-900 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(72,36,23,0.3)]" />
            <div className="text-xl md:text-2xl font-serif font-bold tracking-tight text-terracotta-900 transition-all duration-1000 group-hover:tracking-[0.15em] group-hover:text-terracotta-700">
              Anfi Beach Apartment
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => navigateTo('gallery')} className="text-slate-600 hover:text-terracotta-600 font-semibold transition-colors">
                {t.nav.gallery}
              </button>
              <a href="#availability" className="text-slate-600 hover:text-terracotta-600 font-semibold transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#availability"
              className="hidden sm:block px-6 py-2 rounded-full font-medium transition-all bg-terracotta-600 text-white hover:bg-terracotta-700"
            >
              {t.hero.cta_book}
            </a>

            {/* Language Selector to the Right */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent border border-slate-200 rounded px-2 py-1 text-sm outline-none text-slate-900 transition-colors hover:border-terracotta-300"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="no">NO</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-image.png"
            alt="Anfi Beach View"
            className="w-full h-full object-cover brightness-75 scale-110 will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 whitespace-pre-line animate-in fade-in slide-in-from-bottom-6 duration-700">
            {t.hero.h1}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-200 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <a href="#availability" className="px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-terracotta-900/20">
              {t.hero.cta_availability}
            </a>
            <a href="#availability" className="px-8 py-4 bg-white hover:bg-slate-100 text-terracotta-900 rounded-full font-semibold transition-all">
              {t.hero.cta_book}
            </a>
          </div>
        </div>

        {/* Trust/Benefits Banner Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-black/25 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
          <style>{`
            @keyframes ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-track {
              display: flex;
              width: max-content;
              animation: ticker 22s linear infinite;
            }
            .ticker-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-10 px-8">
                <div className="flex items-center gap-2 shrink-0">
                  <Tag size={16} className="text-white opacity-80" />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest whitespace-nowrap">{t.trustBanner.best_price}</span>
                </div>
                <span className="text-white/30 text-xs">·</span>
                <div className="flex items-center gap-2 shrink-0">
                  <RotateCcw size={16} className="text-white opacity-80" />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest whitespace-nowrap">{t.trustBanner.cancellation}</span>
                </div>
                <span className="text-white/30 text-xs">·</span>
                <div className="flex items-center gap-2 shrink-0">
                  <Wallet size={16} className="text-white opacity-80" />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest whitespace-nowrap">{t.trustBanner.flexible_payment}</span>
                </div>
                <span className="text-white/30 text-xs">·</span>
                <div className="flex items-center gap-2 shrink-0">
                  <Star size={16} className="text-white opacity-80" />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest whitespace-nowrap">{t.trustBanner.exclusive_advantages}</span>
                </div>
                <span className="text-white/30 text-xs">·</span>
                <div className="flex items-center gap-2 shrink-0">
                  <ShieldCheck size={16} className="text-white opacity-80" />
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-widest whitespace-nowrap">{t.trustBanner.secure_payment}</span>
                </div>
                <span className="text-white/30 text-xs">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center mb-16 text-slate-800">{t.highlights.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.highlights.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-terracotta-100 text-terracotta-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta-600 group-hover:text-white transition-colors">
                  {idx === 0 && <Sun size={24} />}
                  {idx === 1 && <Palmtree size={24} />}
                  {idx === 2 && <Navigation size={24} />}
                  {idx === 3 && <Clock size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewCarousel
        items={t.reviews.items}
        title={t.reviews.title}
        subtitle={t.reviews.subtitle}
      />

      {/* Distribution Section (CTA to Gallery) */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <ImageCarousel images={t.distribution.images} />
            </div>

            <div className="w-full lg:w-1/2 space-y-10">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-800">{t.distribution.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.distribution.items.map((item, idx) => {
                  const Icon = distributionIcons[idx] || CheckCircle2;
                  return (
                    <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="text-terracotta-600 shrink-0">
                        <Icon size={24} />
                      </div>
                      <span className="text-slate-700 font-semibold tracking-tight">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooftop Block */}
      <section className="py-12 bg-terracotta-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Sun size={400} className="absolute -top-20 -right-20" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-center mb-8">
            <Logo className="w-14 h-14 text-terracotta-100/20" />
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-3/5 w-full">
              <div className="group aspect-video w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white/10 transition-all duration-700 hover:shadow-terracotta-500/20 hover:scale-[1.02]">
                <img
                  src="/rooftop.png"
                  alt="Rooftop terrace"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="lg:w-2/5 w-full text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-tight leading-tight">
                {t.rooftop.title}
              </h2>
              <p className="text-lg lg:text-xl text-terracotta-100 mb-8 italic leading-relaxed opacity-90">
                "{t.rooftop.desc}"
              </p>
              <ul className="space-y-4">
                {t.rooftop.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-base lg:text-lg">
                    <CheckCircle2 size={20} className="text-amber-400 shrink-0" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-800">{t.location.title}</h2>
            <p className="text-lg text-slate-600">{t.location.desc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.9189917325514!2d-15.686523924614636!3d27.7661556761502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc60813959955555%3A0x89e009477b78972e!2sC.%20Goya%2C%2035120%20Mog%C3%A1n%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1716500000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Calle Goya, Mogán"
              ></iframe>
            </div>
            <div className="space-y-6">
              {t.location.distances.map((dist, idx) => (
                <div key={idx} className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="text-terracotta-600 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                      <MapPin />
                    </div>
                    <span className="text-lg font-medium text-slate-800 transition-colors group-hover:text-terracotta-600">{dist.place}</span>
                  </div>
                  <span className="text-terracotta-700 font-bold bg-terracotta-50 px-4 py-1 rounded-full text-sm transition-all duration-300 group-hover:bg-terracotta-600 group-hover:text-white group-hover:px-6">
                    {dist.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENJOY DAILY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <Sun size={600} className="absolute -top-40 -left-40 text-terracotta-900" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
              {t.enjoyDaily.title}
            </h2>
          </div>
          <div className="space-y-8">
            {t.enjoyDaily.items.map((item, idx) => {
              const Icon = enjoyIcons[idx];
              return (
                <div key={idx} className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all hover:scale-[1.01] hover:shadow-terracotta-100">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-terracotta-600">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full md:w-64 lg:w-80 h-48 md:h-56 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Booking Benefits */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">{t.benefits.title}</h2>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-8">
            {t.benefits.items.map((benefit, idx) => {
              const Icon = benefitIcons[idx];
              return (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 bg-terracotta-50 text-terracotta-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-terracotta-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-terracotta-100">
                    <Icon size={28} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-700 tracking-tight group-hover:text-terracotta-600 transition-colors">
                    {benefit}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase italic">
              {t.benefits.disclaimer}
            </span>
          </div>
        </div>
      </section>

      {/* Availability & Contact Merged Section */}
      <section id="availability" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Column: Calendar */}
            <div className="space-y-12">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-4 tracking-tight text-center">
                  {t.availability.title}
                </h2>
                <div className="h-1 w-20 bg-terracotta-600 rounded-full opacity-60"></div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                {isCalendarLoading && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-4 border-terracotta-200 border-t-terracotta-600 rounded-full animate-spin"></div>
                    <p className="text-terracotta-600 font-serif italic text-lg">{t.availability.loading}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mb-10">
                  <button onClick={prevMonth} className="p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-terracotta-600 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <p className="text-slate-800 font-serif text-xl tracking-tight">{monthName}</p>
                  <button onClick={nextMonth} className="p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-terracotta-600 transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'].map((d, i) => (
                    <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-4">
                      {lang === 'es' ? d : lang === 'no' ? ['SØN', 'MAN', 'TIR', 'ONS', 'TOR', 'FRE', 'LØR'][i] : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][i]}
                    </div>
                  ))}
                  {Array.from({ length: calendarData.firstDayOfWeek }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square"></div>
                  ))}
                  {Array.from({ length: calendarData.daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isBooked = calendarData.mockBooked.includes(day);
                    return (
                      <div key={`${viewDate.getTime()}-${day}`} className={`
                        aspect-square flex items-center justify-center rounded-lg text-sm md:text-base font-medium transition-all relative
                        ${isBooked
                          ? 'bg-slate-50 text-slate-300'
                          : 'bg-white text-slate-700 hover:bg-terracotta-50 hover:text-terracotta-600 cursor-pointer border border-slate-50'}
                      `}>
                        <span className="relative z-10">{day}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2 text-slate-500">
                    <div className="w-3 h-3 rounded-sm border border-slate-100 bg-white shadow-sm"></div>
                    {lang === 'es' ? 'Libre' : lang === 'no' ? 'Ledig' : 'Available'}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <div className="w-3 h-3 rounded-sm bg-slate-50"></div>
                    {lang === 'es' ? 'Reservado' : lang === 'no' ? 'Opptatt' : 'Booked'}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-50 flex justify-center">
                  <span className="text-terracotta-600 font-bold text-[10px] tracking-[0.2em] uppercase">
                    {t.availability.minStay}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-4 tracking-tight text-center">
                  {t.contact.title}
                </h2>
                <div className="h-1 w-20 bg-terracotta-600 rounded-full opacity-60"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{t.contact.name}</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder={t.contact.name}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-1 focus:ring-terracotta-200 outline-none text-slate-700 placeholder:text-slate-300 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{t.contact.email}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder={t.contact.email}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-1 focus:ring-terracotta-200 outline-none text-slate-700 placeholder:text-slate-300 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{t.contact.check_in}</label>
                    <input
                      required
                      type="date"
                      name="check_in"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-1 focus:ring-terracotta-200 outline-none text-slate-700 uppercase appearance-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{t.contact.check_out}</label>
                    <input
                      required
                      type="date"
                      name="check_out"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-1 focus:ring-terracotta-200 outline-none text-slate-700 uppercase appearance-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">{t.contact.message}</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t.contact.message}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-1 focus:ring-terracotta-200 outline-none text-slate-700 placeholder:text-slate-300 resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === 'loading'}
                  className="w-full py-5 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-xl font-bold uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 active:scale-[0.98] shadow-lg shadow-terracotta-100/50"
                >
                  {formStatus === 'loading' ? '...' : t.contact.submit}
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-center font-bold text-sm">
                    {t.contact.success}
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold text-sm">
                    {t.contact.error}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Surroundings Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-slate-900 tracking-tight">
              {t.surroundings.title}
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-light">
              {t.surroundings.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-[45%] space-y-12">
              {t.surroundings.items.map((item, idx) => {
                const Icon = surroundingsIcons[idx];
                return (
                  <div key={idx} className="flex gap-6 items-start group/item">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 text-terracotta-600 shadow-sm border border-slate-100/50 transition-all duration-500 group-hover/item:bg-terracotta-600 group-hover/item:text-white group-hover/item:scale-110 group-hover/item:shadow-xl group-hover/item:shadow-terracotta-100 group-hover/item:-rotate-6">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-slate-800 tracking-tight transition-colors group-hover/item:text-terracotta-600">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:w-[55%] w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-terracotta-50 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/surroundings.jpg"
                  alt="Aerial view of the beach surroundings"
                  className="rounded-[2.5rem] shadow-2xl w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">{t.faqs.title}</h2>
            <div className="w-12 h-1 bg-terracotta-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {t.faqs.items.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden transition-all hover:bg-white hover:shadow-lg">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-7 flex justify-between items-center text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                    {item.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-terracotta-600 text-white rotate-180' : 'bg-white text-terracotta-600'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg animate-in slide-in-from-top-4 duration-300">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-terracotta-900 text-white py-12 border-t border-terracotta-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 border-b border-terracotta-800 pb-10">
            <div>
              <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={scrollToTop}>
                <Logo className="w-12 h-12 text-terracotta-200 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
                <div className="text-3xl font-serif font-bold text-terracotta-200 transition-all duration-1000 group-hover:tracking-wider group-hover:text-white">Anfi Beach Apartment</div>
              </div>
              <p className="text-terracotta-100/70 max-w-xs">{t.hero.subtitle}</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-terracotta-100 uppercase tracking-widest text-sm">Links</h4>
              <ul className="space-y-4 text-terracotta-100/60">
                <li><button onClick={() => navigateTo('gallery')} className="hover:text-white transition-colors block text-left">{t.nav.gallery}</button></li>
                <li><button onClick={() => navigateTo('legal')} className="hover:text-white transition-colors block text-left">{t.footer.legal}</button></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors block text-left">{t.footer.privacy}</button></li>
                <li><button onClick={() => navigateTo('cookies')} className="hover:text-white transition-colors block text-left">{lang === 'es' ? 'Política de Cookies' : 'Cookie Policy'}</button></li>
                <li><a href="#availability" className="hover:text-white transition-colors block">{t.hero.cta_availability}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-terracotta-100 uppercase tracking-widest text-sm">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-terracotta-800 flex items-center justify-center text-terracotta-100 hover:bg-terracotta-600 hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-terracotta-800 flex items-center justify-center text-terracotta-100 hover:bg-terracotta-600 hover:text-white hover:scale-110 transition-all shadow-lg active:scale-95">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-terracotta-300/50 text-sm">
            {t.footer.rights}
          </div>
        </div>
      </footer >

      {/* Cookie Consent — RGPD / LSSI-CE */}
      {cookieLoaded && cookieConsent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] flex justify-center p-4 pointer-events-none">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden pointer-events-auto">

            {/* Compact view (default) */}
            {!showCookieCustomize && (
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg" aria-hidden="true">🍪</span>
                  <h2 className="text-base font-semibold text-slate-900">Tu privacidad importa</h2>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas todas, usar solo las esenciales o{' '}
                  <button onClick={() => setShowCookieCustomize(true)} className="underline text-terracotta-600 hover:text-terracotta-800 transition-colors">
                    personalizar tu elección
                  </button>. Más info en nuestra{' '}
                  <button onClick={() => { handleCookieReject(); navigateTo('cookies'); }} className="underline text-terracotta-600 hover:text-terracotta-800 transition-colors">
                    Política de Cookies
                  </button>.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleCookieReject}
                    className="flex-1 px-4 py-2 rounded-full text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Solo esenciales
                  </button>
                  <button
                    onClick={() => setShowCookieCustomize(true)}
                    className="flex-1 px-4 py-2 rounded-full text-xs font-semibold border border-terracotta-300 text-terracotta-700 hover:bg-terracotta-50 transition-all"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={handleCookieAccept}
                    className="flex-1 px-4 py-2 rounded-full text-xs font-bold bg-terracotta-600 text-white hover:bg-terracotta-700 transition-all shadow-md active:scale-95"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            )}

            {/* Detailed view (after clicking Personalizar) */}
            {showCookieCustomize && (
              <div>
                <div className="px-5 pt-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <button onClick={() => setShowCookieCustomize(false)} className="text-slate-400 hover:text-slate-600 transition-colors text-lg leading-none mr-1">←</button>
                  <h2 className="text-base font-semibold text-slate-900">Personalizar cookies</h2>
                </div>
                <div className="px-5 py-3 space-y-2.5">
                  {/* Necesarias */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-slate-50">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800">Técnicas / necesarias</p>
                      <p className="text-xs text-slate-500 mt-0.5">Imprescindibles para el funcionamiento de la web. No requieren consentimiento (art. 22.2 LSSI-CE).</p>
                    </div>
                    <span className="shrink-0 mt-0.5 px-2.5 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold whitespace-nowrap">Siempre activas</span>
                  </div>
                  {/* Analíticas */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-slate-50">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800">Analíticas</p>
                      <p className="text-xs text-slate-500 mt-0.5">Miden el tráfico de forma anónima (p. ej. Google Analytics).</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={cookiePrefs.analytics}
                      onClick={() => setCookiePrefs(p => ({ ...p, analytics: !p.analytics }))}
                      className={`shrink-0 mt-0.5 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-terracotta-400 ${cookiePrefs.analytics ? 'bg-terracotta-600' : 'bg-slate-300'}`}
                    >
                      <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${cookiePrefs.analytics ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-slate-50">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800">Marketing</p>
                      <p className="text-xs text-slate-500 mt-0.5">Publicidad personalizada en otras plataformas.</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={cookiePrefs.marketing}
                      onClick={() => setCookiePrefs(p => ({ ...p, marketing: !p.marketing }))}
                      className={`shrink-0 mt-0.5 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-terracotta-400 ${cookiePrefs.marketing ? 'bg-terracotta-600' : 'bg-slate-300'}`}
                    >
                      <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${cookiePrefs.marketing ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                </div>
                <div className="px-5 pb-4 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleCookieReject}
                    className="flex-1 px-4 py-2 rounded-full text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Rechazar no esenciales
                  </button>
                  <button
                    onClick={handleCookieSave}
                    className="flex-1 px-4 py-2 rounded-full text-xs font-bold bg-terracotta-600 text-white hover:bg-terracotta-700 transition-all shadow-md active:scale-95"
                  >
                    Guardar preferencias
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Social Proof Popup */}
      {showSocialProof && (
        <div className="fixed bottom-6 left-6 z-[99] animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/15 border border-slate-100 p-4 w-64">
            <button
              onClick={() => setShowSocialProof(false)}
              className="absolute top-3 right-3 text-slate-300 hover:text-slate-500 transition-colors text-lg leading-none"
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="flex items-start gap-3 mb-4">
              <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-terracotta-500 shrink-0 animate-pulse" />
              <p className="text-sm text-slate-700 leading-snug pr-4">
                <span className="font-bold text-terracotta-900">{visitorCount} personas</span> han visto este apartamento hoy
              </p>
            </div>
            <a
              href="#availability"
              onClick={() => setShowSocialProof(false)}
              className="block w-full text-center py-2.5 bg-terracotta-900 hover:bg-terracotta-800 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all active:scale-95"
            >
              Reserva ahora
            </a>
          </div>
        </div>
      )}
    </div >
  );
};

export default App;