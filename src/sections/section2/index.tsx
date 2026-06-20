import React from "react";
import vedImg from "../../assets/section2-vid.jpg";
import { Icon } from "@iconify/react";

export default function Section2() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl bg-(--color-secbg) p-3 sm:p-4">
              <img
                src={vedImg}
                alt="Section 2 Image"
                className="w-full rounded-2xl border-2 border-(--color-primary) object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:text-right">
            <h6 className="mb-3 text-sm font-medium sm:text-base text-center">
              <span className="text-(--color-primary)">✦</span> عن 3C
            </h6>

            <div className="flex flex-col gap-6 text-center">
              <h1 className="text-3xl font-bold leading-tight text-(--color-primary) sm:text-4xl lg:text-5xl xl:text-6xl">
                نصنع جيلاً مؤهلاً لقيادة المستقبل الرقمي
              </h1>

              <p className="text-base leading-8 text-(--color-text-grey) sm:text-lg lg:text-xl">
                في أكاديمية 3C نؤمن بأن المعرفة والمهارة والابتكار هي الركائز
                الأساسية للنجاح في العصر الرقمي. لذلك نقدم برامج تدريبية متخصصة
                تهدف إلى تطوير الكفاءات الرقمية وإعداد جيل قادر على مواجهة
                التحديات التقنية الحديثة بثقة واحترافية.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <IconDiv icon="hugeicons:star-award-01" text="الكفاءة" />
          <IconDiv icon="hugeicons:idea-01" text="الإبداع" />
          <IconDiv icon="solar:hand-stars-linear" text="الالتزام" />
        </div>

        <div className="mt-10 text-center lg:text-right">
          <p className="text-base leading-8 text-(--color-text-grey) sm:text-lg lg:text-xl">
            نحرص على تقديم تجربة تعليمية تجمع بين الأسس العلمية والتطبيق
            العملي، مما يمكّن المتدربين من اكتساب مهارات حقيقية قابلة للتطبيق
            في بيئات العمل المختلفة. ومن خلال خبراتنا المتنوعة وشغفنا بالتطوير
            المستمر، نسعى إلى بناء مجتمع من المتعلمين والمبدعين القادرين على
            إحداث أثر إيجابي في المستقبل الرقمي.
          </p>

          <div className="mx-auto mt-5 h-0 w-40 rounded-full border-[3px] border-(--color-primary) sm:w-56 lg:mx-0 lg:w-72" />
        </div>
      </div>
    </section>
  );
}

const IconDiv = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-3 px-2 py-2 text-(--color-primary)">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--color-primary) sm:h-14 sm:w-14 lg:h-16 lg:w-16">
        <Icon icon={icon} className="text-2xl rotate-12 sm:text-3xl" />
      </div>

      <span className="text-lg font-bold sm:text-2xl lg:text-3xl">{text}</span>
    </div>
  );
};