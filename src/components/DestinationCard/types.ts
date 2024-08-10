import { Itinerary } from "@/libs/Itineraries/types";

export interface DestinationCardProps {
  itinerary: Itinerary;
  onClickDetailsButton: () => void;
  isReversed?: boolean;
}
