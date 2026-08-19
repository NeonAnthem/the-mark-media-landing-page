import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function ExpertiseSlider() {
  return (
    <div className="" data-block="contain">
      <div
        className={cn(
          //   "grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-2",
          "flex flex-col md:flex-row gap-2",
        )}
      >
        {/* Image Grid */}
        <div className={cn("relative h-125 rounded-md border")}>
          <div
            className={cn(
              "absolute text-start border-muted-foreground bottom-4 left-4 right-4 z-10 bg-foreground/5 backdrop-blur-xl rounded-md px-2 py-4",
            )}
          >
            <p className="text-5xl font-medium text-base">3000+</p>
            <p className="text-lg text-background">UGC Generated</p>
          </div>
          {/* Backdrop: transparent center reveals image, blurred glass edge around it */}

          {/* end Backdrop */}
          <Image
            className="h-[inherit] object-cover rounded-[inherit]"
            src={"/assets/afterburn/baner-photo.JPG"}
            alt="Industrial Expertise"
            width={500}
            height={500}
          />
        </div>
        {/* end Image Grid */}

        {/* Information block */}
        <div className="flex flex-col justify-between">
          {/* Slider */}
          <div className={cn("flex items-center gap-4")}>
            <p>F&B</p>
            <p>F&B</p>
            <p>F&B</p>
          </div>
          {/* end Slider */}

          {/* Information */}
          <div className={cn("text-start p-4 space-y-8")}>
            <div className={cn("space-y-2")}>
              <h3 className="text-2xl">Food & Beverages</h3>
              <p className="text-sm md:w-[60%] text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                perferendis repellat porro quasi dolorem provident, recusandae
                ducimus voluptates magni libero est et facilis molestias. Neque
                iste odit et atque veniam eius similique!
              </p>
            </div>
            {/* Explore */}
            <Button variant={"outline"} className="*:size-4">
              Learn More
              <IconArrowUpRight />
            </Button>
            {/* end Explore */}
          </div>
          {/* end Information */}

          {/* Showcase */}
          <div className={cn("text-start")}>
            <p className={cn("px-2 mb-2 text-muted-foreground")}>
              Featured Brands
            </p>

            <div
              className={cn(
                "flex flex-wrap gap-1.5 bg-base w-max p-1.5 rounded-md border border-muted",
              )}
            >
              {[
                "/assets/client-logos/escenza.png",
                "/assets/client-logos/pride-of-cows.png",
                "/assets/client-logos/pride-of-cows.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-center size-45 ring ring-border-muted rounded-md bg-background",
                    "row-span-1 col-span-1",
                    //   logo?.size ? logo?.size : "w-[120px] h-[60px]",
                  )}
                >
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className={cn(
                      "object-contain",
                      //   logo?.opacity ? `opacity-${logo?.opacity}` : "opacity-100",
                    )}
                    width={400}
                    height={400}
                    style={{
                      opacity: 0.55,
                      width: "6rem",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* end Showcase */}
        </div>
        {/* end Information Block */}
      </div>
    </div>
  );
}
