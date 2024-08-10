import Button from "@/components/Button";
import ExperienceExclusive from "@/components/DynamicAssets/ExperienceExclusive";
import ExperienceFacilities from "@/components/DynamicAssets/ExperienceFacilities";
import ExperienceItineraries from "@/components/DynamicAssets/ExperienceItineraries";
import ExperienceCard from "@/components/ExperienceCard";
import Image from "next/image";
import { FC } from "react";

const mockData = [
  {
    title: "PERSONAL ITINERARIES",
    description:
      "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
    icon: <ExperienceItineraries />,
  },
  {
    title: "EXCLUSIVE EXPERIENCES",
    description:
      "From private charters to behind-the-scenes tours, we offer access to unique opportunities that are designed to elevate your",
    icon: <ExperienceExclusive />,
  },
  {
    title: "Best Facilities",
    description:
      "Experience the epitome of with our premium facility, designed to provide an unparalleled level of comfort and indulgence.",
    icon: <ExperienceFacilities />,
  },
];

const Experience: FC = () => {
  return (
    <section>
      <div className="text-center mb-20">
        <h1 className="font-thesignature text-7xl text-[#0B7373] -mb-4">
          Beyond Premium
        </h1>
        <h5 className="text-[#004040] font-unbounded text-3xl">
          Elevate Your Experience
        </h5>
      </div>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-6 mb-32">
        {mockData.map((data, index) => (
          <ExperienceCard key={index} {...data} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-center gap-8">
        <Image
          src={"/assets/images/tailored_experience.png"}
          alt="image"
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h5 className="text-[#004040] font-unbounded font-bold mb-2 text-2xl">
            Discover Tailored Experiences
          </h5>
          <p className="leading-5 text-sm mb-4 max-w-[500px]">
            Create your own journey, personalized to suit your preferences and
            interests, ensuring a once-in-a-lifetime adventure awaits.
          </p>
          <Button text="Customize Your Trip" variant="filled" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
