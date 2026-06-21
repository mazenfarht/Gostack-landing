import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const socialIcons = [
  { label: "الموقع", icon: FaGlobe },
  { label: "يوتيوب", icon: FaYoutube },
  { label: "تيك توك", icon: FaTiktok },
  { label: "لينكدإن", icon: FaLinkedinIn },
  { label: "انستجرام", icon: FaInstagram },
  { label: "فيسبوك", icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#393838] text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15 mb-8">
        {/* Grid 1 - Logo + Text */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src="/0.png"
              alt="logo"
              className="
              object-contain
              w-[110px] h-[39px]
              sm:w-[130px] sm:h-[46px]
              md:w-[150px] md:h-[53px]
              lg:w-[164px] lg:h-[58px]
              "
            />

            <h3 className="text-lg font-bold text-white">تري سي كودينج سكول</h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            تمكين الجيل القادم من خلال تعليم مبتكر في الذكاء الاصطناعي والعلوم
            والتكنولوجيا.
          </p>
        </div>

        {/* Grid 2 - Nav + Social */}
        <div className="space-y-5">
          <div className="flex justify-between">
            <h4 className="text-white font-semibold text-sm mb-3">
              ◆ الرئيسية
            </h4>

            <h4 className="text-white font-semibold text-sm">◆ من نحن</h4>
            <h4 className="text-white font-semibold text-sm mb-3">◆ تابعنا</h4>
            <h4 className="text-white font-semibold text-sm mb-3">
              ◆ شراكاتنا
            </h4>
          </div>

          <div>
            <div className="flex gap-2 flex-wrap">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="
                  w-9 h-9 
                  rounded-lg 
                  border border-gray-600 
                  flex items-center justify-center
                  text-gray-400
                  hover:border-[#50BDE9]
                  hover:text-[#50BDE9]
                  transition
                  "
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 3 - Contact */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#50BDE9]" />

              <p className="text-gray-400 text-sm mb-2">+971 50 827 3392</p>
            </div>
            <div>
              <a
                href="mailto:Partnerships@3cschool.net"
                className="
              text-[#50BDE9]
              text-sm
              hover:underline
              flex items-center gap-3
              "
              >
                <FaEnvelope className="text-[#50BDE9]" />
                Partnerships@3cschool.net
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
        max-w-6xl mx-auto
        border-t border-gray-700
        pt-5
        flex flex-col sm:flex-row
        justify-between
        items-center
        gap-2
        "
      >
        <p className="text-gray-500 text-xs">
          © 2026 مدرسة 3C. جميع الحقوق محفوظة.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="
            text-gray-500
            text-xs
            hover:text-[#50BDE9]
            transition
            "
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="
            text-gray-500
            text-xs
            hover:text-[#50BDE9]
            transition
            "
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
