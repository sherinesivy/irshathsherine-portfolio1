import { useState } from "react"
import "../styles/ProjectCard.css"


function ProjectCard({ project }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalSlides = project.images.length

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  return (
    <>
      <div className="projectCard" onClick={() => setIsModalOpen(true)}>

        {/* Image Carousel */}
        <div className="cardImageWrapper">
          {project.images[currentSlide] ? (
            <img
              src={project.images[currentSlide]}
              alt={project.title}
              className="cardImage"
            />
          ) : (
            <div className="cardImagePlaceholder">
              <span className="placeholderEmoji">🖥️</span>
              <span className="placeholderText">{project.title}</span>
            </div>
          )}

          {/* Carousel Controls */}
          {totalSlides > 1 && (
            <>
              <button className="slideBtn prev" onClick={handlePrev}>‹</button>
              <button className="slideBtn next" onClick={handleNext}>›</button>
              <div className="slideDots">
                {project.images.map((_, i) => (
                  <span
                    key={i}
                    className={`slideDot ${i === currentSlide ? "active" : ""}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Footer */}
        <div className="cardFooter">
          <div className="cardTitleRow">
            <span className="cardTitle">{project.title}</span>
            <span className="cardDate">{project.date}</span>
          </div>
          <div className="cardTechRow">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="techPill">{tech}</span>
            ))}
            {project.techStack.length > 3 && (
              <span className="techPill muted">+{project.techStack.length - 3}</span>
            )}
          </div>
        </div>

      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="cardOverlay" onClick={() => setIsModalOpen(false)}>
          <div className="cardModal" onClick={(e) => e.stopPropagation()}>
            <button className="cardModalClose" onClick={() => setIsModalOpen(false)}>✕</button>

            {/* Modal Image */}
            {/* Modal Image */}
<div className="modalImageWrapper">
  {project.images[currentSlide] ? (
    <img src={project.images[currentSlide]} alt={project.title} className="modalImage" />
  ) : (
    <div className="modalImagePlaceholder">
      <span className="placeholderEmoji large">🖥️</span>
    </div>
  )}

  {totalSlides > 1 && (
    <>
      <button className="slideBtn prev" onClick={handlePrev}>‹</button>
      <button className="slideBtn next" onClick={handleNext}>›</button>
      <div className="slideDots">
        {project.images.map((_, i) => (
          <span
            key={i}
            className={`slideDot ${i === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </>
  )}
</div>
            {/* Modal Info */}
            <div className="modalInfo">
              <div className="modalTitleRow">
                <h2 className="modalTitle">{project.title}</h2>
                <span className="modalDate">{project.date}</span>
              </div>

              <p className="modalDescription">{project.description}</p>

              <div className="modalTechRow">
                {project.techStack.map((tech) => (
                  <span key={tech} className="techPill">{tech}</span>
                ))}
              </div>

              <div className="modalLinks">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="modalLink github"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
                {project.vercel && (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noreferrer"
                    className="modalLink vercel"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard