// Everything you are likely to change without touching components.
export const SITE = {
  name: "PaperBridge", // working name
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || "https://chat.whatsapp.com/YOUR-COMMUNITY-LINK",
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "", // empty = the footer hides the contact column
  year: new Date().getFullYear(),
};
