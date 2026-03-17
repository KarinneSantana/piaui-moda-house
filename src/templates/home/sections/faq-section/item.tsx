import Image from "next/image";
import React from "react";

type Items = {
  title?: string;
  description: string;
};

type Props = {
  items: Items[];
};

export function ItemVertical({ items }: Props) {
  const QUANTITY = items.length;

  return (
    <div className="bg-black text-white rounded-xl p-12 py-16 sm:p-18 sm:py-24 flex flex-col gap-4">
      {items.map((item, index) => (
        <React.Fragment key={`${index}-vertical`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Image
              src="/forma-branco.png"
              width={50}
              height={50}
              alt="Logo Branca"
            />
            <div className="flex flex-col text-start">
              {item.title && (
                <h3 className="font-semibold tracking-widest uppercase text-center sm:text-start">
                  {item.title}
                </h3>
              )}
              <span className="text-sm font-light mt-1 text-center sm:text-start tracking-wider">
                {item.description}
              </span>
            </div>
          </div>
          {index !== QUANTITY - 1 && <SeparatorVertical />}
        </React.Fragment>
      ))}
    </div>
  );
}

export function ItemHorizontal({ items }: Props) {
  const QUANTITY = items.length;

  return (
    <div className="bg-black text-white rounded-xl p-12 py-16 sm:p-18 flex flex-col sm:flex-row gap-4">
      {items.map((item, index) => (
        <React.Fragment key={`${index}-horizontal`}>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src="/forma-branco.png"
              width={50}
              height={50}
              alt="Logo Branca"
            />
            <span className="text-sm font-light text-center tracking-wider">
              {item.description}
            </span>
          </div>
          {index !== QUANTITY - 1 && <SeparatorHorizontal />}
        </React.Fragment>
      ))}
    </div>
  );
}

function SeparatorVertical() {
  return <div className="w-full h-px bg-white my-4" />;
}

function SeparatorHorizontal() {
  return <div className="w-full h-px sm:w-px sm:h-30 bg-white my-4 sm:mx-4" />;
}
