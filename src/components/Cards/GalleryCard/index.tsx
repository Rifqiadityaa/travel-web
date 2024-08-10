import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GalleryCardProps } from "./types";

const GalleryCard: FC<GalleryCardProps> = ({ imageSrc }) => {
  return (
    <Link className="relative aspect-square gallery-item" href={imageSrc}>
      <Image
        src={imageSrc}
        alt="scenery images"
        className="object-cover w-full h-full"
        fill
        loading="lazy"
      />
    </Link>
  );
};

export default GalleryCard;
