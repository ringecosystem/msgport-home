import { useState } from "react";
import data from "../data/comments.json";

export default function Comments() {
  const [current, setCurrent] = useState<number>(0);
  return (
    <div className="py-[3.125rem] flex flex-col justify-center overflow-hidden">
      <div
        className="flex gap-[3.125rem] duration-300"
        style={{
          transform: `translateX(calc(${-current * 50 + 25}vw - 3.125rem))`,
        }}
      >
        {data.comments.map((comment: any) => (
          <div
            key={comment.id}
            className="w-[50vw] bg-[#14291B] flex-shrink-0 rounded-[1.25rem] flex items-center justify-center gap-[5rem] p-[5rem] self-stretch"
          >
            <p className="text-[#fff] text-[1.625rem] italic font-['Euclid Circular A']">
              {comment.comment}
            </p>
            <div className="flex items-center gap-[1.25rem] flex-shrink-0">
              <img
                src={comment.logo}
                alt={comment.name}
                className="w-[4.375rem] h-[4.375rem] rounded-full object-contain ml-auto"
              />
              <div>
                <p className="text-[1.5rem] text-white max-w-[10vw] w-fit">
                  {comment.name}
                </p>
                {comment.subtitle && (
                  <p className="text-[0.875rem] text-[rgba(255,255,255,0.5)]">
                    {comment.subtitle}
                  </p>
                )}
              </div>
              {comment.link && (
                <a
                  href={comment.link}
                  className="block w-[21px] h-[21px] bg-[url('/assets/icons/link.svg')] bg-no-repeat bg-center bg-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-[1.5rem] justify-center mt-[3.125rem]">
        {data.comments.map((item: any, index: number) => (
          <span
            key={`dot-${item.id}`}
            onClick={() => setCurrent(index)}
            className={`block w-[14px] h-[14px] rounded-full ${
              current === index ? "bg-[#fff]" : "bg-[rgba(255,255,255,0.4)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
