import StoriesBar from "./StoriesBar"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects"
import "../styles/ProjectsGrid.css"
import "../styles/ProjectCard.css"

function ProjectsGrid() {
  return (
    <div className="projectsGrid">

      {/* Stories */}
      

      {/* Grid */}
      <div className="gridLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Coming Soon Card */}
        <div className="comingSoonCard">
          <div className="comingSoonInner">
            <span className="comingSoonIcon">🔒</span>
            <span className="comingSoonText">More projects coming soon</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectsGrid