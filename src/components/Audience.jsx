import { AUDIENCES } from "../content.js";

export default function Audience() {
  return (
    <section className="section section--mist" aria-labelledby="who-title">
      <div className="wrap">
        <p className="eyebrow">Who it's for</p>
        <h2 id="who-title" className="display">Built for teams that <em>still run on paper.</em></h2>
        <p className="lead section__lead">
          If your people fill in forms by hand and someone retypes them later, PaperBridge is for you.
        </p>
        <ul className="grid grid--tiles">
          {AUDIENCES.map((a) => <li className="card card--tile" key={a}>{a}</li>)}
        </ul>
      </div>
    </section>
  );
}
