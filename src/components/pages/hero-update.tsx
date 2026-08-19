"use client";

import { CTAButton } from "@/components/ui/cta.button";
import { Marquee } from "@/components/ui/marque";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReelVideoCard } from "../ui/reel.card";

type ReelFrameProps = {
  className?: string;
  imageSrc: string;
  rotate?: string;
};

function ReelFrame({ className, imageSrc, rotate }: ReelFrameProps) {
  return (
    <div
      className={cn("absolute", rotate)}
      style={{ transformOrigin: "center center" }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[42px] border border-white/10 shadow-2xl",
          className,
        )}
      >
        <Image
          src={imageSrc}
          alt="Social media reel"
          fill
          className="object-cover"
        />
        {/* Reel overlay chrome */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Side actions */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="size-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="size-3.5 fill-white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="text-white text-[9px] font-medium font-grotesk">
              1.8k
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="size-3.5 fill-white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <span className="text-white text-[9px] font-medium font-grotesk">
              32
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="size-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="size-3.5 fill-white">
                <path d="M21 5l-9 4-9-4V3l9 4 9-4v2zm0 2v14l-9-4-9 4V7l9 4 9-4z" />
              </svg>
            </div>
            <span className="text-white text-[9px] font-medium font-grotesk">
              486
            </span>
          </div>
        </div>
        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-10">
          <p className="text-white text-[11px] font-medium font-grotesk truncate">
            horuxofficial and 4 others
          </p>
          <p className="text-white text-[11px] font-medium font-grotesk mt-1 leading-tight">
            We thought we lost this... but maybe...
          </p>
        </div>
      </div>
    </div>
  );
}

function ReelStack() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Back reel — most rotated */}
      <ReelFrame
        imageSrc="/assets/bastian/3.jpg"
        className="w-[240px] h-[420px]"
        rotate="rotate-[18deg] translate-x-[120px] -translate-y-4"
      />
      {/* Middle reel */}
      <ReelFrame
        imageSrc="/assets/bastian/2.jpg"
        className="w-[260px] h-[460px]"
        rotate="rotate-[12deg] translate-x-[60px]"
      />
      {/* Front reel — slight tilt */}
      <ReelFrame
        imageSrc="/assets/bastian/1.jpg"
        className="w-[280px] h-[500px]"
        rotate="rotate-[6deg] translate-x-[10px]"
      />
      {/* Main reel — upright */}
      <ReelFrame
        imageSrc="/assets/bastian/4.jpg"
        className="w-[300px] h-[530px]"
        rotate="rotate-0 -translate-x-[40px]"
      />
    </div>
  );
}

export default function HeroUpdate() {
  return (
    <Section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Main hero content */}
      <div className="flex-1 flex items-center" data-block="contain">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            <h1 className="font-title font-bold text-foreground uppercase text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              We Turn Your
              <br />
              Marketing Spends
              <br />
              Into Measured Revenue.
            </h1>

            <p className="text-foreground text-lg xl:text-xl leading-relaxed max-w-xl">
              Full-service media agency for growth-stage companies who need
              campaigns that close, not just campaigns that run.
            </p>

            <div className="mt-2">
              <CTAButton
                variant="primary"
                mode="rounded"
                size="small"
                iconMode="tiled"
              >
                Get a Free Brand Audit
              </CTAButton>
            </div>

            {/* Stat */}
            <div className="flex items-end gap-2 mt-2">
              <span className="font-title font-bold text-primary text-5xl leading-none">
                4X
              </span>
              <div className="flex flex-col font-title text-foreground text-sm leading-tight mb-1">
                <span>avg. ROI • 10+ Industries</span>
                <span>across client campaigns</span>
              </div>
            </div>
          </div>

          {/* Right: Reel Stack */}
          <div className="relative h-[580px] hidden lg:block">
            {/* <ReelStack /> */}
            <ReelVideoCard />
          </div>
        </div>
      </div>

      {/* Brand bar */}
    </Section>
  );
}
export function ClientMarquee() {
  return (
    <div className="py-0">
      <div className="flex items-center">
        <div className="shrink-0 px-6 py-4 border-r border-[#5a5a5a]">
          <p className="text-foreground font-grotesk font-medium text-sm leading-snug whitespace-nowrap">
            40+ Brands.
            <br />
            One Standard.
          </p>
        </div>
        <div className="flex-1 overflow-hidden bg-linear-90 from-[#5a5a5a]/10 to-background">
          <Marquee className="[--duration:30s]" reverse>
            {logos?.map((logo) => {
              return <Logo key={logo.src} {...logo} />;
            })}
            {/* {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-[#5a5a5a] font-grotesk font-medium text-base px-6 whitespace-nowrap"
                >
                  {brand}
                </span>
              ))} */}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

function Logo({ src, alt, opacity, size }: LogoListType[number]) {
  return (
    <div className="px-12 w-56 h-14 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        style={{
          opacity: opacity ?? 0.55,
          width: `${size || "6rem"}`,
          // height: `${size || "6rem"}`,
        }}
        className="object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

type LogoListType = {
  src: string;
  alt: string;
  opacity?: number;
  size?: string;
}[];

const logos: LogoListType = [
  {
    src: "/assets/client-logos/marrakesh.png",
    alt: "Marrakesh",
    opacity: 0.55,
    size: "10rem",
  },
  {
    src: "/assets/client-logos/bastian.png",
    alt: "Bastian",
    opacity: 0.55,
    size: "8rem",
  },
  {
    src: "/assets/client-logos/curated-coffee.png",
    alt: "Curated Coffee",
    opacity: 0.55,
    size: "4rem",
  },
  {
    src: "/assets/client-logos/kiki.png",
    alt: "Kiki",
    opacity: 0.55,
    size: "5rem",
  },
  {
    src: "/assets/client-logos/verosha-spa.png",
    alt: "Verosha Cave Spa",
    opacity: 0.55,
  },
  {
    src: "/assets/client-logos/phoenix-marketcity.png",
    alt: "Phoenix Marketcity",
    opacity: 0.55,
    size: "4rem",
  }
  {
    src: "/assets/client-logos/mantri-square.png",
    alt: "Mantri Square",
    opacity: 0.55,
  },
  {
    src: "/assets/client-logos/nykaa.png",
    alt: "Nykaa",
    opacity: 0.55,
    size: "8.5rem",
  },
  {
    src: "/assets/client-logos/pride-of-cows.png",
    alt: "Pride Of Cows",
    opacity: 0.55,
  },
  {
    src: "/assets/client-logos/escenza.png",
    alt: "Escenza",
    opacity: 0.55,
    size: "5rem",
  },
];
