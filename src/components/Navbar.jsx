import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { easeOutExpo } from "../animations";

const iconMap = {
  github: <FaGithub aria-hidden="true" />,
  linkedin: <FaLinkedinIn aria-hidden="true" />,
};

export default function Navbar({ name, links = [] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <a className="nav-brand" href="#top" aria-label={`${name} home`}>
        {name}
      </a>

      <div className="nav-actions">
        <span className="availability">
          <span aria-hidden="true" />
          Available for work
        </span>
        {links.map((link) => {
          const key = link.name.toLowerCase();
          return (
            <a
              className="icon-link"
              href={link.link}
              key={link.name}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              title={link.name}
            >
              {iconMap[key] || link.name}
            </a>
          );
        })}
      </div>
    </Motion.nav>
  );
}
