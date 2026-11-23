import { SITE } from "../config.js";

/** Every "Join waitlist" button on the page goes through here, so the link lives in one place. */
export default function WaitlistLink({ children = "Join the waitlist", className = "btn", ...rest }) {
  return (
    <a className={className} href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
