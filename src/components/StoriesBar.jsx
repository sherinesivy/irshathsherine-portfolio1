import { useState } from "react"
import StoryModal from "./StoryModal"
import "../styles/StoriesBar.css"

const stories = [
  {
    id: 1,
    label: "Feb '25",
    emoji: "🎬",
    title: "Movie Finder",
    content: "Deployed my first API-connected project. Fetching live TMDB data with Vanilla JS felt like actual magic.",
    date: "February 2025"
  },
  {
    id: 2,
    label: "Feb '25",
    emoji: "💸",
    title: "Expense Tracker",
    content: "Built a full donut chart from scratch using Recharts. First time making data actually look beautiful.",
    date: "February 2025"
  },
  {
    id: 3,
    label: "Mar '25",
    emoji: "🌸",
    title: "The Pink Attic",
    content: "My first e-commerce build. Cart logic, Context API, product filtering — React started clicking here.",
    date: "March 2025"
  },
  {
    id: 4,
    label: "Mar '25",
    emoji: "📓",
    title: "My Journal",
    content: "Built a full rich text editor with TipTap. This one felt like shipping a real product.",
    date: "March 2025"
  },
  {
    id: 5,
    label: "Mar '25",
    emoji: "👗",
    title: "Cher's Closet",
    content: "Recreated a 1995 UI in 2025. The most fun I've had building anything — cheetah print included.",
    date: "March 2025"
  },
  {
    id: 6,
    label: "Apr '25",
    emoji: "🎨",
    title: "Paletto",
    content: "First time integrating an AI API. Watching LLaMA generate colour palettes in real time was unreal.",
    date: "April 2025"
  },
  {
    id: 7,
    label: "Apr '25",
    emoji: "✨",
    title: "Inspira",
    content: "Full MERN stack. JWT, Google OAuth, email verification, Cloudinary. The one that proved I could do backend.",
    date: "April 2025"
  },
  {
    id: 8,
    label: "Apr '25",
    emoji: "🗂️",
    title: "Portfolio",
    content: "Built my portfolio as an Instagram clone because why not. You're looking at it right now.",
    date: "April 2025"
  }
]

function StoriesBar() {
  const [activeStory, setActiveStory] = useState(null)

  return (
    <>
      <div className="storiesBar">
        {stories.map((story) => (
          <div
            key={story.id}
            className="storyItem"
            onClick={() => setActiveStory(story)}
          >
            <div className="storyRing">
              <div className="storyInner">
                <span className="storyEmoji">{story.emoji}</span>
              </div>
            </div>
            <span className="storyLabel">{story.label}</span>
          </div>
        ))}
      </div>

      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}
    </>
  )
}

export default StoriesBar