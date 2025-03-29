'use client'
import React from 'react'
import './ProjectCard.css'
// import { FaStar, FaCodeBranch } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.name}</h2>
      <img src={project.imgURL[0]} className='projectImage' alt={project.name} />
      <p className="project-description">{project.description}</p>
      <div className="project-languages">
        {project.languages.map((lang, index) => (
          <span key={index} className="language">
            {lang}
          </span>
        ))}
      </div>
      <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  )
}

// Example usage
function Apps() {
  const sampleProject = [
{
    name: "Online Furniture Store",
    description: "An ecommerce store",
    stars: 1337,
    forks: 42,
    languages: ["NextJS", "CSS"],
    imgURL: ['/thegarageswart.png'],
    url: "https://the-garage-swart.vercel.app/"
  },
{
    name: "Color Scheme Generator",
    description: "Generate color scheme for your next project",
    languages: ["HTML", "CSS", "JavaScript", "Rest API"],
    imgURL: ['/colorscheme.png'],
    url: "https://color-scheme-pearl.vercel.app/"
  },
{
    name: "Analytics Dashboard",
    description: "Project from a challenge on X (twitter)",
    languages: ["HTML", "CSS", "JavaScript"],
    imgURL: ['/analyticsdashboard.png'],
    url: "https://ayscript.github.io/Analytics-Dashboard/"
  },
{
    name: "Computer Repair Website",
    description: "A platform to keep track of computers been repaired",
    languages: ["NextJS", "Tailwind", "TypeScript", "Firebase"],
    imgURL: ['/edpproject.png'],
    url: "https://edpproject.vercel.app/"
  },
{
    name: "Bored BOT",
    description: "Feeling bored? consult this BOT to find what you can do",
    languages: ["HTML", "CSS", "JavaScript", "Rest API"],
    imgURL: ['/boredbot.png'],
    url: "https://ayscript.github.io/boredbot/"
  },
{
    name: "FUNAAB Tech School",
    description: "A Landing page for an imaginary school",
    languages: ["HTML", "CSS"],
    imgURL: ['/funaabschool.png'],
    url: "https://ayscript.github.io/Group8/"
  },
{
    name: "Password Generator",
    description: "Generate a random password never use an insecure password again",
    languages: ["HTML", "CSS", "JavaScript"],
    imgURL: ['/randompassword.png'],
    url: "https://ayscript.github.io/password-generator/"
  },
{
    name: "Music App",
    description: "A simple music player built with Vanilla JavaScript",
    languages: ["HTML", "CSS", "JavaScript"],
    imgURL: ['/music.png'],
    url: "https://mucic-app.vercel.app/"
  },
{
    name: "Travel Journal",
    description: "One of Scrimba's solo projects",
    languages: ["React", "CSS"],
    imgURL: ['/travel.png'],
    url: "https://travel-journal-pi-silk.vercel.app/"
  },
{
    name: "Profile Card",
    description: "A single page website about my self and my goal in tech",
    languages: ["HTML", "CSS", "JavaScript"],
    imgURL: ['/profilecard.png'],
    url: "https://hngtask1-nine.vercel.app/"
  },
{
    name: "Image Slider",
    description: "A simple image slider",
    languages: ["HTML", "CSS", "JavaScript"],
    imgURL: ['/slide.png'],
    url: "https://ayscript.github.io/imageSlide/"
  },
{
    name: "My Portfolio Webpage",
    description: "The webpage you are currently on",
    languages: ["React", "CSS", "JavaScript"],
    imgURL: ['/portfolio.png'],
    url: "/"
  },
]

  const outputSampleproject = sampleProject.map(e => <ProjectCard project={e} key={e.url} />)

  return (
    <div className="app">
      {outputSampleproject}
    </div>
  )
}


export { Apps }