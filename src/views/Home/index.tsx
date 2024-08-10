import Banner from "@/components/Banner";
import ColoredSeparator from "@/components/DynamicAssets/ColoredSeparator";
import Footer from "@/components/Footer";
import Articles from "./Articles";
import Destinations from "./Destinations";
import Experience from "./Experience";
import Gallery from "./Gallery";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-20 px-4 lg:px-44 py-20">
        <Experience />
        <ColoredSeparator />
        <Destinations />
      </div>
      <Gallery />
      <div className="flex flex-col gap-20 px-4 lg:px-44 py-20">
        <section>
          <Banner />
        </section>
        <Articles />
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomeView;
