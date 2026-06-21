const socialIcons = [
  { label: "الموقع", icon: "🌐" },
  { label: "يوتيوب", icon: "▶" },
  { label: "تيك توك", icon: "♪" },
  { label: "لينكدإن", icon: "in" },
  { label: "انستجرام", icon: "📷" },
  { label: "فيسبوك", icon: "f" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#393838] text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center ">
            <img
              src="/0.png"
              alt="logo"
              className="
              object-contain
              w-[110px] h-[39px]   /* mobile baseline */
              sm:w-[130px] sm:h-[46px]
              md:w-[150px] md:h-[53px]
              lg:w-[164px] lg:h-[58px]  /* exact Figma size */
              transition-all duration-300
              "
            />
            <h3 className=" text-lg font-bold mb-2">تري سي كودينج سكول</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            تمكين الجيل القادم من خلال تعليم مبتكر في الذكاء الاصطناعي والعلوم
            والتكنولوجيا.
          </p>
          <div className="flex gap-2 flex-wrap">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-gray-600 flex items-center justify-center text-sm text-gray-400 hover:border-[#50BDE9] hover:text-[#50BDE9] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">
              ◆ الرئيسية
            </h4>
          </div>

          {/* About links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">◆ من نحن</h4>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">
              ◆ شراكاتنا
            </h4>

            <p className="text-gray-400 text-sm mb-2" dir="ltr">
              +971 50 827 3392
            </p>

            <a
              href="mailto:Partnerships@3cschool.net"
              className="text-[#50BDE9] text-sm hover:underline"
            >
              Partnerships@3cschool.net
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-500 text-xs">
          © 2026 مدرسة 3C. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-500 text-xs hover:text-[#50BDE9] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 text-xs hover:text-[#50BDE9] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
