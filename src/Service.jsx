import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, Layers, Hammer, PaintBucket, Home, Building2, 
  Lightbulb, CheckCircle2, ArrowRight, RotateCw 
} from 'lucide-react';

// --- 3D FLIP CARD COMPONENT ---
const FlipCard = ({ icon, title, desc }) => {
  return (
    <div className="group h-80 w-full [perspective:1000px] cursor-pointer">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* --- FRONT FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl [backface-visibility:hidden] flex flex-col items-center justify-center p-8">
          {/* Gold Glow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#bf953f]/0 via-[#bf953f]/5 to-[#bf953f]/20 rounded-[2rem]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#0B2E33] flex items-center justify-center text-[#B8E3E9] mb-6 shadow-[0_10px_30px_rgba(11,46,51,0.3)]">
              {React.cloneElement(icon, { size: 40 })}
            </div>
            <h3 className="text-2xl font-bold text-[#0B2E33] text-center">{title}</h3>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-[#0B2E33] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-8 shadow-2xl border border-[#bf953f]/30">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf953f] rounded-full blur-[60px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4F7C82] rounded-full blur-[60px] opacity-20" />

          <div className="relative z-10 text-center">
            <div className="mb-6 text-[#bf953f]">
              {React.cloneElement(icon, { size: 48 })}
            </div>
            <h3 className="text-xl font-bold text-[#B8E3E9] mb-4">{title}</h3>
            <p className="text-[#93B1B5] leading-relaxed text-sm">
              {desc}
            </p>
            <div className="mt-6 w-12 h-1 bg-[#bf953f] rounded-full mx-auto" />
          </div>
        </div>

      </div>
    </div>
  );
};

const Service = () => {
  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: "backOut" } }
  };

  return (
    <div className="font-sans antialiased overflow-x-hidden min-h-screen bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION (MATCHING ABOUT US STYLE) --- */}
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
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">What We Do</h4>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">SERVICES</span>
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
            {/* Repeated text twice to ensure seamless loop */}
            {Array(8).fill("Innovative Designs • Sustainable Living • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- FLIPPING FACTS SECTION --- */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Design Approach", icon: <PenTool />, desc: "Our designs combine innovation, sustainability, and client-focused solutions with VR visualization and eco-friendly practices." },
              { title: "Innovative Solutions", icon: <Lightbulb />, desc: "Experience the future of housing with our VR visualization tools, green energy practices, and flexible zero-interest financing options." },
              { title: "Project Management", icon: <CheckCircle2 />, desc: "From the initial planning stages to final execution, we ensure seamless coordination, timely delivery, and top-tier quality for every project." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FlipCard icon={item.icon} title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MAIN SERVICES GRID --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#4F7C82] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-4">Excellence</h4>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2E33] leading-tight">
              Innovative Architecture & <br/>
              <span className="text-[#4F7C82]">Modern Interior Design</span>
            </h1>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { img: "service-1.jpg", icon: <Building2 />, title: "Architecture", desc: "Designing functional spaces blending aesthetics with practicality." },
              { img: "service-2.jpg", icon: <Layers />, title: "3D Animation", desc: "Realistic animations bringing your vision to life vividly." },
              { img: "service-3.jpg", icon: <Home />, title: "House Planning", desc: "Tailored designs maximizing space and functionality." },
              { img: "service-4.jpg", icon: <PaintBucket />, title: "Interior Design", desc: "Elegant spaces reflecting your unique personal style." },
              { img: "service-5.jpg", icon: <Hammer />, title: "Renovation", desc: "Transforming existing spaces with modern upgrades." },
              { img: "service-6.jpg", icon: <Building2 />, title: "Construction", desc: "High-quality sustainable building from concept to completion." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Background Image */}
                <motion.img 
                  variants={scaleHover}
                  src={`img/${service.img}`} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] via-[#0B2E33]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-auto pt-4 transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <span className="inline-block px-4 py-1 rounded-full border border-[#bf953f] text-[#bf953f] text-xs font-bold uppercase tracking-widest bg-[#0B2E33]/50 backdrop-blur-md">
                       Premium Service
                     </span>
                  </div>

                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-[#bf953f] flex items-center justify-center text-[#0B2E33] mb-6 shadow-lg"
                    whileHover={{ rotate: 15 }}
                  >
                    {React.cloneElement(service.icon, { size: 28 })}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#B8E3E9] transition-colors">{service.title}</h3>
                  <p className="text-[#93B1B5] text-lg leading-relaxed mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {service.desc}
                  </p>
                  
                  {/* Learn More Arrow */}
                  <div className="flex items-center gap-3 text-[#bf953f] font-bold uppercase text-sm tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500 delay-100">
                    Learn More <ArrowRight size={18} />
                  </div>
                </div>

                {/* Gold Border Reveal */}
                <div className="absolute inset-0 border-4 border-[#bf953f] rounded-[2.5rem] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Service;