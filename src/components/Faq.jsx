import { FAQS } from "../content.js";

export default function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap wrap--narrow">
        <p className="eyebrow">Questions</p>
        <h2 id="faq-title" className="display">Frequently asked <em>questions</em></h2>
        <dl className="faq">
          {FAQS.map((f) => (
            <div className="faq__item" key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
