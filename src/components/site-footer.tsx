import Image from "next/image";
import Link from "next/link";
import { offices, services, site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* top: wordmark + one-line positioning */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-5 inline-flex items-center rounded-md border border-line bg-white px-2 py-1.5">
              <Image src="/brand/iems-logo.jpg" alt="IEMS — Nagpal's" width={72} height={44} />
            </span>
            <p className="display text-[clamp(3.5rem,10vw,7rem)] leading-none text-ink">IEMS</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-soft">
              {site.fullName} — full-service event management, conferences,
              exhibitions and event infrastructure across North India since {site.founded}.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            {site.tagline}
          </p>
        </div>

        {/* middle: offices + services + company */}
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-5">
          {offices.map((o) => (
            <div key={o.city}>
              <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {o.city} — {o.role}
              </h3>
              <address className="text-sm leading-relaxed text-soft not-italic">
                {o.address}
                <br />
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="link-draw mt-2 inline-block hover:text-ink">
                  {o.phone}
                </a>
                <br />
                <a href={`mailto:${o.email}`} className="link-draw inline-block break-all hover:text-ink">
                  {o.email}
                </a>
              </address>
            </div>
          ))}

          <div>
            <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Services</h3>
            <ul className="space-y-2 text-sm text-soft">
              {services.map((s) => (
                <li key={s.index}>
                  <Link href="/#services" className="link-draw hover:text-ink">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Company</h3>
            <ul className="space-y-2 text-sm text-soft">
              <li><Link href="/portfolio" className="link-draw hover:text-ink">Portfolio</Link></li>
              <li><Link href="/team" className="link-draw hover:text-ink">Meet the Team</Link></li>
              <li><Link href="/careers" className="link-draw hover:text-ink">Careers</Link></li>
              <li><Link href="/#legacy" className="link-draw hover:text-ink">Since 2002</Link></li>
              <li><Link href="/#contact" className="link-draw hover:text-ink">Start an Enquiry</Link></li>
              <li>
                <a href={`mailto:${site.email}`} className="link-draw break-all hover:text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>New Delhi · Jaipur · Chandigarh</p>
        </div>
      </div>
    </footer>
  );
}
