import { useEffect, useState } from "react";
import Container from "./Container";
import data from "../data/socials.json";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0] as HTMLElement;
    if (submenu) {
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      body.style.overflow = "visible";
      body.style.height = "unset";
    }
  }, [submenu]);
  return (
    <Container
      classes={`flex items-center justify-between p-[10px_20px] z-[100] lg:py-[2rem] bg-[#0D150F] lg:bg-[unset] h-[50px] lg:h-[unset] w-full ${
        submenu ? "fixed" : "realtive"
      }`}
    >
      <img
        src="/images/logo.png"
        alt="msglogo"
        className="w-[93px] h-[30px] lg:w-[10.688rem] lg:h-[3.438rem] z-10"
      />
      <div className="lg:gap-[2.5rem] lg:flex items-center hidden z-[100]">
        <a
          target="_blank"
          href="https://scan.msgport.xyz"
          className="text-white text-[1rem] font-[300] leading-[1.563rem]"
        >
          Msgport Scan
        </a>
        <a
          target="_blank"
          href=" https://msgport.ringdao.com/docs/build/networks.html"
          className="text-white text-[1rem] font-[300] leading-[1.563rem]"
        >
          Supported Networks
        </a>
        <a
          target="_blank"
          href="https://msgport.ringdao.com/docs"
          className="text-white text-[1rem] font-[300] leading-[1.563rem]"
        >
          Docs
        </a>
        <button
          onClick={() =>
            window.open(
              "https://github.com/ringecosystem/msgport-examples",
              "_blank"
            )
          }
          className="text-[#161616] text-[1rem] font-[600] leading-[1.563rem] bg-[#00D448] h-[36px] rounded-[18px] px-[20px]"
        >
          Try Msgport
        </button>
      </div>

      {/* mobile */}
      <button
        className="bg-[url('/assets/icons/hamburger.svg')] w-[1.25rem] h-[0.625rem] lg:hidden"
        onClick={() => {
          setSubmenu(!submenu);
        }}
      ></button>
      {submenu && (
        <div
          onTouchStart={(e) => e.stopPropagation()}
          className="bg-[#0D150F] flex flex-col items-center justify-center fixed left-0 right-0 top-[50px] h-[calc(100vh-50px)] z-[100] gap-[2.5rem]"
        >
          <div className="flex flex-col items-center justify-center gap-[68px] w-full flex-grow">
            <a
              target="_blank"
              href="https://scan.msgport.xyz"
              className="text-white text-[16px] font-[300] leading-[1.563rem]"
              onClick={() => {
                setSubmenu(!submenu);
              }}
            >
              Msgport Scan
            </a>
            <a
              target="_blank"
              href=" https://msgport.ringdao.com/docs/build/networks.html"
              className="text-white text-[16px] font-[300] leading-[1.563rem]"
              onClick={() => {
                setSubmenu(!submenu);
              }}
            >
              Supported Networks
            </a>
            <a
              target="_blank"
              href="https://msgport.ringdao.com/docs"
              className="text-white text-[16px] font-[300] leading-[1.563rem]"
              onClick={() => {
                setSubmenu(!submenu);
              }}
            >
              Docs
            </a>
            <button
              onClick={() => {
                setSubmenu(false);
                window.open(
                  "https://github.com/ringecosystem/msgport-examples",
                  "_blank"
                );
              }}
              className="text-[#161616] text-[16px] font-[600] leading-[1.563rem] bg-[#00D448] h-[36px] rounded-[18px] px-[20px]"
            >
              Try Msgport
            </button>
          </div>
          <div
            className="flex flex-col gap-[20px] justify-between items-center py-[23px] w-full flex-shrink-0"
            style={{
              backgroundImage: "linear-gradient(to top,#00D4484D, #00D44800",
            }}
          >
            <div className="flex items-center gap-[1.875rem]">
              {data.socials.map((item: any) => (
                <a href={item.href} key={item.id} target="_blank">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-[24px] h-[24px] lg:w-[1.875rem] lg:h-[1.875rem] object-contain"
                  />
                </a>
              ))}
            </div>
            <p className="text-[12px] lg:text-[1rem] text-white font-[300]">
              @ 2024 Msgport
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Header;
