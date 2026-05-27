import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Prefer PNG, then JPG/JPEG/SVG from assets/logo
const logoAssets = import.meta.glob("../assets/logo/logo.*", { eager: true, as: "url" });

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null); // which dropdown is open
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  // Auto-highlight based on scroll position and URL hash
  useEffect(() => {
    const anchorIds = Array.from(document.querySelectorAll('a[href^="#"]'))
      .map((a) => a.getAttribute("href")?.slice(1))
      .filter((id) => !!id);

    const observed = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveItem(visible.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.6],
      }
    );

    anchorIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el && !observed.has(el)) {
        observer.observe(el);
        observed.add(el);
      }
    });

    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveItem(id);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Add/Remove scrolled style based on page scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // toggle dropdown manually
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Helper function to determine text color based on active state
  const getTextColor = (itemName, isDropdown = false) => {
    if (activeItem === itemName) {
      return "text-white font-semibold";
    }
    
    // Check if any dropdown option is active
    if (isDropdown) {
      const dropdownOptions = {
        features: ["dashboard", "ngos", "beneficiary", "support", "activity-log"],
        events: ["campus-events"]
      };
      
      if (dropdownOptions[itemName]?.includes(activeItem)) {
        return "text-white font-semibold"; // Highlight active dropdown parent
      }
    }
    
    return "text-white/85 font-medium hover:text-white";
  };

  // Helper function to determine dropdown option color
  const getDropdownOptionColor = (optionName) => {
    if (activeItem === optionName) {
      return "text-orange-600 font-semibold"; // Brand accent for active dropdown option
    }
    return "text-gray-700 hover:text-orange-600 hover:font-semibold";
  };

  return (
    <header ref={headerRef} className={`navbar sticky top-0 z-50 ${isScrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto pl-4 pr-16">
        <div className="flex justify-between items-center h-16">
          {/* Brand / Logo */}
          <button
            onClick={() => {
              setActiveItem("home");
              navigate("/");
            }}
            className="flex items-center gap-2 text-white focus:outline-none"
          >
            {(() => {
              const src =
                logoAssets["../assets/logo/logo.png"] ||
                logoAssets["../assets/logo/logo.jpg"] ||
                logoAssets["../assets/logo/logo.jpeg"] ||
                logoAssets["../assets/logo/logo.svg"];
              if (src) {
                return <img src={src} alt="GoodGrub logo" className="h-8 w-auto" />;
              }
              return (
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M12 3c2.5 0 4.5 2 4.5 4.5S12 15 12 15s-4.5-5-4.5-7.5S9.5 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 20c1.5-2 4-3 5-3s3.5 1 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              );
            })()}
            <span className="text-lg font-semibold tracking-wide">GoodGrub</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#home"
                onClick={() => setActiveItem("home")}
                className={`${
                  activeItem === "home"
                    ? "text-white font-semibold"
                    : "text-white/85 font-medium hover:text-white"
                } px-3 py-2 text-sm transition-colors`}
              >
                Home
              </a>

              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("features")}
                  className={`${getTextColor("features", true)} px-3 py-2 text-sm transition-colors flex items-center`}
                >
                  Features
                  <svg
                    className="w-4 h-4 ml-1"
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
                </button>

                {openDropdown === "features" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ring-1 ring-black/10">
                    <a
                      onClick={() => { navigate("/dashboard"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("dashboard")}`}
                    >
                      Dashboard
                    </a>
                    <a
                      onClick={() => { navigate("/ngos"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("ngos")}`}
                    >
                      NGO's
                    </a>
                    <a
                      onClick={() => { navigate("/beneficiary"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("beneficiary")}`}
                    >
                      Beneficiary
                    </a>
                    <a
                      onClick={() => { navigate("/provide-support"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("support")}`}
                    >
                      Support
                    </a>
                    <a
                      onClick={() => { navigate("/activity-log"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("activity-log")}`}
                    >
                      Activity Log
                    </a>
                  </div>
                )}
              </div>

              {/* Events Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("events")}
                  className={`${getTextColor("events", true)} px-3 py-2 text-sm transition-colors flex items-center`}
                >
                  Events
                  <svg
                    className="w-4 h-4 ml-1"
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
                </button>

                {openDropdown === "events" && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 ring-1 ring-black/10">
                    <a
                      onClick={() => { navigate("/campus-reminder"); setOpenDropdown(null); }}
                      className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${getDropdownOptionColor("campus-events")}`}
                    >
                      Campus Events & Reminders
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#impact"
                onClick={() => setActiveItem("impact")}
                className={`${
                  activeItem === "impact"
                    ? "text-white font-semibold"
                    : "text-white/85 font-medium hover:text-white"
                } px-3 py-2 text-sm transition-colors`}
              >
                Impact
              </a>
              <a
                href="#work"
                onClick={() => setActiveItem("work")}
                className={`${
                  activeItem === "work"
                    ? "text-white font-semibold"
                    : "text-white/85 font-medium hover:text-white"
                } px-3 py-2 text-sm transition-colors`}
              >
                How It Works
              </a>
                             <a
                 onClick={() => { setActiveItem("contact"); navigate("/contact"); }}
                 className={`${
                   activeItem === "contact"
                     ? "text-white font-semibold"
                     : "text-white/85 font-medium hover:text-white"
                 } px-3 py-2 text-sm transition-colors cursor-pointer`}
               >
                 Contact
               </a>
              <a
                href="#about"
                onClick={() => setActiveItem("about")}
                className={`${
                  activeItem === "about"
                    ? "text-white font-semibold"
                    : "text-white/85 font-medium hover:text-white"
                } px-3 py-2 text-sm transition-colors`}
              >
                About Us
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => navigate("/login")} 
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              LOG IN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 shadow-lg">
              <a
                href="#home"
                onClick={() => setActiveItem("home")}
                className={`${
                  activeItem === "home"
                    ? "text-red-700 font-semibold"
                    : "text-black font-medium"
                } block px-3 py-2 rounded-md text-base`}
              >
                Home
              </a>

              {/* Mobile Features Dropdown */}
              <div>
                <p className="px-3 py-2 font-semibold">Features</p>
                <div className="pl-6 space-y-1">
                  <a onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("dashboard")}`}>
                    Dashboard
                  </a>
                  <a onClick={() => { navigate("/ngos"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("ngos")}`}>
                    NGO's
                  </a>
                  <a onClick={() => { navigate("/beneficiary"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("beneficiary")}`}>
                    Beneficiary
                  </a>
                  <a onClick={() => { navigate("/provide-support"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("support")}`}>
                    Support
                  </a>
                  <a onClick={() => { navigate("/activity-log"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("activity-log")}`}>
                    Activity Log
                  </a>
                </div>
              </div>

              {/* Mobile Events Dropdown */}
              <div>
                <p className="px-3 py-2 font-semibold">Events</p>
                <div className="pl-6 space-y-1">
                  <a onClick={() => { navigate("/campus-reminder"); setIsMenuOpen(false); }} className={`block px-3 py-1 cursor-pointer ${getDropdownOptionColor("campus-events")}`}>
                    Campus Events & Reminders
                  </a>
                </div>
              </div>

              <a
                href="#impact"
                onClick={() => setActiveItem("impact")}
                className={`${
                  activeItem === "impact"
                    ? "text-red-700 font-semibold"
                    : "text-black font-medium"
                } block px-3 py-2 rounded-md text-base`}
              >
                Impact
              </a>
              {/* <a
                href="#work"
                onClick={() => setActiveItem("work")}
                className={`${
                  activeItem === "work" ? "text-red-700 font-semibold" : "text-black"
                } block px-3 py-2 rounded-md text-base`}
              >
                How It Works
              </a> */}

              <a
                href="#work"
                onClick={() => setActiveItem("work")}
                className={`${
                  activeItem === "work"
                    ? "text-red-700 font-semibold"
                    : "text-black font-medium"
                } block px-3 py-2 rounded-md text-base`}
              >
                How It Works
              </a>

                             <a
                 onClick={() => { setActiveItem("contact"); navigate("/contact"); }}
                 className={`${
                   activeItem === "contact"
                     ? "text-red-700 font-semibold"
                     : "text-black font-medium"
                 } block px-3 py-2 rounded-md text-base cursor-pointer`}
               >
                 Contact
               </a>
              <a
                href="#about"
                onClick={() => setActiveItem("about")}
                className={`${
                  activeItem === "about"
                    ? "text-red-700 font-semibold"
                    : "text-black font-medium"
                } block px-3 py-2 rounded-md text-base`}
              >
                About Us
              </a>

              <div className="pt-4">
                <button 
                  onClick={() => navigate("/login")} 
                  className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full cursor-pointer"
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
