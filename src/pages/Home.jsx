// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaSeedling,
  FaEnvelope,
  FaGlobeAmericas,
  FaBolt,
  FaShieldAlt,
  FaSyncAlt,
  FaPlayCircle,
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaTools,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaCheck,
  FaPalette,
  FaCloudDownloadAlt,
  FaLock,
  FaChartPie,
  FaUserFriends,
  FaFileAlt,
  FaEdit,
  FaClock,
  FaRobot,
  FaTrophy,
  FaDollarSign,
  FaDownload,
  FaComments,
  FaUserTie,
} from "react-icons/fa";

const HomeSection = () => {
  const featureRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [tagScrollPosition, setTagScrollPosition] = useState(0);
  const [activeTag, setActiveTag] = useState("All");
  const tagsContainerRef = useRef(null);

  // Sample resume data for different professions
  const resumeData = {
    All: {
      entry: {
        title: "Entry-Level Developer",
        company: "Google",
        description: "Recent graduate resume with internships",
        skills: ["JavaScript", "React", "Node.js"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Senior Developer",
        company: "Amazon",
        description: "5+ years experience - $180K offer",
        skills: ["AWS", "Microservices", "System Design"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Tech Lead",
        company: "Microsoft",
        description: "Leadership role - 8+ years experience",
        skills: ["Team Leadership", "Architecture", "Mentoring"],
        icon: <FaUsers />,
      },
    },
    Legal: {
      entry: {
        title: "Junior Lawyer",
        company: "Doe & Partners",
        description: "Recent law graduate with clerkship experience",
        skills: ["Legal Research", "Document Drafting", "Case Analysis"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Senior Attorney",
        company: "Justice LLP",
        description: "5+ years litigation experience",
        skills: ["Trial Preparation", "Client Counseling", "Legal Strategy"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Legal Director",
        company: "Smith & Associates",
        description: "10+ years in corporate law",
        skills: ["Team Management", "Compliance", "Strategic Planning"],
        icon: <FaUsers />,
      },
    },
    Doctor: {
      entry: {
        title: "Medical Intern",
        company: "City Hospital",
        description: "Recent medical graduate starting residency",
        skills: ["Patient Assessment", "Diagnostics", "Treatment Planning"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Resident Physician",
        company: "General Hospital",
        description: "3+ years residency experience",
        skills: [
          "Specialized Care",
          "Procedure Performance",
          "Case Management",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Attending Physician",
        company: "Medical Center",
        description: "Board certified specialist",
        skills: ["Team Leadership", "Research", "Mentoring Residents"],
        icon: <FaUsers />,
      },
    },
    Internship: {
      entry: {
        title: "Summer Intern",
        company: "Tech Innovations Inc.",
        description:
          "Undergraduate student gaining practical industry experience",
        skills: [
          "Project Assistance",
          "Research Support",
          "Team Collaboration",
        ],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Co-op Intern",
        company: "Global Solutions Ltd.",
        description: "Extended internship with increasing responsibilities",
        skills: [
          "Project Ownership",
          "Client Interaction",
          "Technical Documentation",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Intern to Full-Time",
        company: "Enterprise Partners",
        description: "Transition from internship to permanent position",
        skills: [
          "Project Leadership",
          "Mentoring New Interns",
          "Cross-functional Collaboration",
        ],
        icon: <FaUsers />,
      },
    },
    Teacher: {
      entry: {
        title: "Teaching Assistant",
        company: "City Elementary",
        description: "Recent education graduate starting career",
        skills: [
          "Lesson Assistance",
          "Classroom Support",
          "Student Engagement",
        ],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Lead Teacher",
        company: "Lincoln High School",
        description: "5+ years classroom experience",
        skills: [
          "Curriculum Development",
          "Student Assessment",
          "Parent Communication",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Department Head",
        company: "Riverside School District",
        description: "Education leadership position",
        skills: [
          "Program Development",
          "Teacher Mentoring",
          "Policy Implementation",
        ],
        icon: <FaUsers />,
      },
    },
    Accountant: {
      entry: {
        title: "Junior Accountant",
        company: "Smith & Co.",
        description: "Recent finance graduate starting career",
        skills: ["Bookkeeping", "Tax Preparation", "Financial Reporting"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Senior Accountant",
        company: "Financial Partners Inc.",
        description: "5+ years accounting experience",
        skills: ["Auditing", "Financial Analysis", "Compliance"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Finance Director",
        company: "Global Investments Ltd.",
        description: "10+ years financial leadership",
        skills: ["Budget Strategy", "Team Management", "Financial Planning"],
        icon: <FaUsers />,
      },
    },
    Architect: {
      entry: {
        title: "Junior Architect",
        company: "Design Studio Associates",
        description: "Recent architecture graduate starting career",
        skills: ["CAD Drafting", "3D Modeling", "Material Research"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Project Architect",
        company: "Urban Design Collective",
        description: "5+ years leading design projects",
        skills: [
          "Design Development",
          "Client Presentations",
          "Building Code Compliance",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Principal Architect",
        company: "Innovative Structures Inc.",
        description: "Leading architectural practice and vision",
        skills: ["Design Direction", "Business Development", "Team Leadership"],
        icon: <FaUsers />,
      },
    },
    "Civil Engineer": {
      entry: {
        title: "Junior Civil Engineer",
        company: "City Infrastructure Group",
        description: "Recent graduate assisting in infrastructure projects",
        skills: ["Site Inspection", "CAD Drafting", "Material Testing"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Project Engineer",
        company: "National Construction Ltd.",
        description: "Managing construction projects and teams",
        skills: ["Project Management", "Structural Analysis", "Budget Control"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Senior Structural Engineer",
        company: "Global Engineering Solutions",
        description: "Leading major infrastructure projects",
        skills: [
          "Design Oversight",
          "Team Leadership",
          "Regulatory Compliance",
        ],
        icon: <FaUsers />,
      },
    },

    Driver: {
      entry: {
        title: "Delivery Driver",
        company: "Quick Delivery Services",
        description: "Local package delivery and customer service",
        skills: ["Route Planning", "Vehicle Maintenance", "Customer Service"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Commercial Truck Driver",
        company: "National Transport Inc.",
        description: "Long-haul freight transportation",
        skills: [
          "Logistics Management",
          "Safety Compliance",
          "Route Optimization",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Fleet Operations Manager",
        company: "Global Logistics Group",
        description: "Managing transportation operations",
        skills: [
          "Team Supervision",
          "Cost Reduction",
          "Safety Program Development",
        ],
        icon: <FaUsers />,
      },
    },

    Retail: {
      entry: {
        title: "Sales Associate",
        company: "Fashion Retail Store",
        description: "Customer service and sales support",
        skills: ["Product Knowledge", "Cash Handling", "Inventory Management"],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Assistant Store Manager",
        company: "National Retail Chain",
        description: "Daily store operations and team supervision",
        skills: ["Staff Training", "Sales Reporting", "Visual Merchandising"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Retail Operations Director",
        company: "Luxury Brands Group",
        description: "Overseeing multi-store operations",
        skills: [
          "Business Strategy",
          "Regional Management",
          "P&L Responsibility",
        ],
        icon: <FaUsers />,
      },
    },

    "Human Resources": {
      entry: {
        title: "HR Assistant",
        company: "Tech Innovations Inc.",
        description: "Supporting recruitment and onboarding",
        skills: [
          "Resume Screening",
          "Interview Coordination",
          "HR Documentation",
        ],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "HR Generalist",
        company: "Global Solutions Ltd.",
        description: "Managing employee relations and benefits",
        skills: [
          "Performance Management",
          "Policy Implementation",
          "Employee Engagement",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "HR Director",
        company: "Enterprise Partners",
        description: "Leading HR strategy and operations",
        skills: [
          "Talent Acquisition Strategy",
          "Organizational Development",
          "Compensation Planning",
        ],
        icon: <FaUsers />,
      },
    },

    Administrative: {
      entry: {
        title: "Administrative Assistant",
        company: "Financial Partners Inc.",
        description: "Office support and scheduling",
        skills: [
          "Calendar Management",
          "Document Preparation",
          "Meeting Coordination",
        ],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Executive Assistant",
        company: "Corporate Headquarters",
        description: "Supporting C-level executives",
        skills: [
          "Travel Arrangements",
          "Confidential Correspondence",
          "Project Coordination",
        ],
        icon: <FaCloud />,
      },
      senior: {
        title: "Office Manager",
        company: "Global Consulting Firm",
        description: "Overseeing administrative operations",
        skills: [
          "Facilities Management",
          "Budget Administration",
          "Team Leadership",
        ],
        icon: <FaUsers />,
      },
    },

    Student: {
      entry: {
        title: "College Intern",
        company: "Industry Partner Program",
        description: "Gaining practical experience while studying",
        skills: [
          "Research Assistance",
          "Project Support",
          "Academic Application",
        ],
        icon1: <FaCode />,
        icon2: <FaServer />,
      },
      mid: {
        title: "Research Assistant",
        company: "University Laboratory",
        description: "Conducting academic research projects",
        skills: ["Data Collection", "Literature Review", "Experimental Design"],
        icon: <FaCloud />,
      },
      senior: {
        title: "Graduate Leadership",
        company: "Student Government",
        description: "Leading student organizations and initiatives",
        skills: ["Event Planning", "Budget Management", "Advocacy"],
        icon: <FaUsers />,
      },
    },
  };

  const professionTags = [
    "All",
    "Legal",
    "Doctor",
    "Internship",
    "Teacher",
    "Accountant",
    "Architect",
    "Civil Engineer",
    "Driver",
    "Retail",
    "Human Resources",
    "Administrative",
    "Student",
  ];

  const currentData = resumeData[activeTag] || resumeData.All;

  const scrollTags = (direction) => {
    if (!tagsContainerRef.current) return;

    const container = tagsContainerRef.current;
    const scrollAmount = 300;

    // Get the current scroll position from the DOM element
    const currentScroll = container.scrollLeft;

    let newPosition;
    if (direction === "left") {
      newPosition = Math.max(0, currentScroll - scrollAmount);
    } else {
      // For right direction, don't exceed max scrollable width
      const maxScroll = container.scrollWidth - container.clientWidth;
      newPosition = Math.min(maxScroll, currentScroll + scrollAmount);
    }

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  // Create this testimonial data array
  const successStories = [
    {
      content: `"The mock interviews prepared me perfectly for my FAANG interviews. Landed a 40% salary increase!"`,
      author: "Michael T., Software Engineer",
      rating: 5,
    },
    {
      content: `"My career coach helped me negotiate a $25k higher offer and transition into management."`,
      author: "Sarah L., Product Manager",
      rating: 5,
    },
    {
      content: `"The technical interview simulations were exactly what I needed to ace my coding interviews."`,
      author: "David K., Data Scientist",
      rating: 5,
    },
  ];

  // Auto-advance testimonials on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      // Only run on mobile
      const interval = setInterval(() => {
        setCurrentTestimonialIndex(
          (prev) => (prev + 1) % successStories.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  // Resume template data
  const resumeTemplates = [
    {
      id: 1,
      name: "Defined",
      description:
        "Clean layout with balanced sections for experience and education",
      rating: 4.8,
      downloads: "12.4k",
      features: ["ATS Friendly", "1-Page Layout", "Modern Design"],
    },
    {
      id: 2,
      name: "Essential",
      description: "Ideal for designers and creatives with portfolio showcase",
      rating: 4.6,
      downloads: "8.7k",
      features: ["Creative Layout", "Portfolio Section", "Colorful Design"],
    },
    {
      id: 3,
      name: "Corporate",
      description: "Sophisticated design for senior-level professionals",
      rating: 4.9,
      downloads: "15.2k",
      features: ["Elegant Typography", "Experience Focused", "Subtle Colors"],
    },
    {
      id: 4,
      name: "Clear",
      description: "Perfect for developers and tech professionals",
      rating: 4.7,
      downloads: "11.3k",
      features: ["Skills Matrix", "Project Showcase", "Modern Icons"],
    },
    {
      id: 5,
      name: "Balanced",
      description: "Designed for researchers and academic professionals",
      rating: 4.5,
      downloads: "7.9k",
      features: [
        "Publications Section",
        "Research Focus",
        "Detailed Education",
      ],
    },
    {
      id: 6,
      name: "Classic",
      description:
        "Clean layout with balanced sections for experience and education",
      rating: 4.8,
      downloads: "12.4k",
      features: ["ATS Friendly", "1-Page Layout", "Modern Design"],
    },
    {
      id: 7,
      name: "Professional",
      description: "Ideal for designers and creatives with portfolio showcase",
      rating: 4.6,
      downloads: "8.7k",
      features: ["Creative Layout", "Portfolio Section", "Colorful Design"],
    },
    {
      id: 8,
      name: "Pastel",
      description: "Sophisticated design for senior-level professionals",
      rating: 4.9,
      downloads: "15.2k",
      features: ["Elegant Typography", "Experience Focused", "Subtle Colors"],
    },
    {
      id: 9,
      name: "Industrial",
      description: "Perfect for developers and tech professionals",
      rating: 4.7,
      downloads: "11.3k",
      features: ["Skills Matrix", "Project Showcase", "Modern Icons"],
    },
    {
      id: 10,
      name: "Vivid",
      description: "Designed for researchers and academic professionals",
      rating: 4.5,
      downloads: "7.9k",
      features: [
        "Publications Section",
        "Research Focus",
        "Detailed Education",
      ],
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % resumeTemplates.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, resumeTemplates.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % resumeTemplates.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + resumeTemplates.length) % resumeTemplates.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Typing animation states
  const typingPhrases = [
    "land your dream job",
    "get hired fast",
    "Boost your career",
    "reach your dream role",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingPhrases.length;
      const fullText = typingPhrases[i];

      setCurrentText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting]);

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content:
        "Nexus has transformed how our team collaborates. The platform is intuitive and has reduced our project completion time by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, StartupHub",
      content:
        "The security features give us peace of mind, and the performance is unmatched. Our customer engagement metrics have doubled since implementation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateX",
      content:
        "The continuous updates bring real value. We're constantly discovering new features that solve our business challenges.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "CEO, GrowthLabs",
      content:
        "Nexus helped us streamline our operations and improve team productivity. The analytics dashboard is particularly insightful.",
      rating: 4,
    },
  ];

  // Feature data
  const features = [
    {
      icon: <FaBolt className="text-3xl text-amber-400" />,
      title: "Lightning Fast",
      description:
        "Optimized for performance with instant load times and seamless interactions.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-emerald-400" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security to keep your data protected at all times.",
    },
    {
      icon: <FaSyncAlt className="text-3xl text-sky-400" />,
      title: "Continuous Updates",
      description:
        "Regular updates with new features and improvements at no extra cost.",
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-400" />,
      title: "Advanced Analytics",
      description:
        "Real-time insights and data visualization to drive your business decisions.",
    },
    {
      icon: <FaUsers className="text-3xl text-rose-400" />,
      title: "Team Collaboration",
      description:
        "Seamless teamwork with shared workspaces and real-time editing.",
    },
    {
      icon: <FaTools className="text-3xl text-cyan-400" />,
      title: "Customizable Workflows",
      description:
        "Tailor the platform to your specific business processes and needs.",
    },
  ];

  // Service data
  const services = [
    {
      icon: <FaCode className="text-4xl text-indigo-400" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-emerald-400" />,
      title: "Mobile Apps",
      description:
        "iOS and Android applications designed for optimal user experience.",
    },
    {
      icon: <FaServer className="text-4xl text-amber-400" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
    },
    {
      icon: <FaCloud className="text-4xl text-sky-400" />,
      title: "API Integration",
      description:
        "Seamless integration with third-party services and platforms.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is the definition of a resume?",
      answer:
        "A resume is a formal document that outlines your work experience, education, skills, and achievements. It’s typically used to apply for jobs and showcase your qualifications to potential employers.",
    },
    {
      question: "What is the difference between a CV and a resume?",
      answer:
        "A resume is usually a concise one-page summary tailored for a specific job, while a CV (Curriculum Vitae) is more detailed, often used in academia and research, and includes a comprehensive history of your career.",
    },
    {
      question: "How do I choose the right resume template?",
      answer:
        "Choose a template that suits your industry and experience level. For example, modern templates work well for tech jobs, while traditional ones are better for finance or law roles. Our builder also recommends templates based on your goals.",
    },
    {
      question: "How far back should a resume go?",
      answer:
        "Typically, your resume should include the last 10–15 years of relevant experience. Focus on roles that relate to the job you're applying for and omit unrelated or outdated positions.",
    },
    {
      question: "What does an ATS-friendly resume mean?",
      answer:
        "An ATS-friendly resume is formatted in a way that Applicant Tracking Systems can read and process easily. It avoids complex layouts, graphics, and uses standard fonts and clear section headings.",
    },
    {
      question: "What resume file format can I download in?",
      answer:
        "You can download your resume in PDF format, which preserves the layout and is accepted by almost all employers. We ensure the PDF is optimized for both ATS and human readers.",
    },
    {
      question: "Is it worth paying for a resume builder?",
      answer:
        "Yes, especially if you want premium templates, AI writing suggestions, and professionally optimized formatting. A well-crafted resume can significantly improve your chances of landing interviews.",
    },
    {
      question: "Should I make a different resume for every job application?",
      answer:
        "Yes. Tailoring your resume to match the specific job description increases your chances of standing out. Customize the summary, skills, and experience to align with each role.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements =
        containerRef.current.querySelectorAll(".scroll-observer");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (containerRef.current) {
        const elements =
          containerRef.current.querySelectorAll(".scroll-observer");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-600"}
        />
      ));
  };

  return (
    <div ref={containerRef} className="min-h-screen text-white pt-4">
      {/* Hero Section - Responsive with Horizontal Gap Adjustment */}
      <section className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-10 gap-8 md:gap-12">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn text-center md:text-left">
              {/* Fixed heading structure */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
                <span className="bg-gradient-to-r from-black to-black bg-clip-text text-transparent text-[46px]">
                  Welcome to the AI resume builder which helps you{" "}
                </span>
                <span className="block text-purple-600 mt-2 min-h-[1em]">
                  {currentText}
                  <span className="inline-block w-[2px] h-6 sm:h-8 bg-purple-600 animate-pulse ml-1 align-middle"></span>
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                Just 2% of resumes get noticed. Make yours stand out from the
                crowd.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                <button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Start Free Trial
                </button>
                <button className="flex items-center justify-center text-purple-500 font-semibold py-3 px-6 sm:px-8 rounded-xl border-2 border-purple-500 hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:border-purple-400 text-sm sm:text-base">
                  <FaPlayCircle className="mr-2 text-purple-400" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center animate-fadeIn">
              <div className="relative w-full max-w-md h-48 sm:h-60 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-600 to-orange-500 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 sm:-inset-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -inset-16 sm:-inset-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="relative flex items-center justify-center">
                      <FaGlobeAmericas className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-30" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-bounce"></div>
                <div
                  className="absolute bottom-6 right-6 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-12 right-8 sm:top-16 sm:right-12 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ResumeStatsSection */}
      <section className="w-[80vw] mx-auto py-8 bg-gradient-to-br from-purple-100 to-purple-100 border-y border-gray-200 my-10 rounded-2xl">
        <div className="w-full flex items-center justify-center px-4">
          <div className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-4-6h.01M12 12a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
            <p className="text-lg md:text-xl font-medium text-gray-800">
              <span className="text-purple-700 font-semibold">3,524</span>{" "}
              resumes created today
            </p>
          </div>
        </div>
      </section>
      {/* Resume Features Section */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boost your career with a winning resume
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create a resume that stands out and gets you noticed by employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Perfectly aligned icon */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-purple-600 flex items-center justify-center mr-4">
                  <FaClock className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Build a standout resume instantly
                  </h3>
                  <p className="text-gray-600">
                    Refresh your resume in seconds. Get noticed by recruiters.
                    Fast, easy, and effective results.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-blue-600 flex items-center justify-center mr-4">
                  <FaFileAlt className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ATS-friendly templates
                  </h3>
                  <p className="text-gray-600">
                    Ensure your resume ticks every possible box top hiring
                    software detects, ranks, and approves instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-green-600 flex items-center justify-center mr-4">
                  <FaEdit className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Auto-generated Content
                  </h3>
                  <p className="text-gray-600">
                    Save time and build trust with pre-verified, high-performing
                    content from certified writing experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-orange-600 flex items-center justify-center mr-4">
                  <FaRobot className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AI Makes It Easy
                  </h3>
                  <p className="text-gray-600">
                    Create professional summaries instantly. Write smarter, not
                    harder, save time and effort.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-red-600 flex items-center justify-center mr-4">
                  <FaTrophy className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Stay Ahead of the Pack
                  </h3>
                  <p className="text-gray-600">
                    Our proven resume templates are crafted to grab recruiters'
                    attention and highlight your strengths.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-yellow-500 flex items-center justify-center mr-4">
                  <FaDollarSign className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Boost Your Salary
                  </h3>
                  <p className="text-gray-600">
                    A stronger resume leads to a higher salary. Use our salary
                    analyzer to see if your offer measures up.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to build your winning resume?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all">
                Start Building Now
              </button>
              <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 hover:border-purple-500 transition-all">
                See Examples
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Slider Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Resume Templates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of ATS-friendly templates designed to
              get you noticed
            </p>
          </div>

          {/* Slider Container with proper spacing */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-5xl mx-auto bg-white">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {resumeTemplates.map((template) => (
                <div
                  key={template.id}
                  className="w-full flex-shrink-0 p-6 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Template Preview */}
                    <div className="md:w-1/2">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-dashed border-gray-300 rounded-xl h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
                        {/* Mock resume content */}
                        <div className="absolute w-full p-6">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                              <div className="h-4 bg-blue-300 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                            </div>
                            <div className="text-right">
                              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                              <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                              <div className="h-4 bg-gray-300 rounded w-28"></div>
                            </div>
                          </div>

                          <div className="h-1 bg-blue-400 rounded-full mb-4"></div>

                          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>

                          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                            <div>
                              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>

                        {/* Template name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-xl font-bold">
                            {template.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Template Details with proper button spacing */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {template.name}
                        </h3>
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          POPULAR
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {template.description}
                      </p>

                      <div className="flex items-center mb-6">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < Math.floor(template.rating)
                                  ? "fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-700 font-medium">
                          {template.rating}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <div className="flex items-center text-gray-600">
                          <FaDownload className="mr-1" />
                          <span>{template.downloads} downloads</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {template.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Buttons with proper spacing */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all">
                          Use This Template
                        </button>
                        <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-purple-500 transition-all">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows with proper spacing */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Slide Indicators with proper spacing */}
            <div className="absolute bottom-1 left-0 right-0 justify-center space-x-2 pb-2 hidden md:flex">
              {resumeTemplates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <FaStar className="text-purple-600 text-xl" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Interview Callback Rate</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <FaDownload className="text-purple-600 text-xl" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Professional Templates</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2.1x</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2.1x
              </div>
              <div className="text-gray-600">More Interviews</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">24/7</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
      {/* Career Coaching & Interview Prep Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-b-2xl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ace Your Interviews & Advance Your Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching and preparation tools to land your dream
              job
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Interview Prep Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <FaComments className="text-2xl text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Interview Preparation
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Master the interview process with our comprehensive
                  preparation tools and mock interview system.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      AI-powered mock interviews
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Industry-specific question banks
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Behavioral interview training
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Technical interview simulations
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Real-time feedback on answers
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all">
                    Practice Now
                  </button>
                  <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 transition-all">
                    View Demo
                  </button>
                </div>
              </div>

              <div className="bg-indigo-50 p-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="bg-indigo-100 rounded-full p-3">
                      <FaPlayCircle className="text-indigo-600 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Mock Interview Demo
                    </h4>
                    <p className="text-gray-600 text-sm">
                      See how our AI interviewer works
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Coaching Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <FaUserTie className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Career Coaching
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Personalized guidance to help you navigate your career path
                  and achieve your professional goals.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      1-on-1 coaching sessions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Career path mapping</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Salary negotiation strategies
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      LinkedIn profile optimization
                    </span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">
                      Professional branding guidance
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all">
                    Book Session
                  </button>
                  <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-purple-500 transition-all">
                    Meet Our Coaches
                  </button>
                </div>
              </div>

              <div className="bg-purple-50 p-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <FaChartLine className="text-purple-600 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Career Growth Tracker
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Visualize your career progression
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials - Responsive Slider */}
          <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Success Stories
            </h3>

            {/* Mobile Slider (hidden on medium screens and above) */}
            <div className="md:hidden relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                }}
              >
                {successStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                      <div className="flex mb-4 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < story.rating
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }
                          />
                        ))}
                      </div>
                      <p className="italic mb-4 text-center">{story.content}</p>
                      <div className="font-semibold text-center">
                        {story.author}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Mobile Only */}
              <button
                onClick={() =>
                  setCurrentTestimonialIndex((prev) =>
                    prev === 0 ? successStories.length - 1 : prev - 1
                  )
                }
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full ml-2 transition-all"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-white" />
              </button>

              <button
                onClick={() =>
                  setCurrentTestimonialIndex(
                    (prev) => (prev + 1) % successStories.length
                  )
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full mr-2 transition-all"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-white" />
              </button>

              {/* Dots Indicator - Mobile Only */}
              <div className="flex justify-center mt-6 space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonialIndex
                        ? "bg-white"
                        : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < story.rating ? "text-yellow-400" : "text-gray-400"
                        }
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">{story.content}</p>
                  <div className="font-semibold">{story.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Resume Tree - Career Growth Pathway */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Career Growth Pathway
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow the path to your dream job with our tailored resume
              examples
            </p>

            {/* Profession tags with navigation */}
            <div className="relative max-w-4xl mx-auto mt-8">
              {/* Navigation buttons for large screens */}
              <div className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => scrollTags("left")}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 text-gray-800 p-3 transition-colors mb-5"
                >
                  <FaChevronLeft className="text-gray-800" />
                </button>
              </div>

              <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={() => scrollTags("right")}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 text-gray-800 p-3 transition-colors mb-5"
                >
                  <FaChevronRight className="text-gray-800" />
                </button>
              </div>

              {/* Tags container */}
              <div
                ref={tagsContainerRef}
                className="flex overflow-x-auto pb-4 hide-scrollbar space-x-3 px-2"
              >
                {professionTags.map((tag) => (
                  <div
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-colors cursor-pointer ${
                      activeTag === tag
                        ? "bg-purple-700 text-white"
                        : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile - Vertical Timeline */}
          <div className="md:hidden relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-700 to-purple-900 z-0"></div>

            {/* Entry Level */}
            <div className="relative pl-12 pb-16">
              <div className="absolute left-[2px] top-2 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center z-10">
                <FaSeedling className="text-white" />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {currentData.entry.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {currentData.entry.company}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {currentData.entry.description}
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-blue-200 rounded w-24"></div>
                    <div className="h-3 bg-blue-200 rounded w-16"></div>
                  </div>
                  <div className="h-1 bg-blue-300 rounded-full mb-3"></div>
                  <div className="h-2 bg-gray-300 rounded w-full mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6 mb-3"></div>
                  <div className="flex space-x-2">
                    {currentData.entry.icon1 && (
                      <div className="h-8 w-8 rounded-md bg-blue-200 flex items-center justify-center">
                        {currentData.entry.icon1}
                      </div>
                    )}
                    {currentData.entry.icon2 && (
                      <div className="h-8 w-8 rounded-md bg-green-200 flex items-center justify-center">
                        {currentData.entry.icon2}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="text-sm text-purple-600 font-semibold hover:underline">
                    View Example
                  </button>
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                    Use Template
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                Starting Your Career
              </h3>
              <p className="text-gray-600">
                Focus on education, internships, and foundational skills.
                Highlight academic projects and relevant coursework.
              </p>
            </div>

            {/* Mid Level */}
            <div className="relative pl-12 pb-16">
              <div className="absolute left-[-2px] top-2 w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center z-10">
                <FaChartLine className="text-white" />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {currentData.mid.title}
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {currentData.mid.company}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {currentData.mid.description}
                </p>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-green-200 rounded w-32"></div>
                    <div className="h-3 bg-green-200 rounded w-20"></div>
                  </div>
                  <div className="h-1 bg-green-300 rounded-full mb-3"></div>
                  <div className="h-2 bg-gray-300 rounded w-full mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6 mb-3"></div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-md bg-green-200 flex items-center justify-center mr-2">
                      {currentData.mid.icon}
                    </div>
                    <div>
                      <div className="h-2 bg-gray-300 rounded w-24 mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="text-sm text-purple-600 font-semibold hover:underline">
                    View Example
                  </button>
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                    Use Template
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                Building Expertise
              </h3>
              <p className="text-gray-600">
                Showcase technical skills and project impact. Demonstrate
                leadership in team projects and specialized knowledge.
              </p>
            </div>

            {/* Senior Level */}
            <div className="relative pl-12 pb-16">
              <div className="absolute left-[-6px] top-2 w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center z-10">
                <FaTrophy className="text-white text-xl" />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {currentData.senior.title}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {currentData.senior.company}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {currentData.senior.description}
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-purple-200 rounded w-36"></div>
                    <div className="h-3 bg-purple-200 rounded w-24"></div>
                  </div>
                  <div className="h-1 bg-purple-300 rounded-full mb-3"></div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-md bg-purple-200 flex items-center justify-center mr-2">
                      {currentData.senior.icon}
                    </div>
                    <div>
                      <div className="h-2 bg-gray-300 rounded w-28 mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-20"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="text-sm text-purple-600 font-semibold hover:underline">
                    View Example
                  </button>
                  <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                    Use Template
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                Leadership Level
              </h3>
              <p className="text-gray-600">
                Emphasize strategic impact, team leadership, and business
                outcomes. Highlight cross-functional projects and mentorship.
              </p>
            </div>

            {/* Connection to CTA Button */}
            <div className="relative pl-12">
              <div className="absolute left-4 top-0 h-1/2 w-1 bg-purple-100"></div>
              <div className="absolute left-4 top-1/2 w-8 h-1 bg-purple-700"></div>
              <div className="absolute left-12 top-1/2 w-4 h-4 rounded-full bg-purple-700 transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Desktop - Tree Layout */}
          <div className="hidden md:block relative">
            {/* Tree Trunk - Vertical Timeline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-700 to-purple-900 transform -translate-x-1/2 z-0"></div>

            {/* Root System */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-0">
              <div className="relative w-40 h-20">
                <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-purple-800 transform -translate-x-1/2 rotate-[-60deg] origin-bottom"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-purple-800 transform -translate-x-1/2 rotate-[60deg] origin-bottom"></div>
              </div>
            </div>

            {/* Career Levels - Branches */}
            <div className="relative z-10">
              {/* Entry Level */}
              <div className="flex items-center mb-24">
                <div className="w-5/12">
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {currentData.entry.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        {currentData.entry.company}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {currentData.entry.description}
                    </p>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <div className="h-3 bg-blue-200 rounded w-24"></div>
                        <div className="h-3 bg-blue-200 rounded w-16"></div>
                      </div>
                      <div className="h-1 bg-blue-300 rounded-full mb-3"></div>
                      <div className="h-2 bg-gray-300 rounded w-full mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-5/6 mb-3"></div>
                      <div className="flex space-x-2">
                        {currentData.entry.icon1 && (
                          <div className="h-8 w-8 rounded-md bg-blue-200 flex items-center justify-center">
                            {currentData.entry.icon1}
                          </div>
                        )}
                        {currentData.entry.icon2 && (
                          <div className="h-8 w-8 rounded-md bg-green-200 flex items-center justify-center">
                            {currentData.entry.icon2}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button className="text-sm text-purple-600 font-semibold hover:underline">
                        View Example
                      </button>
                      <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>

                {/* Branch to trunk */}
                <div className="w-2/12 flex justify-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                    <FaSeedling className="text-white" />
                  </div>
                </div>

                <div className="w-5/12 pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Starting Your Career
                  </h3>
                  <p className="text-gray-600">
                    Focus on education, internships, and foundational skills.
                    Highlight academic projects and relevant coursework.
                  </p>
                </div>
              </div>

              {/* Mid Level */}
              <div className="flex items-center mb-24">
                <div className="w-5/12 pl-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Building Expertise
                  </h3>
                  <p className="text-gray-600">
                    Showcase technical skills and project impact. Demonstrate
                    leadership in team projects and specialized knowledge.
                  </p>
                </div>

                {/* Branch to trunk */}
                <div className="w-2/12 flex justify-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                    <FaChartLine className="text-white" />
                  </div>
                </div>

                <div className="w-5/12">
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {currentData.mid.title}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {currentData.mid.company}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {currentData.mid.description}
                    </p>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <div className="h-3 bg-green-200 rounded w-32"></div>
                        <div className="h-3 bg-green-200 rounded w-20"></div>
                      </div>
                      <div className="h-1 bg-green-300 rounded-full mb-3"></div>
                      <div className="h-2 bg-gray-300 rounded w-full mb-1"></div>
                      <div className="h-2 bg-gray-300 rounded w-5/6 mb-3"></div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-md bg-green-200 flex items-center justify-center mr-2">
                          {currentData.mid.icon}
                        </div>
                        <div>
                          <div className="h-2 bg-gray-300 rounded w-24 mb-1"></div>
                          <div className="h-2 bg-gray-300 rounded w-16"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button className="text-sm text-purple-600 font-semibold hover:underline">
                        View Example
                      </button>
                      <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Senior Level */}
              <div className="flex items-center">
                <div className="w-5/12">
                  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {currentData.senior.title}
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                        {currentData.senior.company}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {currentData.senior.description}
                    </p>

                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between mb-2">
                        <div className="h-3 bg-purple-200 rounded w-36"></div>
                        <div className="h-3 bg-purple-200 rounded w-24"></div>
                      </div>
                      <div className="h-1 bg-purple-300 rounded-full mb-3"></div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-md bg-purple-200 flex items-center justify-center mr-2">
                          {currentData.senior.icon}
                        </div>
                        <div>
                          <div className="h-2 bg-gray-300 rounded w-28 mb-1"></div>
                          <div className="h-2 bg-gray-300 rounded w-20"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button className="text-sm text-purple-600 font-semibold hover:underline">
                        View Example
                      </button>
                      <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700">
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>

                {/* Branch to trunk */}
                <div className="w-2/12 flex justify-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center">
                    <FaTrophy className="text-white text-xl" />
                  </div>
                </div>

                <div className="w-5/12 pl-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Leadership Level
                  </h3>
                  <p className="text-gray-600">
                    Emphasize strategic impact, team leadership, and business
                    outcomes. Highlight cross-functional projects and
                    mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA with Connection Line */}
          <div className="mt-16 relative">
            <div className="text-center">
              <button className="relative bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all inline-flex items-center">
                <FaSeedling className="mr-2" />
                Grow Your Career
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                Explore 50+ career-specific resume pathways
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Expert video section   */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn from Career Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our library of expert advice videos to boost your job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 aspect-video flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                        <FaPlayCircle className="text-white text-5xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Resume Writing Masterclass
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to craft a resume that stands out in 2023 with our
                  lead career strategist.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Sarah Johnson
                    </div>
                    <div className="text-sm text-gray-500">
                      Senior Career Coach
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 aspect-video flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                        <FaPlayCircle className="text-white text-5xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ace Your Technical Interview
                </h3>
                <p className="text-gray-600 mb-4">
                  FAANG engineer reveals strategies to solve coding challenges
                  with confidence.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-gray-500">
                      Engineering Lead, Google
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 aspect-video flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                        <FaPlayCircle className="text-white text-5xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                  POPULAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Salary Negotiation Secrets
                </h3>
                <p className="text-gray-600 mb-4">
                  Former HR executive shares proven tactics to increase your
                  offer by 15-30%.
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Emily Rodriguez
                    </div>
                    <div className="text-sm text-gray-500">
                      HR Director, Fortune 500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog section */}
      <section className="py-16 bg-gradient-to-b from-white to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Insights & Advice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert tips, industry trends, and actionable advice to advance
              your career
            </p>
          </div>

          {/* Featured Blog Post */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
                  Featured Article
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  The Future of Remote Work: What Job Seekers Need to Know in
                  2023
                </h3>
                <p className="text-gray-600 mb-6">
                  As remote work continues to evolve, understanding the latest
                  trends and employer expectations is crucial for job seekers.
                  This comprehensive guide covers everything from negotiating
                  remote arrangements to building a standout virtual presence.
                </p>
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Michael Rodriguez
                    </div>
                    <div className="text-sm text-gray-500">
                      Career Strategist | 8 min read
                    </div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all w-full md:w-auto">
                  Read Full Article
                </button>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="relative text-center p-6">
                  <div className="text-white text-6xl mb-4">📈</div>
                  <h3 className="text-white text-2xl font-bold mb-4">
                    Remote Work Trends
                  </h3>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Hybrid Adoption</span>
                      <span className="text-white font-bold">78%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full mb-4">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Productivity Gains</span>
                      <span className="text-white font-bold">+47%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full mb-4">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: "47%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Remote Salary Premium</span>
                      <span className="text-white font-bold">+22%</span>
                    </div>
                    <div className="h-2 bg-white/30 rounded-full">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: "22%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-500 relative">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Resume Tips
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 12, 2023</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7 Resume Mistakes That Are Costing You Interviews
                </h3>
                <p className="text-gray-600 mb-4">
                  Avoid these common pitfalls that recruiters say immediately
                  disqualify candidates, and learn how to fix them for better
                  results.
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-purple-600 font-semibold hover:underline">
                    Read More
                  </button>
                  <div className="flex items-center">
                    <FaComments className="text-gray-400 mr-1" />
                    <span className="text-gray-500 text-sm">24</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 relative">
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Interview Prep
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 28, 2023</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Answer "Tell Me About Yourself" in Job Interviews
                </h3>
                <p className="text-gray-600 mb-4">
                  Master this crucial opening question with our proven framework
                  that impresses hiring managers and sets the right tone for
                  your interview.
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-purple-600 font-semibold hover:underline">
                    Read More
                  </button>
                  <div className="flex items-center">
                    <FaComments className="text-gray-400 mr-1" />
                    <span className="text-gray-500 text-sm">42</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 bg-gradient-to-r from-emerald-400 to-green-500 relative">
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Career Growth
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 15, 2023</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Switching Careers: A Step-by-Step Guide for Professionals
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to successfully pivot to a new industry, transfer
                  your skills, and position yourself as the ideal candidate in a
                  competitive job market.
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-purple-600 font-semibold hover:underline">
                    Read More
                  </button>
                  <div className="flex items-center">
                    <FaComments className="text-gray-400 mr-1" />
                    <span className="text-gray-500 text-sm">31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories and Subscription */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                      <FaFileAlt className="text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Resume Writing
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Master the art of creating resumes that get noticed by
                    employers and ATS systems.
                  </p>
                  <button className="text-blue-600 font-semibold hover:underline flex items-center">
                    View Articles <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center mr-3">
                      <FaComments className="text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Interview Prep
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Strategies to ace technical, behavioral, and case study
                    interviews.
                  </p>
                  <button className="text-amber-600 font-semibold hover:underline flex items-center">
                    View Articles <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-md bg-emerald-100 flex items-center justify-center mr-3">
                      <FaChartLine className="text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Career Growth
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Guidance for promotions, salary negotiations, and leadership
                    development.
                  </p>
                  <button className="text-emerald-600 font-semibold hover:underline flex items-center">
                    View Articles <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                      <FaDollarSign className="text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Salary Negotiation
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Tactics to maximize your compensation package and benefits.
                  </p>
                  <button className="text-purple-600 font-semibold hover:underline flex items-center">
                    View Articles <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Career Insights Newsletter
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Get weekly career tips, industry trends, and exclusive content
                directly to your inbox. Join 50,000+ professionals advancing
                their careers.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="consent"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to receive career tips and resources
                  </label>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all">
                  Subscribe Now
                </button>

                <div className="mt-6 flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                      +2K
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Join our community of career-focused professionals
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all inline-flex items-center">
              View All Blog Posts
              <FaChevronRight className="ml-2 text-sm" />
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-t-2xl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our resume builder and
              career services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 rounded-md bg-purple-100 flex items-center justify-center mr-4">
                      <FaQuestionCircle className="text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activeFAQ === index ? (
                      <FaMinus className="text-purple-600" />
                    ) : (
                      <FaPlus className="text-purple-600" />
                    )}
                  </div>
                </button>

                {activeFAQ === index && (
                  <div className="px-6 pb-6 pt-2 ml-12">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FaComments className="text-2xl" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Need more help?</h3>
                <p className="mb-4 max-w-2xl">
                  Our support team is available 24/7 to answer any questions you
                  have about our resume builder or career services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Contact Support
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white">
                    Visit Help Center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
