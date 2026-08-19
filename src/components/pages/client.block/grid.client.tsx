"use client";

import { IClientLogo } from "@/data/clients.data";
import { cn } from "@/lib/utils";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface IGridClientComponentProps {
  videoSrc: string;
  clientList: IClientLogo[];
}

export default function GridClientComponent({
  clientList,
  videoSrc,
}: IGridClientComponentProps) {
  return (
    <div className="w-full h-full lg:px-12!">
      <div
        className="flex flex-col lg:flex-row w-full h-full bg-base rounded-xl"
        data-block="contain"
      >
        {/* Client Showcase */}
        <div
          className={cn(
            "grid w-full min-h-full flex-1 p-1.5 gap-1.5",
            "grid-cols-2 md:grid-cols-4 ",
            "grid-rows-8 md:grid-rows-2",
          )}
        >
          {/* Logos */}
          {clientList?.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center w-full min-h-fit ring ring-border-muted rounded-xl bg-background",
                "row-span-1 col-span-1",
                //   logo?.size ? logo?.size : "w-[120px] h-[60px]",
              )}
            >
              <Image
                src={logo?.src}
                alt={logo?.alt}
                className={cn(
                  "object-contain",
                  //   logo?.opacity ? `opacity-${logo?.opacity}` : "opacity-100",
                )}
                width={400}
                height={400}
                style={{
                  opacity: logo?.opacity || 0.55,
                  width: `${logo?.size || "6rem"}`,
                }}
              />
            </div>
          ))}
          {/* end Logos */}
        </div>
        {/* end Client Showcase */}

        {/* Testimonials */}
        <TestimonialVideo videoSrc={videoSrc} />
        {/* end Testimonials */}
      </div>
    </div>
  );
}

function TestimonialVideo({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative w-100 h-125 lg:block cursor-pointer"
      onClick={togglePlayback}
    >
      {/* Play Icon */}
      {!isPlaying && (
        <div className="absolute rounded-full bg-foreground/5 backdrop-blur-sm p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="rounded-[inherit] bg-muted *:size-8 p-2 *:text-foreground">
            <IconPlayerPlayFilled />
          </div>
        </div>
      )}
      {/* end Play Icon */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        className="w-full h-full object-cover rounded-sm border"
      />
    </div>
  );
}
