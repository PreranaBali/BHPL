import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Drill, Map as MapIcon, Layers, CheckCircle2, Phone, Mail, 
  ArrowRight, Play, LandPlot 
} from 'lucide-react';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Geotechnical = () => {
  const containerRef = useRef(null);

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Sections
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="font-sans antialiased overflow-x-hidden min-h-screen bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gold Dust Background */}
        <div className="absolute inset-0 bg-[#0B2E33]">
           <motion.div 
             animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"
           />
           {/* Floating Orbs */}
           <motion.div 
             animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#bf953f] rounded-full blur-[120px] opacity-30"
           />
           <motion.div 
             animate={{ y: [20, -20, 20], opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#4F7C82] rounded-full blur-[100px] opacity-30"
           />
        </div>

        <div className="relative z-10 text-center px-4 perspective-1000">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">Site Development</h4>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              GEOTECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">SERVICES</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="bg-[#0B2E33] py-6 border-y border-[#bf953f]/20 relative z-20 w-full overflow-hidden">
        <div className="flex w-max">
          <motion.div 
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-16 text-[#bf953f]/20 text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            {Array(8).fill("Borewell Drilling • Land Surveying • Excavation • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- SECTION 1: BOREWELL DRILLING --- */}
      <section className="py-24 relative reveal-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
            
            {/* Content (Text) */}
            <div className="order-2 lg:order-1">
              <span className="text-[#bf953f] font-bold uppercase tracking-widest text-sm mb-2 block">01. Water Resource Engineering</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E33] mb-6 leading-tight">
                High-Depth <span className="text-[#4F7C82]">Borewell Drilling</span>
              </h2>
              <p className="text-[#4F7C82] text-lg leading-relaxed mb-8">
                We utilize state-of-the-art <strong>high-pressure hydraulic rigs</strong> designed to penetrate the toughest geological strata. Our process ensures maximum yield through precise aquifer targeting and casing installation. 
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Hydraulic Penetration", desc: "Depths exceeding 1,500ft with precision.", icon: <Drill /> },
                  { title: "Casing & Filtration", desc: "High-grade PVC/MS casing installation.", icon: <Layers /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white hover:border-[#bf953f]/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#0B2E33] rounded-full flex items-center justify-center text-[#bf953f]">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <div className="ml-4">
                      <h5 className="text-xl font-bold text-[#0B2E33]">{item.title}</h5>
                      <p className="text-[#4F7C82] text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FIXED MEDIA GRID (Height reduced to 600px for compactness) */}
            <div className="order-1 lg:order-2 h-[500px] lg:h-[600px] flex gap-4 w-full relative z-10">
              
              {/* Left Side: Video (Takes 50% width, Full Height) */}
              <div className="w-1/2 relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 group bg-black">
                
                
                {/* Video contained strictly */}
                <video 
                  src="/Geotechnical/bw2.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition duration-1000 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33]/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 z-20 text-white pointer-events-none">
                  <p className="text-[#bf953f] text-xs font-bold uppercase tracking-widest">Hydraulic Rig</p>
                  <p className="text-xl font-bold">Deep Rock Drilling</p>
                </div>
              </div>

              {/* Right Side: Stacked Images (Takes 50% width, Full Height) */}
              <div className="w-1/2 flex flex-col gap-4 h-full">
                <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-xl border border-white/20 bg-gray-200">
                  <img src="Geotechnical/bw1.jpeg" alt="Drill" className="absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative flex-1 rounded-[2rem] overflow-hidden shadow-xl border border-white/20 bg-gray-200">
                  <img src="Geotechnical/bw3.jpeg" alt="Casing" className="absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: LAND MARKING --- */}
      <section className="py-24 bg-white/40 backdrop-blur-md reveal-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
            
            {/* Image Grid (Left) */}
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                 <img src="Geotechnical/mark1.jpeg" className="h-48 w-full object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300" alt="Survey" />
                 <img src="Geotechnical/mark2.jpeg" className="h-64 w-full object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300" alt="Marking" />
               </div>
               <div className="space-y-4">
                 <img src="Geotechnical/mark3.jpeg" className="h-64 w-full object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300" alt="Blueprint" />
                 <img src="Geotechnical/load2.jpeg" className="h-48 w-full object-cover rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300" alt="Team" />
               </div>
            </div>

            {/* Text (Right) */}
            <div className="lg:pl-10">
              <span className="text-[#bf953f] font-bold uppercase tracking-widest text-sm mb-2 block">02. Geo-Spatial Analysis</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E33] mb-6 leading-tight">
                Scientific <span className="text-[#4F7C82]">Land Marking</span> & Surveying
              </h2>
              <p className="text-[#4F7C82] text-lg leading-relaxed mb-8">
                Before a single stone is moved, we deploy advanced hydro-geological survey techniques. We analyze ground resistivity and topography to pinpoint the perfect coordinates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-[#B8E3E9]">
                  <div className="mr-4 w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-[#bf953f]">
                    <MapIcon size={20} />
                  </div>
                  <span className="font-bold text-[#0B2E33]">GPS Coordinate Mapping</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-[#B8E3E9]">
                  <div className="mr-4 w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-[#bf953f]">
                    <LandPlot size={20} />
                  </div>
                  <span className="font-bold text-[#0B2E33]">Boundary Demarcation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: EXCAVATION --- */}
      <section className="py-24 reveal-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-2">
            
            {/* Text Content */}
            <div className="sticky top-24">
              <span className="text-[#bf953f] font-bold uppercase tracking-widest text-sm mb-2 block">03. Heavy Earthworks</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E33] mb-6 leading-tight">
                Precision <span className="text-[#4F7C82]">Excavation</span> & Site Prep
              </h2>
              <p className="text-[#4F7C82] text-lg leading-relaxed mb-8">
                Our excavation services lay the groundwork for success. Using a fleet of heavy machinery including excavators, backhoes, and trenchers, we manage earthmoving with speed.
              </p>
              
              <ul className="mb-10 space-y-4">
                {[
                  { title: "Foundation Digging", desc: "Accurate depth for footings." },
                  { title: "Land Leveling", desc: "Grading uneven terrain." },
                  { title: "Debris Removal", desc: "Efficient clearing." }
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-[#0B2E33]">
                    <div className="h-8 w-8 rounded-full bg-[#bf953f]/20 flex items-center justify-center mr-4 text-[#bf953f]">
                      <CheckCircle2 size={18} />
                    </div>
                    <span><strong className="text-[#bf953f]">{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact" className="inline-flex items-center gap-2 bg-[#0B2E33] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#bf953f] transition-colors shadow-lg">
                Get Excavation Quote <ArrowRight size={20} />
              </a>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
               <div className="row-span-2 h-full rounded-[2rem] shadow-xl overflow-hidden relative group">
                 <img 
                    src="Geotechnical/load1.jpeg" 
                    alt="Excavator" 
                    className="absolute inset-0 w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] to-transparent opacity-60"></div>
                 <div className="absolute bottom-4 left-4 text-white font-bold">Heavy Loaders</div>
               </div>
               <div className="h-full rounded-[2rem] shadow-lg overflow-hidden relative group border-4 border-white bg-black">
                 <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md z-10 text-[#0B2E33]">
                    <Play size={16} fill="currentColor" />
                 </div>
                 <video 
                   src="Geotechnical/escavation1.mp4" 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="absolute inset-0 w-full h-full object-cover object-center" 
                 />
               </div>
               <div className="h-full rounded-[2rem] shadow-lg overflow-hidden border-4 border-white relative">
                 <img src="Geotechnical/load3.jpeg" alt="Leveling" className="absolute inset-0 w-full h-full object-cover object-center" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- APPOINTMENT SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-[#0B2E33] mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            
            {/* Left Info */}
            <div className="lg:w-1/2 text-white">
              <h4 className="text-[#bf953f] font-bold uppercase tracking-widest mb-4">Book a Service</h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project With Solid Ground</h2>
              <p className="text-[#93B1B5] text-lg mb-10 leading-relaxed">
                Whether you need to find water, mark your boundaries, or clear the land, our technical team is ready to deploy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#bf953f]/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#bf953f] flex items-center justify-center text-[#0B2E33]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[#bf953f] text-xs uppercase tracking-widest">Call Us Now</p>
                    <h3 className="text-2xl font-bold text-white">+91 99646 66544</h3>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#bf953f]/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#bf953f] flex items-center justify-center text-[#0B2E33]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[#bf953f] text-xs uppercase tracking-widest">Mail Us Now</p>
                    <h3 className="text-2xl font-bold text-white">support@bhpl.club</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-[#0B2E33]/50 border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f]" />
                  <input type="text" placeholder="Your Phone" className="w-full bg-[#0B2E33]/50 border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f]" />
                </div>
                <select className="w-full bg-[#0B2E33]/50 border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f]">
                  <option>Borewell Drilling</option>
                  <option>Land Surveying</option>
                  <option>Excavation</option>
                </select>
                <textarea rows="4" placeholder="Project Details" className="w-full bg-[#0B2E33]/50 border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bf953f]"></textarea>
                <button className="w-full bg-[#bf953f] text-[#0B2E33] font-bold py-4 rounded-xl hover:bg-white transition-colors shadow-lg">
                  Book Site Visit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Geotechnical;