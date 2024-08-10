import ColoredSeparator from "@/components/DynamicAssets/ColoredSeparator";
import Destinations from "./Destinations";
import Experience from "./Experience";
import Gallery from "./Gallery";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <>
      <Hero />
      <div className="px-4 lg:px-44 py-20">
        <Experience />
        <ColoredSeparator className="mb-20" />
        <Destinations />
      </div>
      <Gallery />
    </>
  );
};

export default HomeView;
