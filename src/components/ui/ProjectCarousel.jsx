import { motion } from 'framer-motion'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { GITHUB_PATH, SocialIcon } from '../../icons'

export default function ProjectCarousel({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <Swiper
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
        {projects.map((project, index) => (
          <SwiperSlide key={project.title}>
            <div className="border border-[#abb2bf]/40 flex flex-col bg-[#1a1b26] overflow-hidden">
              {/* Image area */}
              <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20 bg-[#282C33]" />
                    <div className="absolute bottom-2 left-2 text-xs text-white/60">
                      {project.title}.png
                    </div>
                  </>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 p-2 border-b border-[#abb2bf]/40">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-base text-[#abb2bf] font-normal">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-4 flex-1">
                <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                <p className="text-base text-[#abb2bf] leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#C778DD] px-4 py-2 text-white font-medium text-base hover:bg-[#C778DD]/10 transition-colors flex items-center gap-2"
                  >
                    <SocialIcon path={GITHUB_PATH} className="w-5 h-5" />
                    GitHub
                  </a>
                  {project.extraLinks?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#abb2bf]/40 px-4 py-2 text-[#abb2bf] font-medium text-base hover:border-[#c778dd]/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
