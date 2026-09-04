/**
 * Central content layer. Everything the site renders lives here so real
 * copy, figures and photography can be swapped in one place.
 *
 * PLACEHOLDER POLICY — items marked [VERIFY] use figures taken from the
 * current iemsnewdelhi.com site and should be re-confirmed; items marked
 * [PLACEHOLDER] are invented, realistic stand-ins awaiting real content.
 */
import { eventCaseStudies } from "./case-studies";

export const site = {
  name: "IEMS",
  managingDirector: "Harbans Nagpal",
  fullName: "Inter Event Management Services Pvt. Ltd.",
  founded: 2002,
  tagline: "Temporary cities. Permanent standards.",
  cities: ["New Delhi", "Jaipur", "Chandigarh"],
  email: "contact@iemsnewdelhi.com",
  altEmail: "iemsnewdelhi@gmail.com",
  phone: "+91 98100 54251",
};

/* ------------------------------------------------------------------ */
/*  Hero data strip — hard capacity numbers, the company's real proof  */
/* ------------------------------------------------------------------ */

export const heroSpecs = [
  { value: 2002, prefix: "EST. ", label: "Operating without pause" },
  { value: 46430, suffix: " M²", label: "Aluminium hangar capacity" }, // [VERIFY]
  { value: 1400, suffix: " TN", label: "Air-conditioning plant" }, // [VERIFY]
  { value: 1875, suffix: "+", label: "Exhibition stall systems" }, // [VERIFY] 1,275 Octonorm + 600 Maxima
];

/* ------------------------------------------------------------------ */
/*  Credibility band                                                   */
/* ------------------------------------------------------------------ */

// Institutions from iemsnewdelhi.com's public event record. [VERIFY] each
// before launch — these are public claims.
export const clients = [
  { name: "AIIMS, New Delhi", note: "Convocations" },
  { name: "Association of Physicians of India", note: "APICON 2009" },
  { name: "World Mining Congress", note: "19th Congress & Expo 2003" },
  { name: "CII", note: "AGM & National Conference 2013" },
  { name: "Delhi Ophthalmological Society", note: "DOSCON 2019 · The Ashok" },
  { name: "All India Ophthalmological Society", note: "AIOC Conference" },
  { name: "World Federation for Mental Health", note: "World Congress" },
  { name: "Government of India", note: "State ceremonies & inaugurations" },
];

// The three builds we lead with — cycled inside the hero truss drawing.
export const topEvents = [
  "19th World Mining Congress & Expo",
  "AIIMS Convocations",
  "APICON 2009 — 61st Conference of API",
];

// What full-service means, in plain words. Shown beside the intro and
// orbiting the truss drawing in the hero — one list, two places.
export const fullServiceScope = [
  "We plan and run the whole show",
  "We find the venue — or build it",
  "Staging, sound and show-calling",
  "Guest care and VVIP protocol",
  "Branding, signage and wayfinding",
  "Power, cooling and light — our own plant",
];

export const dignitaryLine =
  "Events inaugurated by four Presidents, two Prime Ministers and successive Vice-Presidents of India."; // [VERIFY]

/* ------------------------------------------------------------------ */
/*  Services — four distinct verticals, not one vague block            */
/* ------------------------------------------------------------------ */

