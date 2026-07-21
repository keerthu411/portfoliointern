import React from "react";
import "./index.css";
import "./app.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          Keerthana Lekshmi S L<span></span>
        </h2>a

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-text">

          <p className="welcome">
            Hello, I'm
          </p>

          <h1>
            KEERTHANA
            <br />
            LEKSHMI S L
          </h1>

          <h3>
            B.Tech Information Technology Student
          </h3>


          <p>
            Passionate developer building intelligent web applications,
            AI-powered solutions and user-focused digital experiences.
          </p>


          <div className="hero-buttons">

            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-card">

          <div className="profile-box">

            <div className="circle">
              KL
            </div>

            <h3>
              Full Stack Developer
            </h3>

            <p>
             HTML | CSS | React | Node.js 
            </p>

          </div>

        </div>

      </section>



      {/* About Section */}
      <section id="about" className="section">

        <h2>
          About Me
        </h2>


        <div className="about-content">

          <p>
            I am a B.Tech Information Technology student at Government
            Engineering College Idukki. I enjoy developing real-world
            applications that solve practical problems using modern
            technologies.
          </p>


          <p>
            My interests include Artificial Intelligence, Machine Learning,
            Web Development, Data Science and building innovative systems
            that automate human tasks.
          </p>


        </div>

      </section>



      {/* Education Section */}
      <section className="section">

        <h2>
          Education
        </h2>


        <div className="card">

          <h3>
            B.Tech Information Technology
          </h3>

          <p>
            Government Engineering College Idukki
          </p>

          <span>
            2023 - 2027
          </span>

        </div>


      </section>

      {/* Skills Section */}
      <section id="skills" className="section">

        <h2>
          Technical Skills
        </h2>


        <div className="skills-container">


          <div className="skill-card">
            <h3>Frontend</h3>
            <p>
              HTML5, CSS3, JavaScript, React.js,
              Tailwind CSS, Responsive Design
            </p>
          </div>


          <div className="skill-card">
            <h3>Backend</h3>
            <p>
              Node.js,
              MongoDB, Firebase
            </p>
          </div>


          <div className="skill-card">
            <h3>Programming</h3>
            <p>
              Python, C, Data Structures,
              Problem Solving
            </p>
          </div>


          <div className="skill-card">
            <h3>AI & Data Science</h3>
            <p>
              Machine Learning,
              AI Models, Prompt Engineering
            </p>
          </div>


          <div className="skill-card">
            <h3>Tools</h3>
            <p>
              Git, GitHub, VS Code,
              AWS Basics
            </p>
          </div>


        </div>

      </section>





      {/* Projects Section */}
      <section id="projects" className="section">


        <h2>
          Projects
        </h2>


        <div className="projects-container">



          {/* Project 1 */}
          <div className="project-card">


            <h3>
              Smart Timetable Generator
            </h3>


            <p>
              AI-based timetable management system that automatically
              generates conflict-free schedules using faculty workload,
              subject allocation and classroom constraints.
            </p>


            <div className="tech">
              React | Node.js | Express | MongoDB
            </div>


          </div>





          {/* Project 2 */}
          <div className="project-card">


            <h3>
              BrownBelle E-Commerce
            </h3>


            <p>
              A modern fashion e-commerce platform featuring product
              management, authentication, shopping cart and admin
              dashboard functionality.
            </p>


            <div className="tech">
              React | Node.js | MongoDB | Express
            </div>


          </div>





          {/* Project 3 */}
          <div className="project-card">


            <h3>
              Smart Notes Pro
            </h3>


            <p>
              Digital notes management application that helps students
              organize, search and manage academic resources efficiently.
            </p>


            <div className="tech">
              React | Firebase
            </div>


          </div>





          {/* Project 4 */}
          <div className="project-card">


            <h3>
              CineVerse
            </h3>


            <p>
              Movie discovery application providing movie information,
              search functionality and interactive user experience.
            </p>


            <div className="tech">
              React | API Integration
            </div>


          </div>





          {/* Project 5 */}
          <div className="project-card">


            <h3>
              React Firebase Chat
            </h3>


            <p>
              Real-time messaging application with authentication and
              cloud-based chat functionality.
            </p>


            <div className="tech">
              React | Firebase | Firestore
            </div>


          </div>





          {/* Project 6 */}
          <div className="project-card">


            <h3>
              YouTube Clone
            </h3>


            <p>
              Video streaming interface developed to replicate modern
              video platforms with search and playback features.
            </p>


            <div className="tech">
              React | Material UI | API
            </div>


          </div>


        </div>


      </section>





      {/* Certifications Section */}

      <section className="section">


        <h2>
          Certifications & Experience
        </h2>



        <div className="certificate-container">



          <div className="certificate-card">

            <h3>
              Cybersecurity Internship
            </h3>

            <p>
              CyberGyan Internship Program
            </p>

          </div>




          <div className="certificate-card">

            <h3>
              Data Science Internship
            </h3>

            <p>
              Corizo Internship Program
            </p>

          </div>




          <div className="certificate-card">

            <h3>
              IBM Data Science Certification
            </h3>

            <p>
              Coursera Professional Certificate
            </p>

          </div>




          <div className="certificate-card">

            <h3>
              μLearn Community
            </h3>

            <p>
              Technical Community Participation
            </p>

          </div>



        </div>



      </section>
            {/* Contact Section */}

      <section id="contact" className="section contact">


        <h2>
          Let's Connect
        </h2>


        <p>
          Interested in collaboration, internships or innovative
          technology projects? Feel free to reach out.
        </p>



        <div className="contact-buttons">


          <a 
            href="mailto:keerthanalekshmi@example.com"
            className="btn"
          >
            Email Me
          </a>



          <a
            href="https://github.com/keerthu411"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>



          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>



        </div>


      </section>

      {/* Footer */}

      <footer>


        <h3>
          Keerthana Lekshmi S L
        </h3>


        <p>
          Building creative solutions with technology.
        </p>


        <div className="footer-links">


          <a href="#home">
            Home
          </a>


          <a href="#projects">
            Projects
          </a>


          <a href="#contact">
            Contact
          </a>


        </div>



        <p className="copyright">

          © {new Date().getFullYear()} Keerthana.
          All rights reserved.

        </p>



      </footer>


    </div>
  );
}


export default App;