import Hero from "../components/hero";
import FeatureSection from "../components/featureSection";

export default function Home() {
  return (
    <div>
      <div className="bg-darkGreen">
        <Hero />
        <FeatureSection />
      </div>
    </div>
  );
}
