import Banner from "@/components/Banner";
import ColoredSeparator from "@/components/DynamicAssets/ColoredSeparator";
import Footer from "@/components/Footer";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Articles from "./Articles";
import Destinations from "./Destinations";
import Experience from "./Experience";
import Gallery from "./Gallery";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <>
      <Hero bgImage="/assets/images/hero_bg.webp" />
      <div className="flex flex-col gap-20 px-4 lg:px-44 py-20">
        <Experience />
        <ColoredSeparator />
        <Destinations />
      </div>
      <Gallery />
      <div className="flex flex-col gap-20 px-4 lg:px-44 py-20">
        <section>
          <Banner
            bgImage="/assets/images/banner_bg.jpeg"
            description="Want to see other destinations? Check us out at our website"
            href="https://www.pandooin.com"
          />
        </section>
        <Articles />
      </div>
      <section>
        <Footer
          copyrightText="© 2023 Zamrood by PT Teknologi Pandu Wisata"
          socials={[
            {
              href: "#",
              icon: <AiOutlineFacebook size={24} />,
            },
            {
              href: "#",
              icon: <AiOutlineInstagram size={24} />,
            },
            {
              href: "#",
              icon: <AiOutlineMail size={24} />,
            },
          ]}
        />
      </section>
    </>
  );
};

export default HomeView;
