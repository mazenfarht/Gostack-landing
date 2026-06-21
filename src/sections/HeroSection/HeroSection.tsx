import ArrowSolidIcon from "@iconify-react/teenyicons/arrow-solid";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="
      relative
      w-full
      bg-[#EAF7FF]
      overflow-hidden
    "
    >
      {/* Background grid / pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#bfe8ff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-20">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <span className="text-sm text-gray-600 px-4 py-2 ">
            ✦ جيل جديد من الخبراء
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-5xl font-bold leading-snug text-gray-800">
          <span className="bg-gradient-to-r bg-[#50BDE9] text-transparent bg-clip-text">
            تمكين الجيل القادم
          </span>{" "}
          من خلال <br />
          البرمجة والذكاء الاصطناعي
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-center text-[#A4A3A3] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          في 3C نشرك المدارس والشركات والمنظمات لتقديم برامج متطورة في الذكاء
          الاصطناعي والبرمجة والابتكار الرقمي لإعداد الشباب لوظائف الغد
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center items-center ">
          <button className="bg-[#50BDE9] text-black px-6 py-3 rounded-full font-semibold shadow-md transition">
            ابدأ الآن
          </button>

          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
            <span>
              <ArrowSolidIcon height="19" color="black" />
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16  flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[76px] ">
            {/* Card 1 */}
            <div className="p-10 border-2 border-[#50BDE9]  bg-[#BBE6F6] text-center shadow-sm rounded-tl-[24px] rounded-tr-[28px] rounded-br-[24px] rounded-bl-[44px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">+4,000</h3>
              <p className="text-[#393838] text-sm mt-2">
                طالب وطالبة شاركوا في برامجنا التدريبية في البرمجة والذكاء
                الاصطناعي
              </p>
            </div>

            {/* Card 2 */}
            <div className=" bg-[#BBE6F6] border-2 border-[#50BDE9]  text-center shadow-sm rounded-tl-[24px] rounded-tr-[28px] rounded-br-[24px] rounded-bl-[44px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">95%</h3>
              <p className="text-[#393838] text-sm mt-2">
                معدل رضا أولياء الأمور والطلاب
              </p>
            </div>

            {/* Card 3 */}
            <div className=" bg-[#BBE6F6] border-2 border-[#50BDE9]  text-center shadow-sm rounded-tl-[24px] rounded-tr-[28px] rounded-br-[24px] rounded-bl-[44px] flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">+200</h3>
              <p className="text-[#393838] text-sm mt-2">
                مشروع إبداعي تم تطويره بواسطة طلابنا
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
