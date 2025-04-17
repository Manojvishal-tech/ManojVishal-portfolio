export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {!menuOpen && (
        <div
          className="fixed top-6 right-6 z-50 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <div className="w-8 h-1 bg-white my-1"></div>
          <div className="w-8 h-1 bg-white my-1"></div>
          <div className="w-8 h-1 bg-white my-1"></div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
       transition-all duration-300 ease-in-out
       ${
         menuOpen
           ? "h-screen opacity-100 pointer-events-auto scale-100"
           : "h-0 opacity-0 pointer-events-none scale-0"
       }
      `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-2xl font-bold text-white mt-4"
        >
          Manoj<span className="text-blue-500">Vishal</span>
        </a>

        <div className="flex flex-col items-center space-y-6 mt-6">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
