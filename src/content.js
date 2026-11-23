// All page copy lives here. Edit text without touching layout code.
export const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#usecases", label: "Use cases" },
  { href: "#integrations", label: "Integrations" },
  { href: "#faq", label: "FAQ" },
];

export const HERO_STATS = [
  { value: "3 steps", label: "Upload, review, export" },
  { value: "Any form", label: "Your fields, your layout" },
  { value: "Human Review", label: "A person checks every record" },
  { value: "Your systems", label: "Files and API" },
  // { value: "Your systems", label: "Files, API and webhooks" },
];

// export const MARQUEE_STEPS = ["UPLOAD", "READ", "CHECK", "REVIEW", "APPROVE", "EXPORT", "DELIVER"];

export const PACKET_CARDS = [
  {
    num: "01",
    kicker: "AUTOMATIC",
    title: "Multi-page packets",
    points: [
      "Photos or scans, 3 to 4 pages or more",
      "Fields read across every page",
      "Unclear values flagged, never guessed",
      "Missing pages and blanks are fine",
    ],
  },
  {
    num: "02",
    kicker: "YOUR TEAM",
    title: "Human-approved review",
    points: [
      "Page and fields side by side",
      "Smart checks on phones, IDs, dates, amounts",
      "Every correction recorded",
      "Nothing leaves until a person approves",
    ],
  },
];

export const AUDIENCES = [
  "Finance and lending",
  "Clinics and healthcare",
  "Schools and training",
  "HR and recruiting",
  "Logistics and warehouses",
  "NGOs and surveys",
  "Retail and field teams",
  "Government offices",
];

export const USE_CASES = [
  {
    num: "01",
    kicker: "BACKLOG",
    title: "Clear the paper pile",
    blurb: "Digitize years of stored forms in bulk.",
    points: ["One folder per client or case", "Batch processing", "Clean files out at the end"],
    // tags: ["Bulk upload", "Folders"],
  },
  {
    num: "02",
    kicker: "EVERY DAY",
    title: "Handle new forms as they arrive",
    blurb: "Turn today's paper into data today.",
    points: ["Upload from any device", "Review queue for your team", "Approved records sent on"],
    // tags: ["Review queue", "Phone capture planned"],
  },
  {
    num: "03",
    kicker: "MIGRATION",
    title: "Move into a new system",
    blurb: "Bridge old paper records into the tools you now use.",
    points: ["Fields and formats you define", "Missing data left blank and listed", "Output shaped to your import"],
    // tags: ["Custom fields", "Import-ready"],
  },
];

export const INTEGRATIONS = [
  { num: "01", title: "Files", text: "JSON, CSV, and Excel, with your own column names and formats." },
  { num: "02", title: "API", text: "Let your software pull approved records when it needs them." },
  // { num: "03", title: "Webhooks", text: "Push each approved record to your system the moment it is ready." },
  { num: "03", title: "Connectors", text: "Spreadsheets, databases and business tools, added based on demand." },
];

export const FAQS = [
  {
    q: "What is PaperBridge?",
    a: "A tool that reads handwritten forms and turns them into structured data that you review, approve and send to your own systems.",
  },
  {
    q: "Which documents does it work with?",
    a: "Forms and applications you define: registrations, intake sheets, surveys, order forms and more. You choose the fields to capture.",
  },
  {
    q: "Where do the results go?",
    a: "We are building file exports (JSON, CSV, Excel), an API and webhooks first. Connectors to specific tools will follow based on demand.",
  },
  {
    q: "How accurate is it?",
    a: "Handwriting is never read perfectly. Unclear values are flagged, and a person approves every record before it leaves the tool. We are testing on real forms now.",
  },
  {
    q: "When can I try it, and what will it cost?",
    a: "Launch date and pricing are not set yet. Join the WhatsApp community and you will hear first.",
  },
];

export const FOOTER_PRODUCT = ["Multi-page packets", "Review and approval", "Exports and integrations"];
