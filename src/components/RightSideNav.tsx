import { useEffect, useState } from "react";

const RightSideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const navLinks = ["About", "Services", "Clients", "Contact"];

  // Detect screen width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Auto close on tablet (md: 768px)
      }
    };

    window.addEventListener("resize", handleResize); // Listen to resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="font-sans w-full bg-black text-white">
      <div className="mx-4 md:mx-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold">Logo</h2>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-xl">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-green-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xl cursor-pointer md:block hidden">
              Search
            </span>
            <span
              className="text-3xl cursor-pointer md:hidden block"
              onClick={toggleNav}
            >
              &#9776;
            </span>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeNav}
        />

        {/* Side Nav Panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-0 bg-[#111] z-50 pt-16 transition-all duration-500 overflow-hidden ${
            isOpen ? "w-[70%] md:w-[40%]" : "w-0"
          }`}
        >
          <button
            className="absolute top-2 right-6 text-white text-5xl focus:outline-none"
            onClick={closeNav}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <nav className="flex flex-col items-center mt-16 space-y-6 text-gray-400 text-2xl">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors"
                onClick={closeNav}
              >
                {link}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default RightSideNav;
