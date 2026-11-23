import { USE_CASES } from "../content.js";
import WaitlistLink from "./WaitlistLink.jsx";

export default function UseCases() {
  return (
    <section className="section" id="usecases" aria-labelledby="jobs-title">
      <div className="wrap">
        <p className="eyebrow">Start with the job</p>
        <h2 id="jobs-title" className="display">Three jobs. <em>One tool.</em></h2>
        <p className="lead section__lead">Pick the problem you have today. The same pipeline handles all three.</p>
        <div className="grid grid--cards">
          {USE_CASES.map((u) => (
            <article className="card card--job" key={u.num}>
              <p className="card__num">{u.num}</p>
              <p className="card__kicker">{u.kicker}</p>
              <h3 className="card__title card__title--sm">{u.title}</h3>
              <p className="card__blurb">{u.blurb}</p>
              <ul className="checks">
                {u.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {/* <p className="tags">
                {u.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </p> */}
              {/* <WaitlistLink>Join the waitlist</WaitlistLink> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
