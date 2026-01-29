import { ServiceCard } from "./components";
import { SectionWrapper, SectionHeader } from "..";

const PLACEHOLDER_SERVICES = [
  "Lorem ipsum dolor sit amet",
  " Donec faucibus sollicitudin erat",
  "Cras ultricies felis",
];

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="xl:p-16 p-8 space-y-8 xl:space-y-16"
    >
      <SectionHeader>Services</SectionHeader>
      <div className="flex flex-row flex-wrap w-full gap-8 h-full justify-center">
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          <ServiceCard
            svg="hair-care"
            category="Styling"
            services={PLACEHOLDER_SERVICES}
          />
          <ServiceCard
            svg="scissors"
            category="Haircuts"
            animationDelay={0.1}
            services={PLACEHOLDER_SERVICES}
          />
        </div>
        <div className="flex flex-row flex-wrap  gap-8 justify-center">
          <ServiceCard
            svg="spa"
            category="Hair Treatments"
            services={PLACEHOLDER_SERVICES}
            animationDelay={0.2}
          />
          <ServiceCard
            svg="paint-brush"
            category="Nails"
            services={PLACEHOLDER_SERVICES}
            animationDelay={0.3}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
