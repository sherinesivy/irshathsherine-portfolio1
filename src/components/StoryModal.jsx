import "../styles/StoriesBar.css"

function StoryModal({ story, onClose }) {
  return (
    <div className="storyOverlay" onClick={onClose}>
      <div className="storyModal" onClick={(e) => e.stopPropagation()}>
        <button className="storyClose" onClick={onClose}>✕</button>
        <div className="storyModalEmoji">{story.emoji}</div>
        <p className="storyModalDate">{story.date}</p>
        <h2 className="storyModalTitle">{story.title}</h2>
        <p className="storyModalContent">{story.content}</p>
      </div>
    </div>
  )
}

export default StoryModal