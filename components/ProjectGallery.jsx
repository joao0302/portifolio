import RevealOnScroll from "./RevealOnScroll";
import ScreenshotPlaceholder from "./ScreenshotPlaceholder";
import SectionTitle from "./SectionTitle";

export default function ProjectGallery({ project }) {
  const count = project.screenshots?.length || 2;

  return (
    <section className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Produto" title="Galeria" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Array.from({ length: count }).map((_, i) => (
            <RevealOnScroll key={i} delay={i * 0.05}>
              <ScreenshotPlaceholder
                label={`${project.title} — screenshot ${i + 1} em breve`}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
