import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  X, ChevronLeft, ChevronRight, Play, Maximize2, 
  MapPin, Calendar, Ruler, ArrowRight 
} from 'lucide-react';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const projectsData = [
  {
    id: 1,
    title: "Modern Villa Design",
    category: "residential",
    displayCategory: "Residential",
    location: "Bangalore, Karnataka",
    area: "3,500 sq.ft",
    year: "2024",
    description: "A contemporary villa design featuring sustainable architecture and modern amenities with spacious interiors and beautiful landscaping.",
    mainImage: "img/project/modernvilla/individual-house.webp",
    images: [
      "img/project/modernvilla/individual-house.webp",
      "img/project/modernvilla/2.jpeg",
      "img/project/modernvilla/3.jpeg",
      "img/project/modernvilla/4.jpeg",
      "img/project/modernvilla/1.jpeg"
    ]
  },
  {
    id: 2,
    title: "Hirekalmatha Hospital & School",
    category: "commercial",
    displayCategory: "Commercial",
    location: "Honnali, Davanagere",
    area: "200,000+ sq.ft",
    year: "2024",
    description: "Comprehensive institutional project including multi-specialty hospital, CBSE school, pharmacy and nursing institute.",
    mainImage: "https://img.freepik.com/premium-photo/realistic-construction-site-photos_811396-75893.jpg",
    images: [
      "https://img.freepik.com/premium-photo/realistic-construction-site-photos_811396-75893.jpg",
      "img/project/hospital/IMG-20250425-WA0002.jpg",
      "img/project/hospital/IMG-20250425-WA0005.jpg",
      "img/project/hospital/IMG-20250425-WA0009.jpg",
      "img/project/hospital/IMG-20250430-WA0022.jpg",
      "img/project/hospital/IMG-20250430-WA0024.jpg",
      "img/project/hospital/IMG-20250313-WA0018.jpg",
      "img/project/hospital/IMG-20250313-WA0019.jpg"
    ]
  },
  {
    id: 3,
    title: "Luxury Apartment Complex",
    category: "residential",
    displayCategory: "Residential",
    location: "Whitefield, Bangalore",
    area: "50,000 sq.ft",
    year: "2023",
    description: "Premium residential complex with modern amenities, landscaped gardens, swimming pool, and recreational facilities.",
    mainImage: "img/project/complex/1.jpeg",
    images: [
      "img/project/complex/1.jpeg",
      "img/project/complex/2.jpeg",
      "img/project/complex/3.jpeg",
      "img/project/complex/4.jpeg",
      "img/project/complex/5.jpeg"
    ]
  },
  {
    id: 4,
    title: "Educational Campus Design",
    category: "commercial",
    displayCategory: "Commercial",
    location: "Mangalore, Karnataka",
    area: "25,000 sq.ft",
    year: "2023",
    description: "Modern educational campus with state-of-the-art facilities, laboratories, library, and recreational areas.",
    mainImage: "img/project/Educational/3.jpeg",
    images: [
      "img/project/Educational/3.jpeg",
      "img/project/Educational/1.png",
      "img/project/Educational/2.png"
    ]
  },
  {
    id: 5,
    title: "Mythology Park",
    category: "commercial",
    displayCategory: "Commercial",
    location: "Ramaneshwaram",
    area: "Large Scale Public Space",
    year: "Ongoing",
    description: "Our flagship project at Bendakaluru Housing Private Limited (BHPL), Mythology Park at Ramaneshwaram integrates vernacular and modern architecture. The site features modular earth units, vast interconnected woven bamboo canopies, and a central hybrid meditation spire.",
    mainImage: "img/project/mythology/m3.png", 
    images: [
      "img/project/mythology/m1.png",      
      "img/project/mythology/m2.png", 
      "img/project/mythology/m3.png",      
      "img/project/mythology/m4.png",   
      "img/project/mythology/m5.png",
      "img/project/mythology/Real estate.png",
      "img/project/mythology/m9.png",
      "img/project/mythology/m6.png",
      "img/project/mythology/m7.png",
      "img/project/mythology/m8.png",
      "img/project/mythology/m10.png",
      "img/project/mythology/m11.png",
      "img/project/mythology/m12.png"
    ]
  }
];

