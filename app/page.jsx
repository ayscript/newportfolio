import Moduletitle from "./components/Moduletitle";
import Header from "./components/Header";
import Hero from "./Hero";
import "./App.css";
import Image from "next/image"; // Ensure Image is imported from next/image
import { Apps } from "./components/ProjectCard";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function Page() {
  return (
    <>
      <Header />
      <Hero />
      <div className="aboutme">
        <Moduletitle />
        <div className="innerDivContainer">
          <div className="innerDiv">
            <div className="aboutBtn">About Me</div>
            <div className="aboutMetexts">
              <h1 className="name">Hello!</h1>
              My name is Ayomide and I specialize in web developement that
              utilizes <span className="name">HTML</span>,{" "}
              <span className="name">CSS</span>,{" "}
              <span className="name">JS</span>, and{" "}
              <span className="name">REACT</span>. I am a highly motivated
              individual and eternal optimist dedicated to writing clear,
              concise, robust code that works. Striving to never stop learning
              and improving. When I'm not coding, I am{" "}
              <span className="name">writing blogs</span>, reading, or watching
              some great movies. I like to have my perspective and belief
              systems challenged so that I see the world through new eyes.
            </div>
          </div>
          {/* Updated img tag */}
          <Image src="/assets/Image.png" alt="About Me Image" width={200} height={350} />
        </div>
      </div>
      <div className="skills">
        <Moduletitle
          title="Skills"
          texts="I am striving to never stop learning and improving"
        />
        <div className="skillcardContainer">
          <div className="skillcard">
            <svg
              width="22"
              height="30"
              viewBox="0 0 22 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9999 21.6666C10.2635 21.6666 9.66658 22.2635 9.66658 22.9999C9.66658 23.7363 10.2635 24.3333 10.9999 24.3333H11.0133C11.7496 24.3333 12.3466 23.7363 12.3466 22.9999C12.3466 22.2635 11.7496 21.6666 11.0133 21.6666H10.9999Z"
                fill="#292F36"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.33325 0.333252C2.12411 0.333252 0.333252 2.12411 0.333252 4.33325V25.6666C0.333252 27.8757 2.12411 29.6666 4.33325 29.6666H17.6666C19.8757 29.6666 21.6666 27.8757 21.6666 25.6666V4.33325C21.6666 2.12411 19.8757 0.333252 17.6666 0.333252H4.33325ZM2.99992 4.33325C2.99992 3.59687 3.59687 2.99992 4.33325 2.99992H17.6666C18.403 2.99992 18.9999 3.59687 18.9999 4.33325V25.6666C18.9999 26.403 18.403 26.9999 17.6666 26.9999H4.33325C3.59687 26.9999 2.99992 26.403 2.99992 25.6666V4.33325Z"
                fill="#292F36"
              />
            </svg>
            <h2>Responsive Design</h2>

            <p className="skillchain">html-css-js-react</p>
          </div>
          <div className="skillcard">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3333 22.0001H25.6666C27.8757 22.0001 29.6666 20.2092 29.6666 18.0001V4.66675C29.6666 2.45761 27.8757 0.666748 25.6666 0.666748H4.33325C2.12411 0.666748 0.333252 2.45761 0.333252 4.66675V18.0001C0.333252 20.2092 2.12411 22.0001 4.33325 22.0001H13.6666V24.6667H9.66658C8.93021 24.6667 8.33325 25.2637 8.33325 26.0001C8.33325 26.7365 8.93021 27.3334 9.66658 27.3334H20.3333C21.0696 27.3334 21.6666 26.7365 21.6666 26.0001C21.6666 25.2637 21.0696 24.6667 20.3333 24.6667H16.3333V22.0001ZM4.33325 3.33341C3.59687 3.33341 2.99992 3.93037 2.99992 4.66675V18.0001C2.99992 18.7365 3.59687 19.3334 4.33325 19.3334H25.6666C26.403 19.3334 26.9999 18.7365 26.9999 18.0001V4.66675C26.9999 3.93037 26.403 3.33341 25.6666 3.33341H4.33325Z"
                fill="#292F36"
              />
            </svg>

            <h2>Web Development</h2>
            <p className="skillchain">html-css-js-react</p>
          </div>
        </div>
        <div className="skillCircleContainer">
          {/* No img tags found in this section */}
        </div>
      </div>
      <Moduletitle
        title="Projects"
        texts="I had the pleasure of working with these projects."
      />
      <Apps />
      <Moduletitle
        title="Certifications"
        texts="Here is a collection of certifications I have earned."
      />
      <Certifications />
      <Footer />
      {/* <ProjectCard /> */}
      {/* <Blog /> */}
    </>
  );
}

export default Page;
