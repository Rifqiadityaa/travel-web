import ColoredSeparator from "@/components/DynamicAssets/ColoredSeparator";
import Destinations from "./Destinations";
import Experience from "./Experience";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <>
      <Hero />
      <div className="max-lg:px-4 px-44 py-20">
        <Experience />
        <ColoredSeparator className="mb-20" />
        <Destinations />
      </div>
    </>
  );
};

export default HomeView;
