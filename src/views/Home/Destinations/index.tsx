"use client";

import Button from "@/components/Button";
import DestinationCard from "@/components/DestinationCard";
import useGetItineraries from "@/libs/Itineraries/queries/useGetItineraries";
import { FC } from "react";

const Destinations: FC = () => {
  const { data } = useGetItineraries();

  if (!data) return null;

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-12 lg:mb-24">
        <h1 className="text-xl lg:text-4xl font-unbounded font-bold">
          Destinations
        </h1>
        <div className="flex gap-6 items-center">
          <Button text=">" className="border-[#004040] text-[#004040]" />
          <p>Explore more</p>
        </div>
      </div>
      <div className="flex flex-col gap-16 lg:gap-36">
        {data.data.map((itinerary, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <DestinationCard
              key={index}
              itinerary={itinerary}
              isReversed={isOdd}
              onClickDetailsButton={() => {}}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Destinations;