export type Service = {
  index: string;
  title: string;
  summary: string;
  scope: string[];
  specs: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Event Management & Production",
    summary:
      "The planning layer: concept, programme, production and showtime operations — launches, roadshows and ceremonies, planned and run by the same house that builds the venue.",
    scope: [
      "End-to-end event planning & production",
      "Product launches & roadshows",
      "Show-calling & programme management",
      "Government & institutional ceremonies",
    ],
    specs: ["CONCEPT TO SHOWTIME", "ONE TEAM THROUGHOUT", "IN-HOUSE PRODUCTION"],
  },
  {
    index: "02",
    title: "Exhibition Infrastructure",
    summary:
      "German-engineered aluminium hangars, pagodas and modular stall systems — the structural shell of an exhibition, erected and certified on programme.",
    scope: [
      "Aluminium marquee hangars to 40 m clear span",
      "Pagoda structures in standard and custom bays",
      "Octonorm & Maxima stall systems",
      "Wooden flooring, platforms & ramps",
    ],
    specs: ["46,430 M² HANGAR STOCK", "1,275 OCTONORM BAYS", "230,000 FT² FLOORING"], // [VERIFY]
  },
  {
    index: "03",
    title: "Conferences & Convocations",
    summary:
      "Protocol-grade staging for scientific congresses, convocations and state functions — soundproof halls, registration, delegations and dais management.",
    scope: [
      "Soundproof air-conditioned conference halls",
      "Main stage, dais & backdrop fabrication",
      "Registration counters & delegate flow",
      "VIP & VVIP lounge environments",
    ],
    specs: ["60 REGISTRATION COUNTERS", "VVIP PROTOCOL EXPERIENCE", "SINCE 2002"], // [VERIFY]
  },
  {
    index: "04",
    title: "Venue Services & Utilities",
    summary:
      "The invisible systems that keep a temporary venue running: climate, power, light and wayfinding, engineered as one plant and monitored through the event.",
    scope: [
      "Central air-conditioning (Carrier plant)",
      "Electrical distribution & LED lighting",
      "Signage, branding & wayfinding",
      "Food courts, canteens & utilities",
    ],
    specs: ["1,400 TN AC CAPACITY", "24×7 SITE CREWS", "IN-HOUSE PLANT"], // [VERIFY]
  },
  {
    index: "05",
    title: "Fabrication & Logistics",
    summary:
      "In-house workshops, warehousing and a dedicated fleet — so the build never waits on a subcontractor and strike-down happens overnight.",
    scope: [
      "Custom exhibition stall fabrication",
      "Pipe pandal & truss structures",
      "Warehousing across three cities",
      "Dedicated truck fleet & staff transport",
    ],
    specs: ["3 CITY WAREHOUSES", "OWN TRUCK FLEET", "OVERNIGHT STRIKE-DOWN"], // [VERIFY]
  },
];

/* ------------------------------------------------------------------ */
/*  Projects / case studies                                            */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  venue: string;
  client: string;
  footprint: string;
  headline: string;
  stats: { value: string; label: string }[];
  brief: string;
  build: string[];
  delivered: string;
  plates: { caption: string; note: string; src?: string }[];
};

