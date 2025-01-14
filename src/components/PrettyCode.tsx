import { CSSProperties, useEffect, useRef } from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
// @ts-ignore
import xonokai from "react-syntax-highlighter/dist/esm/styles/prism/xonokai.js";

const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

interface Props {
  language: "solidity" | "typescript" | "javascript" | "rust" | "go";
  code: string;
  className?: string;
  customStyle?: CSSProperties | undefined;
}

export default function PrettyCode({
  code,
  language,
  className,
  customStyle,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (ev: WheelEvent) => {
      const scrollableDiv = ref.current?.children[0] as Element;

      if (ev.deltaY > 0) {
        if (
          scrollableDiv.scrollTop >=
          scrollableDiv.scrollHeight - scrollableDiv.clientHeight - 1
        ) {
          // Scrollbar is at the bottom
          console.log("Scrolled to end");
        } else {
          ev.stopPropagation();
        }
      } else {
        if (scrollableDiv.scrollTop === 0) {
          // Scrollbar is at the bottom
          console.log("Scrolled to start");
        } else {
          ev.stopPropagation();
        }
      }
    };
    ref.current?.addEventListener("wheel", listener, false);
    return () => {
      ref.current?.removeEventListener("wheel", listener, false);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} defaultScroll  rounded-tl-[0.625rem] relative rounded-tr-[0.625rem] overflow-hidden`}
    >
      <div className="flex gap-[0.5rem] items-center absolute top-[1rem] left-[1rem] z-10">
        <span className="block w-[1rem] h-[1rem] bg-[rgb(255,95,86)] rounded-full" />
        <span className="block w-[1rem] h-[1rem] bg-[rgb(255,189,46)] rounded-full" />
        <span className="block w-[1rem] h-[1rem] bg-[rgb(39,201,63)] rounded-full" />
      </div>
      <SyntaxHighlighter
        language={language}
        style={xonokai}
        customStyle={{
          border: "none",
          padding: "1rem",
          paddingTop: "2rem",
          borderRadius: "0",
          ...customStyle,
        }}
        PreTag="div"
        className={className}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
