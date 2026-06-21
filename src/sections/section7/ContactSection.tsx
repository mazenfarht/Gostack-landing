import ArrowSolidIcon from "@iconify-react/teenyicons/arrow-solid";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="relative overflow-hidden rounded-[40px] bg-sky-400 min-h-[360px] grid grid-cols-1 md:grid-cols-2 items-center">
        {/* زخارف */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[550px] md:h-[550px] rounded-full border  border-[#BBE6F6] opacity-60 -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full border bg-[#bbe6f6] border-[#BBE6F6] opacity-40 translate-x-1/3 translate-y-1/3" />

        {/* المحتوى */}
        <div className="text-white p-6 md:p-10 z-10 text-center ">
          <p className="mb-3 text-xs md:text-sm">✦ تواصل معنا</p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-relaxed mb-6">
            لنبدأ رحلتك نحو التميز الرقمي
          </h2>

          <p className="text-sm md:text-lg text-cyan-50 leading-7 md:leading-8 mb-8">
            هل لديك استفسار حول برامجنا أو خدماتنا التعليمية؟ يسعد فريقنا
            بمساعدتك والإجابة عن جميع استفساراتك.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center ">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
              ابدأ الآن
            </button>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
              <ArrowSolidIcon height="19" color="black" />
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className="hidden md:flex items-stretch justify-end relative">
          <div
            className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]
            rounded-r-[300px]  border-[12px] md:border-[18px] border-[#BBE6F6] overflow-hidden"
          >
            <img
              src="/14.jpg"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