// First three are handwritten flagship studies ([PLACEHOLDER] figures until
// confirmed); the rest are generated from the site-photo record — see
// case-studies.ts (appended below via spread).
export const projects: Project[] = [
  {
    slug: "world-mining-congress",
    title: "19th World Mining Congress",
    category: "International Congress · Exhibition",
    year: "2003", // [VERIFY]
    venue: "New Delhi",
    client: "Organising Committee, WMC", // [PLACEHOLDER]
    footprint: "18,000 m² built environment", // [PLACEHOLDER]
    headline: "A world congress, built from bare ground in nineteen days.",
    stats: [
      { value: "18,000 m²", label: "Hangar & pagoda footprint" },
      { value: "97", label: "Exhibition stalls delivered" },
      { value: "19 days", label: "Ground-break to handover" },
      { value: "3,000+", label: "International delegates" },
    ],
    brief:
      "An international mining congress with ministerial delegations from forty countries required exhibition halls, plenary and breakaway venues, and full delegate infrastructure — on an open site with no permanent services.",
    build: [
      "Clear-span aluminium hangars erected as the primary exhibition halls, with engineered wooden flooring over levelled ground.",
      "A soundproof, air-conditioned plenary hall seating the full congress, with dais and simultaneous-interpretation booths.",
      "Central AC plant, power distribution and lighting run as a single site grid with redundant capacity for the inaugural session.",
      "Registration, delegate lounges, catering courts and signage delivered by in-house crews to a protocol-approved layout.",
    ],
    delivered:
      "Handed over ahead of the inaugural, inspected and cleared for VVIP protocol, and struck down within seventy-two hours of the closing session.",
    plates: [
      { caption: "Hangar erection, night shift", note: "Swap: wide site photo, floodlit steel & aluminium" },
      { caption: "Plenary hall, dais elevation", note: "Swap: interior of finished plenary" },
      { caption: "Exhibition aisles, opening day", note: "Swap: crowded aisle with stall runs" },
      { caption: "Delegate registration concourse", note: "Swap: registration counters in use" },
    ],
  },
  {
    slug: "aiims-convocation",
    title: "AIIMS Convocation",
    category: "State Ceremony · Convocation",
    year: "Multiple editions",
    venue: "AIIMS, New Delhi",
    client: "All India Institute of Medical Sciences", // [VERIFY]
    footprint: "Ceremonial venue, VVIP protocol", // [PLACEHOLDER]
    headline: "Where the head of state confers degrees, nothing is improvised.",
    stats: [
      { value: "VVIP", label: "Presidential protocol grade" },
      { value: "5,000+", label: "Seated capacity delivered" },
      { value: "Multiple", label: "Editions delivered" },
      { value: "Zero", label: "Protocol deviations" },
    ],
    brief:
      "A convocation presided over by the President of India demands ceremonial staging, security-cleared construction, climate control and sightline-perfect seating — delivered inside a working medical campus without disrupting it.",
    build: [
      "Ceremonial pandal and dais engineered to SPG and institutional security specifications, with cleared crew rosters.",
      "Full climate control of the ceremonial enclosure through the in-house Carrier plant, sized for a summer date.",
      "Acoustics, PA and broadcast-ready lighting for national telecast of the address.",
      "Guest management infrastructure — segregated entries, holding lounges, and faculty and graduand marshalling.",
    ],
    delivered:
      "Delivered across multiple editions; the institution's continued retention of IEMS is the reference. Handover to security agencies completed forty-eight hours before the ceremony each time.",
    plates: [
      { caption: "Ceremonial dais, national colours", note: "Swap: dais with presidential seal" },
      { caption: "Enclosure interior, pre-ceremony", note: "Swap: seating bowl, empty & lit" },
      { caption: "Academic procession route", note: "Swap: procession or marshalling photo" },
      { caption: "Broadcast lighting check", note: "Swap: night lighting test" },
    ],
  },
  {
    slug: "apicon",
    title: "APICON",
    category: "Medical Congress · Exhibition",
    year: "2009",
    venue: "New Delhi", // [VERIFY]
    client: "Association of Physicians of India", // [VERIFY]
    footprint: "Congress + trade exhibition", // [PLACEHOLDER]
    headline: "India's largest physicians' congress, run as one machine.",
    stats: [
      { value: "10,000+", label: "Registered delegates" },
      { value: "12", label: "Parallel scientific halls" },
      { value: "200+", label: "Pharma exhibition stalls" },
      { value: "5 days", label: "Continuous operation" },
    ],
    brief:
      "APICON pairs a dense multi-hall scientific programme with a major pharmaceutical trade exhibition. The infrastructure has to switch between lecture, ceremony and trade-floor modes without a gap in the programme.",
    build: [
      "Twelve soundproof parallel halls with independent AC zones, AV and speaker-ready staging.",
      "A pharma exhibition floor in Octonorm and Maxima systems with custom fabricated pavilions for anchor exhibitors.",
      "Registration for ten thousand delegates designed as a timed-flow system across sixty counters.",
      "Catering courts, faculty lounges and an inaugural setup convertible to plenary use the same evening.",
    ],
    delivered:
      "Programme ran to schedule across all five days; exhibition floor handed to exhibitors a full day early for stall dressing.",
    // Photos are from a later API build (Delhi Chapter XXXIV Annual
    // Conference, 2024) — captioned as such so the 2009 case study stays honest.
    plates: [
      { caption: "API Delhi Chapter 2024 — conference floor", note: "", src: "/portfolio/apicon/001.webp" },
      { caption: "API Delhi Chapter 2024 — faculty lounge", note: "", src: "/portfolio/apicon/005.webp" },
      { caption: "API Delhi Chapter 2024 — felicitations", note: "", src: "/portfolio/apicon/009.webp" },
      { caption: "API Delhi Chapter 2024 — dais and address", note: "", src: "/portfolio/apicon/013.webp" },
    ],
  },
  ...eventCaseStudies,
];

