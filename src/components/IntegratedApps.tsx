import Container from "./Container";

export default function IntegratedApps() {
  return (
    <Container classes="py-[6.25rem] lg:px-[12.375rem] 3xl:px-[12.375rem]">
      <div className="flex w-fit mx-auto items-center justify-center gap-[5rem] bg-[#14291B] border-[1px] border-solid border-[#00D448] rounded-[2.5rem] py-[2.5rem] px-[5rem]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <span className="block bg-[#00D448] w-[1.75rem] h-[1.75rem] rounded-full" />
          <h3 className="text-[2.87rem] text-white italic text-center">
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
