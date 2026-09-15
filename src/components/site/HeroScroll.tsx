import { useEffect, useRef, useState } from "react";
import tenis from "@/assets/tenis.jpg.asset.json";
import { whatsappLink } from "@/lib/whatsapp";

const STAGES = ["Street Style", "Linha Premium", "Seu Estilo"];

export function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setP(progress);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const x = isNarrow ? 2 + p * 4 : 24 - p * 22;
  const y = isNarrow ? -18 + p * 58 : -6 + p * 44;
  const rotate = -7 + p * 24;
  const scale = (isNarrow ? 0.95 : 1.02) - p * 0.6;
  const opacity = p > 0.9 ? Math.max(0, (1 - p) / 0.1) : 1;


  const textIndex = p < 0.3 ? 0 : p < 0.62 ? 1 : 2;

  return (
    <section id="inicio" ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 grain h-screen overflow-hidden">
        {/* ambience */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/3 size-[70vw] -translate-x-1/2 rounded-full blur-[120px]"
            style={{ background: "oklch(0.79 0.132 85 / 12%)" }}
          />
        </div>

        {/* product */}
        <img
          src={tenis.url}
          alt="Tênis em destaque na LP Store"
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 max-h-[44vh] w-[80vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover will-change-transform md:max-h-[74vh] md:w-[42vw]"
          style={{
            transform: `translate(calc(-50% + ${x}vw), calc(-50% + ${y}vh)) rotate(${rotate}deg) scale(${scale})`,
            opacity,
            maskImage: "radial-gradient(120% 120% at 50% 50%, #000 62%, transparent 100%)",
          }}
        />

        {/* copy */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
          <div
            className="max-w-xl transition-all duration-500"
            style={{
              opacity: Math.max(0, 1 - p * 3.2),
              transform: `translateY(${-p * 60}px)`,
            }}
          >
            <p className="eyebrow">Batista Campos · Belém — PA</p>
            <h1 className="mt-5 text-[clamp(3rem,11vw,7.5rem)] leading-[0.86] text-foreground">
              Seu estilo.
              <br />
              <span className="text-gold-gradient">Sua escolha.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Streetwear, tênis e peças premium selecionadas para quem não abre mão do estilo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#destaques" className="btn-gold">
                Ver produtos
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-gold"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* stage words */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[14vh] z-20 flex justify-center">
          {STAGES.map((s, i) => (
            <span
              key={s}
              className="display absolute text-[clamp(2rem,7vw,5rem)] uppercase tracking-[0.2em] text-foreground/85 transition-all duration-700"
              style={{
                opacity: p > 0.12 && textIndex === i ? 1 : 0,
                transform: `translateY(${textIndex === i ? 0 : 24}px)`,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-8 z-20 flex justify-center text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - p * 4) }}
        >
          Role para explorar
        </div>
      </div>
    </section>
  );
}
