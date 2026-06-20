import React from "react";

type GalleryItem = {
  id: number;
  image: string;
  alt?: string;
};

type OverlappingGalleryProps = {
  items: GalleryItem[];
  title?: string;
};

export default function OverlappingGallery({
  items,
  title,
}: OverlappingGalleryProps) {
  if (!items.length) return null;

  const centerIndex = Math.floor(items.length / 2);

  return (
    // <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
      <div className="w-full">
        {/* gallery area */}
        <div className="relative mx-auto flex min-h-60 w-full items-center justify-center sm:min-h-80 md:min-h-95 lg:min-h-125 xl:min-h-140">
          {items.map((item, index) => {
            const offset = index - centerIndex;
            const isCenter = offset === 0;

            /**
             * موبايل: نظهر 3 كروت فقط (-1, 0, 1)
             * تابلت: نظهر 5 كروت (-2 .. 2)
             * ديسكتوب: نظهر 7 كروت (-3 .. 3)
             */
            const visibilityClass =
              Math.abs(offset) > 3
                ? "hidden"
                : Math.abs(offset) > 2
                ? "hidden lg:block"
                : Math.abs(offset) > 1
                ? "hidden md:block"
                : "block";

            /**
             * نحرك كل كارت من المنتصف باستخدام left-1/2 + translateX
             * القيم متدرجة حسب حجم الشاشة
             */
            const positionMap: Record<number, string> = {
              [-3]:
                "-translate-x-[150%] lg:-translate-x-[165%] xl:-translate-x-[185%] scale-[0.72]",
              [-2]:
                "-translate-x-[105%] md:-translate-x-[115%] lg:-translate-x-[125%] xl:-translate-x-[135%] scale-[0.82]",
              [-1]:
                "-translate-x-[58%] sm:-translate-x-[62%] md:-translate-x-[68%] lg:-translate-x-[72%] scale-[0.92]",
              [0]: "-translate-x-1/2 scale-100",
              [1]:
                "translate-x-[-42%] sm:translate-x-[-38%] md:translate-x-[-32%] lg:translate-x-[-28%] scale-[0.92]",
              [2]:
                "translate-x-[5%] md:translate-x-[15%] lg:translate-x-[25%] xl:translate-x-[35%] scale-[0.82]",
              [3]:
                "translate-x-[50%] lg:translate-x-[65%] xl:translate-x-[85%] scale-[0.72]",
            };

            const zMap: Record<number, string> = {
              [-3]: "z-10",
              [-2]: "z-20",
              [-1]: "z-30",
              [0]: "z-40",
              [1]: "z-30",
              [2]: "z-20",
              [3]: "z-10",
            };

            return (
              <div
                key={item.id}
                className={[
                  "absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-300",
                  "w-[120px] sm:w-[150px] md:w-[190px] lg:w-[240px] xl:w-[280px]",
                  visibilityClass,
                  positionMap[offset] ?? "hidden",
                  zMap[offset] ?? "z-0",
                ].join(" ")}
              >
                <div
                  className={`overflow-hidden rounded-[20px] border border-sky-300 bg-white p-1 shadow-md ${
                    isCenter ? "shadow-xl" : "opacity-95"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt || "gallery image"}
                    className={`w-full rounded-[16px] object-cover ${
                      isCenter
                        ? "aspect-[4/5] sm:aspect-[4/4.9]"
                        : "aspect-[4/5]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {title && (
          <h2 className="mt-3 px-4 text-center text-2xl font-bold text-sky-500 sm:mt-8 sm:text-3xl lg:text-4xl">
            {title}
          </h2>
        )}
      </div>
    // </section>
  );
}