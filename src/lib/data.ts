/**
 * Central content layer. Everything the site renders lives here so real
 * copy, figures and photography can be swapped in one place.
 *
 * PLACEHOLDER POLICY — items marked [VERIFY] use figures taken from the
 * current iemsnewdelhi.com site and should be re-confirmed; items marked
 * [PLACEHOLDER] are invented, realistic stand-ins awaiting real content.
 */

export const site = {
  name: "IEMS",
  fullName: "Inter Event Management Services Pvt. Ltd.",
  founded: 2002,
  tagline: "Temporary cities. Permanent standards.",
  cities: ["New Delhi", "Jaipur", "Chandigarh"],
  email: "contact@iemsnewdelhi.com",
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

// Events and institutions from the current site's record. [VERIFY] each
// before launch — these are public claims.
export const marqueeEvents = [
  "AIIMS Convocations",
  "19th World Mining Congress",
  "APICON 2009",
  "World Congress of Mental Health",
  "DOSCON 2019 · The Ashok",
  "AIOC Conference",
  "National-level Foundation Ceremonies",
  "Presidential Inaugurations",
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
      "The agency layer: concept, programme, production and showtime operations — launches, roadshows, fashion shows, weddings and celebrity appearances, planned and run by the same house that builds the venue.",
    scope: [
      "End-to-end event planning & production",
      "Product launches, roadshows & fashion shows",
      "Artist & celebrity management",
      "Weddings & private celebrations",
    ],
    specs: ["CONCEPT TO SHOWTIME", "ONE STOP SHOP", "ARTIST MGMT IN-HOUSE"],
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
  plates: { caption: string; note: string }[];
};

// All three are real event names from IEMS's record; every figure and
// narrative below is [PLACEHOLDER] until confirmed against project files.
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
    plates: [
      { caption: "Parallel halls, session change", note: "Swap: corridor between halls" },
      { caption: "Pharma pavilion, custom build", note: "Swap: anchor exhibitor pavilion" },
      { caption: "Registration at opening surge", note: "Swap: counters at peak flow" },
      { caption: "Inaugural stage, full house", note: "Swap: inaugural wide shot" },
    ],
  },
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
    text: "Two decades on, the client retention ratio — not the brochure — is the company's proudest number.", // [PLACEHOLDER]
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials — [PLACEHOLDER] swap with real, attributed quotes     */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "The venue was handed to our security detail two days early, inspected, and nothing needed to change. That has happened exactly once in my career.",
    name: "Organising Secretary",
    org: "National Medical Congress — [PLACEHOLDER]",
  },
  {
    quote:
      "IEMS quoted a number, built to it, and the air-conditioning held through a Delhi May afternoon with a full hall. Everything else is detail.",
    name: "Director, Conferences",
    org: "Apex Industry Association — [PLACEHOLDER]",
  },
  {
    quote:
      "We have used the same crew leads for eleven years. Continuity like that is the real service.",
    name: "Administrative Officer",
    org: "Central Institution, New Delhi — [PLACEHOLDER]",
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
  },
  {
    city: "Jaipur",
    role: "Rajasthan Operations",
    address: "Jaipur, Rajasthan — [PLACEHOLDER: street address]",
    phone: "+91 98290 60282",
    email: "info@indianexhibitors.com",
  },
  {
    city: "Chandigarh",
    role: "Punjab & Haryana Operations",
    address: "Chandigarh — [PLACEHOLDER: street address]",
    phone: "+91 98720 07737",
    email: "raju.nagpal2235@gmail.com",
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio index                                                    */
/* ------------------------------------------------------------------ */

export type PortfolioCategory = "Exhibitions" | "Conferences" | "Ceremonies" | "Structures";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  venue: string;
  year: string;
  scale: string;
  note: string;
  /** present when a full case study exists at /projects/[slug] */
  slug?: string;
};

export const portfolioCategories: ("All" | PortfolioCategory)[] = [
  "All",
  "Exhibitions",
  "Conferences",
  "Ceremonies",
  "Structures",
];

