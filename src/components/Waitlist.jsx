import WaitlistLink from "./WaitlistLink.jsx";

export default function Waitlist() {
  return (
    <section className="section section--mist section--center" id="waitlist" aria-labelledby="wl-title">
      <div className="wrap">
        <p className="eyebrow">Join the waitlist</p>
        <h2 id="wl-title" className="display display--narrow">Be among the first to <em>leave paper behind.</em></h2>
        <p className="lead lead--center">
          Join our WhatsApp community for updates, early access and a say in what we build. It is free, and you can
          leave any time.
        </p>
        <WaitlistLink>Join the waitlist</WaitlistLink>
      </div>
    </section>
  );
}
