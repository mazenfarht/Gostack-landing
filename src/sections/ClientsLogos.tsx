export default function ClientsLogos() {
  return (
    <div className="mt-16 py-10 flex justify-center bg-[#BBE6F6] ">
      <div className="flex items-center gap-10 w-full max-w-6xl">
        {/* Title */}
        <h3 className="text-[#393838] font-bold text-2xl w-[200px] text-right shrink-0">
          التعاون والشراكات
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          <div className="h-[160px] bg-white flex items-center justify-center rounded-2xl shadow-sm border-[6px] border-[#BBE6F6]">
            <img
              src="/4.png"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          <div className="h-[160px] bg-white flex items-center justify-center rounded-2xl shadow-sm border-[6px] border-[#BBE6F6]">
            <img
              src="/3.png"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          <div className="h-[160px] bg-white flex items-center justify-center rounded-2xl shadow-sm border-[6px] border-[#BBE6F6]">
            <img
              src="/2.png"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          <div className="h-[160px] bg-white flex items-center justify-center rounded-2xl shadow-sm border-[6px] border-[#BBE6F6]">
            <img
              src="/5.png"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
