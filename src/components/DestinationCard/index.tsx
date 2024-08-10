import { getTotalDayAndNight } from "@/shared/helper";
import { FC, useMemo } from "react";
import Button from "../Button";
import ImageSlider from "../ImageSlider";
import { DestinationCardProps } from "./types";

const DestinationCard: FC<DestinationCardProps> = ({
  itinerary,
  onClickDetailsButton,
  isReversed,
}) => {
  const discountPrice = itinerary.related_variant.itinerary_variant_disc_price;
  const originalPrice = itinerary.related_variant.itinerary_variant_pub_price;

  const itineraryImagesSrc = useMemo(() => {
    return (
      itinerary.related_galleries
        //slice because too many data (for demo purposes)
        .slice(0, 4)
        .map((gallery) => gallery.src)
    );
  }, [itinerary]);

  console.log(itineraryImagesSrc);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:even:flex-row-reverse">
      <ImageSlider
        imagesSrc={itineraryImagesSrc}
        className="w-full relative aspect-[4/3] max-h-[256px] lg:max-h-[354px] lg:w-1/2"
      />
      <div className="flex flex-col gap-6 lg:gap-0 justify-between text-[#004040] lg:w-1/2">
        <div className="flex flex-col gap-2">
          <p className="text-sm lg:text-base uppercase">
            {getTotalDayAndNight(itinerary.itinerary_day)}
          </p>
          <h4 className="font-unbounded text-base lg:text-4xl text-[#0B7373] line-clamp-2">
            {itinerary.itinerary_name}
          </h4>
          <p className="font-bold text-sm lg:text-base text-[#004040]">{`Organized by ${itinerary.partner_name}`}</p>
          <p className="text-sm lg:text-base text-[#004040] line-clamp-4">
            {itinerary.itinerary_short_description}
          </p>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs lg:text-base text-[#004040]">Start from</p>
            {/* {!isEmpty(discountPrice) && <p>{discountPrice}</p>} */}
            <p className="text-[#0B7373] font-bold font-unbounded text-lg lg:text-xl">
              {`IDR ${new Intl.NumberFormat("id").format(
                parseInt(originalPrice)
              )}`}
            </p>
          </div>
          <div>
            <Button
              text="See Details"
              className="h-fit border-[#004040] text-[#004040] hover:text-white p-3 font-bold text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
