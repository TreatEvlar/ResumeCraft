import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Navigation links data with dropdown items
  const navLinks = [
    {
      name: "Resume Template",
      href: "#",
      dropdown: [
        {
          name: "Professional",
          href: "#",
          description:
            "Clean, corporate designs lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Modern",
          href: "#",
          description:
            "Contemporary layouts lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Creative",
          href: "#",
          description:
            "Artistic & unique styles lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Minimalist",
          href: "#",
          description:
            "Simple yet effective lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Executive",
          href: "#",
          description:
            "For senior-level positions lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Student",
          href: "#",
          description:
            "For fresh graduates lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
      promotion: {
        title: "Professional Templates",
        description:
          "Stand out with our expertly designed resume templates that get results",
        cta: "View All Templates",
      },
    },
    {
      name: "Resume Examples",
      href: "#",
      layoutType: "special",
      dropdown: [
        {
          name: "IT Resume",
          href: "#",
          description:
            "Tech industry templates lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Marketing Resume",
          href: "#",
          description:
            "Creative marketing layouts lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Engineering Resume",
          href: "#",
          description:
            "Technical field examples lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Minimalist",
          href: "#",
          description:
            "Simple yet effective lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Executive",
          href: "#",
          description:
            "For senior-level positions lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Student",
          href: "#",
          description:
            "For fresh graduates lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
      promotion: {
        title: "Industry Examples",
        description:
          "See how professionals in your field craft winning resumes",
        cta: "Explore Examples",
      },
    },
    {
      name: "Cover Letter",
      href: "#",
      dropdown: [
        {
          name: "Cover Letter Templates",
          href: "#",
          description:
            "Ready-to-use formats lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Cover Letter Examples",
          href: "#",
          description:
            "Industry-specific samples lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Writing Guide",
          href: "#",
          description:
            "Expert tips & advice lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Minimalist",
          href: "#",
          description:
            "Simple yet effective lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Executive",
          href: "#",
          description:
            "For senior-level positions lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Student",
          href: "#",
          description:
            "For fresh graduates lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
      promotion: {
        title: "Cover Letter Builder",
        description:
          "Create a compelling cover letter in minutes with our easy tool",
        cta: "Get Started",
      },
    },
    {
      name: "Resources",
      href: "#",
      dropdown: [
        {
          name: "Blog",
          href: "#",
          description:
            "Latest career insights lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Career Advice",
          href: "#",
          description:
            "Professional guidance lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Resume Tips",
          href: "#",
          description:
            "Optimization strategies lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Minimalist",
          href: "#",
          description:
            "Simple yet effective lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Executive",
          href: "#",
          description:
            "For senior-level positions lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          name: "Student",
          href: "#",
          description:
            "For fresh graduates lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
      promotion: {
        title: "Career Resources",
        description: "Access our library of resources to boost your job search",
        cta: "Browse Resources",
      },
    },
    { name: "FAQ", href: "#" },
  ];

  // Add effect to control body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Add effect to handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Set initial state immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle mouse enter with delay for smoother transition
  const handleMouseEnter = (index) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(index);
  };

  // Handle mouse leave with delay to prevent premature closing
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 10); // 300ms delay before closing
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-50 ${
        isSticky ? "inset-x-0 bg-white shadow-lg" : "mt-4 mx-4"
      }`}
    >
      <nav
        className={`py-4 w-full max-w-10xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 ${
          isSticky ? "px-10" : "bg-white shadow-lg rounded-xl px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Mobile logo - visible only on mobile */}
          <div className="lg:hidden flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ResumeCraft
              </span>
            </div>
          </div>

          {/* Desktop Navigation - unchanged */}
          <div className="flex-1 space-x-8 lg:flex hidden">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && handleMouseEnter(index)}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <div className="hidden md:block">
                    <div className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center cursor-pointer py-2">
                      {link.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hidden md:block py-2"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop right section - unchanged */}
          <div className="flex items-center space-x-6">
            {/* Desktop logo - hidden on mobile */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ResumeCraft
                </span>
              </div>
            </div>

            <div className="h-9 w-[2px] bg-gray-300 hidden md:block"></div>

            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              My Account
            </button>

            {/* Mobile menu button - now on the right */}
            <button
              className="lg:hidden text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 bg-white p-4 shadow-lg max-h-[89vh] overflow-y-auto ${
              isSticky ? "rounded-none" : "rounded-xl"
            }`}
          >
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.name} className="pb-2 border-b border-gray-100">
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 block"
                  >
                    {link.name}
                  </a>

                  {link.dropdown && (
                    <div className="mt-2 pl-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-600 hover:text-blue-500 text-sm py-1 block"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 shadow-lg md:hidden">
                  My Account
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Full-width dropdown container with 30% right section */}
        {activeDropdown !== null && navLinks[activeDropdown].dropdown && (
          <div
            className="absolute left-0 w-full bg-white shadow-2xl py-5 z-20 rounded-xl border-t border-gray-200 mt-5 hidden md:block"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-10xl mx-auto px-6">
              <div className="flex items-center justify-center min-h-[300px]">
                {/* Left: 70% for dropdown items */}
                <div className="w-7/12 pr-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 ml-5">
                    {navLinks[activeDropdown].name}
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {navLinks[activeDropdown].dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-start p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="bg-blue-100 p-2 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right: 30% for image and text */}
                <div className="w-5/12 pl-8 border-l border-gray-200">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {navLinks[activeDropdown].promotion.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {navLinks[activeDropdown].promotion.description}
                      </p>

                      {/* Placeholder for image */}
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 mb-4 flex items-center justify-center">
                        <span className="text-gray-500">Promotional Image</span>
                      </div>
                    </div>

                    <button className="mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md w-full">
                      {navLinks[activeDropdown].promotion.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