// First three map to full case studies. The rest are real event names from
// the IEMS record or [PLACEHOLDER] stand-ins — swap with actual project data.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "19th World Mining Congress",
    category: "Exhibitions",
    venue: "New Delhi",
    year: "2003", // [VERIFY]
    scale: "18,000 m² built",
    note: "Swap: floodlit hangar exterior",
    slug: "world-mining-congress",
  },
  {
    title: "AIIMS Convocation",
    category: "Ceremonies",
    venue: "AIIMS, New Delhi",
    year: "Multiple editions",
    scale: "5,000+ seated",
    note: "Swap: ceremonial dais",
    slug: "aiims-convocation",
  },
  {
    title: "APICON",
    category: "Conferences",
    venue: "New Delhi",
    year: "2009",
    scale: "12 parallel halls",
    note: "Swap: inaugural wide shot",
    slug: "apicon",
  },
  {
    title: "World Congress of Mental Health",
    category: "Conferences",
    venue: "New Delhi", // [VERIFY]
    year: "[VERIFY]",
    scale: "Plenary + breakouts",
    note: "Swap: plenary hall photo",
  },
  {
    title: "DOSCON",
    category: "Conferences",
    venue: "The Ashok, New Delhi",
    year: "2019",
    scale: "Outstanding services award", // [VERIFY]
    note: "Swap: conference floor photo",
  },
  {
    title: "AIOC Annual Conference",
    category: "Conferences",
    venue: "[VERIFY venue]",
    year: "[VERIFY]",
    scale: "Appreciation award",
    note: "Swap: session hall photo",
  },
  {
    title: "National Trade Fair Hangar City", // [PLACEHOLDER]
    category: "Structures",
    venue: "Pragati Maidan, New Delhi",
    year: "[PLACEHOLDER]",
    scale: "40 m clear-span bays",
    note: "Swap: aerial of hangar rows",
  },
  {
    title: "State Foundation-Stone Ceremony", // [PLACEHOLDER]
    category: "Ceremonies",
    venue: "NCR",
    year: "[PLACEHOLDER]",
    scale: "VVIP pandal & dais",
    note: "Swap: pandal with national colours",
  },
  {
    title: "Industrial Expo Stall Build-out", // [PLACEHOLDER]
    category: "Exhibitions",
    venue: "Jaipur",
    year: "[PLACEHOLDER]",
    scale: "220 Octonorm bays",
    note: "Swap: stall aisles at open",
  },
  {
    title: "University Convocation", // [PLACEHOLDER]
    category: "Ceremonies",
    venue: "Chandigarh",
    year: "[PLACEHOLDER]",
    scale: "Full ceremonial venue",
    note: "Swap: academic procession",
  },
  {
    title: "Monsoon-Rated Warehouse Hangars", // [PLACEHOLDER]
    category: "Structures",
    venue: "NCR",
    year: "[PLACEHOLDER]",
    scale: "Long-term installation",
    note: "Swap: structure in weather",
  },
  {
    title: "Auto Sector Launch Roadshow", // [PLACEHOLDER]
    category: "Exhibitions",
    venue: "Delhi · Jaipur · Chandigarh",
    year: "[PLACEHOLDER]",
    scale: "3-city tour",
    note: "Swap: launch reveal moment",
  },
];

/* ------------------------------------------------------------------ */
/*  Team                                                               */
/* ------------------------------------------------------------------ */

// Team page covers the main branch only — 23A Bhawani Kunj, Vasant Kunj,
// New Delhi. All names [PLACEHOLDER] until confirmed.
export const leadership = [
  {
    name: "[PLACEHOLDER: Founder & MD name]",
    role: "Managing Director",
    initials: "MD",
    bio: "Founded IEMS in 2002 and still walks every VVIP site before handover. Two decades of protocol-grade delivery under one pair of eyes.",
    note: "Swap: MD portrait",
  },
  {
    name: "[PLACEHOLDER: name]",
    role: "Director — Projects & Operations",
    initials: "DO",
    bio: "Runs the project office at headquarters: estimation, programme, crew allocation and the site heads who answer for every build.",
    note: "Swap: portrait",
  },
  {
    name: "[PLACEHOLDER: name]",
    role: "Head — Design & Fabrication",
    initials: "DF",
    bio: "Leads the drawing office and workshop that turn a client brief into stamped erection drawings and built stalls, in-house.",
    note: "Swap: portrait",
  },
];

export const missionVision = {
  vision:
    "To be the first call India's institutions make when an event must simply work — the most trusted single-source builder of temporary venues in North India, measured by clients who never left.", // [PLACEHOLDER — refine wording with MD]
  mission: [
    "Deliver every event and every client with complete satisfaction, honesty and quality — at rates that respect the client's budget.", // [VERIFY — adapted from current site motto]
    "Keep the critical trades in-house — structures, climate, power, fabrication — so accountability never leaves our rolls.",
    "Hold the protocol standard on every site, whether the chief guest is a head of state or a graduating class.",
  ],
};

export const disciplines = [
  {
    title: "Site & Structures",
    detail:
      "Riggers, erectors and site heads who raise clear-span aluminium hangars overnight and certify them for occupancy.",
    strength: "60+ crew", // [PLACEHOLDER]
  },
  {
    title: "Electrical & HVAC",
    detail:
      "Licensed electricians and plant operators running distribution grids and 1,400 tons of Carrier climate plant through live events.",
    strength: "40+ crew", // [PLACEHOLDER]
  },
  {
    title: "Fabrication Workshop",
    detail:
      "Carpenters, painters and finishers who turn a designer's stall render into built reality — in-house, never subcontracted.",
    strength: "50+ crew", // [PLACEHOLDER]
  },
  {
    title: "Logistics & Warehousing",
    detail:
      "Fleet drivers and warehouse supervisors across three cities who make overnight strike-downs an ordinary Tuesday.",
    strength: "30+ crew", // [PLACEHOLDER]
  },
];

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
  "Fashion Show / Cultural Evening",
  "Wedding / Private Celebration",
  "Venue & Utilities Only",
  "Other",
];
