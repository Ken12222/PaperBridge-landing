import { HERO_STATS } from "../content.js";
import WaitlistLink from "./WaitlistLink.jsx";
// import {image1} from 
 const images = {
                name:"image",
                src: "../../public/image1.jpg"
              }

            
function HeroVisual() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <img         
      style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "24px"
        }} src={images.src} />
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
