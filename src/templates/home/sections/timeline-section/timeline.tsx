"use client";

import { cn } from "@/lib/utils";
import { Circle, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

interface Item {
  date: string;
  description: string;
}

interface TimeLineProps extends React.ComponentProps<"div"> {
  items: Item[];
}

export function Timeline({ items, className, ...props }: TimeLineProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={cn("relative size-full", className)} {...props}>
      <div ref={emblaRef}>
        <ol className="relative flex">
          {items.map((item, index) => (
            <li
              key={`item-date-${index}`}
              className={cn(
                "w-full sm:max-w-2/3 md:max-w-1/3 text-start shrink-0",
                index === 0 && "ml-0 sm:ml-30"
              )}
            >
              <time className="ml-4 font-semibold text-xl select-none">
                {" "}
                {item.date}{" "}
              </time>

              <div className="relative mt-2">
                <Circle className="relative fill-black stroke-0 ml-4 size-4" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-black w-full h-0.5" />
              </div>

              <Image
                src="/forma-preta.png"
                alt="Logo forma preta"
                width={12}
                height={12}
                className="object-cover ml-4 mt-4"
              />

              {/* <p className="mt-8 whitespace-pre-line w-60 md:70 text-sm md:text-base ml-4">
                {item.description}
              </p> */}
              <p
                className="mt-8 whitespace-pre-line w-60 md:w-70 text-sm md:text-base ml-4 select-none"
                dangerouslySetInnerHTML={{
                  __html: item.description.replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="w-full max-w-6xl mx-auto flex justify-end gap-3 mt-8">
        <button
          className="border px-4 py-1 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer disabled:opacity-50"
          disabled={prevBtnDisabled}
          onClick={onPrevButtonClick}
        >
          <MoveLeft className="size-4" />
        </button>
        <button
          className="border px-4 py-1 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer disabled:opacity-50"
          disabled={nextBtnDisabled}
          onClick={onNextButtonClick}
        >
          <MoveRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
