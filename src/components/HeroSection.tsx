import { CheckSquare } from "lucide-react";
import heroImage from "/heroSectionImg.png";

const highlights = [
  "Verified skin specialists",
  "Direct clinic call",
  "No platform fees",
];

const HeroSection = () => {
  return (
    <section
      className="relative text-white overflow-hidden "
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "110%" ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-10 sm:py-14 md:py-24 flex flex-col md:flex-row items-center gap-8 px-6 sm:px-10 lg:px-28">
        <div className="flex-1 space-y-5 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Find <span className="italic text-amber-400">Trusted</span>
            <br />
            <span className="italic text-amber-400">Dermatologists</span> Near You
          </h1>

          <div className="space-y-2 sm:space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <span className="text-sm sm:text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;