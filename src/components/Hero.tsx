import { codeBlocks } from "../data/code";
// import useWidth from "../hooks/useWidth";
import Container from "./Container";
import PrettyCode from "./PrettyCode";

const Hero = () => {
  // const width = useWidth();
  return (
    <Container classes="bg-cover lg:relative pt-[7.5rem] pb-[6.25rem] lg:mt-0">
      <h1 className="text-center text-white font-normal text-[4.125rem] leading-[5.3rem]">
        Msgport provides{" "}
        <span className="text-[#00D448] font-[600]">standard interfaces,</span>
        <br />
        enabling <span>flexible messaging</span>
        <br />
        across blockchains.
      </h1>
      <div className="flex items-center gap-[6.25rem] justify-center mt-[6.25rem]">
        <PrettyCode
          language={codeBlocks.heroCode.language}
          code={codeBlocks.heroCode.code}
        />
        <p className="text-[2.25rem] leading-[2.85rem] text-white">
          The <span className="text-[#00D448] font-bold">only interface</span>{" "}
          your Dapp
          <br /> interacts with when
          <br /> exchanging messages
          <br /> between chains.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
