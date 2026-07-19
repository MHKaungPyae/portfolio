export default function SectionHeader({ title, subtitle, align = 'center' }) {
  if (align === 'left') {
    return (
      <div className="mb-12">
        <div className="flex items-start gap-4">
          <div className="accent-bar h-12 mt-2" />
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-gray-400 text-base font-normal leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-base font-normal leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-8 mx-auto max-w-md" />
    </div>
  )
}
