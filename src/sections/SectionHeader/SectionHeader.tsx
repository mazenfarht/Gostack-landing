export default function SectionHeader({ badge, title, description }) {
  return (
    <div>
      {/* Top badge */}
      <div className="flex justify-center mb-6">
        <span className="text-sm text-gray-600 px-4">✦ {badge}</span>
      </div>

      {/* Title */}
      <h1
        className="
          text-center 
          text-3xl 
          md:text-5xl 
          font-bold 
          leading-snug 
          text-gray-800 
          max-w-3xl 
          mx-auto
        "
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="
          mt-5 
          text-center 
          text-[#A4A3A3] 
          max-w-2xl 
          mx-auto 
          text-sm 
          md:text-base 
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}
