import data from "../data/socials.json";

export default function Footer() {
  return (
    <section
      className="flex justify-between items-center py-[2.375rem] px-[6.25rem]"
      style={{
        backgroundImage: "linear-gradient(to top,#00D4484D, #00D44800",
      }}
    >
      <p className="text-[1rem] text-white font-[300]">@ 2024 Msgport</p>
      <div className="flex items-center gap-[1.875rem]">
        {data.socials.map((item: any) => (
          <a href={item.href} key={item.id} target="_blank">
            <img
              src={item.icon}
              alt={item.name}
              className="w-[1.875rem] h-[1.875rem] object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
