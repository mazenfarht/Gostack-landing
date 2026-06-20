import School01Icon from "@iconify-react/hugeicons/school-01";
import Building03Icon from "@iconify-react/hugeicons/building-03";
import OfficeIcon from "@iconify-react/hugeicons/office";
export default function Features() {
  return (
    <div className="mt-16 p-6 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <School01Icon height="24" />
          <h3 className="font-bold text-[#393838] mt-3">تعليم حديث</h3>
          <p className="text-sm text-gray-500 mt-2">
            نستخدم أحدث أساليب التعليم التفاعلي
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <Building03Icon height="24" />
          <h3 className="font-bold text-[#393838] mt-3">ابتكار</h3>
          <p className="text-sm text-gray-500 mt-2">
            نركز على تنمية التفكير الإبداعي
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <OfficeIcon height="24" />
          <h3 className="font-bold text-[#393838] mt-3">ذكاء اصطناعي</h3>
          <p className="text-sm text-gray-500 mt-2">
            تعليم تقنيات المستقبل والذكاء الاصطناعي
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <School01Icon height="24" />

          <h3 className="font-bold text-[#393838] mt-3">شراكات</h3>
          <p className="text-sm text-gray-500 mt-2">
            نتعاون مع جهات تعليمية ومهنية
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <School01Icon height="24" />

          <h3 className="font-bold text-[#393838] mt-3">تطوير مستمر</h3>
          <p className="text-sm text-gray-500 mt-2">
            نطور مهارات الطلاب بشكل مستمر
          </p>
        </div>
      </div>
    </div>
  );
}
