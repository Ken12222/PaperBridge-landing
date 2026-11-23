import { INTEGRATIONS } from "../content.js";

export default function Integrations() {
  return (
    <section className="section section--dark on-dark" id="integrations" aria-labelledby="int-title">
      <div className="wrap">
        <p className="eyebrow">Send results anywhere</p>
        <h2 id="int-title" className="display">Results go where your team <em>already works.</em></h2>
        <p className="lead section__lead">
          Digital copies are not limited to one file type. Choose the format and route that fits your systems.
        </p>
        <div className="grid grid--cards-sm">
          {INTEGRATIONS.map((i) => (
            <article className="tile" key={i.num}>
              <p className="card__num">{i.num}</p>
              <h3 className="card__title card__title--sm">{i.title}</h3>
              <p className="tile__text">{i.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
