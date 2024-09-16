import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768); // Adjust breakpoint as needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = 'https://forms.gle/BrVUXMzCu1sM4AgY7'; // Redirect to Contact Us
  };

  const handleFeedbackClick = () => {
    window.location.href = 'https://forms.gle/HqwnjMK9LEGk3WTp8'; // Replace with your feedback link
  };

  const handleFeedback1Click = () => {
    window.location.href = 'https://drive.google.com/file/d/11kxvr-foXLH8u3nRKdszkWSpu03CCTx4/view?usp=drive_link'; // Replace with your feedback link
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`w-full px-4 flex py-3 top-0 z-30 transition-all duration-300 fixed ${
        isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent border-transparent'
      }`}
    >
      {/* Company logo and name */}
      <div className={`flex items-center mr-auto ${isMobile ? 'w-full ' : ''}`}>
        <img src="DS.png" alt="Logo" className="h-8 w-8 mr-2 ml-7" />
        <span className={`bg-transparent border-transparent py-2 px-4 mr-4 rounded-full ${
          isScrolled ? 'text-black' : 'text-black'
        } bg-gray-700 font-bold font-serif text-2xl`}>COSMOOGUIDE</span>
      </div>

      {/* Mobile menu button */}
      <button className={`items-center justify-center focus:outline-none ${isMobile ? 'block' : 'hidden'} `} onClick={toggleDropdown}>
        <span className="text-black text-2xl">☰</span>
      </button>

      {/* Dropdown menu (visible on mobile only) */}
      <div className={`absolute top-full right-0 bg-white shadow-md rounded-md px-4 py-2 transition duration-300 ease-in-out ${isMobile && isDropdownOpen ? 'block' : 'hidden'}`}>
        <button
          onClick={handleContactClick}
          className={`block py-2 hover:bg-[#f5f0cc] font-serif`}
        >
          Book A Report
        </button>
        <button
          onClick={handleFeedbackClick}
          className={`block py-2 hover:bg-[#f5f0cc] font-serif`}
        >
          Feedback
        </button>
        <button
          onClick={handleFeedback1Click}
          className={`block py-2 hover:bg-[#f5f0cc] font-serif`}
        >
          How Does it Work
        </button>
      </div>

      {/* Desktop buttons (hidden on mobile) */}
      <div className={`flex space-x-4 ${isMobile ? 'hidden' : ''}`}>
        <button
          onClick={handleContactClick}
          className={`bg-transparent border-transparent py-2 px-4 rounded-full font-serif ${
            isScrolled ? 'text-black' : 'text-black'
          } hover:bg-[#f5f0cc] font-bold`}
        >
          Book A Report
        </button>
        <button
          onClick={handleFeedbackClick}
          className={`bg-transparent border-transparent py-2 px-4 rounded-full ${
            isScrolled ? 'text-black' : 'text-black'
          } hover:bg-[#f5f0cc] font-bold font-serif`}
        >
          Feedback
        </button>
        <button
          onClick={handleFeedback1Click}
          className={`bg-transparent border-transparent py-2 px-4 rounded-full ${
            isScrolled ? 'text-black' : 'text-black'
          } hover:bg-[#f5f0cc] font-bold font-serif`}
        >
          How Does it Work

        </button>
      </div>

      {/* Mobile menu button (optional) */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon bg-black" />
  
</button>

    </nav>
  );
};

export default Navbar;
