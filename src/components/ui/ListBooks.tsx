import Image from "next/image";

type Books = {
  title: string;
  cover: string;
  dewey: string;
};

export default function ListBooks(props: Books) {
  const { title, cover, dewey } = props;
  return (
    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-items-center">
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
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {dewey}
        </p>
      </div>
    </div>
  );
}
