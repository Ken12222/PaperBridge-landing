import { HERO_STATS } from "../content.js";
import WaitlistLink from "./WaitlistLink.jsx";

function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__pills">
        <span className="pill">UPLOAD</span>
        <span className="pill">READ</span>
        <span className="pill">REVIEW</span>
      </div>
      <div className="doc">
        <span className="doc__bar doc__bar--title" />
        <span className="doc__bar" />
        <span className="doc__bar doc__bar--w82" />
        <span className="doc__ink doc__ink--w45" />
        <span className="doc__ink doc__ink--w64" />
        <span className="doc__ink doc__ink--w52" />
        <span className="doc__bar doc__bar--last" />
      </div>
      <div className="extract">
        <p className="extract__label">EXTRACTED (SAMPLE)</p>
        <p className="extract__row"><span>Name</span><strong>Sample Client</strong></p>
        <p className="extract__row"><span>Phone</span><strong className="extract__check">Check</strong></p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero on-dark" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">PaperBridge &middot; Coming soon</p>
          <h1 id="hero-title" className="display display--xl">
            Paper in. <em>Data out.</em>
          </h1>
          <p className="lead">
            Turn handwritten, multi-page forms into clean, structured data, checked by your team and sent to the
            systems you already use.
          </p>
          <div className="hero__actions">
            <WaitlistLink>Join the waitlist</WaitlistLink>
            {/* <a className="textlink" href="#how">How it works</a>
            <a className="textlink" href="#faq">FAQs</a> */}
          </div>
        </div>
        <HeroVisual />
      </div>
      <ul className="wrap stats">
        {HERO_STATS.map((s) => (
          <li key={s.value}>
            <strong className="stats__value">{s.value}</strong>
            <span className="stats__label">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
