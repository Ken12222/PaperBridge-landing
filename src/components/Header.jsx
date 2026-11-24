import { useEffect, useState } from "react";
import { NAV, } from "../content.js";
import { SITE } from "../config.js";
import WaitlistLink from "./WaitlistLink.jsx";

const logo = "../../public/logo.svg"
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
      <a className="logo" href="#top" aria-label={`${SITE.name} home`}>
        <img
            src={logo}
            alt="Logo"
            style={{ width: "30px", height: "30px" }}
        />
        {SITE.name}
      </a>
      <nav className="header__nav" aria-label="Main">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <WaitlistLink className="btn btn--small">Join waitlist</WaitlistLink>
    </header>
  );
}
