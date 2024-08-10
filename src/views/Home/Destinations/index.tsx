"use client";

import Button from "@/components/Button";
import DestinationCard from "@/components/Cards/DestinationCard";
import useGetItineraries from "@/libs/Itineraries/queries/useGetItineraries";
import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Destinations: FC = () => {
  const { data } = useGetItineraries();

  const itineraries = data?.data;

  if (!itineraries) return null;

  return (
    <section id="destinations" className="scroll-m-24 lg:scroll-m-36">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-12 lg:mb-24">
        <h1 className="text-xl lg:text-4xl font-unbounded font-bold">
          Destinations
        </h1>
        <div className="flex gap-6 items-center">
          <Button icon={<IoIosArrowForward />} variant="icon" />
          <p className="uppercase text-[#004040]">Explore more</p>
        </div>
      </div>
      <div className="flex flex-col gap-16 lg:gap-36">
        {data.data.map((itinerary, index) => (
          <DestinationCard
            key={index}
            itinerary={itinerary}
            onClickDetailsButton={() => {
              window.location.href = `https://www.zamrood.com/destination/${itinerary.itinerary_slug}`;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
