import { useState ,useEffect} from 'react';
import { Menu, X, Linkedin, Github, Facebook, Download, Instagram } from 'lucide-react';
import Typewriter from 'typewriter-effect'; 
import Myself from "./image/Adhavan.jpg";
import { useLocation } from 'react-router-dom';

export default function DarkPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
    
    <div className="min-h-screen bg-gray-900 text-gray-100 bg-[url('/BGI1.jpg')] bg-center">
      <nav className="fixed top-0 right-0 h-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-400 fixed top-6 left-10 h-16 hover:tracking-wider transition-all">Portfolio</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      <a
        href="#home"
        onClick={() => handleLinkClick('#home')}
        className={`${
          activeLink === '#home' ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-200'
        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
      >
        HOME
      </a>

      <a
        href="#about"
        onClick={() => handleLinkClick('#about')}
        className={`${
          activeLink === '#about' ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-200'
        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
      >
        ABOUT ME
      </a>

      <a
        href="#skills"
        onClick={() => handleLinkClick('#skills')}
        className={`${
          activeLink === '#skills' ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-200'
        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
      >
        SKILLS
      </a>

      <a
        href="#project"
        onClick={() => handleLinkClick('#project')}
        className={`${
          activeLink === '#project' ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-200'
        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
      >
        PROJECT
      </a>

      <a
        href="#contact"
        onClick={() => handleLinkClick('#contact')}
        className={`${
          activeLink === '#contact' ? 'border-indigo-500 text-white' : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-200'
        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
      >
        CONTACT
      </a>
    </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#home" className="bg-gray-900 text-white block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium">
                HOME
              </a>
              <a href="#about" className="border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                ABOUT ME
              </a>
              <a href="#skills" className="border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                SKILLS
              </a>
              <a href="#project" className="border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                PROJECT
              </a>
              <a href="#contact" className="border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                CONTACT
              </a>
            </div>
          </div>
        )}
        
      </nav>

      <main>
        <section id="home" className="pt-40 h-screen ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-4xl font-bold leading-7 text-white sm:text-5xl sm:truncate">
                  Hello, It's Me
                </h2>
                <h1 className="mt-2 text-4xl font-extrabold text-indigo-400 sm:text-5xl">
                  Adhavan
                </h1>
                <p className="mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl">
                  And I'm a <span className="text-indigo-400 font-semibold">
                    <Typewriter
                      options={{
                        strings: ["Full Stack Developer", "Software Engineer", "Coder"],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                        deleteSpeed: 120,
                      }}
                    />
                  </span>
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  I am passionate about lecturing and have a proven track record of maintaining 
                  high student evaluation ratings, demonstrating effective communication and teaching skills. 
                  I am excited to bring my emotional intelligence, language skills (LSRW), and decision-making 
                  abilities to your organization, helping drive your success.
                </p>
                <div className="mt-5 flex space-x-4">
                  <a href="https://www.linkedin.com/in/adhavanmariapushparaj/" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a href="https://github.com/iamAdhavan" className="text-gray-400 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a href="https://www.facebook.com/m.p.adhavan.75/" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a href="https://www.instagram.com/i_am_havocadhavan/" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div className="mt-5">  
                  <a
                 
                    
                    href={'Adhavan.pdf'} // Path to the CV in the public folder
                    download = "Adhavan.pdf" // <!--This attribute forces the browser to download the file-->
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Download CV
                    <Download className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="mt-5 lg:mt-0 lg:ml-4">
                <img
                  src={Myself}
                  alt="Adhavan"
                  className="rounded-full w-64 h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 pt-48 h-screen bg-[url('/BGI1.jpg')]  bg-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  About <span className="text-indigo-400">Me</span>
                </h2>
                <h3 className="mt-2 text-2xl font-bold text-gray-200">
                  Full Stack Developer!
                </h3>
                <p className="mt-3 text-lg text-gray-300">
                  I am passionate about lecturing and have a proven track record of maintaining high student 
                  evaluation ratings, demonstrating effective communication and teaching skills. 
                  I am excited to bring my emotional intelligence, language skills (LSRW), 
                  and decision-making abilities to your organization, helping drive your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              My <span className="text-indigo-400">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Web Development</h3>
                <p className="mt-2 text-gray-300">HTML, CSS, JavaScript, React</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Programming Languages</h3>
                <p className="mt-2 text-gray-300">Python</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Databases</h3>
                <p className="mt-2 text-gray-300">MySQL, MongoDB</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Frameworks</h3>
                <p className="mt-2 text-gray-300">Django</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Tools</h3>
                <p className="mt-2 text-gray-300">Git</p>
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="py-20 h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              My <span className="text-indigo-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Project 1</h3>
                <p className="mt-2 text-gray-300">Description of Project 1 goes here.</p>
                <a href="#" className="text-indigo-400 hover:underline mt-4 inline-block">View Project</a>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Project 2</h3>
                <p className="mt-2 text-gray-300">Description of Project 2 goes here.</p>
                <a href="#" className="text-indigo-400 hover:underline mt-4 inline-block">View Project</a>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white">Project 3</h3>
                <p className="mt-2 text-gray-300">Description of Project 3 goes here.</p>
                <a href="#" className="text-indigo-400 hover:underline mt-4 inline-block">View Project</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className=" py-20 h-screen md:w-1/2 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Contact <span className="text-indigo-400">Me</span>
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              If you would like to get in touch, feel free to reach out!
            </p>
            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="mt-1 text-black block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
    
  );
}
