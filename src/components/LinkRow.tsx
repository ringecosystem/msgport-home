import data from "../data/links.json";
import Container from "./Container";

export default function LinkRow() {
  return (
    <Container classes="flex items-center gap-[5rem] overflow-hidden bg-[#14291B] py-[3.125rem]">
      {data.links.map((item: any) => (
        <img
          key={item.logo}
          src={item.logo}
          alt="msgport link"
          className="w-[5rem] h-[5rem] runded-full object-contain"
        />
      ))}
    </Container>
  );
}
