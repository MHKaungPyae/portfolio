import { useState } from 'react'
import { motion } from 'framer-motion'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { GITHUB_PATH, SocialIcon } from '../../icons'

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="glass rounded-2xl flex flex-col overflow-hidden card-hover">
      {/* Image area */}
      <div className="h-56 relative overflow-hidden">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-end p-3`}>
            <span className="text-xs text-white/60">{project.title}</span>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-gray-800">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="text-xs font-medium text-gray-400 bg-gray-900 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/20"
          >
            <SocialIcon path={GITHUB_PATH} className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProjectCarousel({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 40 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="project-carousel"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
