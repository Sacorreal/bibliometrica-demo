"use client";
import ListBooks from "@/components/ui/ListBooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const listBooks = [
  {
    title: "Medicina de Bolsillo",
    cover: "/medicinabolsillo.jpg",
    dewey: "658.M234t",
  },
  {
    title: "Músculos",
    cover: "/musculos.jpg",
    dewey: "618.T422l",
  },
  {
    title: "Infecciones Hospitalarias",
    cover: "/infecciones-Hospitalarias.jpg",
    dewey: "630.G466f",
  },
  {
    title: "Diagnóstico por Imagen",
    cover: "/diagimagen.jpg",
    dewey: "699.01 I398p",
  },
  {
    title: "Ecocardiografía fetal",
    cover: "/ecofetal.jpg",
    dewey: "601.Z231q",
  },
];

export function SuggestedBooks() {
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
        {listBooks.map((book) => (
          <ListBooks
            cover={book.cover}
            title={book.title}
            dewey={book.dewey}
            key={book.dewey}
          />
        ))}
      </Slider>
    </main>
  );
}
