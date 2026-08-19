import { CTAButton } from "@/components/ui/cta.button";

export default function DefaultHeroComponent() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
        {/*  Content */}
        <div className="space-y-16 h-full border-b place-content-center lg:pl-18 md:pl-12 sm:pl-8 pl-4">
          {/* Text Content */}
          <div className="text-start space-y-4">
            {/* Hero Description */}
            <h1 className="text-6xl text-start font-medium">
              We turn your marketing spends into measurable revenue
            </h1>
            {/* end Hero Description */}

            {/* hero Description */}
            <p className="text-muted-foreground text-lg xl:text-lg leading-normal max-w-xl">
              Full-service media agency for growth-stage companies who need
              campaigns that close, not just campaigns that run.
            </p>
            {/* end hero Description */}
          </div>
          {/* end Text content */}

          {/* Call To action */}
          <div>
            <CTAButton>Talk to a Marketing Expert</CTAButton>
          </div>
          {/* end Call to action */}
        </div>
        {/* End Content */}

        {/* Video Content */}
        <div className="h-[95vh] overflow-hidden lg:rounded-bl-none border">
          <video
            className="h-[inherit] w-full object-cover"
            src={"assets/videos/horux-campaign.mp4"}
            autoPlay
            muted
            loop
          />
        </div>
        {/* end Video Content */}
      </div>
    </div>
  );
}