// --- VIDEO SECTION COMPONENT ---
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
    <section className="relative w-full h-[80vh] md:h-screen bg-[#0B2E33] overflow-hidden group rounded-t-[3rem] mt-20 shadow-2xl">
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
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-b from-[#0B2E33]/60 via-[#0B2E33]/40 to-[#0B2E33]/80 backdrop-blur-[2px]"
          >
            <div className="text-center px-4 mb-12 max-w-4xl">
              <span className="inline-block py-1 px-3 border border-[#B8E3E9]/30 rounded-full text-[#B8E3E9] text-sm font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                Ongoing Initiative
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]">School & Hospital</span> Project
              </h1>
            </div>

            <motion.button
              onClick={handlePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-24 h-24 bg-[#bf953f] rounded-full shadow-[0_0_50px_rgba(191,149,63,0.3)] cursor-pointer"
            >
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#bf953f] z-0"
              />
              <Play className="w-10 h-10 text-[#0B2E33] fill-[#0B2E33] ml-1 relative z-10" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Project = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // State for the expanding interior accordion
  const [hoveredInterior, setHoveredInterior] = useState(0);

  // Find the Mythology project to feature it
  const mythologyProject = projectsData.find(p => p.id === 5);

  // Interior Section Data (5 precise divisions)
  const interiorItems = [
    { id: 0, type: 'video', src: 'img/interior/iv1.mp4', title: 'Immersive Walkthrough', subtitle: 'Experience the space' },
    { id: 1, type: 'image', src: 'img/interior/i1.jpeg', title: 'Custom Wardrobes', subtitle: 'Bespoke Woodwork & Seating' },
    { id: 2, type: 'image', src: 'img/interior/i2.jpeg', title: 'Living Spaces', subtitle: 'Modern Entertainment Units' },
    { id: 3, type: 'image', src: 'img/interior/i4.jpeg', title: 'Wall Cupboards', subtitle: 'Seamless Storage Solutions' }, // i4 Wall Cupboard
    { id: 4, type: 'image', src: 'img/interior/i3.jpeg', title: 'Modular Kitchens', subtitle: 'Functional & Stylish Design' }, // i3 Modular Kitchen
  ];

  // --- GSAP ANIMATIONS ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Image Effect
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

  // Modal Handlers
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const tabs = [
    { id: 1, label: "01. Master Plan - Zoning", img: "/Geotechnical/project1.png"},
    { id: 2, label: "02. Form Development", img:  "/Geotechnical/project2.png" },
    { id: 3, label: "03. Survey Plan", img:  "/Geotechnical/project3.png" },
    { id: 4, label: "04. Concept Design", img:  "/Geotechnical/project4.png" }
  ];

  const activeTabData = tabs.find(tab => tab.id===activeTab);

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
            <h4 className="text-[#bf953f] font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base">Our Works</h4>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white drop-shadow-2xl">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728]">PROJECTS</span>
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
            {Array(8).fill("Master Planning • Form Development • Concept Design • ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- FEATURED SPOTLIGHT SECTION (MYTHOLOGY PARK) --- */}
      {mythologyProject && (
        <section className="py-24 relative z-20 bg-[#0B2E33] rounded-b-[3rem] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content */}
              <div className="lg:w-1/2 text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8E3E9]">
                  {mythologyProject.title}
                </h2>
                <p className="text-[#B8E3E9]/80 text-lg leading-relaxed mb-8 max-w-xl">
                  {mythologyProject.description}
                </p>
                <div className="flex items-center gap-8 mb-10">
                  <div>
                    <p className="text-[#bf953f] text-sm uppercase tracking-wider mb-1">Location</p>
                    <p className="font-semibold text-lg">{mythologyProject.location}</p>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div>
                    <p className="text-[#bf953f] text-sm uppercase tracking-wider mb-1">Scale</p>
                    <p className="font-semibold text-lg">{mythologyProject.area}</p>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(mythologyProject)}
                  className="px-8 py-4 bg-gradient-to-r from-[#bf953f] to-[#b38728] text-[#0B2E33] font-bold rounded-full shadow-[0_10px_30px_rgba(191,149,63,0.3)] flex items-center gap-3 group"
                >
                  View Full Gallery 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Staggered Image Glimpses */}
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
                  <div className="space-y-4 md:space-y-6 translate-y-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-48 md:h-64 border border-white/10 relative group">
                      <img src={mythologyProject.images[0]} alt="Glimpse 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#0B2E33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 border border-white/10 relative group">
                      <img src={mythologyProject.images[1]} alt="Glimpse 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#0B2E33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6 -translate-y-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 border border-white/10 relative group">
                      <img src={mythologyProject.images[2]} alt="Glimpse 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#0B2E33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-48 md:h-64 border border-white/10 relative group bg-[#bf953f]/20 flex items-center justify-center cursor-pointer" onClick={() => openModal(mythologyProject)}>
                      {mythologyProject.images[3] ? (
                        <>
                          <img src={mythologyProject.images[3]} alt="Glimpse 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold shadow-lg border border-white/30">+ See All</span>
                          </div>
                        </>
                      ) : (
                        <span className="text-white font-bold">+ See All</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* --- PLANNING TABS SECTION --- */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-4">Workflow</h4>
            <h1 className="text-4xl font-bold text-[#0B2E33]">Innovative Approaches</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 font-bold text-lg border-2 ${
                    activeTab === tab.id 
                    ? "bg-[#0B2E33] text-[#B8E3E9] border-[#bf953f] shadow-lg translate-x-2" 
                    : "bg-white/50 border-transparent text-[#4F7C82] hover:bg-white hover:text-[#0B2E33]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="h-[350px] rounded-2xl overflow-hidden shadow-lg border border-[#bf953f]/30">
                    <img 
                      className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700" 
                      src={activeTabData?.img} 
                      alt="Plan" 
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0B2E33] mb-4">
                      {activeTab === 1 && "MASTER PLAN - ZONING"}
                      {activeTab === 2 && "FORM DEVELOPMENT"}
                      {activeTab === 3 && "SURVEY PLAN"}
                      {activeTab === 4 && "CONCEPT DESIGN"}
                    </h3>
                    <div className="h-1 w-20 bg-[#bf953f] mb-6 rounded-full" />
                    <p className="text-[#4F7C82] mb-6 leading-relaxed">
                      {activeTab === 1 && "A long-term strategy for organized city or regional development, covering land use, infrastructure, and sustainability."}
                      {activeTab === 2 && "Focuses on shaping the physical environment by designing spaces that are functional, aesthetically appealing, and sustainable."}
                      {activeTab === 3 && "A detailed document outlining boundaries, dimensions, and features of a specific land parcel using precise measurements."}
                      {activeTab === 4 && "Overview for Hirekalmatha Institutions & Hospital. Includes Multi-speciality hospital, CBSE school, Pharmacy and nursing institute."}
                    </p>
                    <ul className="space-y-3">
                      {["Strategic Planning", "Sustainability Integration", "Future Proofing"].map((item, i) => (
                        <li key={i} className="flex items-center text-[#0B2E33] font-medium">
                          <span className="w-6 h-6 rounded-full bg-[#bf953f] flex items-center justify-center text-white mr-3 text-xs">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="py-24 bg-white/40 backdrop-blur-sm parallax-container" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-4">Portfolio</h4>
            <h1 className="text-4xl font-bold text-[#0B2E33]">Completed & Ongoing</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'residential','commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  filter === cat 
                  ? "bg-[#0B2E33] text-[#bf953f] shadow-lg scale-105" 
                  : "bg-white text-[#4F7C82] hover:bg-[#0B2E33] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  onClick={() => openModal(project)}
                  className="group relative cursor-pointer rounded-[2rem] overflow-hidden shadow-xl bg-white parallax-img"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.mainImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-[#0B2E33]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#bf953f] text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      View Gallery
                    </p>
                    <div className="mt-6 w-12 h-12 rounded-full bg-white text-[#0B2E33] flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <Maximize2 size={20} />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#bf953f] text-[#0B2E33] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {project.displayCategory}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- NEW INTERIOR SECTION: EXPANDING ACCORDION GALLERY --- */}
      <section className="py-24 bg-[#0B2E33] relative z-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bf953f]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4F7C82]/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-4">Inside The Spaces</h4>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Interior Styling</h1>
          </div>

          {/* Interactive Accordion Container - using flex-grow logic for perfect 5 divisions */}
          <div className="flex flex-col lg:flex-row h-[70vh] min-h-[500px] w-full gap-2 transition-all duration-500 rounded-3xl overflow-hidden p-2 bg-white/5 border border-white/10 backdrop-blur-sm">
            
            {interiorItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredInterior(item.id)}
                // We use flex grow ratios. The hovered item takes up '6' parts, the others take '1' part each.
                // 6 + 1 + 1 + 1 + 1 = 10 parts total. This ensures 100% width is ALWAYS perfectly distributed.
                className={`relative overflow-hidden min-w-0 min-h-0 rounded-2xl transition-all duration-700 ease-out cursor-pointer ${
                  hoveredInterior === item.id 
                    ? 'flex-[6]' 
                    : 'flex-[1] opacity-70 hover:opacity-100'
                }`}
              >
                {/* Media Layer */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className={`w-full h-full object-cover transition-transform duration-[2000ms] ${hoveredInterior === item.id ? 'scale-105' : 'scale-100'}`} 
                    />
                  ) : (
                    <video 
                      src={item.src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className={`w-full h-full object-cover transition-transform duration-[2000ms] ${hoveredInterior === item.id ? 'scale-105' : 'scale-100'}`} 
                    />
                  )}
                </div>

                {/* Gradients to ensure text readability */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredInterior === item.id ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/50'}`}></div>

                {/* Vertical Text (Visible when NOT hovered) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredInterior === item.id ? 'opacity-0 delay-0' : 'opacity-100 delay-300'}`}>
                   <h3 className="text-white font-bold tracking-widest uppercase lg:-rotate-90 whitespace-nowrap text-lg shadow-black drop-shadow-xl">
                      {item.type === 'video' ? 'Walkthrough' : 'View Space'}
                   </h3>
                </div>

                {/* Expanded Details (Visible when hovered) */}
                <div className={`absolute bottom-0 left-0 p-6 md:p-10 w-full transition-all duration-500 flex flex-col justify-end h-full ${hoveredInterior === item.id ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
                  <motion.div 
                    initial={false}
                    animate={hoveredInterior === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.type === 'video' && (
                      <div className="w-12 h-12 rounded-full bg-[#bf953f] flex items-center justify-center mb-4">
                        <Play className="text-[#0B2E33] w-5 h-5 ml-1" />
                      </div>
                    )}
                    <p className="text-[#bf953f] font-bold uppercase tracking-[0.2em] mb-2 drop-shadow-md">{item.subtitle}</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg whitespace-nowrap">{item.title}</h2>
                  </motion.div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- FULL WIDTH VIDEO --- */}
      <VideoSection />

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#0B2E33]/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-10"
          >
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 rounded-full text-white hover:bg-[#bf953f] hover:text-[#0B2E33] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row bg-[#B8E3E9] rounded-[2rem] overflow-hidden shadow-2xl relative">
              
              {/* Left: Image Carousel */}
              <div className="lg:w-2/3 bg-black relative group flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.images[currentImageIndex]} 
                    alt="Gallery"
                    className="max-h-full max-w-full object-contain"
                  />
                </AnimatePresence>

                {/* Nav Buttons */}
                <button onClick={prevImage} className="absolute left-4 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-[#bf953f] transition-colors">
                  <ChevronLeft />
                </button>
                <button onClick={nextImage} className="absolute right-4 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-[#bf953f] transition-colors">
                  <ChevronRight />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-xs font-mono">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:w-1/3 p-8 lg:p-10 overflow-y-auto bg-white/80">
                <h2 className="text-3xl font-bold text-[#0B2E33] mb-2">{selectedProject.title}</h2>
                <span className="inline-block bg-[#0B2E33] text-[#bf953f] text-xs font-bold px-3 py-1 rounded-md mb-6">
                  {selectedProject.displayCategory}
                </span>

                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex items-center text-[#4F7C82]">
                    <MapPin size={18} className="mr-3 text-[#bf953f]" /> {selectedProject.location}
                  </div>
                  <div className="flex items-center text-[#4F7C82]">
                    <Ruler size={18} className="mr-3 text-[#bf953f]" /> {selectedProject.area}
                  </div>
                  <div className="flex items-center text-[#4F7C82]">
                    <Calendar size={18} className="mr-3 text-[#bf953f]" /> {selectedProject.year}
                  </div>
                </div>

                <p className="text-[#0B2E33]/80 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Thumbnails */}
                <h4 className="font-bold text-[#0B2E33] mb-4 text-sm uppercase">Gallery</h4>
                <div className="grid grid-cols-4 gap-2">
                  {selectedProject.images.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        currentImageIndex === idx ? "border-[#bf953f] opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="thumb" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#93B1B5]/30">
                  <a href="/contact" className="flex items-center justify-center w-full py-4 bg-[#0B2E33] text-white rounded-xl font-bold hover:bg-[#bf953f] transition-colors gap-2">
                    Enquire Project <ArrowRight size={18} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Project;