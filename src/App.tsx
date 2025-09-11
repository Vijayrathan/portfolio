import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  // Preload critical images
  React.useEffect(() => {
    const preloadImages = [
      "/vj.jpg",
      "/ecowise.png",
      "/askwpi.png",
      "/rul.png",
      "/emp_health.png",
      "/acc.png",
      "/socdist.png",
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="font-extrabold tracking-tight text-xl">
            VJ.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              className="hover:text-white/90 transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a className="hover:text-white/90 transition-colors" href="#skills">
              Skills
            </a>
            <a
              className="hover:text-white/90 transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                className="block py-2 text-white/70 hover:text-white transition-colors"
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="block py-2 text-white/70 hover:text-white transition-colors"
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                className="block py-2 text-white/70 hover:text-white transition-colors"
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative hero-gradient overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden />
          <div className="container mx-auto px-4 py-16 sm:py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <motion.h1
                  className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  I turn data into products.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-300">
                    Building delightful AI applications.
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-4 sm:mt-6 max-w-2xl text-white/70 leading-relaxed text-sm sm:text-base mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  AI/ML Engineer passionate about creating intelligent systems
                  that solve real-world problems. Specializing in NLP, Software
                  Engineering, and scalable ML infrastructure.
                </motion.p>
                <motion.div
                  className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <a
                    href="#projects"
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 text-black px-6 py-3 text-sm font-semibold hover:from-cyan-300 hover:to-violet-300 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Explore Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/5 transition-all duration-300 hover:border-white/30 text-center"
                  >
                    Contact
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, type: "spring" }}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-cyan-400/10 to-violet-400/10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                    {/* Loading placeholder */}
                    {!heroImageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>
                      </div>
                    )}

                    <img
                      src="/vj.jpg"
                      alt="VJ"
                      className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
                        heroImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setHeroImageLoaded(true)}
                      loading="eager"
                      fetchPriority="high"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-bounce"></div>
                  <div
                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="absolute top-1/2 -right-4 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto px-4 py-12 sm:py-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Featured Projects
            </h2>
            <a
              href="#projects"
              className="text-sm text-sky-300 hover:underline self-start sm:self-auto"
            >
              View all
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ProjectCard
              title="EcoWise.ai"
              description={[
                "Shipped a full-stack sustainability coach in 24 hours (Node/Express API, MongoDB)",
                "Fine-tuned Gemini for chat, habit analysis across 6 categories and footprint estimation",
                "1st place out of 30 teams at MLH SharkHack 25",
              ]}
              tags={["Node.js", "Angular", "Gemini API", "AI"]}
              image="ecowise.png"
              repo="https://github.com/Vijayrathan/EcoWise.ai"
            />
            <ProjectCard
              title="AskWPI.ai"
              description={[
                "Evaluated RAG, ReAct, and fine-tuned LLMs on 546+ university documents with ChromaDB and Hugging Face",
                "Achieved 87% semantic accuracy and reduced manual support workload by approx. 80%",
                "First head-to-head benchmark of these SOTA methods in a university context",
              ]}
              tags={[
                "Python",
                "ChromaDB",
                "RAG",
                "ReAct",
                "LoRA",
                "Mistral",
                "LangChain",
              ]}
              image="askwpi.png"
              repo="https://github.com/Vijayrathan/ask_wpi"
            />
            <ProjectCard
              title="Predictive Maintenance System"
              description={[
                "MAE 8.2 cycles on NASA C-MAPSS FD001 with a multi-head attention Transformer, matching top research models",
                "Leak-safe pipeline with engine-level splits, early-prediction masking, and piecewise RUL capping; Ablations vs LSTM and 1D-CNN",
                "Deployed real-time RUL web app with multi-sensor visualization, input validation, and artifact versioning",
              ]}
              tags={["Python", "PyTorch", "TensorFlow", "Pandas", "Numpy"]}
              image="rul.png"
              repo="https://github.com/Vijayrathan/cmapss_application"
            />
            <ProjectCard
              title="Employee Health Monitoring System"
              description={[
                "Built end-to-end platform (mobile app, web dashboard, Python API) for minute-level vitals",
                "Processed ~345k datapoints/day for 40 employees across 6 parameters with p95 ingest-to-API latency < 5s",
                "Developed ML-based diabetes-risk prediction and automated alerts (ROC-AUC 0.82, p95 notification < 60s)",
              ]}
              tags={["Python", "Flask", "MongoDB", "Laravel"]}
              image="emp_health.png"
              repo="https://github.com/Vijayrathan/Employee_Health_Monitor"
            />
            <ProjectCard
              title="Accident Severity Analysis"
              description={[
                "Analysed Accident Severity in USA with XGBoost, CatBoost, Random Forest on ~7M records",
                "Engineered geospatial and temporal features; time-based cross-validation to avoid leakage",
                "Handled imbalance with SMOTE + class weights; minority recall +50%, reported macro-F1 and PR-AUC",
              ]}
              tags={["Python", "PyTorch", "sklearn", "Pandas", "Numpy"]}
              image="acc.png"
              repo="https://github.com/Vijayrathan/gpstracking"
            />
            <ProjectCard
              title="GPS Social Distancing"
              description={[
                "Published research on GPS-based social distancing monitoring system using embedded systems, mobile app, and IoT",
                "Developed IoT system with Node.js and ESP32 for real-time tracking and alerts",
                "Built Flutter app with Firebase for user interaction",
              ]}
              tags={["Flutter", "Firebase", "Python", "ML"]}
              image="socdist.png"
              repo="https://github.com/Vijayrathan/gpstracking"
            />
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Contact */}
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-8 sm:py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Vijay — Built with Vite + React
      </footer>
    </div>
  );
}

