import { Reveal } from "./reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
};

/** Numbered section head — reads like a sheet index on a drawing set. */
export function SectionHeading({ index, kicker, title, lede }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <p className="kicker mb-5 flex items-center gap-3">
          <span aria-hidden className="inline-block h-px w-10 bg-accent" />
          SEC. {index} — {kicker}
        </p>
        <h2 className="display text-[clamp(2.6rem,7vw,5.5rem)]">{title}</h2>
        {lede && <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">{lede}</p>}
      </div>
    </Reveal>
  );
}
