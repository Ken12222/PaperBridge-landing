import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
// import Marquee from "./components/Marquee.jsx";
import Packet from "./components/Packet.jsx";
import Audience from "./components/Audience.jsx";
import UseCases from "./components/UseCases.jsx";
import Integrations from "./components/Integrations.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Faq from "./components/Faq.jsx";
import AfterReview from "./components/AfterReview.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* <a className="skip-link" href="#main">Skip to content</a> */}
      <Header />
      <main id="main">
        <Hero />
        <Packet />
        <Audience />
        <UseCases />
        <Integrations />
        <Waitlist />
        <Faq />
        <AfterReview />
      </main>
      <Footer />
    </>
  );
}
