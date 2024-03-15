import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    title: "Medicina Latina",
    cover: "/medicLatina.png",
    id: "2",
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
  return (
    //top 10 de las bases de datos recomendadas
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {listDb.map((db) => (
          <figure key={db.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={db.cover}
                alt={db.title}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{db.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
