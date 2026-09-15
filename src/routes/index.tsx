import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Instagram, Clock } from "lucide-react";

import { Header } from "@/components/site/Header";
import { HeroScroll } from "@/components/site/HeroScroll";
import { MonteSeuLook } from "@/components/site/MonteSeuLook";
import { whatsappLink } from "@/lib/whatsapp";

import logo from "@/assets/lp-logo.png.asset.json";
import tenis from "@/assets/tenis.jpg.asset.json";
import tenisBranco from "@/assets/tenis-branco.jpg.asset.json";
import camisas from "@/assets/camisas.jpg.asset.json";
import shorts from "@/assets/shorts.jpg.asset.json";
import bones from "@/assets/bones.jpg.asset.json";
import sandalias from "@/assets/sandalias.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LP Store Import's | Vitrine Premium em Belém - PA" },
      {
        name: "description",
        content:
          "Streetwear, tênis e peças premium selecionadas. Vitrine digital da LP Store, em Batista Campos, Belém - PA. Fale direto no WhatsApp.",
      },
      { property: "og:title", content: "LP Store Import's | Vitrine Premium" },
      {
        property: "og:description",
        content:
          "Streetwear, tênis e peças premium selecionadas para quem não abre mão do estilo.",
      },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  {
    name: "Tênis",
    desc: "Modelos icônicos e lançamentos streetwear.",
    img: tenis.url,
  },
  {
    name: "Camisas",
    desc: "Algodão premium, caimento perfeito.",
    img: camisas.url,
  },
  {
    name: "Bonés",
    desc: "O detalhe que fecha o look.",
    img: bones.url,
  },
  {
    name: "Sandálias",
    desc: "Conforto com presença urbana.",
    img: sandalias.url,
  },
];

const PRODUCTS = [
  { name: "Tênis Cano Alto Red/White", cat: "Tênis", img: tenis.url },
  { name: "Camiseta Premium Milano", cat: "Camisas", img: camisas.url },
  { name: "Short Esportivo Listras", cat: "Shorts", img: shorts.url },
  { name: "Tênis Couro Branco", cat: "Tênis", img: tenisBranco.url },
  { name: "Boné Aba Curva Black", cat: "Bonés", img: bones.url },
  { name: "Sandália Slide Black", cat: "Sandálias", img: sandalias.url },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroScroll />

        {/* CATEGORIAS */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <p className="eyebrow">Categorias</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-none">
            Encontre seu estilo
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <article
                key={c.name}
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-[44vh] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-3xl uppercase tracking-[0.12em]">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                  <a
                    href="#destaques"
                    className="mt-4 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Ver produtos →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DESTAQUES */}
        <section id="destaques" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="hairline" />
          <p className="eyebrow mt-10">Seleção da casa</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-none">
            Destaques da <span className="text-gold-gradient">LP Store</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-[46vh] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.32em] text-gold">{p.cat}</p>
                  <h3 className="mt-2 text-2xl uppercase tracking-[0.08em]">{p.name}</h3>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-gold mt-5 w-full"
                  >
                    Tenho interesse
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MonteSeuLook />

        {/* LINHA PREMIUM */}
        <section id="sobre" className="relative overflow-hidden border-y border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="eyebrow">Campanha</p>
              <h2 className="mt-4 text-[clamp(2.5rem,8vw,6rem)] leading-[0.85]">
                Linha
                <br />
                <span className="text-gold-gradient">Premium</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Peças selecionadas para quem busca qualidade, presença e estilo.
              </p>
              <a
                href={whatsappLink("Olá! Quero conhecer a Linha Premium da LP Store.")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-9"
              >
                Conhecer
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={tenisBranco.url}
                alt="Tênis premium em couro branco"
                loading="lazy"
                className="mt-10 h-[38vh] w-full rounded-2xl border border-border object-cover"
              />
              <img
                src={camisas.url}
                alt="Camisetas premium empilhadas"
                loading="lazy"
                className="h-[38vh] w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONVERSÃO */}
        <section id="contato" className="grain mx-auto max-w-4xl px-5 py-28 text-center lg:px-8">
          <h2 className="text-[clamp(2.2rem,7vw,5rem)] leading-[0.9]">
            Gostou de algum produto?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
            Fale com a LP Store pelo WhatsApp e consulte disponibilidade, tamanhos e valores.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-10 px-10 py-5 text-sm"
          >
            Falar com a LP Store
          </a>
          <div className="mt-14 grid gap-6 text-xs text-muted-foreground sm:grid-cols-3">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" /> Batista Campos, Belém — PA
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="size-4 shrink-0 text-gold" /> Seg a Sáb
            </p>
            <p className="flex items-center justify-center gap-2">
              <Instagram className="size-4 shrink-0 text-gold" /> @lpstore.imports
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <img src={logo.url} alt="LP Store Import's" className="h-9 w-auto" loading="lazy" />
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            LP Store Import's · Belém — PA
          </p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-110"
        style={{ background: "var(--gradient-gold)" }}
      >
        <MessageCircle className="size-6 text-[var(--ink)]" />
      </a>
    </div>
  );
}
