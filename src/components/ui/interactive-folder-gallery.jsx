"use client";
import { useState } from "react";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────
   Geometric pattern generators
   Each renders an abstract pattern inside a
   224×288 card using the project's gradient
   ─────────────────────────────────────────── */

/** Concentric rotated squares — op-art style */
function PatternConcentric({ gradientClass }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
      {[0.9, 0.7, 0.5, 0.3].map((scale, i) => (
        <div
          key={i}
          className="absolute inset-0 m-auto border border-white/20"
          style={{
            width: `${scale * 80}%`,
            height: `${scale * 80}%`,
            transform: `rotate(${i * 15}deg)`,
          }}
        />
      ))}
    </div>
  );
}

/** Diagonal stripe overlay */
function PatternDiagonal({ gradientClass }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10"
          style={{
            width: "200%",
            height: `${4 + i * 2}px`,
            top: `${i * 9}%`,
            left: "-50%",
            transform: `rotate(${25 + i * 3}deg)`,
          }}
        />
      ))}
    </div>
  );
}

/** Bubble / circle cluster */
function PatternBubbles({ gradientClass }) {
  const circles = [
    { x: 20, y: 15, r: 60 },
    { x: 70, y: 25, r: 45 },
    { x: 40, y: 60, r: 70 },
    { x: 75, y: 70, r: 35 },
    { x: 50, y: 45, r: 50 },
    { x: 15, y: 75, r: 30 },
  ];
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/15"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.r * 2,
            height: c.r * 2,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

/** Grid lattice with intersection dots */
function PatternGrid({ gradientClass }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
      {/* Horizontal lines */}
      {[20, 40, 60, 80].map((y) => (
        <div
          key={`h${y}`}
          className="absolute w-full bg-white/15"
          style={{ height: 2, top: `${y}%` }}
        />
      ))}
      {/* Vertical lines */}
      {[25, 50, 75].map((x) => (
        <div
          key={`v${x}`}
          className="absolute h-full bg-white/15"
          style={{ width: 2, left: `${x}%` }}
        />
      ))}
      {/* Intersection dots */}
      {[20, 40, 60, 80].flatMap((y) =>
        [25, 50, 75].map((x) => (
          <div
            key={`d${x}-${y}`}
            className="absolute rounded-full bg-white/40"
            style={{
              width: 6,
              height: 6,
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))
      )}
    </div>
  );
}

const PATTERNS = [
  PatternConcentric,
  PatternDiagonal,
  PatternBubbles,
  PatternGrid,
];

/* ───────────────────────────────────────────
   Interactive Folder Gallery
   ─────────────────────────────────────────── */

export default function InteractiveFolderGallery({
  projects = [],
  folderName = "Projects.folder",
  dragHintText = "Drag any card down to close",
  className,
}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-16 relative ${className || ""}`}>
      <div className="relative w-full min-h-[550px] flex flex-col items-center justify-center">

        {/* Background folder silhouette */}
        <div className="relative w-[400px] h-[500px] flex justify-center pointer-events-none z-0">
          <motion.div
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-linear-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-linear-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          {/* Project cards */}
          <div className="absolute bottom-10 z-10 flex justify-center">
            {projects.map((project, i) => {
              const offset = i - Math.floor(projects.length / 2);
              const PatternComponent = PATTERNS[i % PATTERNS.length];

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -120;
              const openX = offset * 135;
              const openRotate = 0;
              const openScale = 1.05;

              return (
                <motion.div
                  key={project.title}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-56 h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20 origin-bottom ${
                    isFolderOpen
                      ? "cursor-grab active:cursor-grabbing pointer-events-auto"
                      : "pointer-events-none"
                  }`}
                  animate={
                    !isFolderOpen
                      ? {
                          y: stackY,
                          x: stackX,
                          rotate: stackRotate,
                          scale: stackScale,
                          zIndex: i + 10,
                        }
                      : {
                          y: openY,
                          x: openX,
                          rotate: openRotate,
                          scale: openScale,
                          zIndex: 50,
                        }
                  }
                  whileHover={
                    isFolderOpen
                      ? { scale: openScale + 0.05, zIndex: 100 }
                      : {}
                  }
                  whileDrag={
                    isFolderOpen
                      ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 }
                      : {}
                  }
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {/* Geometric pattern background */}
                  <PatternComponent gradientClass={project.color} />

                  {/* Project title overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <p className="text-white font-medium text-base leading-tight">
                      {project.title}
                    </p>
                    <p className="text-white/60 text-xs mt-1 line-clamp-2 leading-snug">
                      {project.description}
                    </p>
                  </div>

                  {/* Clickable overlay when open — goes to GitHub */}
                  {isFolderOpen && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="View source"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Folder tab — click to open */}
          <motion.div
            className="absolute bottom-0 w-[340px] h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-linear-to-b from-[#2a2a2a] to-[#111] rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

              <div className="px-5 py-2.5 bg-black rounded-lg border border-black/80 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Drag hint */}
        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-10 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/50 dark:text-white/50 text-sm font-medium uppercase tracking-widest pointer-events-none"
        >
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}
