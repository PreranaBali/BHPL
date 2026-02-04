import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Ruler, Layers, Grid, ArrowRight, CheckCircle2, 
  PenTool, Phone, Download 
} from 'lucide-react';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- REUSABLE COMPONENT: PROJECT SECTION ---
const ProjectSection = ({ id, title, subtitle, description, imgSrc, details, reverse = false }) => (
  <section id={id} className={`py-24 relative w-full ${reverse ? 'bg-[#B8E3E9]/20' : 'bg-white'} reveal-section`}>
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#bf953f]"></span>
            <span className="text-sm font-bold tracking-[0.2em] text-[#bf953f] uppercase">{subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B2E33] mb-6 leading-tight">{title}</h2>
          <p className="text-lg text-[#4F7C82] mb-10 leading-relaxed border-l-4 border-[#bf953f]/30 pl-6">
            {description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#93B1B5]/30 hover:border-[#bf953f] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-[#0B2E33] flex items-center justify-center text-[#bf953f] group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-semibold text-[#0B2E33] text-sm">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="lg:w-1/2 w-full">
          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-[#0B2E33]">
            <img 
              src={imgSrc} 
              alt={title} 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            
            {/* Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] via-transparent to-transparent opacity-60 pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
               <div>
                 <p className="text-[#bf953f] text-xs font-bold uppercase tracking-widest">Technical Drawing</p>
                 <p className="text-white font-bold">High Resolution View</p>
               </div>
               <button className="p-3 bg-[#bf953f] text-[#0B2E33] rounded-full shadow-lg hover:bg-white transition-colors">
                 <Download size={20} />
               </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const LayoutPlanning = () => {
  const containerRef = useRef(null);

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // Reveal Sections
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    // REMOVED 'min-h-screen' and 'overflow-x-hidden' from root to fix double scrollbar
    <div ref={containerRef} className="font-sans antialiased w-full bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION (Standardized) --- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#0B2E33]">
        {/* Animated Background */}
        <div className="absolute inset-0">
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
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">Architectural Portfolio</h4>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              LAYOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">PLANNING</span>
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
            {Array(8).fill("Floor Plans • Structural Grid • Foundation Layout • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- SECTION 1: PROPOSED FLOOR PLANS --- */}
      <ProjectSection 
        id="plans"
        subtitle="Space Utilization"
        title="Architectural Floor Plans"
        description="A comprehensive multi-level design for a 30' x 40' residential project. This layout emphasizes functional flow, ample parking, and optimized living areas across Ground, First, and Second floors."
        imgSrc="/Geotechnical/lo3.jpeg"
        details={[
          "G+2 Multi-Story Design",
          "Dedicated 12'9\" Parking",
          "Vaastu-Compliant Rooms",
          "Optimized Setbacks",
          "Spacious Portico areas",
          "Integrated Utility spaces"
        ]}
      />

      {/* --- SECTION 2: COLUMN CENTER LINE --- */}
      <ProjectSection 
        reverse={true}
        subtitle="Structural Skeleton"
        title="Column Center Line Layout"
        description="Precision is the foundation of safety. This technical grid defines the exact center-to-center coordinates for all load-bearing columns, ensuring the weight of the structure is distributed perfectly across the 30' span."
        imgSrc="/Geotechnical/lo2.jpeg"
        details={[
          "Accurate Center-to-Center Marks",
          "12-Point Structural Grid",
          "Precise Setback Verification",
          "Alignment for G+2 Loading",
          "Engineering Calibration",
          "Road-Facing Orientation"
        ]}
      />

      {/* --- SECTION 3: FOOTING LAYOUT --- */}
      <ProjectSection 
        subtitle="Foundation Detail"
        title="Engineering Footing Layout"
        description="The backbone of the building. This layout specifies the dimensions and placement of footings (4', 5', and 6' sizes) based on soil strata analysis to guarantee long-term structural integrity."
        imgSrc="/Geotechnical/lo1.jpeg"
        details={[
          "Standardized Foundation Mesh",
          "Multiple Footing Sizes",
          "Reinforcement Placement",
          "Excavation Boundaries",
          "Corner Load Management",
          "Depth & Alignment Control"
        ]}
      />

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-[#0B2E33] reveal-section">
        <div className="container mx-auto px-4 relative z-10 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Technical Blueprint?</h2>
          <p className="text-[#93B1B5] text-lg mb-12 max-w-2xl mx-auto">
            Our team provides end-to-end planning services, from conceptual floor plans to detailed civil engineering drawings ready for construction.
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl hover:border-[#bf953f]/50 transition-colors">
            <div className="text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#bf953f] flex items-center justify-center text-[#0B2E33]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[#bf953f] text-xs font-bold uppercase tracking-widest">Direct Line</p>
                <p className="text-2xl font-bold text-white">+91 99646 66544</p>
              </div>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-white/20"></div>
            
            <a href="/contact" className="px-8 py-4 bg-[#bf953f] text-[#0B2E33] font-bold rounded-xl shadow-lg hover:bg-white transition-colors flex items-center gap-2">
              Get Free Consultation <ArrowRight size={20} />
            </a>
          </div>

        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F7C82] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#bf953f] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      </section>

    </div>
  );
};

export default LayoutPlanning;