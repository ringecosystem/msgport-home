import { codeBlocks } from "../data/code";
// import useWidth from "../hooks/useWidth";
import Container from "./Container";
import PrettyCode from "./PrettyCode";

const Hero = () => {
  // const width = useWidth();
  return (
    <Container classes="bg-cover lg:relative lg:pt-[7.5rem] px-0 pb-[100px] lg:pb-[6.25rem] lg:mt-0">
      <img
        src="/images/cover.png"
        className="lg:hidden w-full h-[70vw] object-cover"
        alt="msport"
      />
      <h1 className="lg:text-center text-white font-normal px-[20px] mt-[30px] lg:mt-0 lg:px-0 text-[28px] lg:text-[4.125rem] leading-[31px] lg:leading-[5.3rem]">
        Msgport provides
        <br className="lg:hidden" />
        <span className="text-[#00D448] font-[600]">standard interfaces,</span>
        <br />
        enabling{" "}
        <span className="text-[#00D448] font-[600]">flexible messaging</span>
        <br />
        across blockchains.
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[6.25rem] px-[20px] lg:px-0 justify-center mt-[40px] lg:mt-[6.25rem]">
        <PrettyCode
          language={codeBlocks.heroCode.language}
          code={codeBlocks.heroCode.code}
          className="w-full lg:w-[35vw]"
        />
        <p className="text-[18px] lg:text-[2.25rem] lg:w-[35vw] leading-[20px] flex-shrink-0 lg:leading-[2.85rem] text-white">
          The <span className="text-[#00D448] font-bold">only interface</span>{" "}
          your Dapp
          <br className="hidden lg:block" /> interacts with when
          <br className="hidden lg:block" /> exchanging messages
          <br className="hidden lg:block" /> between chains.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
