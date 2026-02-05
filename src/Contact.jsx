import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, Phone, Mail, Send, Facebook, Instagram, 
  ArrowRight, MessageSquare 
} from 'lucide-react';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Framer Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="font-sans antialiased overflow-x-hidden min-h-screen bg-[#B8E3E9] text-[#0B2E33]">
      
      {/* --- HERO SECTION (Standardized) --- */}
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
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">Get In Touch</h4>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">US</span>
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
            {Array(8).fill("Start Your Dream Project • 24/7 Support • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- CONTACT CONTENT SECTION --- */}
      <section className="py-24 relative z-20 contact-section">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h4 className="text-[#4F7C82] font-bold uppercase tracking-[0.2em] mb-4">Queries</h4>
            <h1 className="text-4xl font-bold text-[#0B2E33] leading-tight reveal-text">
              Have Any Questions? <br/>
              <span className="text-[#bf953f]">Feel Free to Ask</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT: Contact Info Cards */}
            <div className="space-y-6">
              {[
                { 
                  icon: <MapPin />, 
                  title: "Headquarters", 
                  text: "BHPL PVT LTD #12,15th cross, Outer Ring Rd, next to sri sai motors, sarakki village, J. P. Nagar, Bengaluru, Karnataka 560078",
                  
                },
                { 
                  icon: <Phone />, 
                  title: "Phone Number", 
                  text: "+91 99646 66544",
                  subtext: "Mon-Sat 9am to 6pm"
                },
                { 
                  icon: <Mail />, 
                  title: "Email Address", 
                  text: "support@bhpl.club",
                  subtext: "Drop us a line anytime"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.9)" }}
                  className="flex items-center p-6 bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg border border-white/50 group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0B2E33] flex items-center justify-center text-[#bf953f] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <div className="ml-6">
                    <p className="text-[#bf953f] text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                    <h3 className="text-xl font-bold text-[#0B2E33]">{item.text}</h3>
                    <p className="text-[#4F7C82] text-sm mt-1">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social Media Row */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pt-8 flex gap-4"
              >
                <SocialButton icon={<Instagram />} href="https://www.instagram.com/bhpl.club" />
                <SocialButton icon={<Facebook />} href="https://www.facebook.com/profile.php?id=61573969246784" />
              </motion.div>
            </div>

            {/* RIGHT: Glass Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden"
            >
              {/* Decorative Gradient Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f] rounded-full blur-[100px] opacity-10 pointer-events-none" />

              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup label="Your Name" placeholder="John Doe" />
                  <InputGroup label="Your Email" placeholder="john@example.com" type="email" />
                </div>
                <InputGroup label="Subject" placeholder="Project Inquiry" />
                
                <div className="space-y-2">
                  <label className="text-[#4F7C82] text-sm font-bold ml-4">Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about your dream project..." 
                    className="w-full bg-[#B8E3E9]/30 border border-[#B8E3E9] rounded-2xl p-4 text-[#0B2E33] focus:outline-none focus:border-[#bf953f] focus:ring-1 focus:ring-[#bf953f] transition-all resize-none placeholder-[#4F7C82]/50"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#0B2E33] text-white rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(11,46,51,0.3)] hover:bg-[#bf953f] transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message 
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- GOOGLE MAP --- */}
<section className="py-12 relative px-4">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="container mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 h-[500px] relative group"
  >
    <iframe
      src="https://www.google.com/maps?q=12.9066174,77.5744505&output=embed"
      className="w-full h-full border-0 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Chiranth Agencies Location"
    ></iframe>
    
    {/* Overlay text on map */}
    <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg pointer-events-none">
      <p className="flex items-center gap-2 text-[#0B2E33] font-bold">
        <MapPin className="text-[#bf953f]" size={20} /> Locate Us
      </p>
    </div>
  </motion.div>
</section>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[#4F7C82] text-sm font-bold ml-4">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-[#B8E3E9]/30 border border-[#B8E3E9] rounded-2xl px-6 py-4 text-[#0B2E33] focus:outline-none focus:border-[#bf953f] focus:ring-1 focus:ring-[#bf953f] transition-all placeholder-[#4F7C82]/50" 
    />
  </div>
);

const SocialButton = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border-2 border-[#bf953f] flex items-center justify-center text-[#bf953f] hover:bg-[#bf953f] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
  >
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

export default Contact;