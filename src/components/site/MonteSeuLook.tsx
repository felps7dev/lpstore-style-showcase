import { useState } from "react";
import camisas from "@/assets/camisas.jpg.asset.json";
import tenis from "@/assets/tenis.jpg.asset.json";
import bones from "@/assets/bones.jpg.asset.json";
import { whatsappLink } from "@/lib/whatsapp";

const PIECES = [
  { id: "camisa", label: "Camisa", url: camisas.url, note: "Algodão premium" },
  { id: "tenis", label: "Tênis", url: tenis.url, note: "Streetwear icônico" },
  { id: "bone", label: "Boné", url: bones.url, note: "Acabamento fino" },
];

export function MonteSeuLook() {
  const [active, setActive] = useState("tenis");

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <p className="eyebrow">Experiência</p>
      <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-none">Monte seu look</h2>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        Camisa + tênis + boné. Passe o dedo ou o mouse sobre cada peça e veja a composição
        ganhar destaque.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {PIECES.map((piece) => {
          const isActive = active === piece.id;
          return (
            <button
              key={piece.id}
              type="button"
              onMouseEnter={() => setActive(piece.id)}
              onFocus={() => setActive(piece.id)}
              onClick={() => setActive(piece.id)}
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                isActive
                  ? "border-gold/60 shadow-[var(--shadow-gold)]"
                  : "border-border opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={piece.url}
                alt={piece.label}
                loading="lazy"
                className={`h-[42vh] w-full object-cover transition-transform duration-700 ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5">
                <p className="display text-2xl uppercase tracking-[0.18em] text-foreground">
                  {piece.label}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">{piece.note}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <p className="display text-2xl uppercase tracking-[0.18em]">Gostou desse estilo?</p>
        <a
          href={whatsappLink("Olá! Montei um look na vitrine da LP Store e quero saber mais.")}
          target="_blank"
          rel="noreferrer"
          className="btn-gold"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
