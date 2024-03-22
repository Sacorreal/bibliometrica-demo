import Image from "next/image";

export default function ListDb({ db }: any) {
  const { cover, title } = db;
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 justify-items-center">
      <div className="justify-items-center">
        <Image
          className="rounded-t-lg"
          src={cover}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className="p-1">
        <div>
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
}
