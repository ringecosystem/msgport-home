import Container from "./Container";

export default function IntegratedApps() {
  return (
    <Container classes="py-[100px] lg:py-[6.25rem] px-[20px] lg:px-[12.375rem] 3xl:px-[12.375rem]">
      <div className="flex flex-col-reverse lg:flex-row w-fit mx-auto items-center justify-center gap-[40px] lg:gap-[5rem] lg:bg-[#14291B] lg:border-[1px] lg:border-solid lg:border-[#00D448] rounded-[2.5rem] lg:py-[2.5rem] lg:px-[5rem]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="hidden lg:block bg-[#00D448] w-[1.75rem] h-[1.75rem] rounded-full" />
          <h3 className="hidden lg:block text-[2.87rem] text-white italic text-center">
            Application
            <br />
            who
            <br />
            <span className="text-[#00D448] not-italic font-bold">
              integrated
            </span>
            <br />
            with
            <br />
            Msgport
          </h3>
          <h3 className="lg:hidden text-[28px]  text-white italic text-center">
            Application who
            <br />
            <span className="text-[#00D448] not-italic font-bold">
              integrated
            </span>{" "}
            with
            <br />
            Msgport
          </h3>
        </div>
        <div className="flex items-center">
          <img
            src="/images/integratedDiagram.svg"
            alt="msgport integrated diagram"
            className="w-[41rem]"
          />
        </div>
      </div>
    </Container>
  );
}
