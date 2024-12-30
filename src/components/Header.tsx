import { useState } from "react";
import Container from "./Container";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  return (
    <Container classes="flex items-center justify-between py-[0.625rem] lg:py-[2rem] relative">
      <img
        src="/images/logo.png"
        alt="msglogo"
        className="w-[5.813rem] h-[1.875rem] lg:w-[10.688rem] lg:h-[3.438rem]"
      />
      <div className="lg:gap-[2.5rem] lg:flex items-center hidden">
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
        <div className="bg-[#000000b3] rounded-[1.25rem] flex flex-col items-center justify-center p-[2.5rem] absolute right-[1.25rem] top-[3.125rem] gap-[2.5rem]">
          <a
            target="_blank"
            href="https://msgport.ringdao.com/docs"
            className="text-white text-[1rem] font-[600] leading-[1.563rem]"
          >
            Learn
          </a>
          <a
            target="_blank"
            href="https://msgport.ringdao.com/docs/build/networks.html"
            className="text-white text-[1rem] font-[600] leading-[1.563rem]"
          >
            Build
          </a>
          <a
            target="_blank"
            href="https://msgport.ringdao.com/docs/community/ringdao.html"
            className="text-white text-[1rem] font-[600] leading-[1.563rem]"
          >
            Community
          </a>
        </div>
      )}
    </Container>
  );
};

export default Header;
