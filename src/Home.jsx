import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence,
  useMotionValue
} from 'framer-motion';
import { 
  Building2, PenTool, Home, Layers, Hammer, PaintBucket, 
  CheckCircle2, Phone, Mail, ArrowRight, Play, User, 
  MoveRight
} from 'lucide-react';

// --- THEME CONFIGURATION (Winter Chill Palette) ---
const theme = {
  ice: '#1B2A2D',     // Lightest - Backgrounds, Highlights
  mist: '#93B1B5',    // Mid-Light - Borders, Secondary Text
  teal: '#4F7C82',    // Mid-Dark - Accents, Icons, Buttons
  deep: '#0B2E33',    // Darkest - Text, Strong Backgrounds, Footer
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="font-sans overflow-x-hidden selection:bg-[#4F7C82] selection:text-white" style={{ backgroundColor: theme.ice }}>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50" 
        style={{ scaleX, backgroundColor: theme.deep }} 
      />

      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- FEATURES SECTION --- */}
      <FeaturesSection />

      {/* --- ABOUT SECTION --- */}
      <AboutSection />

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />

      {/* --- PROJECTS SECTION (Liquid Tabs) --- */}
      <ProjectsSection />

      {/* --- VIDEO CTA --- */}
      <VideoSection />

      {/* --- TEAM SECTION --- */}
      <TeamSection />

      {/* --- APPOINTMENT FORM --- */}
      <AppointmentSection />

    </div>
  );
};

