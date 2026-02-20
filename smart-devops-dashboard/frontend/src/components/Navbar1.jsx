import React, { useState, useEffect } from "react";

const Navbar1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .logo-font { font-family: 'Syne', sans-serif; }

        .logo-mark {
          width: 32px; height: 32px;
          border: 2px solid #3AAFA9;
          transform: rotate(45deg);
          transition: all 0.4s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-group:hover .logo-mark {
          transform: rotate(90deg);
          border-color: #FFD166;
        }
        .logo-dot {
          width: 10px; height: 10px;
          background: #3AAFA9;
          transition: background 0.3s ease;
        }
        .logo-group:hover .logo-dot { background: #FFD166; }

        .search-input {
          width: 220px;
          background: rgba(15, 46, 52, 0.8);
          border: 1px solid rgba(58, 175, 169, 0.2);
          border-radius: 10px;
          padding: 8px 36px 8px 38px;
          font-size: 13px;
          color: #F7F9FA;
          outline: none;
          transition: all 0.3s ease;
          caret-color: #3AAFA9;
        }
        .search-input::placeholder { color: #9FB3B6; }
        .search-input:focus {
          width: 280px;
          border-color: #3AAFA9;
          background: rgba(15, 46, 52, 1);
          box-shadow: 0 0 0 3px rgba(58, 175, 169, 0.12), 0 0 20px rgba(58, 175, 169, 0.08);
        }

        .search-clear {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(58,175,169,0.15);
          border: none;
          border-radius: 4px;
          width: 18px; height: 18px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, background 0.2s ease;
          padding: 0;
        }
        .search-clear.visible { opacity: 1; pointer-events: all; }
        .search-clear:hover { background: rgba(255,209,102,0.25); }

        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: #FFD166;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 28px rgba(255, 209, 102, 0.35);
        }
        .cta-text { position: relative; z-index: 1; }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A2328]/96 border-b border-[#3AAFA9]/30 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "bg-[#0A2328]/75 border-b border-[#3AAFA9]/10"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 h-17 flex items-center justify-between gap-6">
          <div className="logo-group flex items-center gap-3 cursor-pointer select-none shrink-0">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="logo-mark">
                <div className="logo-dot" />
              </div>
            </div>
            <span className="logo-font text-[#F7F9FA] text-xl tracking-tight">
              Smart DevOps Dashboard
            </span>
          </div>

          <div className="relative flex items-center">
            <svg
              className="absolute left-2.75 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke={searchFocused ? "#3AAFA9" : "#9FB3B6"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />

            <button
              className={`search-clear ${searchValue ? "visible" : ""}`}
              onMouseDown={(e) => {
                e.preventDefault();
                setSearchValue("");
              }}
            >
              <svg
                width="8"
                height="8"
                viewBox="0 0 10 10"
                fill="none"
                stroke="#9FB3B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="1" y1="1" x2="9" y2="9" />
                <line x1="9" y1="1" x2="1" y2="9" />
              </svg>
            </button>
          </div>

          <button className="cta-btn bg-[#3AAFA9] text-[#0A2328] font-medium text-sm px-6 py-2.5 rounded-lg shrink-0">
            <span className="cta-text">Get Started</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;

