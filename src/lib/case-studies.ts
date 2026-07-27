/**
 * Case studies generated from the site-photo record: one per photographed
 * event. Facts (organiser, venue, dates) are read off the signage in the
 * plates themselves; the build list is derived from which zones the camera
 * crew covered. Plates = every photograph of that event.
 */
import type { Project } from "./data";
import { galleryEvents, type GalleryEvent } from "./gallery";

type EventMeta = {
  /** gallery slug this case study is built from */
  gallery: string;
  /** case-study slug (differs where it would clash with a handwritten study) */
  slug?: string;
  title: string;
  category: string;
  year: string;
  venue: string;
  client: string;
  headline: string;
  brief: string;
};

const META: EventMeta[] = [
  {
    gallery: "aios-midterm",
    title: "AIOS Mid-Term Conference 2023",
    category: "Medical Congress",
    year: "2023",
    venue: "Samrat Ashok Convention Centre, Patna",
    client: "All India Ophthalmological Society",
    headline: "The society's first mid-term conference, built away from home.",
    brief:
      "The first Mid-Term Conference of the All India Ophthalmological Society ran 6–8 January 2023 at the Samrat Ashok Convention Centre, Patna. IEMS delivered the venue fit-out — halls, exhibition, registration and delegate areas — as one build.",
  },
  {
    gallery: "apicon",
    slug: "api-delhi-2024",
    title: "API Delhi Chapter — XXXIV Annual Conference",
    category: "Medical Conference",
    year: "2024",
    venue: "Hotel Jaypee Siddharth, New Delhi",
    client: "Association of Physicians of India, Delhi State Chapter",
    headline: "A single-day physicians' conference, dressed wall to wall.",
    brief:
      "The Delhi State Chapter of the Association of Physicians of India held its XXXIV Annual Conference on 23 March 2024 at Hotel Jaypee Siddharth. IEMS built the stage, branding and exhibition environment around a dense one-day scientific programme.",
  },
  {
    gallery: "dos-2024",
    title: "DOSCON 2024 — 74th Annual Conference",
    category: "Medical Congress",
    year: "2024",
    venue: "The Ashok, New Delhi",
    client: "Delhi Ophthalmological Society",
    headline: "Seventy-four editions in, the standard still has to be set.",
    brief:
      "The Delhi Ophthalmological Society's 74th Annual Conference ran 29–31 March 2024 at The Ashok, New Delhi — convention halls, e-poster and physical-poster exhibition, registration and delegate flow, built and run by IEMS.",
  },
  {
    gallery: "fogsi",
    title: "FOGSI International Conference — Scientific Sangam",
    category: "Medical Congress",
    year: "2023",
    venue: "AMA Convention Centre, Prayagraj",
    client: "Allahabad Obstetric & Gynaecological Society",
    headline: "A kumbh of knowledge, staged in Prayagraj.",
    brief:
      "FOGSI's Scientific Sangam ran 15–17 December 2023 across the AMA Convention Centre and KNMH Hospital, Prayagraj, hosted by the Allahabad Obstetric & Gynaecological Society. IEMS delivered gates, halls, registration and the exhibition floor.",
  },
  {
    gallery: "hiagecon",
    title: "HIAGECON 2.0",
    category: "Medical Conference",
    year: "",
    venue: "Delhi NCR",
    client: "Marengo Asia Hospitals · IAGE",
    headline: "An endoscopy-skills congress, second edition.",
    brief:
      "HIAGECON 2.0, organised with Marengo Asia Hospitals and the Indian Association of Gynaecological Endoscopists, brought a faculty-led endoscopy programme to the NCR. IEMS handled registration, faculty and delegate environments.",
  },
  {
    gallery: "inauguration",
    title: "CPWD Dedication — K.G. Marg & Mohammadpur",
    category: "State Ceremony",
    year: "2023",
    venue: "New Delhi",
    client: "Central Public Works Department",
    headline: "Three plaques, one minister, zero margin for error.",
    brief:
      "On 12 April 2023 the Hon'ble Minister for Petroleum & Natural Gas and Housing & Urban Affairs dedicated CPWD's General Pool Office Accommodation-2 at K.G. Marg and residential accommodation at Mohammadpur to the nation. IEMS built the ceremonial enclosure, dais and unveiling installations.",
  },
  {
    gallery: "mea-kg-marg",
    title: "MEA — Kasturba Gandhi Marg",
    category: "Government Ceremony",
    year: "",
    venue: "Kasturba Gandhi Marg, New Delhi",
    client: "Ministry of External Affairs",
    headline: "A ministry ceremony where the protocol is the programme.",
    brief:
      "A Ministry of External Affairs ceremony at Kasturba Gandhi Marg, New Delhi, attended by the Hon'ble External Affairs Minister. IEMS delivered the ceremonial pandal, enclosures and site infrastructure to government protocol.",
  },
  {
    gallery: "napcon",
    title: "NAPCON 2023",
    category: "Medical Congress",
    year: "2023",
    venue: "The Ashok, New Delhi",
    client: "Indian Chest Society · National College of Chest Physicians",
    headline: "Three parallel halls, four days, one continuous programme.",
    brief:
      "NAPCON 2023 — the joint national conference on pulmonary diseases — ran 5–8 October 2023 at The Ashok, New Delhi. IEMS built the welcome gates, three parallel halls, registration concourse and the pharmaceutical exhibition.",
  },
  {
    gallery: "national-dental-commission",
    title: "National Dental Commission — Building Inauguration",
    category: "State Ceremony",
    year: "2024",
    venue: "New Delhi",
    client: "Ministry of Health & Family Welfare",
    headline: "A national building inaugurated on a national broadcast.",
    brief:
      "The newly constructed National Dental Commission building was inaugurated on 5 February 2024, alongside the foundation-stone laying of nursing colleges in Andhra Pradesh and Jammu & Kashmir — with the Prime Minister joining on screen. IEMS delivered the ceremonial hall, dais and broadcast staging.",
  },
  {
    gallery: "ndpf-2023",
    title: "NDPF — 6th Annual Hybrid Conference",
    category: "Medical Conference",
    year: "2023",
    venue: "Hotel Crowne Plaza, New Delhi",
    client: "North Delhi Physician Forum",
    headline: "One Sunday, one hall, a full hybrid broadcast.",
    brief:
      "The North Delhi Physician Forum's 6th Annual Hybrid Conference ran on 17 September 2023 at Hotel Crowne Plaza, New Delhi. IEMS built the LED stage, hybrid-broadcast environment and partner branding.",
  },
  {
    gallery: "ndpf-2024",
    title: "NDPF — 7th Annual Hybrid Conference",
    category: "Medical Conference",
    year: "2024",
    venue: "Hotel Crowne Plaza, New Delhi",
    client: "North Delhi Physician Forum",
    headline: "The same forum, back for a seventh year — retention is the review.",
    brief:
      "The North Delhi Physician Forum returned to IEMS for its 7th Annual Hybrid Conference on 28 July 2024 at Hotel Crowne Plaza, New Delhi — LED stage, hybrid broadcast and partner branding, one Sunday turnaround.",
  },
  {
    gallery: "qci",
    title: "QCI — Quality Council of India",
    category: "Institutional Conference",
    year: "",
    venue: "New Delhi",
    client: "Quality Council of India",
    headline: "A full-day national programme, morning to evening.",
    brief:
      "A Quality Council of India programme running morning and evening sessions in New Delhi, including the Champions of NABH digital-health felicitations. IEMS delivered the staging, branding and session turnarounds across the day.",
  },
  {
    gallery: "rac-2024",
    title: "RAC 2024 — Revision Arthroplasty Conference",
    category: "Medical Conference",
    year: "2024",
    venue: "The Grand, Vasant Kunj, New Delhi",
    client: "Organising Committee, RAC 2024",
    headline: "First knee and hip revision arthroplasty, first-class staging.",
    brief:
      "The First Knee & Hip Revision Arthroplasty Conference ran 13–15 December 2024 at The Grand, Vasant Kunj, New Delhi. IEMS delivered the conference build — stage, signage installations and delegate environment.",
  },
  {
    gallery: "winter-dos-2024",
    title: "Winter DOS 2024",
    category: "Medical Congress",
    year: "2024",
    venue: "New Delhi",
    client: "Delhi Ophthalmological Society",
    headline: "The society's winter edition — same crew, second build of the year.",
    brief:
      "The Delhi Ophthalmological Society's winter conference, 2024 edition: three halls, exhibition floor, registration and delegate areas — the second DOS build IEMS delivered that year.",
  },
];

