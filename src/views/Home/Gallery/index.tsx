"use client";

// LightGallery
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

import GalleryCard from "@/components//Cards/GalleryCard";
import ColoredSeparator from "@/components/DynamicAssets/ColoredSeparator";
import ImageSlider from "@/components/ImageSlider";
import useGetItineraries from "@/libs/Itineraries/queries/useGetItineraries";
import { FC, useMemo } from "react";
import styles from "./gallery.module.css";

const Gallery: FC = () => {
  const { data } = useGetItineraries();

  const photosTop = data?.data?.[0]?.related_galleries.slice(0, 3);
  const photosBottom = data?.data?.[1]?.related_galleries.slice(0, 3);

  const photosTopSrc = useMemo(() => {
    return photosTop?.map((photo) => photo?.src);
  }, [photosTop]);

  const photosBottomSrc = useMemo(() => {
    return photosBottom?.map((photo) => photo?.src);
  }, [photosBottom]);

  return (
    <section className="bg-[#D6B66B] p-4 lg:px-44 py-20">
      <h1 className="font-thesignature text-7xl text-[#004040] mb-6">
        Luxury Footages
      </h1>
      <LightGallery
        speed={500}
        download={false}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames={styles.gallery}
        selector=".gallery-item"
        closable
      >
        <>
          {photosTop?.map((photo, index) => (
            <GalleryCard key={index} imageSrc={photo?.src} />
          ))}
          <div className="col-span-full">
            <ColoredSeparator isWhite={true} />
          </div>
          {photosBottom?.map((photo, index) => (
            <GalleryCard key={index} imageSrc={photo?.src} />
          ))}
        </>
      </LightGallery>

      {/* Mobile */}
      {photosBottomSrc && photosTopSrc && (
        <ImageSlider
          imagesSrc={[...photosTopSrc, ...photosBottomSrc]}
          className="lg:hidden relative aspect-[4/3] max-h-[256px] w-full"
        />
      )}
    </section>
  );
};

export default Gallery;
