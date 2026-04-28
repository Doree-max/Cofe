import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X, MapPin, Clock, Star, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { MENU_ITEMS, TESTIMONIALS, APP_CONFIG } from './constants';
import { MenuItem } from './types';

// --- Components ---

const ScarcityBanner = () => (
  <div className="bg-gold text-espresso py-2 px-4 text-center text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden relative">
    <motion.div
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center justify-center gap-4"
    >
      {APP_CONFIG.scarcityMessage}
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-cream/10 ${isScrolled ? 'bg-espresso/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="font-serif text-2xl font-bold tracking-widest uppercase text-gold">MOGUT</a>
          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.15em] font-medium text-cream/70">
            <a href="#menu" className="hover:text-gold transition-colors">The Daily Bake</a>
            <a href="#story" className="hover:text-gold transition-colors">Our Story</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] uppercase opacity-50">Status</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-[11px] font-bold tracking-wider">Freshly Baked</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-gold text-espresso px-6 py-2.5 rounded-none text-[11px] font-bold tracking-widest uppercase hover:brightness-110 transition-all sensory-glow">
            <ShoppingBag size={14} />
            <span className="hidden sm:inline">Reserve Batch</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:h-[80vh] flex flex-col md:flex-row border-b border-cream/10 overflow-hidden bg-espresso">
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-10">
        <motion.div
           initial={{ x: -30, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="text-gold font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Est. 2026 // Artisan Handcrafted</span>
          <h1 className="text-cream text-5xl md:text-[64px] font-serif mb-8 leading-[0.9] tracking-tighter">
            The Art of the<br/><span className="italic text-gold">Daily Bake.</span>
          </h1>
          <p className="text-cream/70 text-sm md:text-base font-light mb-12 max-w-sm italic leading-relaxed">
            {APP_CONFIG.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="bg-gold text-espresso px-8 py-4 rounded-none font-bold tracking-widest uppercase hover:brightness-110 transition-all text-[11px] text-center">
              Reserve Your Batch
            </a>
            <a href="#story" className="border border-cream/30 text-cream px-8 py-4 rounded-none font-bold tracking-widest uppercase hover:bg-cream/5 transition-all text-[11px] text-center">
              View Story
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 relative bg-[#2A1A14] flex items-center justify-center p-8 md:p-20">
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-espresso pointer-events-none z-10"></div>
         <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full border border-gold/20 flex items-center justify-center p-4 relative z-0"
         >
            <div className="w-full h-full bg-espresso relative overflow-hidden flex items-center justify-center group">
               <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
                  alt="Signature Pastry"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
               />
               <div className="text-gold text-[100px] md:text-[140px] font-serif opacity-10 select-none">🥐</div>
               <div className="absolute bottom-4 right-4 text-[9px] text-gold uppercase tracking-[3px]">Signature No. 01</div>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

const MenuGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="menu" className="bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-gold font-mono text-[10px] tracking-widest uppercase mb-4 block underline underline-offset-8">Dynamic Collection</span>
            <h2 className="text-4xl md:text-6xl text-cream leading-tight">The Daily Bake</h2>
          </div>
          <p className="text-cream/40 max-w-md text-right font-light text-sm italic">
            Each item is crafted in small batches between 3 AM and 7 AM daily. Once they're gone, they're gone until the next sunup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 overflow-hidden">
          {MENU_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer bg-espresso p-8 flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-gold">{item.category}</span>
                  <span className="text-[10px] opacity-40 font-mono tracking-tighter">${item.price.toFixed(2)}</span>
                </div>
                
                <div className="overflow-hidden rounded-md mb-8 aspect-[4/3] relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={hoveredId === item.id ? 'cross' : 'main'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={hoveredId === item.id ? item.crossSectionImage : item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute top-3 right-3 bg-espresso/80 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-cream/10">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] uppercase font-mono tracking-tighter text-cream/70">Freshly Baked</span>
                  </div>
                </div>

                <h3 className="text-2xl mb-2 font-serif text-cream">{item.name}</h3>
                <p className="text-cream/50 font-light text-[11px] mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="text-[10px] italic opacity-40 font-serif">
                   {hoveredId === item.id ? item.sensoryDescription : "Warm artisan texture"}
                </div>
                <div className="w-8 h-8 border border-gold/40 rounded-full flex items-center justify-center text-gold text-lg group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StorySection = () => (
  <section id="story" className="bg-espresso text-cream py-32 overflow-hidden border-y border-gold/10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <motion.div
           initial={{ rotate: -5, opacity: 0 }}
           whileInView={{ rotate: -2, opacity: 1 }}
           className="aspect-[3/4] rounded-full overflow-hidden border-8 border-cocoa/50 relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1549590143-fd5843abd06e?q=80&w=800&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="The Craft"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl z-0" />
      </div>
      <div>
        <span className="text-gold font-mono text-xs tracking-widest uppercase mb-6 block">Our Legacy</span>
        <h2 className="text-5xl md:text-7xl mb-10 leading-[0.9] tracking-tighter">Architecture <br/> In Every Fold</h2>
        <p className="text-cream/70 text-lg font-light leading-relaxed mb-8">
          The secret to Mogut isn't just the flour or the butter; it's the 72-hour tension we maintain in the dough. We treat every croissant like a bridge—balanced, structural, and meant to endure just long enough to be perfect at 8 AM.
        </p>
        <div className="grid grid-cols-2 gap-8 py-8 border-t border-cream/10">
          <div>
            <span className="text-gold text-3xl font-serif mb-2 block">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/40">Organic Stone-ground</span>
          </div>
          <div>
            <span className="text-gold text-3xl font-serif mb-2 block">3 Days</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/40">Fermentation Process</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PreOrderForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', selection: MENU_ITEMS[0].id, time: '08:00' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulated Mock API
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center" id="reserve">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl mb-6 text-cream">Reserve Your Batch</h2>
        <p className="text-cream/40 font-light italic">Skip the line and ensure your morning treat is waiting for you.</p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-cocoa/30 rounded-3xl backdrop-blur-md shadow-2xl border border-gold/20"
          >
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                className="w-10 h-10"
              >
                <ShoppingBag size={40} />
              </motion.div>
            </div>
            <h3 className="text-3xl mb-4 text-cream">You're All Set!</h3>
            <p className="text-cream/60 mb-8">{APP_CONFIG.preOrderSuccess}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-gold font-bold uppercase tracking-widest text-[11px] underline underline-offset-8"
            >
              Reserve Another
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-8 text-left p-8 md:p-16 bg-cocoa/20 backdrop-blur-md rounded-none shadow-2xl border border-cream/5"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-cream/30">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="E.g. Julien V."
                  className="w-full bg-espresso/50 border border-cream/10 p-5 rounded-none focus:outline-none focus:border-gold transition-all text-cream placeholder:text-cream/20"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-cream/30">Selection</label>
                <select 
                  className="w-full bg-espresso/50 border border-cream/10 p-5 rounded-none focus:outline-none focus:border-gold appearance-none text-cream"
                  value={formData.selection}
                  onChange={e => setFormData({ ...formData, selection: e.target.value })}
                >
                  {MENU_ITEMS.map(item => (
                    <option key={item.id} value={item.id} className="bg-espresso">{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-cream/30">Pickup Time</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['08:00', '09:00', '10:00', '11:00'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: t })}
                    className={`p-4 rounded-none border text-xs tracking-widest transition-all ${formData.time === t ? 'border-gold bg-gold/10 text-gold' : 'border-cream/10 text-cream/40 hover:bg-cream/5'}`}
                  >
                    {t} AM
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gold text-espresso py-6 rounded-none font-bold tracking-[0.4em] uppercase hover:brightness-110 transition-all sensory-glow flex items-center justify-center gap-3 text-[12px]"
            >
              {status === 'loading' ? 'Encrypting Reservation...' : 'Confirm Reservation'}
              <ArrowRight size={16} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="py-32 bg-espresso text-cream px-6 border-t border-cream/10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-gold font-mono text-xs tracking-widest uppercase mb-4 block underline underline-offset-8">Testimonials</span>
        <h2 className="text-4xl md:text-6xl text-cream">Community Love</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 overflow-hidden">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="p-12 bg-espresso flex flex-col justify-between group">
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xl font-serif italic mb-10 leading-relaxed text-cream/80 group-hover:text-cream transition-colors">"{t.content}"</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-[10px] mb-2 text-gold">{t.name}</p>
              <p className="text-cream/30 text-[10px] uppercase font-mono">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-espresso text-cream py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div>
        <h2 className="text-4xl font-serif mb-4 tracking-tighter">MOGUT</h2>
        <p className="text-cream/40 text-sm max-w-xs font-light">Building structural masterpieces one bake at a time.</p>
      </div>
      <div className="flex gap-12 font-mono text-[10px] uppercase tracking-widest">
        <div className="space-y-4">
          <p className="text-gold mb-2">Location</p>
          <p className="text-cream/60">123 Artisan Way <br/> Pastry District, MT</p>
        </div>
        <div className="space-y-4">
          <p className="text-gold mb-2">Hours</p>
          <p className="text-cream/60">Tue — Sun <br/> 8:00 — Sold Out</p>
        </div>
      </div>
      <div className="flex gap-6">
        <a href="#" className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
          <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
          <Twitter size={18} />
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-cream/10 text-[9px] uppercase tracking-widest text-center text-cream/20">
      &copy; 2026 Mogut // All Rights Reserved // Art of the daily bake
    </div>
  </footer>
);

const MobileNav = () => (
  <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs bg-espresso/90 backdrop-blur-xl border border-cream/10 rounded-3xl py-3 px-8 flex justify-between items-center shadow-2xl">
    <a href="#menu" className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
      <MenuIcon size={18} />
      <span>Menu</span>
    </a>
    <a href="#" className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-espresso -mt-10 shadow-lg sensory-glow border-4 border-cream shadow-gold/20">
      <ShoppingBag size={24} />
    </a>
    <a href="#reserve" className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest text-cream/60 hover:text-gold transition-colors">
      <Clock size={18} />
      <span>Reserve</span>
    </a>
  </div>
);

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="bg-espresso min-h-screen selection:bg-gold selection:text-espresso">
      <ScarcityBanner />
      <Navbar />
      <main role="main">
        <Hero />
        <MenuGrid />
        <StorySection />
        <Testimonials />
        <PreOrderForm />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
