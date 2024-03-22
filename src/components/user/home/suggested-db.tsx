"use client";

import ListDb from "@/components/ui/ListDb";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export interface DataBases {
  title: string;
  cover: string;
  id: string;
}

export const listDb: DataBases[] = [
  {
    title: "AMA",
    cover: "/AMA.png",
    id: "1",
  },

  {
    title: "Chorane",
    cover: "/chorane.png",
    id: "3",
  },
  {
    title: "Eureka",
    cover: "/eureka.png",
    id: "4",
  },
  {
    title: "Micromedex",
    cover: "/micromedex.png",
    id: "5",
  },
];

export function SuggestedDb() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <main className="slider-container">
      <Slider {...settings}>
        {listDb.map((db) => (
          <ListDb key={db.id} db={db} />
        ))}
      </Slider>
    </main>
  );
}
