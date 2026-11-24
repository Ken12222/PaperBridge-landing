import { FOOTER_PRODUCT } from "../content.js";
import { SITE } from "../config.js";
import WaitlistLink from "./WaitlistLink.jsx";

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">{SITE.name}</p>
          <p className="footer__text">Paper forms in, clean data out. Working name; details may change.</p>
        </div>
        <div>
          <p className="eyebrow">Product</p>
          <ul className="footer__list">
            {FOOTER_PRODUCT.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Community</p>
          <WaitlistLink className="">Join on WhatsApp</WaitlistLink>
        </div>
        {/* {SITE.contactEmail && (
          <div>
            <p className="eyebrow">Contact</p>
            <a className="" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
          </div>
        )} */}
      </div>
      <p className="wrap footer__legal">&copy; {SITE.year} {SITE.name}. All rights reserved.</p>
    </footer>
  );
}
