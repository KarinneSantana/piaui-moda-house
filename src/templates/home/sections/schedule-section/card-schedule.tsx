import Image from "next/image";

type Props = {
  date: string;
  description: string;
  location: string;
};

export function CardSchedule({ date, description, location }: Props) {
  return (
    <div className="p-8 bg-gradient-to-tr from-[#E97F40] via-[#E66A31] to-[#E14918] rounded-xl text-white text-start">
      <div className="flex items-center gap-6">
        <Image
          src="/forma-branco.png"
          width={50}
          height={50}
          alt="Logo Branca"
        />
        <span className="font-medium line-clamp-2 w-24 uppercase">{date}</span>
      </div>

      <p className="text-sm mt-6 w-full max-w-80 whitespace-pre-line">
        {description}
      </p>

      <span className="mt-6 block text-sm text-start">{location}</span>
    </div>
  );
}
