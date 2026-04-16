import { useState } from "react"
import { useEffect } from "react"
import ProfilePanel from "./components/ProfilePanel"
import ProjectsGrid from "./components/ProjectsGrid"
import NotificationBell from "./components/NotificationBell"
import "./styles/App.css"

function App() {
  const [notifOpen, setNotifOpen] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div className="appContainer">
      <div className="topBar">
        <button className="themeToggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <NotificationBell isOpen={notifOpen} setIsOpen={setNotifOpen} />
      </div>
      <br/>
      <br/>
      <div className="mainLayout">
        <div className="profileSide">
          <ProfilePanel />
        </div>
        <div className="divider" />
        <div className="projectsSide">
          <ProjectsGrid />
        </div>
      </div>
    </div>
  )
}

export default App