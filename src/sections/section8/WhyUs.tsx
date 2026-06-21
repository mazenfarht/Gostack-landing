import SectionHeader from "./SectionHeader/SectionHeader";

export default function WhyUs() {
  const leftCards = [
    {
      title: "برامج مخصصة لكل شريك",
      description: "مصممة خصيصاً لاحتياجاتك",
    },
    {
      title: "مدربون خبراء في الصناعة",
      description: "تعلم من الأفضل في هذا المجال",
    },
    {
      title: "نماذج تقديم مرنة",
      description: "عبر الإنترنت، هجين، أو حضورياً",
    },
  ];

  const rightCards = [
    {
      title: "منهج يركز على الذكاء الاصطناعي والبرمجة",
      description: "تعلم عملي قائم على المشاريع",
    },
    {
      title: "حلول قابلة للتوسع ومرنة",
      description: "تنمو مع مؤسستك",
    },
    {
      title: "تأثير حقيقي وقابل للقياس",
      description: "شاهد نتائج استثمارك",
    },
  ];

  const Card = ({ title, description }) => (
    <div
      className="
      bg-[#BBE6F6]
      border-3
      border-[#50BDE9]
      rounded-2xl
      p-5
      shadow-sm
      hover:shadow-md
      transition
      text-center
      "
    >
      <h3 className="text-[#393838] font-bold text-lg mb-2">{title}</h3>

      <p className="text-[#A4A3A3] text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <SectionHeader
        badge="لماذا 3C؟"
        title="نُحوّل التعلم إلى تجربة تُلهم وتصنع الأثر"
        description="نجمع بين التعليم العملي والتكنولوجيا الحديثة وأساليب التعلم التفاعلية لتقديم تجربة تعليمية متكاملة. هدفنا هو تمكين كل متعلم من اكتساب المهارات التي يحتاجها للنجاح والابتكار والتميز في عالم رقمي متسارع."
      />

      <div
        className="
        max-w-6xl
        mx-auto
        mt-12
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        items-center
        "
      >
        {/* Left Cards */}
        <div className="grid gap-5">
          {leftCards.map((card, i) => (
            <Card key={i} title={card.title} description={card.description} />
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/14.jpg"
            alt="why us"
            className="
            w-full
            h-[420px]
            object-cover
            rounded-2xl
            "
          />
        </div>

        {/* Right Cards */}
        <div className="grid gap-5">
          {rightCards.map((card, i) => (
            <Card key={i} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
