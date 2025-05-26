import "./App.css";
import Porfile from "./assets/photo.png";
import Project1 from "./assets/shopper.png";
import Project2 from "./assets/marionve.PNG";
import Project3 from "./assets/agency.PNG";
import Project4 from "./assets/farfalla.PNG";
import Project5 from "./assets/cursos.PNG"
import Project6 from "./assets/elegant.PNG"
import Project7 from "./assets/elkin.PNG"
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Preview from "./assets/preview.svg";
import Git from "./assets/github.svg"
import Whatsapp from "./assets/whatsapp.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


import { useEffect, useState } from "react";

function App() {
  // Estado para manejar el efecto de scroll
  const [scrolling, setScrolling] = useState(false);

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Función para manejar el scroll
  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Manejo del evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('¡Correo enviado exitosamente!');
        setFormData({ name: '', email: '', message: '' }); // Resetea el formulario
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error al enviar correo:', error);
      setStatus('Error al enviar el correo.');
    }
  };



  

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
                <a href="https://drive.google.com/file/d/1OyR3PTOq1641whkm2Dju1Lctc2QC_Vg_/view?usp=sharing" download>
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
        <section id="projects" className=" bg-gray- py-16 h-screen flex items-center">
  <div className="container mx-auto px-6 sm:px-12 h-full relative">
    <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
    <div className="relative h-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
      >
        {[ 
          { name: "Marion Ve", tech: "HTML5, CSS3 (SCSS), JavaScript", img: Project2, live: "https://marionve.com/", repo: "https://github.com/juniorjunco/blog-pro" },
          { name: "Elkin Torres", tech: "HTML5, CSS3 (SCSS), JavaScript", img: Project7, live: "https://elkintattoo.netlify.app/", repo: "https://github.com/juniorjunco/elkint" },
          { name: "Cursos Online", tech: "Reactjs, Nodejs, MongoDB", img: Project5, live: "https://cursos-online-sandy.vercel.app/", repo: "https://github.com/juniorjunco/backend-cursos-frank" },
          { name: "Elegant", tech: "Reactjs, Nodejs, MongoDB", img: Project6, live: "https://client-iota-vert.vercel.app/", repo: "https://ecommerceback01.vercel.app/" }
        ].map((project, index) => (
          <SwiperSlide key={index} className="h-full relative">
            <div className="relative h-full">
              <img src={project.img} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-6">
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <p className="text-gray-white text-sm mt-2">{project.tech}</p>
                <div className="flex justify-between mt-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                      <img src={Preview} alt="Live preview icon" className="h-6 w-6 mr-2" /> Live Preview
                    </button>
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center justify-center bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">
                      <img src={Git} alt="GitHub" className="h-6 w-6 mr-2" /> Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
        

      <main className="p-4">
        <section id="contact">
          <h2 className="text-center text-xl mb-4">Contact</h2>
          <form
  action="https://formspree.io/f/xleqqqge"
  method="POST"
  className="flex flex-col gap-4 max-w-md mx-auto"
>
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="p-2 border border-gray-300 rounded text-black"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="p-2 border border-gray-300 rounded text-black"
    required
  />
  <textarea
    name="message"
    placeholder="Write your message"
    className="p-2 border border-gray-300 rounded text-black"
    rows="4"
    required
  ></textarea>
  <button
    type="submit"
    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Send
  </button>
</form>


          {status && <p className="mt-4 text-center">{status}</p>}
        </section>
      </main>

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
              <a href="">
                  <img src={Whatsapp} className="w-5" />
                </a>
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