/* ------------------------------------------------------------------ */
/*  Legacy timeline                                                    */
/* ------------------------------------------------------------------ */

export const timeline = [
  {
    year: "2002",
    title: "Founded in New Delhi",
    text: "IEMS begins as an event services house in the capital, building for institutions rather than parties.",
  },
  {
    year: "2000s",
    title: "Infrastructure, in-house",
    text: "The company buys rather than rents: hangars, AC plant, flooring, stall systems. The inventory becomes the moat. ", // [PLACEHOLDER] decade detail
  },
  {
    year: "2010s",
    title: "The VVIP years",
    text: "World congresses, AIIMS convocations and state ceremonies put IEMS crews inside security-cleared, protocol-graded builds.", // [VERIFY]
  },
  {
    year: "2015+",
    title: "Three-city footprint",
    text: "Jaipur and Chandigarh offices with their own warehousing bring the same standard to North India's convention circuit.",
  },
  {
    year: "Today",
    title: "Second generation, same standard",
    text: "Under Managing Director Harbans Nagpal the company runs its own hangars, cooling plant and stall systems — the reason a quote and the finished hall match.",
  },
];

/* ------------------------------------------------------------------ */
/*  Credentials — verifiable standing, not invented quotes             */
/* ------------------------------------------------------------------ */

export const credentials = [
  {
    label: "Protocol",
    value:
      "Presidential, Prime Ministerial and Vice-Presidential inaugurations handed over to the security agencies ahead of schedule, every edition.", // [VERIFY]
  },
  {
    label: "Recognition",
    value:
      "Best Event Management Company — Delhi, Jaipur and Chandigarh (2013, 2017).", // [VERIFY award names/years]
  },
  {
    label: "Continuity",
    value:
      "Operating without a break since 2002, with the same crew leads returning to the same institutions year after year.",
  },
  {
    label: "Inventory",
    value:
      "46,430 m² of aluminium hangar, 1,400 tonnes of air-conditioning plant and 1,875+ stall systems — owned, not hired in.", // [VERIFY]
  },
];

/* ------------------------------------------------------------------ */
/*  Offices                                                            */
/* ------------------------------------------------------------------ */

