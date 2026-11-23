import { PACKET_CARDS } from "../content.js";

export default function Packet() {
  return (
    <section className="section" id="how" aria-labelledby="how-title">
      <div className="wrap">
        <p className="eyebrow">One packet &middot; One record</p>
        <h2 id="how-title" className="display">Every page. <em>One clean record.</em></h2>
        <p className="lead section__lead">
          A client's file rarely fits on one page. PaperBridge reads the whole packet together and keeps people in
          charge of the result.
        </p>
        <div className="grid grid--wide">
          {PACKET_CARDS.map((c) => (
            <article className="card" key={c.num}>
              <p className="card__num">{c.num}</p>
              <p className="card__kicker">{c.kicker}</p>
              <h3 className="card__title">{c.title}</h3>
              <ul className="checks">
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
