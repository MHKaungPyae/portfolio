import ScrollReveal from './ScrollReveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal separator */}
        <div className="w-full h-px bg-[#abb2bf]/30 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C778DD] font-bold text-base">#</span>
            <span className="text-white font-medium text-base">MHKP</span>
          </div>

          <ScrollReveal delay={200}>
            <p className="text-base text-[#abb2bf]">
              © Copyright {year}. Made by Min Htet Kaung Pyae
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}