function AboutSection() {
  const carouselImages = ["/mentoring.jpg", "/medals.jpeg", "/group_pic.jpg"];
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCarouselIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };
  const touchStartX = React.useRef<number | null>(null);
  const touchStartTime = React.useRef<number>(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dt = Date.now() - touchStartTime.current;
    const threshold = 30; // px
    if (Math.abs(dx) > threshold && dt < 600) {
      if (dx < 0) {
        setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
      } else {
        setCarouselIndex(
          (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
        );
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="order-2 lg:order-1">
          <motion.div
            className="text-sm font-semibold text-cyan-400 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AI/ML Engineer with a passion for building intelligent systems
          </motion.h2>
          <motion.div
            className="space-y-3 sm:space-y-4 text-white/80 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              I am a graduate student in Artificial Intelligence at Worcester
              Polytechnic Institute with a perfect 4.0 GPA, specializing in
              machine learning, deep learning, and intelligent systems. My
              research focuses on building Retrieval-Augmented Generation (RAG)
              systems and applying deep learning to radar simulations for
              real-world applications such as soil moisture prediction and
              precision irrigation.
            </p>
            <p>
              Before WPI, I worked as a Software Engineer at Tata Consultancy
              Services, where I designed large-scale backend systems, Engineered
              metrics aggregation pipeline in Node.js processing approx. 30k
              metric datapoints/min across 20+ cloud services with sub-second
              end-to-end latency.
            </p>
            <p>
              Alongside industry experience, I have built award-winning projects
              such as EcoWise.ai, a sustainability assistant that won 1st place
              at SharkHack'25, and high-impact ML models for predictive
              maintenance and accident severity analysis. I am passionate about
              pushing the boundaries of AI to create intelligent, reliable, and
              scalable systems that solve meaningful problems.
            </p>
          </motion.div>
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-black hover:from-cyan-300 hover:to-violet-300 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/5 transition-all duration-300 text-center"
            >
              View Projects
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://devpost.com/software/ecowise-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative mx-auto w-72 sm:w-96 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-lg hover:bg-white/[0.04] transition-colors">
              {/* Media: swipeable images */}
              <div
                className="relative h-40 sm:h-56 overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="absolute inset-0 flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                >
                  {carouselImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={
                        idx === 0
                          ? "Winner medals"
                          : idx === 1
                          ? "Team at SharkHack"
                          : "Mentoring session"
                      }
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                {/* Simple overlay badges */}
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] sm:text-xs rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                  Winner
                </div>
                {/* Arrows */}
                <button
                  aria-label="Previous"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/30 hover:bg-black/40 text-white/80"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/30 hover:bg-black/40 text-white/80"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm sm:text-base font-semibold">
                    Major League Hacking - SharkHack' 25
                  </h4>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Your smart coach for a greener life — Gemini-powered guidance
                  with playful gamification; built with Angular, Node/Python,
                  and MongoDB.
                </p>
                <p className="mt-2 text-[10px] sm:text-xs text-sky-300 group-hover:underline truncate">
                  devpost.com/software/ecowise-ai
                </p>

                {/* Devpost badge large below */}
                <div className="mt-4 flex justify-end">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <svg
                      viewBox="0 0 64 64"
                      className="w-7 h-7 text-sky-300"
                      fill="currentColor"
                      aria-hidden
                    >
                      <rect
                        x="6"
                        y="18"
                        width="52"
                        height="28"
                        rx="8"
                        className="fill-current opacity-30"
                      />
                      <text
                        x="32"
                        y="37"
                        textAnchor="middle"
                        fontSize="18"
                        className="fill-current"
                      >
                        D
                      </text>
                    </svg>
                    <span className="text-sm sm:text-base">Devpost</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "Dart"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "ML/DL",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "AI",
      skills: [
        "RAG",
        "LoRA",
        "ReAct",
        "LangChain",
        "LangGraph",
        "VectorDBs",
        "Hugging Face",
        "OpenAI",
        "Gemini ADK",
        "Llama",
        "Gemini API",
        "n8n",
      ],
      color: "from-violet-400 to-purple-500",
    },

    {
      title: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "Ansible"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "Flutter"],
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Flask"],
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Skills & Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200 touch-manipulation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={!isMobile ? { y: -5, scale: 1.02 } : {}}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 hidden md:block`}
            ></div>
            <div className="relative p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm text-white/70 border border-white/10 hover:border-white/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    {
      year: "2025 - Present",
      title: "Research Assistant",
      company: "WPI",
      text: "Building Retrieval-Augmented Generation (RAG) systems and applying deep learning to radar simulations for real-world applications such as soil moisture prediction and precision irrigation.",
    },
    {
      year: "2025 - Present",
      title: "Master of Science in AI",
      company: "WPI",
      text: "Specializing in NLP and scalable ML infrastructure",
    },
    {
      year: "2022 - 2024",
      title: "Software Engineer",
      company: "TCS",
      text: "Designed and developed backend systems for large-scale applications, built metrics aggregation pipelines in Node.js, and automated cloud monitoring workflows that significantly improved system reliability and reduced incident handling times.",
    },
    {
      year: "2021 - 2022",
      title: "Assistant Software Engineer",
      company: "TCS",
      text: "Designed and developed backend systems for large-scale applications, built metrics aggregation pipelines in Node.js, and automated cloud monitoring workflows that significantly improved system reliability and reduced incident handling times.",
    },
    {
      year: "2017 - 2021",
      title: "Bachelor's in Electronics and Communication Engineering",
      company: "Anna University",
      text: "Published papers on GPS based social distancing system",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Experience & Timeline
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          My journey in AI/ML engineering, from research to production systems
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/50 to-transparent" />
        <div className="space-y-8 sm:space-y-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative pl-12 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-lg group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute left-2 top-2.5 h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-transparent" />

              <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group-hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-sm font-semibold text-cyan-400">
                    {item.year}
                  </span>
                  <span className="hidden sm:inline text-xs text-white/50">
                    •
                  </span>
                  <span className="text-xs text-white/60">{item.company}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:py-24">
      <motion.div
        className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 sm:p-10 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-violet-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold">
            Want to build something together?
          </h3>
          <p className="mt-2 text-white/70 text-sm sm:text-base">
            Send a note — I'll get back promptly.
          </p>

          {/* Status Messages */}
          {submitStatus.type && (
            <motion.div
              className={`mt-4 p-3 sm:p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 border border-green-500/30 text-green-300"
                  : "bg-red-500/20 border border-red-500/30 text-red-300"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 grid max-w-xl gap-3 sm:gap-4 text-left"
          >
            <input
              className="rounded-md bg-white/5 px-4 py-3 sm:py-2 outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10 hover:border-white/20 transition-colors duration-300 text-sm sm:text-base"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <input
              className="rounded-md bg-white/5 px-4 py-3 sm:py-2 outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10 hover:border-white/20 transition-colors duration-300 text-sm sm:text-base"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              className="rounded-md bg-white/5 px-4 py-3 sm:py-2 outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10 hover:border-white/20 transition-colors duration-300 text-sm sm:text-base"
              placeholder="Message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 text-black px-6 py-3 font-semibold hover:from-cyan-300 hover:to-violet-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Alternative contact methods */}
          <motion.div
            className="mx-auto max-w-xl mt-6 sm:mt-8 text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-white/90">
                You can also reach me at
              </h4>
              <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a
                  href="mailto:vijayrathank@gmail.com"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                  <span className="underline decoration-white/20 underline-offset-4">
                    vijayrathank@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vijayrathan-karthikeyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
                  <span className="underline decoration-white/20 underline-offset-4">
                    linkedin.com/in/vijayrathan-karthikeyan
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default App;
