import { NAV, } from "../content.js";
import { SITE } from "../config.js";
import WaitlistLink from "./WaitlistLink.jsx";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top" aria-label={`${SITE.name} home`}>
        <span className="logo__mark" aria-hidden="true" />
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