/* build bullets derived from which zones the site cameras covered */
function buildFromZones(event: GalleryEvent): string[] {
  const zones = new Set(event.images.map((i) => i.zone));
  const out: string[] = [];
  const halls = ["Hall 1", "Hall 2", "Hall 3"].filter((h) => zones.has(h)).length;
  if (zones.has("Gate & Façade")) out.push("Branded entrance gates and façade cladding at the venue approach.");
  if (halls > 0)
    out.push(
      halls > 1
        ? `${halls} parallel session halls with staging, LED backdrops, AV and delegate seating.`
        : "Main session hall with staging, LED backdrop, AV and delegate seating.",
    );
  if (zones.has("Morning Session") || zones.has("Evening Session"))
    out.push("Morning and evening session builds with a same-day turnaround between programmes.");
  if (zones.has("Registration")) out.push("Registration concourse with counters, queuing and delegate-flow control.");
  if (zones.has("Exhibition")) out.push("Exhibition floor in modular stall systems with sponsor pavilions.");
  if (zones.has("Seating Lounge")) out.push("Delegate seating lounges and circulation areas.");
  if (zones.has("Selfie Booth")) out.push("Branded photo moments and selfie installations.");
  if (out.length === 0) out.push("Full venue build: staging, branding, seating and site infrastructure.");
  return out;
}

