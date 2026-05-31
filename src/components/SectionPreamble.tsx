export default function SectionPreamble({ eyebrow }: { eyebrow: string }) {
  return (
    <>
      <div className="w-10 h-px bg-copper mb-8" />
      <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">{eyebrow}</p>
    </>
  );
}
