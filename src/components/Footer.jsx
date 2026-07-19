export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              MH<span className="text-primary">KP</span>
            </span>
          </div>

          <p className="text-sm text-gray-500">
            © Copyright {year}.
          </p>
        </div>
      </div>
    </footer>
  )
}
