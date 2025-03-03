import Image from "next/image";

type CoverProps = {
  coverUrl: string | null;
};

export const Cover = ({ coverUrl }: CoverProps) => {
  return (
    <div className="relative h-[25vh] w-full bg-neutral-300 dark:bg-gray-700">
      {coverUrl && (
        <Image
          alt="CoverImage"
          fill
          className="object-cover"
          src={coverUrl}
          sizes="100vw"
        />
      )}
    </div>
  );
};
