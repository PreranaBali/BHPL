import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence
} from 'framer-motion';
import { 
  Building2, PenTool, Home, Layers, Hammer, PaintBucket, 
  CheckCircle2, Phone, Mail, ArrowRight, Play, User, 
  MoveRight, Award, Trophy
} from 'lucide-react';

// --- THEME CONFIGURATION (Your Exact Original Palette) ---
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

      {/* --- ACHIEVEMENTS SECTION --- */}
      <AchievementsSection />

      {/* --- ABOUT SECTION --- */}
      <AboutSection />

      {/* --- SERVICES SECTION --- */}
      <ServicesSection />

      {/* --- PROJECTS SECTION --- */}
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

// --- HERO SECTION ---
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); 
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); 

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center pb-30">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply filter blur-[80px]">
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

      <motion.div style={{ y: y2 }} className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E33]/60 via-[#0B2E33]/30 to-[#B8E3E9]" />
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="img/hero2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div style={{ y: y1 }} className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(11,46,51,0.5)] mb-6 leading-tight"
        >
          Build Your <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8E3E9] to-[#93B1B5]">
            Dream Home
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] drop-shadow-[0_2px_10px_rgba(191,149,63,0.3)]">
            With BHPL
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-[#B8E3E9] mb-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          Constructing dreams with precision. Experience housing solutions tailored to your life.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-[#0B2E33] text-white rounded-full text-lg font-semibold overflow-hidden shadow-[0_15px_30px_rgba(11,46,51,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Discover More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] to-[#b38728] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
        </motion.button>
      </motion.div>
    </div>
  );
};