export const offices = [
  {
    city: "New Delhi",
    role: "Headquarters",
    address: "23A, Bhawani Kunj, Sector D-2, Vasant Kunj, New Delhi 110 070",
    phone: "+91 98100 54251",
    email: "contact@iemsnewdelhi.com",
    altEmail: "iemsnewdelhi@gmail.com",
    map: "https://www.google.com/maps/search/?api=1&query=23A%2C%20Bhawani%20Kunj%2C%20Sector%20D-2%2C%20Vasant%20Kunj%2C%20New%20Delhi%20110070",
  },
  {
    city: "Jaipur",
    role: "Rajasthan Operations",
    address: "Jaipur, Rajasthan", // street address TBC
    phone: "+91 98290 60282",
    email: "info@indianexhibitors.com",
  },
  {
    city: "Chandigarh",
    role: "Punjab & Haryana Operations",
    address: "Chandigarh", // street address TBC
    phone: "+91 98720 07737",
    email: "raju.nagpal2235@gmail.com",
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio index                                                    */
/* ------------------------------------------------------------------ */

export type PortfolioCategory = "Exhibitions" | "Conferences" | "Ceremonies";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  venue: string;
  year: string;
  scale: string;
  note: string;
  /** present when a full case study exists at /projects/[slug] */
  slug?: string;
  /** cover photograph from the site record */
  photo?: string;
  /** matching event in the photo gallery below — card deep-links to it */
  gallery?: string;
};

// Every entry is a real event from the IEMS site-photo record
// (public/Image-Catalogue) and carries a full case study at /projects/[slug].
// Venues/years [VERIFY] where not evident from the photo folders.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "APICON",
    category: "Conferences",
    venue: "New Delhi",
    year: "2009",
    scale: "12 parallel halls",
    note: "",
    slug: "apicon",
    photo: "/portfolio/apicon/001.webp", // later API edition (Delhi Chapter 2024)
    gallery: "apicon",
  },
  {
    title: "API Delhi Chapter — XXXIV Annual Conference",
    category: "Conferences",
    venue: "Hotel Jaypee Siddharth, New Delhi",
    year: "2024",
    scale: "Conference + exhibition",
    note: "",
    slug: "api-delhi-2024",
    photo: "/portfolio/apicon/002.webp",
    gallery: "apicon",
  },
  {
    title: "AIOS Mid-Term Conference",
    category: "Conferences",
    venue: "Samrat Ashok Convention Centre, Patna",
    year: "2023",
    scale: "3 halls + exhibition",
    note: "",
    slug: "aios-midterm",
    photo: "/portfolio/aios-midterm/001.webp",
    gallery: "aios-midterm",
  },
  {
    title: "DOSCON 2024 — 74th Annual Conference",
    category: "Conferences",
    venue: "The Ashok, New Delhi",
    year: "2024",
    scale: "3 halls + exhibition",
    note: "",
    slug: "dos-2024",
    photo: "/portfolio/dos-2024/001.webp",
    gallery: "dos-2024",
  },
  {
    title: "Winter DOS 2024",
    category: "Conferences",
    venue: "New Delhi", // [VERIFY]
    year: "2024",
    scale: "3 halls + exhibition",
    note: "",
    slug: "winter-dos-2024",
    photo: "/portfolio/winter-dos-2024/001.webp",
    gallery: "winter-dos-2024",
  },
  {
    title: "FOGSI — Scientific Sangam",
    category: "Conferences",
    venue: "AMA Convention Centre, Prayagraj",
    year: "2023",
    scale: "Full congress build",
    note: "",
    slug: "fogsi",
    photo: "/portfolio/fogsi/001.webp",
    gallery: "fogsi",
  },
  {
    title: "NAPCON 2023",
    category: "Conferences",
    venue: "The Ashok, New Delhi",
    year: "2023",
    scale: "3 halls + exhibition",
    note: "",
    slug: "napcon",
    photo: "/portfolio/napcon/001.webp",
    gallery: "napcon",
  },
  {
    title: "HIAGECON 2.0",
    category: "Conferences",
    venue: "Delhi NCR",
    year: "",
    scale: "Congress build",
    note: "",
    slug: "hiagecon",
    photo: "/portfolio/hiagecon/001.webp",
    gallery: "hiagecon",
  },
  {
    title: "QCI — Quality Council of India",
    category: "Conferences",
    venue: "New Delhi",
    year: "",
    scale: "Morning & evening sessions",
    note: "",
    slug: "qci",
    photo: "/portfolio/qci/001.webp",
    gallery: "qci",
  },
  {
    title: "RAC 2024 — Revision Arthroplasty Conference",
    category: "Conferences",
    venue: "The Grand, Vasant Kunj, New Delhi",
    year: "2024",
    scale: "Full venue build",
    note: "",
    slug: "rac-2024",
    photo: "/portfolio/rac-2024/001.webp",
    gallery: "rac-2024",
  },
  {
    title: "National Dental Commission — Building Inauguration",
    category: "Ceremonies",
    venue: "New Delhi",
    year: "2024",
    scale: "VVIP ceremonial build",
    note: "",
    slug: "national-dental-commission",
    photo: "/portfolio/national-dental-commission/001.webp",
    gallery: "national-dental-commission",
  },
  {
    title: "NDPF — 6th Annual Hybrid Conference",
    category: "Conferences",
    venue: "Hotel Crowne Plaza, New Delhi",
    year: "2023",
    scale: "Hybrid conference build",
    note: "",
    slug: "ndpf-2023",
    photo: "/portfolio/ndpf-2023/001.webp",
    gallery: "ndpf-2023",
  },
  {
    title: "NDPF — 7th Annual Hybrid Conference",
    category: "Conferences",
    venue: "Hotel Crowne Plaza, New Delhi",
    year: "2024",
    scale: "Hybrid conference build",
    note: "",
    slug: "ndpf-2024",
    photo: "/portfolio/ndpf-2024/001.webp",
    gallery: "ndpf-2024",
  },
  {
    title: "MEA — Kasturba Gandhi Marg",
    category: "Ceremonies",
    venue: "Kasturba Gandhi Marg, New Delhi",
    year: "",
    scale: "Government build",
    note: "",
    slug: "mea-kg-marg",
    photo: "/portfolio/mea-kg-marg/001.webp",
    gallery: "mea-kg-marg",
  },
  {
    title: "CPWD Dedication — K.G. Marg & Mohammadpur",
    category: "Ceremonies",
    venue: "New Delhi",
    year: "2023",
    scale: "VVIP inaugural",
    note: "",
    slug: "inauguration",
    photo: "/portfolio/inauguration/001.webp",
    gallery: "inauguration",
  },
];

