/* ==========================================================================
   QSilon Tensorv — SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.
   - Change text, services, contact details, etc. below.
   - `pages` controls which sections appear on each page and in what order.
     Re-order, remove or repeat section names to redesign a page.
   - Icons: use any name from the ICONS list at the top of assets/js/main.js.
   ========================================================================== */

window.SITE = {
  brand: {
    name: "QSilon Tensorv",
    short: "QT",
    tagline: "B2B Software & AI Automation",
    description:
      "QSilon Tensorv builds B2B software, AI automations, ERP systems, school management systems and high-performance websites for growing businesses and institutions.",
  },

  // TODO: replace with your real contact details.
  contact: {
    email: "hello@qsilontensorv.com",
    phone: "+91 00000 00000",
    whatsapp: "910000000000", // digits only, with country code. Leave "" to hide.
    address: "Your office address, City, State, India",
    hours: "Mon – Sat, 9:30 AM – 7:00 PM IST",
    mapEmbed: "", // optional Google Maps embed URL (https://www.google.com/maps/embed?...)
    // Optional form backend (e.g. https://formspree.io/f/xxxxxx).
    // If empty, the form opens the visitor's email app with the message pre-filled.
    formEndpoint: "",
  },

  social: [
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "X / Twitter", icon: "twitter", url: "#" },
    { name: "GitHub", icon: "github", url: "#" },
  ],

  nav: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "Solutions", href: "solutions.html", page: "solutions" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Contact", href: "contact.html", page: "contact" },
  ],

  /* ---------- Page layouts: list section names in display order ---------- */
  pages: {
    home: ["hero", "techStrip", "services", "solutions", "stats", "process", "industries", "whyUs", "faq", "cta"],
    services: ["pageHeader", "serviceDetails", "process", "techStack", "cta"],
    solutions: ["pageHeader", "solutionDetails", "industries", "faq", "cta"],
    about: ["pageHeader", "about", "values", "stats", "whyUs", "cta"],
    contact: ["pageHeader", "contact", "faq"],
  },

  /* ---------- Per-page headers (used by the "pageHeader" section) ---------- */
  pageHeaders: {
    services: {
      eyebrow: "What we do",
      title: "Services built for <span class='grad'>real business outcomes</span>",
      text: "From AI automations to complete ERP rollouts, we design, build and support software that your team actually uses.",
    },
    solutions: {
      eyebrow: "Ready-to-deploy platforms",
      title: "Solutions that <span class='grad'>run your operations</span>",
      text: "Proven platforms we customise to your workflows — deployed fast, owned by you.",
    },
    about: {
      eyebrow: "About us",
      title: "Engineering the <span class='grad'>intelligent enterprise</span>",
      text: "We are a team of engineers, designers and automation specialists helping businesses and institutions go digital the right way.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something <span class='grad'>great together</span>",
      text: "Tell us about your project. We usually reply within one business day.",
    },
  },

  hero: {
    badge: "AI-first software company",
    title: "Smart software & <span class='grad'>AI automation</span> for modern businesses",
    text:
      "We build ERP systems, school management platforms, custom B2B software and stunning websites — powered by automation that saves your team hours every day.",
    primary: { label: "Get a free consultation", href: "contact.html" },
    secondary: { label: "Explore services", href: "services.html" },
    highlights: ["Custom-built for you", "Secure & scalable", "Dedicated support"],
    // Words that rotate in the hero card
    rotating: ["ERP Systems", "AI Agents", "School ERP", "Websites", "CRM", "Automations"],
  },

  techStrip: {
    title: "Technologies we work with",
    items: ["Python", "Node.js", "React", "Next.js", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "OpenAI / LLMs", "n8n"],
  },

  services: {
    eyebrow: "Our services",
    title: "Everything your business needs to <span class='grad'>go digital</span>",
    text: "One partner for software, automation and web — from idea to launch and beyond.",
    items: [
      {
        id: "ai-automation",
        icon: "bot",
        title: "AI Automation",
        text: "AI agents, chatbots and workflow automation that eliminate repetitive work across sales, support and operations.",
        features: ["AI chatbots & voice agents", "Document & invoice processing", "WhatsApp / email automation", "Workflow automation (n8n, Zapier, custom)", "Predictive analytics & reports"],
      },
      {
        id: "erp",
        icon: "layers",
        title: "ERP Solutions",
        text: "End-to-end ERP covering inventory, finance, HR, purchase, sales and production — tailored to how you work.",
        features: ["Inventory & warehouse", "Accounts, GST & billing", "HR, payroll & attendance", "Purchase & sales orders", "Role-based dashboards"],
      },
      {
        id: "b2b-software",
        icon: "code",
        title: "Custom B2B Software",
        text: "Bespoke web and mobile applications, SaaS products, portals and integrations engineered for scale.",
        features: ["SaaS product development", "Customer & vendor portals", "API & third-party integrations", "Mobile apps (Android / iOS)", "Legacy system modernisation"],
      },
      {
        id: "school-management",
        icon: "school",
        title: "School Management System",
        text: "A complete digital campus — admissions, fees, attendance, exams, timetable and parent communication in one app.",
        features: ["Admissions & student records", "Online fee collection", "Attendance & timetable", "Exams, results & report cards", "Parent / teacher mobile app"],
      },
      {
        id: "websites",
        icon: "globe",
        title: "Website Development",
        text: "Fast, attractive, SEO-ready websites and e-commerce stores that turn visitors into customers.",
        features: ["Corporate & business websites", "E-commerce stores", "Landing pages that convert", "SEO & performance optimisation", "Maintenance & hosting"],
      },
      {
        id: "crm-analytics",
        icon: "chart",
        title: "CRM & Business Analytics",
        text: "Track leads, customers and KPIs with custom CRM and live dashboards that guide smarter decisions.",
        features: ["Lead & pipeline management", "Customer support desk", "Live BI dashboards", "Sales forecasting", "Data migration & cleanup"],
      },
      {
        id: "cloud-devops",
        icon: "cloud",
        title: "Cloud & DevOps",
        text: "Secure cloud hosting, CI/CD pipelines and monitoring so your software stays fast and always available.",
        features: ["AWS / Azure / GCP setup", "CI/CD pipelines", "Backups & disaster recovery", "Security hardening", "24/7 monitoring"],
      },
      {
        id: "ui-ux",
        icon: "pen",
        title: "UI / UX Design",
        text: "Research-driven product design — wireframes, prototypes and design systems that users love.",
        features: ["User research", "Wireframes & prototypes", "Design systems", "Usability testing", "Brand identity"],
      },
    ],
  },

  solutions: {
    eyebrow: "Solutions",
    title: "Ready platforms, <span class='grad'>customised for you</span>",
    text: "Start faster with our proven platforms and tailor every module to your process.",
    items: [
      {
        icon: "layers",
        tag: "ERP",
        title: "Business ERP Suite",
        text: "Manufacturing, trading and service businesses run inventory, finance, HR and sales from a single dashboard.",
        modules: ["Inventory", "Accounts & GST", "HR & Payroll", "Sales & CRM", "Purchase", "Reports"],
      },
      {
        icon: "school",
        tag: "Education",
        title: "School & College Management",
        text: "Digitise your entire institution with web and mobile apps for admins, teachers, students and parents.",
        modules: ["Admissions", "Fees", "Attendance", "Exams", "Transport", "Library", "Parent App"],
      },
      {
        icon: "bot",
        tag: "AI",
        title: "AI Automation Platform",
        text: "Deploy AI agents that answer customers, qualify leads, process documents and trigger workflows 24/7.",
        modules: ["Chatbots", "Voice Agents", "Doc AI", "Lead Scoring", "WhatsApp Bots"],
      },
      {
        icon: "cart",
        tag: "Commerce",
        title: "E-commerce & Web Platforms",
        text: "High-converting online stores and business websites with payments, inventory sync and analytics.",
        modules: ["Storefront", "Payments", "Inventory Sync", "SEO", "Analytics"],
      },
      {
        icon: "hospital",
        tag: "Healthcare",
        title: "Hospital & Clinic Management",
        text: "Appointments, patient records, billing, pharmacy and lab management in one secure system.",
        modules: ["OPD / IPD", "EMR", "Billing", "Pharmacy", "Lab"],
      },
      {
        icon: "users",
        tag: "HR",
        title: "HRMS & Payroll",
        text: "Attendance, leave, payroll, performance and employee self-service — all automated.",
        modules: ["Attendance", "Leave", "Payroll", "Appraisals", "Self-service"],
      },
    ],
  },

  // Update with your real numbers. Plain text values (e.g. "24/7") are shown as-is;
  // numeric values animate as counters.
  stats: [
    { value: 8, suffix: "+", label: "Service lines" },
    { value: 6, suffix: "+", label: "Industry solutions" },
    { value: 100, suffix: "%", label: "Custom-built code" },
    { value: "24/7", label: "Support & monitoring" },
  ],

  process: {
    eyebrow: "How we work",
    title: "A clear process, <span class='grad'>zero surprises</span>",
    steps: [
      { icon: "search", title: "Discover", text: "We study your business, goals and workflows to define the right solution." },
      { icon: "pen", title: "Design", text: "Wireframes, architecture and a clear roadmap with fixed milestones." },
      { icon: "code", title: "Develop", text: "Agile sprints with weekly demos so you see progress every step." },
      { icon: "rocket", title: "Deploy & Support", text: "Launch, training, and ongoing support, updates and improvements." },
    ],
  },

  industries: {
    eyebrow: "Industries",
    title: "Solutions for <span class='grad'>every sector</span>",
    items: [
      { icon: "factory", name: "Manufacturing" },
      { icon: "school", name: "Education" },
      { icon: "hospital", name: "Healthcare" },
      { icon: "cart", name: "Retail & E-commerce" },
      { icon: "truck", name: "Logistics" },
      { icon: "building", name: "Real Estate" },
      { icon: "bank", name: "Finance" },
      { icon: "briefcase", name: "Professional Services" },
    ],
  },

  whyUs: {
    eyebrow: "Why QSilon Tensorv",
    title: "A technology partner that <span class='grad'>delivers</span>",
    items: [
      { icon: "bolt", title: "Fast delivery", text: "Agile teams and reusable modules mean you go live in weeks, not months." },
      { icon: "shield", title: "Secure by design", text: "Role-based access, encryption and best-practice security in every build." },
      { icon: "sliders", title: "Fully customisable", text: "Every screen, report and workflow adapted to your exact process." },
      { icon: "headset", title: "Dedicated support", text: "A single point of contact, training for your team and quick fixes." },
      { icon: "trend", title: "Scales with you", text: "Cloud-native architecture that grows from 10 users to 10,000." },
      { icon: "key", title: "You own it", text: "Transparent pricing and full ownership of your code and data." },
    ],
  },

  techStack: {
    eyebrow: "Tech stack",
    title: "Modern tools, <span class='grad'>proven results</span>",
    groups: [
      { name: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind", "HTML5 / CSS3"] },
      { name: "Backend", items: ["Node.js", "Python / Django", "FastAPI", "Java Spring", "PHP / Laravel"] },
      { name: "Mobile", items: ["Flutter", "React Native", "Android", "iOS"] },
      { name: "AI & Data", items: ["OpenAI / LLMs", "LangChain", "TensorFlow", "Power BI", "n8n"] },
      { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { name: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
    ],
  },

  about: {
    title: "Who we are",
    paragraphs: [
      "QSilon Tensorv is a B2B software and AI automation company. We help businesses, schools and institutions replace manual work and scattered tools with smart, connected software.",
      "Our team combines deep engineering skills with practical business understanding — so every ERP, school management system, website or automation we build solves a real problem and pays for itself.",
    ],
    mission: "To make powerful, intelligent software accessible and affordable for every growing organisation.",
    vision: "To be the most trusted technology partner for businesses and institutions going digital.",
  },

  values: {
    eyebrow: "Our values",
    title: "What <span class='grad'>drives us</span>",
    items: [
      { icon: "heart", title: "Client first", text: "Your success is our success. We build long-term partnerships." },
      { icon: "spark", title: "Innovation", text: "We bring AI and modern tech into every solution." },
      { icon: "check", title: "Quality", text: "Clean code, thorough testing and reliable delivery." },
      { icon: "eye", title: "Transparency", text: "Clear communication, honest timelines and fair pricing." },
    ],
  },

  // Add real client testimonials here, then add "testimonials" to a page layout above.
  // Example: { quote: "...", name: "Client Name", role: "Director, Company" }
  testimonials: [],

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked <span class='grad'>questions</span>",
    items: [
      { q: "How long does it take to build a project?", a: "A business website usually takes 1–3 weeks. ERP, school management and custom software projects typically take 4–12 weeks depending on modules and integrations. We share a clear timeline before starting." },
      { q: "Can you customise the ERP or school management system?", a: "Yes. Every module, form, report and workflow can be tailored to your process. We can also integrate with your existing tools, payment gateways, Tally, WhatsApp and more." },
      { q: "Do you provide support after launch?", a: "Absolutely. We offer training, maintenance plans, updates, hosting and priority support so your system keeps running smoothly." },
      { q: "What can AI automation do for my business?", a: "AI can answer customer queries 24/7, qualify leads, read invoices and documents, generate reports, send follow-ups and automate repetitive tasks — saving your team hours every day." },
      { q: "How much does it cost?", a: "Pricing depends on scope. Share your requirements through the contact form and we will send a free consultation and a transparent quote." },
    ],
  },

  cta: {
    title: "Ready to automate and grow your business?",
    text: "Book a free consultation and get a tailored plan for your ERP, school system, website or AI automation.",
    primary: { label: "Start your project", href: "contact.html" },
    secondary: { label: "View solutions", href: "solutions.html" },
  },

  contactSection: {
    title: "Send us a message",
    text: "Fill in the form and our team will get back to you within one business day.",
    budgets: ["Not sure yet", "Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000"],
    successMessage: "Thank you! Your message has been sent. We'll be in touch shortly.",
  },

  footer: {
    text: "B2B software, AI automation, ERP, school management systems and websites — built to help you grow.",
  },
};
