import Container from "./Container";
import PrettyCode from "./PrettyCode";
import { codeBlocks } from "../data/code";

export default function CodePart() {
  return (
    <Container classes="flex flex-col gap-[200px] lg:gap-[12.5rem] py-[100px] lg:py-[6.25rem]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[6.25rem]">
        <div className="w-full lg:w-[50%] flex-shrink-0">
          <PrettyCode
            language={codeBlocks.easyIntegration.language}
            code={codeBlocks.easyIntegration.code}
            className="w-full lg:w-[unset]"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/assets/icons/easy-integration-icon.svg"
            alt="msgport easy integration"
            className="hidden lg:block w-[6rem] h-[6rem] object-containmb-[3.125rem]"
          />
          <h3 className="text-center lg:text-left text-[#00D448] text-[28px] lg:text-[2.25rem] leading-[28px] lg:leading-[45px] font-[600] mb-[40px] lg:mb-[10px]">
            Allows for easy and flexible
            <br /> integration and switching
          </h3>
          <p className="text-center lg:text-left text-white text-[16px] lg:text-[1rem] font-[300]">
            Dapps should interact only with the IMessagePort interface for
            sending messages. The cross-chain functionality is provided by the
            port library, which can be replaced with any implementation of
            IMessagePort.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-[40px] lg:gap-[6.25rem]">
        <div className="flex flex-col items-center lg:items-end">
          <img
            src="/assets/icons/validation-icon.svg"
            alt="msgport message validation"
            className="hidden lg:block w-[6rem] h-[6rem] object-contain mb-[3.125rem]"
          />
          <h3 className="text-center lg:text-right text-[#00D448] text-[28px] lg:text-[2.25rem] leading-[28px] lg:leading-[45px] font-[600] mb-[40px] lg:mb-[10px] ">
            Allow for validating the
            <br /> incoming messages
          </h3>
          <p className="text-center lg:text-left text-white text-[16px] lg:text-[1rem] font-[300]">
            Dapps can validate incoming messages by extending the Application
            <br />
            contract, which provides utility functions for message validation.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex-shrink-0">
          <PrettyCode
            language={codeBlocks.validation.language}
            code={codeBlocks.validation.code}
            className="w-full lg:w-[unset]"
          />
        </div>
      </div>
    </Container>
  );
}
