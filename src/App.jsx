import "./App.css";
import Porfile from "./assets/photo.png";
import Project1 from "./assets/shopper.png";
import Project2 from "./assets/marionve.PNG";
import Project3 from "./assets/agency.PNG";
import Project4 from "./assets/farfalla.PNG";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Preview from "./assets/preview.svg";
import Git from "./assets/github.svg"

import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Junior Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Junior Junco,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                creator of interactive and functional user interfaces. I have the ability to 
                learn and develop in any area of work to meet the necessary requirements of this. I have skills in
                technological tools such as: HTML, CSS, JAVASCRIPT, JAVA, SQL
                </p>
                <a href="/cv.pdf" download="cv.pdf">
          <button className="px-8 py-5 mt-5 bg-white text-black rounded-full shadow-lg shadow-gray-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            Download resume
          </button> </a>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Shopper/Ecommerce
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Reactjs, Nodejs, MongoDB... 
                </p>
                <div className="flex mt-12 gap-2">
                <a href="https://frontend-five-fawn-95.vercel.app/">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t">
                  <img src={Preview} alt="Live preview icon" className="h-6 w-6" />
                  </button>



                  </a>
                  <a href="https://github.com/juniorjunco/Ecommerce-FullStack.git">
                  <button className="flex-1 text-sm py-3">
                  <img src={Git} alt="git" className="h-6 w-6" />
                  </button>
                  </a>
                 
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 Marion Ve
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/JavaScript  . HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                <a href="https://marionve.com/">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t">
                  <img src={Preview} alt="Live preview icon" className="h-6 w-6" />
                  </button>



                  </a>
                  <a href="https://github.com/juniorjunco/blog-pro">
                  <button className="flex-1 text-sm py-3">
                  <img src={Git} alt="git" className="h-6 w-6" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Agency inc.
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/ Javascrip
                  . HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12">
                <a href="https://agency-inc.netlify.app/#home">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t">
                  <img src={Preview} alt="Live preview icon" className="h-6 w-6" />
                  </button>

                  </a>
                  <a href="https://github.com/juniorjunco/agency-inc">
                  <button className="flex-1 text-sm py-3">
                  <img src={Git} alt="git" className="h-6 w-6" />
                  </button>
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Farfalla 
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS/Javascript . HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex gap-2 mt-12">
                <a href="https://farfallapizzeria.netlify.app/">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t">
                  <img src={Preview} alt="Live preview icon" className="h-6 w-6" />
                  </button>

                  </a>
                  <a href="https://github.com/juniorjunco/farfalla">
                  <button className="flex-1 text-sm py-3">
                  <img src={Git} alt="git" className="h-6 w-6" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, Data Structures
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node JS</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">ReactJS</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[67%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">MongoDB</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 Express
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MySQL
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B1 english
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MS Office
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <h3><span> Universidad Tecnológica de Bolívar  </span></h3>
                <p> 
                  software development course
                    
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <h3><span> FreeCodeCamp  </span></h3>
                <p>
                 <p>JavaScript Algorithms and Data Structures </p> 
                  <p>Frontend Development Libraries </p> 
                 <p>Data Visualization </p> 
                 <p>Relational Database </p> 
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <h3><span> Universidad de Cartagena </span></h3>
                <p>
                  Software Engineer (in process... )
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Juniorjunco</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/juniorjunco">
                  <img src={Git} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/junior-junco-39666b250/">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
               
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