/* ------------------------------------------------------------------ */
/*  Mission & vision                                                   */
/* ------------------------------------------------------------------ */

// Parked: the /team page that carried these was removed. Ready to drop into
// the intro or legacy section when there's a home for it.
export const missionVision = {
  vision:
    "To be the first call India's institutions make when an event must simply work — the most trusted single-source builder of temporary venues in North India, measured by clients who never left.", // [PLACEHOLDER — refine wording with MD]
  mission: [
    "Deliver every event and every client with complete satisfaction, honesty and quality — at rates that respect the client's budget.", // [VERIFY — adapted from current site motto]
    "Keep the critical trades in-house — structures, climate, power, fabrication — so accountability never leaves our rolls.",
    "Hold the protocol standard on every site, whether the chief guest is a head of state or a graduating class.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Careers — [PLACEHOLDER] all openings until HR confirms             */
/* ------------------------------------------------------------------ */

export const careersEmail = "careers@iemsnewdelhi.com"; // [PLACEHOLDER — confirm mailbox]

export const hiringPrinciples = [
  {
    title: "Crew before contract",
    text: "Many of our site heads started as riggers here. We promote from the scaffold up, and crew leads stay for decades.",
  },
  {
    title: "Real responsibility, fast",
    text: "A junior engineer at IEMS signs off work that a head of state walks under. We train hard because the work demands it.",
  },
  {
    title: "Protocol discipline",
    text: "Security-cleared builds, inspection-ready sites, zero improvisation. If that sounds like pressure, it is — and it's teachable.",
  },
];

export const openings = [
  {
    role: "Site Engineer — Temporary Structures",
    location: "New Delhi",
    type: "Full-time",
    brief:
      "Own hangar and pagoda erection end-to-end: layout, crew supervision, safety certification and handover on protocol timelines.",
  },
  {
    role: "Project Manager — Conferences",
    location: "New Delhi",
    type: "Full-time",
    brief:
      "Run multi-hall scientific congresses from brief to strike-down — client-facing, budget-holding, site-living.",
  },
  {
    role: "HVAC Plant Technician",
    location: "Jaipur",
    type: "Full-time",
    brief:
      "Operate and maintain central AC plant on live event sites; Carrier plant experience preferred, summer nerves required.",
  },
  {
    role: "CAD Draughtsman — Stall Design",
    location: "New Delhi",
    type: "Full-time",
    brief:
      "Detail custom exhibition stalls and pavilions for the fabrication workshop; AutoCAD essential, 3ds Max a plus.",
  },
  {
    role: "Warehouse Supervisor",
    location: "Chandigarh",
    type: "Full-time",
    brief:
      "Keep inventory, dispatch and returns for North India's busiest event calendar accounted for — to the last bolt.",
  },
];

export const eventTypes = [
  "Conference / Congress",
  "Exhibition / Trade Fair",
  "Convocation / State Ceremony",
  "Product Launch / Roadshow",
  "Venue & Utilities Only",
  "Other",
];
