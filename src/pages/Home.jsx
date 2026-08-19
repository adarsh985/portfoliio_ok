import { Hero } from "../sections/Hero";
import { TechnicalIdentity } from "../sections/TechnicalIdentity";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { EngineeringDecisions } from "../sections/EngineeringDecisions";
import { GitHubSection } from "../sections/GitHubSection";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <TechnicalIdentity />
      <FeaturedProjects />
      <EngineeringDecisions />
      <GitHubSection />
      <Contact />
    </>
  );
}
