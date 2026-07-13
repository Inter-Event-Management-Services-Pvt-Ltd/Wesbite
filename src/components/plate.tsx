import Image from "next/image";

type PlateProps = {
  /** Figure number shown on the caption bar, e.g. "01" */
  index?: string;
  caption: string;
  /** What real asset to drop in — rendered inside the frame so it can't be missed. */
  note?: string;
  /** Real photograph; when set the duotone stand-in and note are replaced. */
  src?: string;
  /** Tailwind aspect class, e.g. "aspect-[4/3]" */
  ratio?: string;
  className?: string;
};

/**
 * Architectural drawing plate. Renders real photography when `src` is
 * given, otherwise the designed duotone stand-in with its swap note.
 */
export function Plate({ index, caption, note, src, ratio = "aspect-[4/3]", className = "" }: PlateProps) {
  return (
    <figure className={`group border border-line bg-raised ${className}`}>
      <div className={`relative overflow-hidden ${ratio}`}>
        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <>
            {/* layered stand-in: duotone wash + hatch + crop ticks */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(152deg, var(--plate-a) 0%, var(--plate-b) 58%, var(--plate-a) 100%)",
              }}
            />
            <div className="hatch absolute inset-0 opacity-60" aria-hidden />
            <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 20% 0%, var(--glow), transparent 60%)" }} aria-hidden />
          </>
        )}
        {/* crop ticks */}
        <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-line-strong" aria-hidden />
        <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-line-strong" aria-hidden />
        <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-line-strong" aria-hidden />
        <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line-strong" aria-hidden />
        {note && !src && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              ▣ {note}
            </p>
          </div>
        )}
      </div>
      <figcaption className="flex items-baseline gap-3 border-t border-line px-4 py-2.5">
        {index && <span className="font-mono text-[10px] tracking-[0.18em] text-accent">FIG. {index}</span>}
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-soft">{caption}</span>
      </figcaption>
    </figure>
  );
}
