export default function SectionPreamble({ eyebrow, light = false }: { eyebrow: string; light?: boolean }) {
  return (
    <>
      <div className={`w-10 h-px mb-8 ${light ? "bg-rust" : "bg-copper"}`} />
      <p className={`font-body text-xs tracking-[0.2em] uppercase mb-5 ${light ? "text-rust" : "text-copper"}`}>
        {eyebrow}
      </p>
    </>
  );
}
