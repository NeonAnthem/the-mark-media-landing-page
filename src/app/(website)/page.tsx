import {
  Section,
  SectionHeader,
  SectionHeadline,
  SectionTitle,
} from "@/components/features/section/index.section";
import MorphCaseStudy from "@/components/pages/case-studies/morph.cs";
import GridClientComponent from "@/components/pages/client.block/grid.client";
import DefaultHeroComponent from "@/components/pages/hero.block/default.hero";
import LandingPage from "@/components/pages/landing-page";
import ExpertiseSlider from "@/components/pages/sliders/expertise.slider";
import { Button } from "@/components/ui/button";
import { CLIENTLOGOS } from "@/data/clients.data";

export default function Page() {
  return (
    <>
      <Section className="pt-14.5 pb-0">
        <DefaultHeroComponent />
      </Section>
      {/* Client Logo Showcase */}
      <Section className="">
        <SectionHeader className="mt-0!">
          <SectionTitle>
            Top Brands that
            <br /> <span className="text-muted-foreground">love our work</span>
          </SectionTitle>
        </SectionHeader>
        {/* content */}
        <GridClientComponent
          clientList={CLIENTLOGOS?.slice(0, 8)}
          videoSrc="/assets/videos/mock-interview.mp4"
        />
        {/* end Content */}
        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg">Talk to a Marketing Expert</Button>
          <Button size="lg" variant="outline">
            See our work
          </Button>
        </div>
        {/* end CTA */}
      </Section>
      {/* end Client Logo Showcase */}
      {/* Highlighted Services */}
      <Section>
        <SectionHeader>
          <SectionHeadline>Featured Showcase</SectionHeadline>
          <SectionTitle>
            Our Work that brands{" "}
            <span className="text-muted-foreground">
              love and clients trust
            </span>
          </SectionTitle>
        </SectionHeader>
        {/* content */}
        <MorphCaseStudy />
        {/* end Content */}
      </Section>
      {/* end Highlighted Services */}
      {/* Industrial Section */}
      <Section>
        <SectionHeader>
          <SectionHeadline>D2C • B2B • B2C</SectionHeadline>
          <SectionTitle>
            Proven expertise in three
            <br />
            <span className="text-muted-foreground">distinct Industries </span>
          </SectionTitle>
        </SectionHeader>
        {/* Content */}
        <ExpertiseSlider />
        {/* end Content */}
      </Section>
      {/* end Industrial Section */}
    </>
  );
  return <LandingPage />;
}
