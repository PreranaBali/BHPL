import React, { useRef, useLayoutEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Users, Lightbulb, Award, Star } from 'lucide-react';

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
    // Disable tilt on touch devices to prevent jumpy behavior
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Optimized Text Reveal: Only trigger once
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 90%", // Trigger slightly later for mobile visibility
        },
        y: 30, // Reduced distance for smoother mobile feel
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1
      });

      // Parallax Image - Reduced intensity for mobile to avoid layout shifts
      gsap.to(".parallax-img", {
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: (i) => window.innerWidth < 768 ? -20 : -60, // Conditional parallax depth
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="font-sans antialiased w-full overflow-hidden min-h-screen bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0B2E33]">
           <motion.div 
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
           />
           <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#bf953f] rounded-full blur-[80px] md:blur-[120px] opacity-20 md:opacity-30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#bf953f] font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-base">Who We Are</h4>
            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tight text-white drop-shadow-xl">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="bg-[#0B2E33] py-4 md:py-6 border-y border-[#bf953f]/20 relative z-20 w-full overflow-hidden">
        <div className="flex w-max">
          <motion.div 
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-8 md:gap-16 text-[#bf953f]/10 text-3xl md:text-7xl font-black uppercase"
          >
            {Array(8).fill("Building Dreams • Creating Legacy • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="py-16 md:py-24 relative parallax-container w-full overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left: Images - Stacked on mobile */}
            <div className="relative grid grid-cols-2 gap-4 md:gap-6">
              <div className="parallax-img space-y-4 md:space-y-6 pt-8 md:pt-12">
                <img className="w-full rounded-[1.5rem] md:rounded-[2rem] object-cover shadow-xl border-2 border-white/40 h-48 md:h-80" src="img/about-1.jpg" alt="About" />
                <div className="bg-[#0B2E33] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-[#B8E3E9] border border-[#bf953f]/30 shadow-lg">
                  <Star className="w-6 h-6 md:w-10 md:h-10 text-[#bf953f] mb-3" />
                  <p className="font-serif italic text-sm md:text-lg leading-relaxed">"Crafting the backdrop for your life's best memories."</p>
                </div>
              </div>
              <div className="parallax-img">
                <img className="w-full rounded-[1.5rem] md:rounded-[2rem] object-cover shadow-xl border-2 border-white/40 h-64 md:h-[28rem]" src="img/about-2.jpg" alt="About" />
              </div>
            </div>
            
            {/* Right: Text Content */}
            <div className="relative z-10 text-left">
              <h4 className="reveal-text text-[#4F7C82] font-bold uppercase tracking-[0.2em] mb-2 text-sm">Our Journey</h4>
              <h1 className="reveal-text text-3xl md:text-6xl font-bold leading-tight mb-6 text-[#0B2E33]">
                24 Years of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7C82] to-[#0B2E33]">Excellence</span>
              </h1>
              
              <p className="reveal-text text-[#4F7C82] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                At BHPL Housing Pvt Ltd, we specialize in creating affordable dream homes tailored to your unique needs. Leveraging cutting-edge <strong className="text-[#0B2E33]">VR technology</strong>, we offer an immersive experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { icon: <Trophy />, title: "Award Winning", desc: "Design excellence" },
                    { icon: <Lightbulb />, title: "Innovation", desc: "VR Construction" },
                    { icon: <Users />, title: "Client Focus", desc: "Tailored solutions" },
                    { icon: <Award />, title: "Quality First", desc: "Zero compromise" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="flex gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-[#0B2E33]/5 shadow-sm"
                    >
                      <div className="text-[#bf953f] bg-white p-2 rounded-xl h-fit">{React.cloneElement(item.icon, { size: 20 })}</div>
                      <div>
                        <h4 className="font-bold text-[#0B2E33] text-md">{item.title}</h4>
                        <p className="text-xs text-[#4F7C82]">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- DIRECTORS SECTION --- */}
      <section className="py-20 md:py-32 bg-[#0B2E33] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4F7C8233_0%,_#0B2E33_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-2 text-xs">Visionaries</h4>
            <h1 className="text-3xl md:text-5xl font-bold text-white">Meet Our Directors</h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
            {[
              { name: "Mr. Muthyal Ashwin Kumar", role: "CEO & Founder", img: "img/founder.png" },
              { name: "Mr. Eeswar", role: "Director", img: "img/MDIR.svg" }
            ].map((leader, idx) => (
              <TiltCard 
                key={idx}
                className="group w-full max-w-[280px] md:max-w-sm bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl"
              >
                <div className="h-[380px] md:h-[500px] relative flex items-end justify-center pt-8">
                   <img 
                     className="h-[90%] w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" 
                     src={leader.img} 
                     alt={leader.name} 
                   />
                   <div className="absolute bottom-4 md:bottom-6 w-[90%] bg-white/95 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-center shadow-xl z-20">
                      <h3 className="text-lg font-bold text-[#0B2E33] leading-tight">{leader.name}</h3>
                      <p className="text-[#bf953f] font-bold uppercase tracking-wider text-[10px] mt-1">{leader.role}</p>
                   </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-20 md:py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="text-[#4F7C82] font-bold uppercase tracking-[0.2em] mb-2 text-xs">The Squad</h4>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2E33]">Dedicated Team Members</h1>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8"
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
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="group relative w-[calc(50%-12px)] sm:w-64 bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md"
               >
                 <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                   <img 
                     className="w-full h-full object-cover object-top" 
                     src={`img/${member.img}`} 
                     alt={member.name} 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] via-transparent to-transparent opacity-70" />
                   
                   <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-md p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg border border-white/50">
                     <h3 className="text-[10px] md:text-sm font-bold text-[#0B2E33] leading-tight text-center">{member.name}</h3>
                     <p className="text-[#4F7C82] text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-center mt-1">{member.role}</p>
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