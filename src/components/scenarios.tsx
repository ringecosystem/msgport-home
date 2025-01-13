import Container from "./Container";

export default function Scenarios() {
  return (
    <Container classes="px-[20px] lg:px-[6.25rem] 3xl:px-[6.25rem] py-[100px] lg:py-[6.25rem] bg-[#00D448] flex flex-col items-center">
      <h3 className="text-[28px]  lg:text-[3.5rem] text-[#161616] font-[600] mb-[90px] lg:mb-[5.625rem] text-center">
        Scenarios include but are not limited to
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center flex flex-col items-center w-full lg:w-[25%]">
          <img
            src="/assets/icons/scenario1-icon.svg"
            alt="msgport scenario"
            className="w-[100px] h-[100px] lg:w-[6.25rem] lg:h-[6.25rem] object-contain mb-[1.8rem]"
          />
          <h4 className="text-[22px] leading-[27px] lg:text-[1.3rem] lg:leading-[27px] text-[#161616] font-[600] mb-[10px] lg:mb-[0.625rem]">
            Cross-chain Token Management
          </h4>
          <p className="text-[16px] lg:text-[1rem] text-[#161616] font-[300]">
            Msgport enables easy transfer and management of tokens across
            different chains.
          </p>
        </div>
        <div className="text-center flex flex-col items-center w-full lg:w-[25%]">
          <img
            src="/assets/icons/scenario2-icon.svg"
            alt="msgport scenario"
            className="w-[100px] h-[100px] lg:w-[6.25rem] lg:h-[6.25rem] object-contain mb-[1.8rem]"
          />
          <h4 className="text-[22px] leading-[27px] lg:text-[1.3rem] lg:leading-[27px] text-[#161616] font-[600] mb-[10px] lg:mb-[0.625rem]">
            Cross-chain Abstract Accounts
          </h4>
          <p className="text-[16px] lg:text-[1rem] text-[#161616] font-[300]">
            With Msgport as the underlying support, a common account can create
            counterpart accounts on different chains, abstracting away
            chain-specific details.
          </p>
        </div>
        <div className="text-center flex flex-col items-center w-full lg:w-[25%]">
          <img
            src="/assets/icons/scenario3-icon.svg"
            alt="msgport scenario"
            className="w-[100px] h-[100px] lg:w-[6.25rem] lg:h-[6.25rem] object-contain mb-[1.8rem]"
          />
          <h4 className="text-[22px] leading-[27px] lg:text-[1.3rem] lg:leading-[27px] text-[#161616] font-[600] mb-[10px] lg:mb-[0.625rem]">
            Cross-chain Governance{" "}
          </h4>
          <p className="text-[16px] lg:text-[1rem] text-[#161616] font-[300]">
            Msgport allows you to utilize abstract accounts to refactor your
            current governance models, facilitating seamless operations across
            different chains.
          </p>
        </div>
      </div>
    </Container>
  );
}
