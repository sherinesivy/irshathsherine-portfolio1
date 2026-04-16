import movieFinder1 from "../assets/movie finder 1.png"
import movieFinder2 from "../assets/movie finder 2.png"
import movieFinder3 from "../assets/movie finder 3.png"
import movieFinder4 from "../assets/movie finder 4.png"
import movieFinder5 from "../assets/movie finder 5.png"

import expenseTracker1 from "../assets/expense tracker 1.png"
import expenseTracker2 from "../assets/expense tracker 2.png"     
import expenseTracker3 from "../assets/expense tracker 3.png"
import expenseTracker4 from "../assets/expense tracker 4.png"
import expenseTracker5 from "../assets/expense tracker 5.png"

import pinkAttic1 from "../assets/the pink attic 1.png"
import pinkAttic2 from "../assets/the pink attic 2.png"
import pinkAttic3 from "../assets/the pink attic 3.png"
import pinkAttic4 from "../assets/the pink attic 4.png"
import pinkAttic5 from "../assets/the pink attic 5.png"

import myJournal1 from "../assets/my journal 1.png"
import myJournal2 from "../assets/my journal 2.png"
import myJournal3 from "../assets/my journal 3.png"
import myJournal4 from "../assets/my journal 4.png"
import myJournal5 from "../assets/my journal 5.png"

import chersCloset1 from "../assets/chers closet 1.png"
import chersCloset2 from "../assets/chers closet 2.png"
import chersCloset3 from "../assets/chers closet 3.png"
import chersCloset4 from "../assets/chers closet 4.png"
import chersCloset5 from "../assets/chers closet 5.png"

import paletto1 from "../assets/colour palette 1.png"
import paletto2 from "../assets/colour palette 2.png"
import paletto3 from "../assets/colour palette 3.png"
import paletto4 from "../assets/colour palette 4.png"
import paletto5 from "../assets/colour palette 5.png"
import paletto6 from "../assets/colour palette 6.png"
import paletto7 from "../assets/colour palette 7.png"

import inspira1 from "../assets/Inspira 1.png"
import inspira2 from "../assets/Inspira 2.png"
import inspira3 from "../assets/Inspira 3.png"
import inspira4 from "../assets/Inspira 4.png"
import inspira5 from "../assets/Inspira 5.png"
import inspira6 from "../assets/Inspira 6.png"
import inspira7 from "../assets/Inspira 7.png"
import inspira8 from "../assets/Inspira 8.png"
import inspira9 from "../assets/Inspira 9.png"


const projects = [
  {
    id: 1,
    title: "Movie Finder",
    description: "A movie discovery web app built with Vanilla JavaScript, fetching live data from the TMDB API. Features search, paginated results, and a detailed movie modal — styled with a soft pink aesthetic.",
    techStack: ["JavaScript", "HTML5", "CSS3", "TMDB API"],
    github: "https://github.com/sherinesivy/js-movie-finder", 
    vercel: "https://js-movie-finder.vercel.app/",
    images: [movieFinder1, movieFinder2, movieFinder3, movieFinder4, movieFinder5],
    date: "Feb 2025"
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "A pretty aesthetic expense tracker built with React. Features income and expense management with a real-time donut chart, category-based spending breakdown, and a warm cozy UI.",
    techStack: ["React", "Recharts", "CSS", "localStorage"],
    github: "https://github.com/sherinesivy/expense-tracker",
    vercel: "https://expense-tracker-pearl-gamma-64.vercel.app/",
    images: [expenseTracker1, expenseTracker2, expenseTracker3, expenseTracker4, expenseTracker5],
    date: "Feb 2025"
  },
  {
    id: 3,
    title: "The Pink Attic",
    description: "A vintage thrift store e-commerce website built with React. Features a fully functional shopping cart, product filtering by category, and individual product detail pages with a soft romantic aesthetic.",
    techStack: ["React", "React Router DOM", "Context API", "CSS"],
    github: "https://github.com/sherinesivy/the-pink-attic",
    vercel: "https://the-pink-attic.vercel.app/",
    images: [pinkAttic1, pinkAttic2, pinkAttic3, pinkAttic4, pinkAttic5],
    date: "Mar 2025"
  },
  {
    id: 4,
    title: "My Journal",
    description: "A premium Notion-inspired personal journal app built with React. Features rich text editing, custom theme builder, tag system, and persistent storage — designed to feel like a real product.",
    techStack: ["React", "TipTap", "UUID", "CSS", "localStorage"],
    github: "https://github.com/sherinesivy/notion-style-journal-website",
    vercel: "https://notion-style-journal-website.vercel.app/",
    images: [myJournal1, myJournal2, myJournal3, myJournal4, myJournal5],
    date: "Mar 2025"
  },
  {
    id: 5,
    title: "Cher's Closet",
    description: "A Clueless-inspired virtual wardrobe app built with React and Vite. Faithfully recreates the iconic 1995 outfit planning software with a cheetah print aesthetic and retro Windows 95 UI elements.",
    techStack: ["React", "Vite", "UUID", "CSS", "localStorage"],
    github: "https://github.com/sherinesivy/cher-s-closet-clueless",
    vercel: "https://cher-s-closet-clueless.vercel.app/",
    images: [chersCloset1, chersCloset2, chersCloset3, chersCloset4, chersCloset5],
    date: "Mar 2025"
  },
  {
    id: 6,
    title: "Paletto",
    description: "A premium AI-powered colour palette generator built with React. Features multi-palette generation, live app theme switching, CSS export, and persistent favourites — designed with a dark romantic aesthetic.",
    techStack: ["React", "NVIDIA NIM API", "LLaMA 3.3 70B", "Vite", "CSS"],
    github: "https://github.com/sherinesivy/paletto",
    vercel: "https://paletto-eight.vercel.app/",
    images: [paletto1, paletto2, paletto3, paletto4, paletto5, paletto6, paletto7],
    date: "Apr 2025"
  },
  {
    id: 7,
    title: "Inspira",
    description: "A Pinterest-inspired visual discovery app built with the MERN stack. Features JWT auth, Google OAuth, email verification, Cloudinary image uploads, like system, and a masonry grid layout.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Passport.js", "JWT"],
    github: "https://github.com/sherinesivy/frontend-inspira",
    vercel: "https://frontend-inspira.vercel.app/",
    images: [inspira1, inspira2, inspira3, inspira4, inspira5, inspira6, inspira7, inspira8, inspira9],
    date: "Apr 2025"
  },
]

export default projects;