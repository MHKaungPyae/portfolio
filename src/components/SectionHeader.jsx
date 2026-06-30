/**
 * Reusable section heading in Figma-inspired format:
 * `#title` with purple # + white text + horizontal separator line.
 * Used across About, Skills, Projects, and Contact sections.
 */
export default function SectionHeader({ title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className="mb-12">
      <div className={`flex items-center gap-4 ${alignClass}`}>
        <span className="text-[#C778DD] text-3xl sm:text-[32px] font-medium whitespace-nowrap">
          #
        </span>
        <h2 className="text-3xl sm:text-[32px] font-medium text-white whitespace-nowrap">
          {title}
        </h2>
        <div className="separator-line" />
      </div>
      {subtitle && (
        <p className="mt-4 text-[#abb2bf] text-base font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
