import ReactCountryFlag from "react-country-flag";
import { cities } from "./cities";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function WorldMap() {
  return (
    <section className="bg-[#eef5fa] py-10">
      <SectionHeader
        badge="مكاتبنا الرئيسية"
        title="نربط المواهب المحلية بالفرص العالمية"
        description="من خلال حضورنا المتنامي وشراكاتنا الدولية، نعمل على تمكين الشباب في الشرق الأوسط بالمهارات والمعارف التي تؤهلهم للنجاح في عالم سريع التغير."
      />
      <div className="relative max-w-7xl mx-auto p-4">
        {/* الخريطة */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="w-full"
        />
        {/* المدن */}
        {cities.map((city) => (
          <div
            key={city.id}
            style={{
              top: city.top,
              left: city.left,
            }}
            className="
              absolute
              bg-white
              rounded-full
              px-6
              py-4
              flex
              items-center
              gap-4
              shadow-lg
              border border-cyan-100
              hover:-translate-y-1
              transition
            "
          >
            <span className="font-bold text-gray-700 whitespace-nowrap">
              {city.name}
            </span>

            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
              <ReactCountryFlag
                countryCode={city.countryCode}
                svg
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </div>

            {/* السهم */}
            <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-cyan-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
