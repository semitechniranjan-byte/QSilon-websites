/* ==========================================================================
   QSilon Tensorv — SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.
   - Change text, services, contact details, etc. below.
   - `pages` controls which sections appear on each page and in what order.
     Re-order, remove or repeat section names to redesign a page.
   - Icons: use any name from the ICONS list at the top of assets/js/main.js.
   - Service pictures: each service shows an animated product screen. To show
     your own photo instead, put it in assets/img/ and add for example
       image: "assets/img/voice-ai.jpg", imageAlt: "AI voice agent dashboard",
     to that service below.
   ========================================================================== */

window.SITE = {
  brand: {
    name: "QSilon Tensorv",
    short: "QT",
    // Optional: path to your own logo image (e.g. "assets/img/qsilon-tensorv-logo-dark.svg").
    // Leave "" to use the built-in animated logo (mark + full company name).
    logo: "",
    tagline: "Software & AI Automation",
    description:
      "QSilon Tensorv builds custom software, AI voice agents, AI automations, ERP systems, school management systems and high-performance websites for growing businesses and institutions.",
  },

  // TODO: replace with your real contact details.
  contact: {
    email: "hello@qsilontensorv.com",
    phone: "", // add a phone number later, e.g. "+91 98765 43210". Leave "" to hide.
    whatsapp: "", // digits only with country code, e.g. "919876543210". Leave "" to hide.
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
    { label: "About", href: "about.html", page: "about" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "Contact", href: "contact.html", page: "contact" },
    { label: "Blog", href: "blog.html", page: "blog" },
  ],

  /* ---------- Page layouts: list section names in display order ---------- */
  pages: {
    home: ["hero", "techStrip", "services", "showcase", "callback", "stats", "process", "industries", "whyUs", "blogLatest", "faq", "cta"],
    services: ["pageHeader", "serviceDetails", "callback", "industries", "process", "techStack", "cta"],
    about: ["pageHeader", "about", "missionVision", "teamWork", "expertise", "values", "stats", "whyUs", "callback", "cta"],
    contact: ["pageHeader", "contact", "nextSteps", "faq"],
    blog: ["pageHeader", "blog", "callback", "cta"],
  },

  /* ---------- Per-page headers (used by the "pageHeader" section) ---------- */
  pageHeaders: {
    services: {
      eyebrow: "What we do",
      title: "Services built for <span class='grad'>real business outcomes</span>",
      text: "From AI automations to complete ERP rollouts, we design, build and support software that your team actually uses.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Insights on <span class='grad'>software & AI automation</span>",
      text: "Practical guides on AI voice agents, ERP, school management, automation and websites — written for business owners.",
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
      "We build ERP systems, school management platforms, custom software and stunning websites — powered by automation that saves your team hours every day.",
    primary: { label: "Get a free consultation", href: "contact.html" },
    secondary: { label: "Explore services", href: "services.html" },
    highlights: ["Custom-built for you", "Secure & scalable", "Dedicated support"],
    // Words that rotate in the hero card
    rotating: ["AI Voice Agents", "ERP Systems", "AI Agents", "School ERP", "Websites", "CRM", "Automations"],
  },

  techStrip: {
    title: "Technologies we work with",
    items: ["Python", "Node.js", "React", "Next.js", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "OpenAI / LLMs", "n8n"],
  },

  services: {
    eyebrow: "Our services",
    title: "Everything your business needs to <span class='grad'>go digital</span>",
    text: "One partner for software, automation and web — from idea to launch and beyond.",
    homeLimit: 9, // how many services to show on the Home page (the rest are on the Services page)
    items: [
      {
        id: "ai-voice",
        icon: "voice",
        featured: true, // shown as a wide highlighted card with a "New" badge
        badge: "New",
        title: "AI Voice Calling & Voice Agents",
        text: "Human-like AI voice agents that make and answer phone calls 24/7 — qualifying leads, booking appointments, collecting payments and handling support in Hindi, English and regional languages.",
        features: ["Inbound & outbound AI calling", "Lead qualification & follow-ups", "Appointment booking & reminders", "Hindi, English & regional languages", "CRM / WhatsApp integration", "Call recordings, transcripts & analytics"],
      },
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
        id: "custom-software",
        icon: "code",
        title: "Custom Software Development",
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
      {
        id: "hospital-management",
        icon: "hospital",
        mockup: "hospital", // animated screen from assets/js/mockups.js
        title: "Hospital & Clinic Management",
        text: "Appointments, OPD token queue, patient records, billing, pharmacy and lab reports in one secure system.",
        features: ["OPD / IPD & token queue", "Patient records (EMR)", "Billing & pharmacy", "Lab reports with SMS alerts", "Doctor schedules & appointments"],
      },
      {
        id: "hrms-payroll",
        icon: "users",
        mockup: "hrms",
        title: "HRMS & Payroll",
        text: "Attendance, leave, payroll, appraisals and an employee self-service app — all automated.",
        features: ["Attendance & biometric integration", "Leave management", "Payroll & payslips", "Statutory compliance (PF, ESI, TDS)", "Performance appraisals", "Employee self-service app"],
      },
    ],
  },

  // Home page "See it in action" tabs — list service ids (each shows its animated screen).
  showcase: {
    eyebrow: "Live demo",
    title: "See our products <span class='grad'>in action</span>",
    text: "A quick look at what we build. Click a tab or let it play.",
    // Each tab: a service id, an example scene (assets/js/mockups-extra.js) and an example caption.
    items: [
      { id: "ai-voice", mockup: "home-voice", example: "Example: a real-estate firm's AI agent calls new leads and books site visits automatically." },
      { id: "ai-automation", mockup: "home-automation", example: "Example: a grocery store takes orders, invoices and payments on WhatsApp — no staff needed." },
      { id: "erp", mockup: "home-erp", example: "Example: a distributor's ERP tracks stock live and raises purchase orders when items run low." },
      { id: "school-management", mockup: "home-school", example: "Example: parents get attendance, homework, fees, results and live bus tracking in one app." },
      { id: "crm-analytics", mockup: "home-crm", example: "Example: a sales head tracks revenue, targets and region-wise performance in real time." },
      { id: "websites", mockup: "home-website", example: "Example: an online store where customers browse, add to cart and order on any device." },
    ],
  },

  // Contact page "What happens next" section
  nextSteps: {
    eyebrow: "What happens next",
    title: "From message to <span class='grad'>kick-off</span> in 4 steps",
    steps: [
      { icon: "mail", title: "We receive your enquiry", text: "You get an instant confirmation and our team reviews your requirements." },
      { icon: "users", title: "An expert is assigned", text: "A solutions expert for your industry becomes your single point of contact." },
      { icon: "phone", title: "Free consultation call", text: "We understand your goals, suggest the right solution and answer every question." },
      { icon: "layers", title: "Proposal & quote", text: "You receive a clear scope, timeline and transparent pricing — no surprises." },
    ],
  },

  // Update with your real numbers. Plain text values (e.g. "24/7") are shown as-is;
  // numeric values animate as counters.
  stats: [
    { value: 11, suffix: "+", label: "Services" },
    { value: 8, suffix: "+", label: "Industries served" },
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
      "QSilon Tensorv is a software and AI automation company. We help businesses, schools and institutions replace manual work and scattered tools with smart, connected software.",
      "Our team combines deep engineering skills with practical business understanding — so every ERP, school management system, website or automation we build solves a real problem and pays for itself.",
    ],
    // About page: "Inside QSilon" section
    inside: {
      eyebrow: "Inside QSilon Tensorv",
      title: "One team, <span class='grad'>every skill you need</span>",
      text: "Every project gets a dedicated cross-functional team. We meet daily, ship in weekly sprints and keep you updated at every step.",
      points: ["Dedicated project manager", "Weekly demos & progress reports", "Agile sprints with clear milestones", "Code reviews & automated testing"],
    },
    team: [
      { icon: "bot", title: "AI & ML Engineers", text: "Voice agents, chatbots, LLM apps and predictive models.", skills: ["LLMs", "Voice AI", "Python", "LangChain"] },
      { icon: "code", title: "Full-stack Developers", text: "Scalable web apps, ERPs, portals and APIs.", skills: ["React", "Node.js", "Django", "PostgreSQL"] },
      { icon: "phone", title: "Mobile Developers", text: "Android and iOS apps for teams, parents and customers.", skills: ["Flutter", "React Native", "Firebase"] },
      { icon: "pen", title: "UI / UX Designers", text: "Clean, simple interfaces your users enjoy.", skills: ["Figma", "Design systems", "Prototyping"] },
      { icon: "cloud", title: "Cloud & DevOps", text: "Secure hosting, CI/CD, backups and monitoring.", skills: ["AWS", "Docker", "CI/CD"] },
      { icon: "headset", title: "QA & Support", text: "Testing, training and quick help after launch.", skills: ["Testing", "Training", "24/7 monitoring"] },
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
      { q: "How does AI voice calling work?", a: "Our AI voice agent connects to your phone number and talks to customers in a natural voice. It can call leads, answer incoming calls, book appointments, send payment reminders and log every conversation in your CRM — in Hindi, English and regional languages, 24/7." },
      { q: "What can AI automation do for my business?", a: "AI can answer customer queries 24/7, qualify leads, read invoices and documents, generate reports, send follow-ups and automate repetitive tasks — saving your team hours every day." },
      { q: "How much does it cost?", a: "Pricing depends on scope. Share your requirements through the contact form and we will send a free consultation and a transparent quote." },
    ],
  },

  cta: {
    title: "Ready to automate and grow your business?",
    text: "Book a free consultation and get a tailored plan for your ERP, school system, website or AI automation.",
    primary: { label: "Start your project", href: "contact.html" },
    secondary: { label: "Explore services", href: "services.html" },
  },

  // "We will get back to you" section (add "callback" to any page layout above)
  callback: {
    title: "We will get back to <span class='grad'>you</span>",
    text: "Type your name, contact number and mail ID — our team will reach out within one business day.",
    button: "Request a call back",
    success: "Thank you! We have received your details and will get back to you shortly.",
  },

  contactSection: {
    title: "Send us a message",
    text: "Fill in the form and our team will get back to you within one business day.",
    budgets: ["Not sure yet", "Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000"],
    successMessage: "Thank you! Your message has been sent. We'll be in touch shortly.",
  },

  footer: {
    text: "Software and AI automation — ERP, school management systems and websites — built to help you grow.",
  },
};
