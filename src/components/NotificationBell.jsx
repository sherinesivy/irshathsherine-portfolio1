import { useRef, useEffect } from "react"
import "../styles/NotificationBell.css"

const notifications = [
  { id: 1, text: "A recruiter saved your profile " },
  { id: 2, text: "Inspira got 847 likes " },
  { id: 3, text: "sherinesivy — your code is clean" },
  { id: 4, text: "3 companies are interested in your profile" },
  { id: 5, text: "Your commit streak is immaculate " },
]

function NotificationBell({ isOpen, setIsOpen }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setIsOpen])

  return (
    <div className="bellWrapper" ref={ref}>
      <button className="bellBtn" onClick={() => setIsOpen(!isOpen)}>
        🔔
        <span className="bellBadge">5</span>
      </button>

      {isOpen && (
        <div className="notifDropdown">
          <p className="notifHeader">Notifications</p>
          {notifications.map((n) => (
            <div key={n.id} className="notifItem">
              <span className="notifDot" />
              <span>{n.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NotificationBell