export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-50" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
    </div>
  )
}