function statsFor(m: EventMeta, event: GalleryEvent, halls: number) {
  const zones = new Set(event.images.map((i) => i.zone)).size;
  const out: Project["stats"] = [];
  if (m.year) out.push({ value: m.year, label: "Edition" });
  if (halls > 1) out.push({ value: String(halls), label: "Parallel halls" });
  if (zones > 1) out.push({ value: String(zones), label: "Zones built & shot" });
  out.push({ value: String(event.images.length), label: "Plates on record" });
  out.push({ value: m.venue.split(",").pop()!.trim(), label: "Location" });
  return out.slice(0, 4);
}

function footprintFromZones(event: GalleryEvent): string {
  const zones = [...new Set(event.images.map((i) => i.zone))];
  return `${zones.length} zones photographed · ${event.images.length} plates`;
}

export const eventCaseStudies: Project[] = META.flatMap((m) => {
  const event = galleryEvents.find((e) => e.slug === m.gallery);
  if (!event) return [];
  const halls = new Set(event.images.filter((i) => i.zone.startsWith("Hall")).map((i) => i.zone)).size;
  return [
    {
      slug: m.slug ?? m.gallery,
      title: m.title,
      category: m.category,
      year: m.year || "On record",
      venue: m.venue,
      client: m.client,
      footprint: footprintFromZones(event),
      headline: m.headline,
      // only figures that actually say something — most events were shot in a
      // single zone, and "1 zone / 1 hall" is noise, not a statistic
      stats: statsFor(m, event, halls),
      brief: m.brief,
      build: buildFromZones(event),
      delivered:
        "Handed over on programme and photographed as delivered — every plate below is from the site cameras, unretouched.",
      plates: event.images.map((img, i) => ({
        caption: `${img.zone} — plate ${String(i + 1).padStart(2, "0")}`,
        note: "",
        src: img.src,
      })),
    },
  ];
});
