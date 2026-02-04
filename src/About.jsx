import React, { useRef, useLayoutEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Users, Lightbulb, Award, Star } from 'lucide-react';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // Text Reveal
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });

      // Parallax Image
      gsap.to(".parallax-img", {
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -60,
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="font-sans antialiased w-full overflow-hidden min-h-screen bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0B2E33]">
           <motion.div 
             animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"
           />
           <motion.div 
             animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#bf953f] rounded-full blur-[120px] opacity-30"
           />
        </div>

        <div className="relative z-10 text-center px-4 perspective-1000">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">Who We Are</h4>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">US</span>
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
            {Array(8).fill("Building Dreams • Creating Legacy • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 relative parallax-container w-full overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Parallax Images */}
            <div className="relative grid grid-cols-2 gap-6">
              <div className="parallax-img space-y-6 pt-12">
                <img className="w-full rounded-[2rem] object-cover shadow-2xl border-4 border-white/40 h-64 md:h-80" src="img/about-1.jpg" alt="About" />
                <div className="bg-[#0B2E33] p-8 rounded-[2rem] text-[#B8E3E9] border border-[#bf953f]/30 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f]/0 via-[#bf953f]/10 to-[#bf953f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"/>
                  <Star className="w-10 h-10 text-[#bf953f] mb-4" />
                  <p className="font-serif italic text-lg leading-relaxed">"Crafting the backdrop for your life's best memories."</p>
                </div>
              </div>
              <div className="parallax-img">
                <img className="w-full rounded-[2rem] object-cover shadow-2xl border-4 border-white/40 h-80 md:h-[28rem]" src="img/about-2.jpg" alt="About" />
              </div>
            </div>
            
            {/* Right: Text Content */}
            <div className="relative z-10">
              <h4 className="reveal-text text-[#4F7C82] font-bold uppercase tracking-[0.25em] mb-4">Our Journey</h4>
              <h1 className="reveal-text text-4xl md:text-6xl font-bold leading-tight mb-8 text-[#0B2E33]">
                24 Years of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7C82] to-[#0B2E33]">Excellence</span>
              </h1>
              
              <p className="reveal-text text-[#4F7C82] text-lg leading-relaxed mb-10 max-w-xl">
                At BHPL Housing Pvt Ltd, we specialize in creating affordable dream homes tailored to your unique needs. Leveraging cutting-edge <strong className="text-[#0B2E33]">VR technology</strong>, we offer an immersive experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { icon: <Trophy />, title: "Award Winning", desc: "Design excellence" },
                   { icon: <Lightbulb />, title: "Innovation", desc: "VR Construction" },
                   { icon: <Users />, title: "Client Focus", desc: "Tailored solutions" },
                   { icon: <Award />, title: "Quality First", desc: "Zero compromise" },
                 ].map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                     className="flex gap-4 p-5 rounded-2xl transition-all border border-[#0B2E33]/5 hover:border-[#bf953f]/50 hover:shadow-lg bg-white/40 backdrop-blur-sm"
                   >
                      <div className="text-[#bf953f] bg-white p-2 rounded-xl h-fit shadow-sm">{React.cloneElement(item.icon, { size: 24 })}</div>
                      <div>
                        <h4 className="font-bold text-[#0B2E33] text-lg">{item.title}</h4>
                        <p className="text-sm text-[#4F7C82]">{item.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- DIRECTORS SECTION --- */}
      <section className="py-32 bg-[#0B2E33] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4F7C82]/20 via-[#0B2E33] to-[#0B2E33]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-4">Visionaries</h4>
            <h1 className="text-5xl font-bold text-white">Meet Our Directors</h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 perspective-2000">
            {[
              { name: "Mr. Muthyal Ashwin Kumar", role: "CEO & Founder", img: "img/founder.png" },
              { name: "Mr. Eeswar", role: "Director", img: "img/MDIR.svg" }
            ].map((leader, idx) => (
              <TiltCard 
                key={idx}
                className="group w-full max-w-sm bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#bf953f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="h-[500px] relative flex items-end justify-center pt-10">
                   <motion.img 
                     className="h-[95%] w-auto object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105" 
                     src={leader.img} 
                     alt={leader.name} 
                   />
                   <div className="absolute bottom-6 w-[85%] bg-white/95 backdrop-blur-md p-6 rounded-[2rem] text-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <h3 className="text-xl font-bold text-[#0B2E33] leading-tight">{leader.name}</h3>
                      <p className="text-[#bf953f] font-bold uppercase tracking-wider text-xs mt-2">{leader.role}</p>
                   </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION (FIXED & CENTERED) --- */}
      <section className="py-32 bg-slate-50 relative px-30" >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h4 className="text-[#4F7C82] font-bold uppercase tracking-[0.2em] mb-4">The Squad</h4>
            <h1 className="text-4xl font-bold text-[#0B2E33]">Dedicated Team Members</h1>
          </div>

          {/* FIXED: Used Flexbox with justify-center to perfectly center cards 
              regardless of screen size or card count.
          */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
               { img: "santhosh.jpg", name: "Mr. SanthoshKumar S", role: "South Indian Sales" },
               { img: "john sir.svg", name: "Mr. John", role: "North Karnataka Sales" },
               
               { img: "gopi.png", name: "Mr. Gopi Tanniru", role: "Civil Engineer" },
               { img: "praveen.jpg", name: "Mr. Praveen Kumar", role: "Site Engineer" },
               { img: "andha.png", name: "Mr. Anand Kumar", role: "Sales Manager" },
            ].map((member, index) => (
               <motion.div 
                 key={index}
                 variants={{
                   hidden: { opacity: 0, y: 30 },
                   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                 }}
                 // FIXED: Width set to w-64 (approx 250px) for a smaller, cleaner look
                 className="group relative w-64 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
               >
                 {/* Card Container */}
                 <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                   
                   {/* Image - Object Top aligned */}
                   <img 
                     className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                     src={`img/${member.img}`} 
                     alt={member.name} 
                   />

                   {/* Overlay Gradient on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                   {/* Info Box - Floating at bottom */}
                   <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-white/50">
                     <h3 className="text-sm font-bold text-[#0B2E33] leading-tight text-center">{member.name}</h3>
                     <div className="w-6 h-0.5 bg-[#bf953f] mx-auto my-2 rounded-full group-hover:w-12 transition-all duration-300" />
                     <p className="text-[#4F7C82] text-[9px] font-bold uppercase tracking-widest text-center">{member.role}</p>
                   </div>
                 </div>
               </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;