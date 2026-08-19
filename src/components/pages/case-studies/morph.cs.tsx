import MorphSlider from "@/components/MorphSlider";

export default function MorphCaseStudy() {
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=1600&auto=format&fit=crop",
      caption: "Design Engineering",
    },
    {
      image:
        "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=1600&auto=format&fit=crop",
      caption: "Two",
    },
    {
      image:
        "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=1600&auto=format&fit=crop",
      caption: "Three",
    },
  ];

  return (
    <div>
      <div className="relative h-125" data-block="contain">
        <MorphSlider
          items={items}
          transition="melt"
          intensity={0.55}
          aberration={0.35}
          drift={0.4}
          autoplay={true}
          overlayColor="#05060a"
          duration={1.1}
          ease="power2.inOut"
          scale={2.4}
          autoplayDelay={4}
          loop
          radius={8}
          showCaptions
          showControls
          showIndicators
        />
      </div>
    </div>
  );
}
