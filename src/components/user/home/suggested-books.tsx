import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Books {
  title: string;
  cover: string;
  dewey: string;
}

export const listBooks: Books[] = [
  {
    title: "Medicina de Bolsillo",
    cover: "https://celsus.com.co/media/catalog/product//9/7/9788419284341.jpg",
    dewey: "658.M234t",
  },
  {
    title: "Músculos",
    cover: "https://celsus.com.co/media/catalog/product//9/7/9788419663344.jpg",
    dewey: "618.T422l",
  },
  {
    title: "Infecciones Hospitalarias",
    cover: "https://celsus.com.co/media/catalog/product//9/7/9788419663290.jpg",
    dewey: "630.G466f",
  },
  {
    title: "Diagnóstico por Imagen. Mama.",
    cover: "https://celsus.com.co/media/catalog/product//9/7/9788419663405.jpg",
    dewey: "699.01 I398p",
  },
  {
    title: "Ecocardiografía fetal",
    cover: "https://celsus.com.co/media/catalog/product//9/7/9788413825311.jpg",
    dewey: "601.Z231q",
  },
];

export function SuggestedBooks() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {listBooks.map((book) => (
          <figure key={book.dewey} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={book.cover}
                alt={book.title}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {book.title} - {book.dewey}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
