/**
 * Reusable section heading with a title and gradient underline bar.
 * Used across About, Skills, Projects, and Contact sections.
 */
export default function SectionHeader({ title, subtitle }) {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
        {title}
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6" />
      {subtitle && (
        <p className="text-zinc-400 text-center max-w-lg mx-auto mb-12">
          {subtitle}
        </p>
      )}
    </>
  )
}
