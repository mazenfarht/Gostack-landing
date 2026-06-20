import React from "react";
import OverlappingGallery from "./swipper";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";

const galleryItems = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img1 },
  { id: 7, image: img2 },
];

export default function Section3() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-1/2">
            <h6 className="mb-3 text-sm font-medium sm:text-base text-center">
              <span className="text-(--color-primary)">✦</span> شراكاتنا
              الاستراتيجية
            </h6>

            <div className="flex flex-col gap-6 text-center">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                نبني شراكات تصنع فرصًا للمستقبل
              </h1>

              <p className="text-base text-(--color-text-grey) sm:text-lg lg:text-xl">
                نؤمن في أكاديمية 3C بأن النجاح يبدأ بالتعاون، لذلك نعمل جنبًا
                إلى جنب مع المؤسسات التعليمية والجهات الرائدة والشركاء
                الاستراتيجيين لتقديم تجارب تعليمية متميزة، وتعزيز الابتكار، وفتح
                آفاق جديدة أمام المتعلمين لتحقيق أهدافهم المهنية والتقنية.
              </p>
            </div>
          </div>
        </div>
        <OverlappingGallery items={galleryItems} title="ورشة عمل STEM، لندن" />
      </div>
    </section>
  );
}
