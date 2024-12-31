import data from "../data/socials.json";

export default function Footer() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row gap-[20px] justify-between items-center py-[23px] lg:py-[2.375rem] lg:px-[6.25rem]"
      style={{
        backgroundImage: "linear-gradient(to top,#00D4484D, #00D44800",
      }}
    >
      <p className="text-[12px] lg:text-[1rem] text-white font-[300]">
        @ 2024 Msgport
      </p>
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
    </section>
  );
}