// --- FEATURES SECTION ---
const FeaturesSection = () => {
  return (
    <section className="py-24 relative z-20 -mt-24">
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
              className="backdrop-blur-2xl bg-white/80 border border-white p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(11,46,51,0.08)] hover:shadow-[0_30px_50px_rgba(79,124,130,0.15)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[#4F7C82] to-[#0B2E33] flex items-center justify-center text-[#B8E3E9] mb-8 shadow-lg">
                {React.cloneElement(item.icon, { size: 30 })}
              </div>
              <h3 className="text-2xl font-bold text-[#0B2E33] mb-3">{item.title}</h3>
              <p className="text-[#018790] leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- ACHIEVEMENTS SECTION ---
const AchievementsSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const slideDuration = 5; 
  
  const achievementImages = [
    "img/h1.jpeg",
    "img/h2.jpeg",
    "img/h3.jpeg",
    "img/h4.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % achievementImages.length);
    }, slideDuration * 1000);
    return () => clearInterval(timer);
  }, [achievementImages.length]);

  return (
    <section className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0B2E33]/90 to-[#1B2A2D] backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(11,46,51,0.4)]">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf953f] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#bf953f]/10 flex items-center justify-center border border-[#bf953f]/30">
                    <Award className="text-[#bf953f] w-6 h-6" />
                  </div>
                  <h4 className="text-[#bf953f] font-bold uppercase tracking-widest text-sm">Honors & Recognition</h4>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">
                  Bharat Ratna Sir M. Visvesvaraya Memorial Awards – 2025
                </h2>
                
                <div className="space-y-6 text-[#93B1B5] text-lg font-light leading-relaxed">
                  <p>
                    We are proud to announce that <strong className="text-white font-medium">Mr. Muthyal Ashwin Kumar</strong>, 
                    Managing Director & CEO of Bendakaluru Housing Private Limited, Bangalore, 
                    has been honored with the prestigious <span className="text-[#bf953f] font-medium">“Best Construction Company”</span> Award 
                    by Icons of Indian Business Magazine.
                  </p>
                  <p>
                    This recognition celebrates excellence, innovation, and a strong commitment to delivering quality infrastructure that shapes modern living.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[400px] lg:h-auto min-h-[500px] bg-[#0B2E33]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={achievementImages[currentImage]}
                  alt={`Award Ceremony ${currentImage + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E33] lg:from-[#0B2E33] via-transparent to-transparent opacity-90 lg:w-1/3" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E33] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                <div className="flex justify-between items-center mb-5">
                  <div className="bg-[#0B2E33]/80 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full font-mono text-xs tracking-widest flex items-center gap-2 shadow-lg">
                    <Trophy className="w-4 h-4 text-[#bf953f]" />
                    {currentImage + 1} / {achievementImages.length}
                  </div>
                  <span className="text-white/60 font-mono text-xs">{slideDuration}s</span>
                </div>
                
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    key={currentImage}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: slideDuration, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
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
          <div className="absolute -inset-4 bg-[#93B1B5] rounded-[3rem] rotate-3 opacity-30 z-0" />
          <img src="img/about-1.jpg" alt="About" className="relative z-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(11,46,51,0.3)] w-full object-cover h-[500px]" />
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="absolute -bottom-10 -right-10 z-20 bg-[#0B2E33] text-[#B8E3E9] p-10 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(11,46,51,0.4)] border-4 border-[#B8E3E9] transition-transform duration-300"
          >
            <span className="text-5xl font-bold">24</span>
            <span className="text-sm uppercase tracking-widest mt-2">Years</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-[#bf953f] font-bold uppercase tracking-widest mb-4">About Us</h4>
          <h2 className="text-5xl font-bold text-[#F5FBE6] mb-8 leading-tight">
            Building Innovative Spaces
          </h2>
          <p className="text-[#018790] text-xl mb-10 leading-relaxed font-light">
            Specializing in creating affordable dream homes. By leveraging cutting-edge VR technology, 
            we offer an immersive experience that allows you to explore and visualize your future home.
          </p>
          <ul className="space-y-5 mb-8">
            {["VR Visualization", "Eco-Friendly Practices", "Turn-Key Solutions"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-[#249E94] text-lg font-medium"
              >
                <CheckCircle2 className="text-[#bf953f] w-6 h-6" /> {item}
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
    <section className="py-24 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E33]">Our Premium Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[0_15px_30px_rgba(11,46,51,0.15)]"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#0B2E33]/50 group-hover:bg-[#4F7C82]/70 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  <div className="w-14 h-14 rounded-2xl bg-[#B8E3E9] text-[#0B2E33] flex items-center justify-center mb-3 shadow-lg">
                    {React.cloneElement(service.icon, { size: 24 })}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {service.title}
                </h3>
                <div className="h-1 w-16 bg-[#bf953f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
          
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-[#249E94] font-bold uppercase mb-6 tracking-widest">Latest Works</h4>
            {projects.map((project, idx) => (
              <div key={idx} className="relative">
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`relative z-10 w-full text-left p-6 text-xl font-bold transition-all duration-500 flex items-center group rounded-2xl ${
                    activeTab === idx ? "text-[#EDEDCE] translate-x-2" : "text-[#249E94] hover:text-[#0B2E33] hover:translate-x-1"
                  }`}
                >
                  <span className={`mr-4 text-sm font-mono transition-opacity duration-300 ${activeTab === idx ? "opacity-100" : "opacity-40"}`}>
                    0{idx + 1}.
                  </span>
                  {project.title}
                  
                  {activeTab !== idx && (
                    <MoveRight className="ml-auto w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </button>
                
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0B2E33] rounded-2xl shadow-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 relative h-[550px] group perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(11,46,51,0.2)] cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{ scale: isHovering ? 1.05 : 1 }}
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
                    <span className="bg-[#bf953f] p-3 rounded-full text-[#0B2E33] group-hover/btn:bg-[#B8E3E9] transition-colors duration-300 shadow-md">
                       <MoveRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8E3E9] transition-all duration-300 group-hover/btn:w-[calc(100%-3.5rem)]"></span>
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

  const handlePause = () => setIsPlaying(false);

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
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#0B2E33]/70 via-[#0B2E33]/50 to-[#0B2E33]/90 backdrop-blur-[2px]"
          >
            <div className="text-center px-4 mb-12 max-w-4xl">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block py-2 px-5 border border-[#B8E3E9]/30 rounded-full text-[#B8E3E9] text-sm font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
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
              className="group relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-[#bf953f] rounded-full shadow-[0_0_50px_rgba(191,149,63,0.4)] cursor-pointer"
            >
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#bf953f] z-0"
              />
              <Play className="w-10 h-10 md:w-12 md:h-12 text-[#0B2E33] fill-[#0B2E33] ml-2 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -bottom-14 text-white/80 text-sm font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                PLAY VIDEO
              </div>
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- TEAM SECTION ---
const TeamSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#018790]">Directors</h2>
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
            className="w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(11,46,51,0.1)] border border-[#93B1B5]/20"
          >
            <div className="relative h-96 bg-[#B8E3E9] overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-[#4F7C82] origin-bottom"
                 initial={{ scaleY: 0 }}
                 whileHover={{ scaleY: 1 }}
                 transition={{ duration: 0.4 }}
               />
               <img src={member.img} alt={member.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] z-10" />
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
      <div className="bg-[#0B2E33] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(11,46,51,0.3)] flex flex-col lg:flex-row relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4F7C82] rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-[#B8E3E9] leading-tight">Start Your Dream Project</h2>
          <p className="text-[#93B1B5] mb-12 text-lg leading-relaxed">
            With 24 years of expertise, BHPL creates spaces that positively impact communities.
          </p>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#4F7C82] flex items-center justify-center shadow-lg">
                <Phone className="text-white w-7 h-7" />
              </div>
              <div>
                <p className="text-[#B8E3E9] text-sm uppercase tracking-wider mb-1">Call Us</p>
                <h3 className="text-2xl font-bold">+91 99646 66544</h3>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#4F7C82] flex items-center justify-center shadow-lg">
                <Mail className="text-white w-7 h-7" />
              </div>
              <div>
                <p className="text-[#B8E3E9] text-sm uppercase tracking-wider mb-1">Email Us</p>
                <h3 className="text-2xl font-bold">support@bhpl.club</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-12 lg:p-20 bg-white/5 backdrop-blur-xl border-l border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <InputGroup label="Your Name" icon={<User />} />
              <InputGroup label="Your Email" icon={<Mail />} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <InputGroup label="Phone" icon={<Phone />} />
              <div className="space-y-2">
                <label className="text-[#93B1B5] text-sm font-medium">Service</label>
                <select className="w-full bg-[#0B2E33]/80 border border-[#4F7C82] rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9] transition-all">
                  <option>Construction</option>
                  <option>Architecture</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[#93B1B5] text-sm font-medium">Message</label>
              <textarea rows="4" className="w-full bg-[#0B2E33]/80 border border-[#4F7C82] rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9] transition-all"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#bf953f] text-[#0B2E33] font-bold text-lg py-5 rounded-2xl hover:bg-white transition-colors shadow-[0_10px_20px_rgba(191,149,63,0.3)] mt-4"
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
    <label className="text-[#93B1B5] text-sm font-medium">{label}</label>
    <div className="relative">
      <div className="absolute left-5 top-4 text-[#4F7C82]">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <input 
        type="text" 
        className="w-full bg-[#0B2E33]/80 border border-[#4F7C82] rounded-2xl pl-14 pr-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#B8E3E9] transition-all" 
      />
    </div>
  </div>
);

export default HomePage;