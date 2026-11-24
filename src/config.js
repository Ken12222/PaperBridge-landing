// Everything you are likely to change without touching components.
export const SITE = {
  name: "PaperBridge", // working name
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || "https://chat.whatsapp.com/GW9CZiOSR0dHPkqVudYGu7",
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "ashartey2@gmail.com", 
  year: new Date().getFullYear(),
};
