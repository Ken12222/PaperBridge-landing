import { render, screen, within } from "@testing-library/react";
import App from "./App.jsx";
import { NAV, FAQS, USE_CASES } from "./content.js";

describe("landing page", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Paper in. Data out.");
  });

  it("sends every waitlist button to the WhatsApp community, safely", () => {
    render(<App />);
    const links = screen.getAllByRole("link").filter((a) => /whatsapp/i.test(a.getAttribute("href") || ""));
    // header + hero + one per use case + waitlist band + footer
    expect(links.length).toBe(1 + 1 + USE_CASES.length + 1 + 1);
    links.forEach((a) => {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    });
  });

  it("has an anchor target for every nav link", () => {
    const { container } = render(<App />);
    NAV.forEach((n) => expect(container.querySelector(n.href)).not.toBeNull());
  });

  it("lists every FAQ", () => {
    render(<App />);
    FAQS.forEach((f) => expect(screen.getByText(f.q)).toBeInTheDocument());
  });

  it("has one main landmark and one h1", () => {
    render(<App />);
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(within(screen.getByRole("navigation", { name: "Main" })).getAllByRole("link")).toHaveLength(NAV.length);
  });

  it("hides the contact column when no email is configured", () => {
    render(<App />);
    expect(screen.queryByText("Contact")).toBeNull();
  });
});
