import Container from "./Container";
import PrettyCode from "./PrettyCode";
import { codeBlocks } from "../data/code";

export default function CodePart() {
  return (
    <Container classes="flex flex-col gap-[12.5rem] py-[6.25rem]">
      <div className="flex items-center justify-center gap-[6.25rem]">
        <div className="w-[50%] flex-shrink-0">
          <PrettyCode
            language={codeBlocks.easyIntegration.language}
            code={codeBlocks.easyIntegration.code}
          />
        </div>
        <div className="flex flex-col">
          <img
            src="/assets/icons/easy-integration-icon.svg"
            alt="msgport easy integration"
            className="w-[6rem] h-[6rem] object-contain mb-[3.125rem]"
          />
          <h3 className="text-[#00D448] text-[2.25rem] font-[600] mb-[10px]">
            Allows for easy and flexible
            <br /> integration and switching
          </h3>
          <p className="text-white text-[1rem] font-[300]">
            Dapps should interact only with the IMessagePort interface for
            sending messages. The cross-chain functionality is provided by the
            port library, which can be replaced with any implementation of
            IMessagePort.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[6.25rem]">
        <div className="flex flex-col items-end">
          <img
            src="/assets/icons/validation-icon.svg"
            alt="msgport message validation"
            className="w-[6rem] h-[6rem] object-contain mb-[3.125rem]"
          />
          <h3 className="text-[#00D448] text-[2.25rem] font-[600] mb-[10px] text-right">
            Allow for validating the
            <br /> incoming messages
          </h3>
          <p className="text-white text-[1rem] font-[300]">
            Dapps can validate incoming messages by extending the Application
            <br />
            contract, which provides utility functions for message validation.
          </p>
        </div>
        <div className="w-[50%] flex-shrink-0">
          <PrettyCode
            language={codeBlocks.validation.language}
            code={codeBlocks.validation.code}
          />
        </div>
      </div>
    </Container>
  );
}
