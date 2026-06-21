import { useState } from "react";
import ArrowSolidIcon from "@iconify-react/teenyicons/arrow-solid";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "الرئيسية", id: "home" },
    { name: "من نحن", id: "about" },
    { name: "لماذا 3C", id: "why" },
    { name: "شركاؤنا", id: "partners" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="w-full px-4 py-8 sm:px-6 lg:px-12">
      {/* Container */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/f3a285ff183fe89529ca806f7ba973b5f0ef5ad7 (1).png"
            alt="logo"
            className="
              object-contain
              w-[110px] h-[39px]   /* mobile baseline */
              sm:w-[130px] sm:h-[46px]
              md:w-[150px] md:h-[53px]
              lg:w-[164px] lg:h-[58px]  /* exact Figma size */
              transition-all duration-300
              "
          />
        </div>

        {/* Links (Desktop) */}
        <div
          className="
              hidden md:flex
              items-center justify-between
              w-full max-w-[520px]
              rounded-full
              border border-gray-200
              bg-white/50
              px-4 py-2
              font-semibold text-gray-700
              shadow-sm backdrop-blur-md
            "
        >
          {links.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`
                  relative group
                  text-sm lg:text-base
                  transition-all duration-300
                  hover:text-sky-500
  
                  ${
                    index === 0
                      ? `
                        rounded-full
                        border border-sky-300
                        bg-white
                        px-4 py-1
                        text-sky-500
                      `
                      : ""
                  }
                `}
            >
              {link.name}

              {/* underline */}
              {index !== 0 && (
                <span
                  className="
                    absolute -bottom-1 right-0
                    h-[2px] w-0
                    bg-sky-500
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center flex-row-reverse">
          {/* arrow */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#50BDE9] shadow">
            <span>
              <ArrowSolidIcon height="19" color="black" />
            </span>
          </div>

          <button
            className="
                rounded-full
                bg-white
                px-4 py-2 lg:px-6 lg:py-3
                text-sm lg:text-base
                font-semibold
                shadow-md
                transition-all duration-300
                hover:bg-sky-500 hover:text-white
              "
          >
            ابدأ الآن
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl sm:text-3xl text-gray-700 md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            mt-3
            flex flex-col gap-3
            rounded-2xl
            bg-white/90
            p-4
            text-center font-semibold
            shadow-md backdrop-blur-md
            md:hidden
          "
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="
                  py-2
                  text-sm
                  transition
                  hover:text-sky-500
                "
            >
              {link.name}
            </button>
          ))}

          <button className="rounded-full bg-sky-500 py-2 text-white text-sm">
            ابدأ الآن
          </button>
        </div>
      )}
    </nav>
  );
}
