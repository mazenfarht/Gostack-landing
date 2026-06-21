import School01Icon from "@iconify-react/hugeicons/school-01";
import Building03Icon from "@iconify-react/hugeicons/building-03";
import OfficeIcon from "@iconify-react/hugeicons/office";
import ChampionIcon from "@iconify-react/hugeicons/champion";
import PoliceStationIcon from "@iconify-react/hugeicons/police-station";
import SectionHeader from "./SectionHeader/SectionHeader";

const cards = [
  {
    title: "المدارس",
    desc: "نعمل مع مجموعة واسعة من الشركاء والجهات التعليمية والمهنية لتقديم تجارب تعلم حديثة تُسهم في بناء القدرات وتنمية المواهب وإعداد الأجيال القادمة.",
    Icon: School01Icon,
  },
  {
    title: "المؤسسات",
    desc: "تأثير قابل للتوسع من خلال التعلم القائم على التكنولوجيا",
    Icon: Building03Icon,
  },
  {
    title: "الشركات",
    desc: "برامج تطوير المواهب والابتكار",
    Icon: OfficeIcon,
  },
  {
    title: "الأندية",
    desc: "تفاعل الشباب من خلال البرمجة وريادة الأعمال",
    Icon: ChampionIcon,
  },
  {
    title: "الحوكمة",
    desc: "دعم التحول الرقمي ومبادرات مهارات المستقبل",
    Icon: PoliceStationIcon,
  },
];

// Reusable Card Component
function PartnerCard({ title, desc, Icon }) {
  return (
    <div className="relative bg-[#50BDE9] shadow-sm p-5 rounded-2xl overflow-hidden">
      {/* top-left cut circle */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#BBE6F6] rounded-full"></div>

      <div className="flex items-center justify-center gap-3">
        <h3 className="font-bold text-white leading-none">{title}</h3>

        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Icon height="30" />
        </div>
      </div>

      <p className="text-sm text-white mt-2 text-center p-2">{desc}</p>
    </div>
  );
}
export default function Partners() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-20">
      <SectionHeader
        badge="من نعمل معهم"
        title="نُحدث أثرًا في التعليم والتقنية عبر مختلف القطاعات"
        description="نعمل مع مجموعة واسعة من الشركاء والجهات التعليمية والمهنية لتقديم تجارب تعلم حديثة تُسهم في بناء القدرات، وتنمية المواهب، وإعداد الأجيال القادمة لمتطلبات المستقبل الرقمي."
      />
      <div className="mt-16 p-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl">
          {cards.map((card, index) => (
            <PartnerCard
              key={index}
              title={card.title}
              desc={card.desc}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
