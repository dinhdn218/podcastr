import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgUrl,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          quality={100}
          src={imgUrl}
          priority
          height={174}
          width={174}
          alt={title}
          unoptimized
          className="aspect-square w-full rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
