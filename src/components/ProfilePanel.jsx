import { useState } from "react"
import "../styles/ProfilePanel.css"
import { GitBranch, Mail, Triangle, MessageCircleMore, Phone} from 'lucide-react';

function ProfilePanel() {
  const [copied, setCopied] = useState(false)

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText("+918220786512")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/918220786512", "_blank")
  }

  const handleGmail = () => {
    window.open("mailto:irshathsherine@gmail.com", "_blank")
  }

  const handleGithub = () => {
    window.open("https://github.com/sherinesivy", "_blank")
  }

  const handleVercel = () => {
    window.open("https://vercel.com/sherines-projects-5fad8435", "_blank")
  }

  return (
    <div className="profilePanel">

      {/* Profile Pic */}
      <div className="profilePicWrapper">
        <img
          src="/profile.jpg"
          alt="Sherine"
          className="profilePic"
          onError={(e) => e.target.style.display = "none"}
        />
      </div>

      {/* Name + Verified */}
      <div className="profileName">
        <span>sherinesivy</span>
        <span className="verifiedBadge">✔</span>
      </div>

      {/* Title */}
      <p className="profileTitle">Full Stack Developer</p>

      {/* Stats */}
      <div className="profileStats">
        <div className="stat">
          <span className="statNumber">7</span>
          <span className="statLabel">projects</span>
        </div>
        <div className="stat">
          <span className="statNumber">13</span>
          <span className="statLabel">following</span>
        </div>
        <div className="stat">
          <span className="statNumber">18</span>
          <span className="statLabel">followers</span>
        </div>
      </div>

      {/* Bio / Skills */}
      <div className="profileBio">
        <p>React · Node.js · MongoDB · Express</p>
        <p>CSS · Vite</p>
        <p>JWT · OAuth · Cloudinary</p>
        <p>Chennai, India</p>
      </div>

      {/* Contact Actions */}
      <div className="contactActions">
        <button className="contactBtn secondary" onClick={handleGithub}>
          <GitBranch /> GitHub
        </button>
        <button className="contactBtn secondary" onClick={handleVercel}>
          <Triangle />Vercel
        </button>
      </div>

      {/* Contact Links */}
      <div className="contactLinks">
        <div className="contactLink" onClick={handlePhoneCopy}>
          <span><Phone /></span>
          <span>{copied ? "Copied!" : "+91 82207 86512"}</span>
        </div>
        <div className="contactLink" onClick={handleWhatsApp}>
          <span><MessageCircleMore /></span>
          <span>WhatsApp</span>
        </div>
        <div className="contactLink" onClick={handleGmail}>
          <span><Mail /></span>
          <span>irshathsherine@gmail.com</span>
        </div>
      </div>

    </div>
  )
}

export default ProfilePanel