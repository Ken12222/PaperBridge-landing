import { MARQUEE_STEPS } from "../content.js";

const run = Array.from({ length: 2 }, () => MARQUEE_STEPS.join(" \u2192 ") + " \u2192 ").join("");

/** Decorative ticker. Hidden from assistive tech; stops moving when the visitor prefers reduced motion. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span>{run}</span>
        <span>{run}</span>
      </div>
    </div>
  );
}