// --- HERO SECTION WITH PARALLAX & GOLD ACCENT ---
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Text moves slower
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Video moves upward

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center pb-30">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply filter blur-3xl">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[50vw] h-[50vh] rounded-full bg-[#93B1B5]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] rounded-full bg-[#B8E3E9]" 
        />
      </div>

      {/* Parallax Video Background Container */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E33]/40 via-[#0B2E33]/20 to-[#B8E3E9]" />
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="img/hero2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Hero Content */}
      <motion.div style={{ y: y1 }} className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 100, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6"
        >
          Build Your <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8E3E9] to-[#93B1B5] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Dream Home
          </span>
          <br />
          {/* UPDATED: Premium Gold Metallic Effect */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]">
            With BHPL
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-[#B8E3E9] mb-10 max-w-2xl mx-auto font-light"
        >
          Constructing dreams with precision. Experience housing solutions tailored to your life.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-[#0B2E33] text-white rounded-full text-lg font-semibold overflow-hidden shadow-2xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            Discover More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* Gold hover background effect */}
          <div className="absolute inset-0 bg-[#bf953f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
        </motion.button>
      </motion.div>
    </div>
  );
};

// --- FEATURES SECTION (Glassmorphism) ---
const FeaturesSection = () => {
  return (
    <section className="py-24 relative z-20 -mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Design Approach", icon: <PenTool />, desc: "Innovation meets sustainability." },
            { title: "Smart Financing", icon: <CheckCircle2 />, desc: "Zero-interest solutions tailored for you." },
            { title: "Seamless Management", icon: <Layers />, desc: "Coordination from planning to execution." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="backdrop-blur-xl bg-white/70 border border-white/50 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,124,130,0.15)] transition-shadow duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F7C82] to-[#0B2E33] flex items-center justify-center text-[#B8E3E9] mb-6 shadow-lg">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-[#0B2E33] mb-3">{item.title}</h3>
              <p className="text-[#018790] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
const AboutSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#93B1B5] rounded-[2rem] rotate-3 opacity-30 z-0" />
          <img src="img/about-1.jpg" alt="About" className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]" />
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute -bottom-10 -right-10 z-20 bg-[#0B2E33] text-[#B8E3E9] p-10 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-2xl border-4 border-[#B8E3E9]"
          >
            <span className="text-5xl font-bold">24</span>
            <span className="text-sm uppercase tracking-widest mt-1">Years</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-[#bf953f] font-bold uppercase tracking-widest mb-2">About Us</h4>
          <h2 className="text-5xl font-bold text-[#F5FBE6] mb-6 leading-tight">
            Building Innovative Spaces
          </h2>
          <p className="text-[#018790] text-lg mb-8 leading-relaxed">
            Specializing in creating affordable dream homes. By leveraging cutting-edge VR technology, 
            we offer an immersive experience that allows you to explore and visualize your future home.
          </p>
          <ul className="space-y-4 mb-8">
            {["VR Visualization", "Eco-Friendly Practices", "Turn-Key Solutions"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-[#249E94] font-medium"
              >
                <CheckCircle2 className="text-[#bf953f]" /> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// --- SERVICES SECTION ---
const ServicesSection = () => {
  const services = [
    { icon: <Building2 />, title: "Architecture", img: "img/service-1.jpg" },
    { icon: <Layers />, title: "3D Animation", img: "img/service-2.jpg" },
    { icon: <Home />, title: "House Planning", img: "img/service-3.jpg" },
    { icon: <PaintBucket />, title: "Interior Design", img: "img/service-4.jpg" },
    { icon: <Hammer />, title: "Renovation", img: "img/service-5.jpg" },
    { icon: <Building2 />, title: "Construction", img: "img/service-6.jpg" },
  ];

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B2E33]">Our Premium Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#0B2E33]/60 group-hover:bg-[#4F7C82]/80 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  <div className="w-12 h-12 rounded-full bg-[#B8E3E9] text-[#0B2E33] flex items-center justify-center mb-3">
                    {React.cloneElement(service.icon, { size: 20 })}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {service.title}
                </h3>
                <div className="h-1 w-12 bg-[#bf953f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROJECTS SECTION ---
const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    { id: 0, title: "Modern Complex", img: "img/project-1.jpg", desc: "State of the art commercial complex." },
    { id: 1, title: "Royal Hotel", img: "img/project-2.jpg", desc: "Luxury hospitality project." },
    { id: 2, title: "Mexwel Building", img: "img/project-3.jpg", desc: "Sustainable residential high-rise." },
    { id: 3, title: "Shopping Mall", img: "img/project-4.jpg", desc: "Urban retail center." },
  ];

  return (
    <section className="py-24 bg-[#B8E3E9]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h4 className="text-[#249E94] font-bold uppercase mb-6 tracking-widest">Latest Works</h4>
            {projects.map((project, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`relative z-10 w-full text-left p-6 text-xl font-bold transition-all duration-500 flex items-center group ${
                    activeTab === idx ? "text-[#EDEDCE] translate-x-2" : "text-[#249E94] hover:text-[#0B2E33] hover:translate-x-1"
                  }`}
                >
                  <span className={`mr-4 text-sm font-mono transition-opacity duration-300 ${activeTab === idx ? "opacity-100" : "opacity-40"}`}>
                    0{idx + 1}.
                  </span>
                  {project.title}
                  
                  {activeTab !== idx && (
                    <MoveRight className="ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </button>
                
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0B2E33] rounded-xl shadow-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8 relative h-[500px] group perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ scale: isHovering ? 1.1 : 1 }}
                  transition={{ duration: 7, ease: "linear" }}
                >
                  <img 
                    src={projects[activeTab].img} 
                    alt={projects[activeTab].title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] via-[#0B2E33]/40 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 p-12 text-white max-w-2xl w-full">
                  <div className="overflow-hidden">
                    <motion.h3 
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                    >
                      {projects[activeTab].title}
                    </motion.h3>
                  </div>

                  <div className="overflow-hidden">
                    <motion.p 
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-[#93B1B5] text-lg mb-8 leading-relaxed max-w-lg"
                    >
                      {projects[activeTab].desc}
                    </motion.p>
                  </div>

                  <motion.button 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="group/btn relative flex items-center gap-4 text-[#B8E3E9] text-lg font-semibold tracking-wide"
                  >
                    <span className="relative z-10">View Project Details</span>
                    <span className="bg-[#bf953f] p-2 rounded-full text-[#0B2E33] group-hover/btn:bg-[#B8E3E9] transition-colors duration-300">
                       <MoveRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B8E3E9] transition-all duration-300 group-hover/btn:w-[calc(100%-3rem)]"></span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- VIDEO SECTION ---
const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full h-screen bg-[#0B2E33] overflow-hidden group">
      
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="img/project.mp4" 
        controls={isPlaying}
        onPause={handlePause}
        onPlay={() => setIsPlaying(true)}
        playsInline
      />

      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#0B2E33]/60 via-[#0B2E33]/40 to-[#0B2E33]/80 backdrop-blur-[2px]"
          >
            <div className="text-center px-4 mb-12 max-w-4xl">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block py-1 px-3 border border-[#B8E3E9]/30 rounded-full text-[#B8E3E9] text-sm font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
              >
                Vision Into Reality
              </motion.span>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight"
              >
                Ongoing School <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8E3E9] to-[#4F7C82]">
                   & Hospital Project
                </span>
              </motion.h1>
            </div>

            <motion.button
              onClick={handlePlay}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-[#bf953f] rounded-full shadow-[0_0_50px_rgba(191,149,63,0.3)] cursor-pointer"
            >
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#bf953f] z-0"
              />
              <Play className="w-10 h-10 md:w-12 md:h-12 text-[#0B2E33] fill-[#0B2E33] ml-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -bottom-12 text-white/70 text-sm font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                PLAY VIDEO
              </div>
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>

      {!isPlaying && (
        <>
          <div className="absolute top-10 left-10 w-24 h-[1px] bg-white/20 z-30 hidden md:block" />
          <div className="absolute top-10 left-10 w-[1px] h-24 bg-white/20 z-30 hidden md:block" />
          <div className="absolute bottom-10 right-10 w-24 h-[1px] bg-white/20 z-30 hidden md:block" />
          <div className="absolute bottom-10 right-10 w-[1px] h-24 bg-white/20 z-30 hidden md:block" />
        </>
      )}
    </section>
  );
};

// --- TEAM SECTION ---
const TeamSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#018790]">Directors</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {[
          { name: "Mr. Muthyal Ashwin Kumar", role: "CEO & Founder", img: "img/founder.png" },
          { name: "Mr. Eeswar", role: "Director", img: "img/MDIR.svg" },
        ].map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="w-full max-w-sm bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#93B1B5]/20"
          >
            <div className="relative h-96 bg-[#B8E3E9] overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-[#4F7C82] origin-bottom"
                 initial={{ scaleY: 0 }}
                 whileHover={{ scaleY: 1 }}
                 transition={{ duration: 0.4 }}
               />
               <img src={member.img} alt={member.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] object-contain drop-shadow-lg z-10" />
            </div>
            <div className="p-8 text-center bg-white relative z-20">
              <h3 className="text-xl font-bold text-[#0B2E33]">{member.name}</h3>
              <p className="text-[#bf953f] font-medium mt-1">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- APPOINTMENT SECTION ---
const AppointmentSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="bg-[#0B2E33] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4F7C82] rounded-full blur-[100px] opacity-20 pointer-events-none" />

        <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-[#B8E3E9]">Start Your Dream Project</h2>
          <p className="text-[#93B1B5] mb-12 text-lg leading-relaxed">
            With 24 years of expertise, BHPL creates spaces that positively impact communities.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#4F7C82] flex items-center justify-center shadow-lg">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-[#B8E3E9] text-sm uppercase tracking-wider">Call Us</p>
                <h3 className="text-2xl font-bold">+91 99646 66544</h3>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#4F7C82] flex items-center justify-center shadow-lg">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-[#B8E3E9] text-sm uppercase tracking-wider">Email Us</p>
                <h3 className="text-2xl font-bold">support@bhpl.club</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 lg:p-20 bg-white/5 backdrop-blur-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InputGroup label="Your Name" icon={<User />} />
              <InputGroup label="Your Email" icon={<Mail />} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <InputGroup label="Phone" icon={<Phone />} />
              <div className="space-y-2">
                <label className="text-[#93B1B5] text-sm">Service</label>
                <select className="w-full bg-[#0B2E33] border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9]">
                  <option>Construction</option>
                  <option>Architecture</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[#93B1B5] text-sm">Message</label>
              <textarea rows="4" className="w-full bg-[#0B2E33] border border-[#4F7C82] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9]"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#bf953f] text-[#0B2E33] font-bold py-4 rounded-xl hover:bg-white transition-colors shadow-lg"
            >
              Book Appointment
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const InputGroup = ({ label, icon }) => (
  <div className="space-y-2">
    <label className="text-[#93B1B5] text-sm">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-3.5 text-[#4F7C82]">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <input 
        type="text" 
        className="w-full bg-[#0B2E33] border border-[#4F7C82] rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9]" 
      />
    </div>
  </div>
);

export default HomePage;