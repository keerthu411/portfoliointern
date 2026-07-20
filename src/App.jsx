import React, { useEffect } from 'react';
import './App.css';

function App() {
  // For scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Header with gradient */}
      <header className="profile-header fade-in">
        <div className="name-title">
          <h1 className="gradient-text">KEERTHANA LEKSHMI S L</h1>
          <div className="subhead">
            <span><i className="fas fa-graduation-cap"></i> Information Technology</span>
            <span><i className="fas fa-map-pin"></i> Kollam</span>
            <span><i className="fas fa-phone-alt"></i> 790902930</span>
            <span><i className="fas fa-envelope"></i> keerthanalekshmi41@gmail.com</span>
          </div>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/keerthana-lekshmi-s-l-4374b63a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:keerthanalekshmi41@gmail.com" aria-label="Email" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#" aria-label="GitHub" className="social-link">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </header>

      {/* Summary with gradient border */}
      <div className="card summary-card fade-in">
        <div className="section-title"><i className="fas fa-user-astronaut"></i> Summary</div>
        <div className="summary-text">
          Detail-oriented Information Technology student with a strong foundation in programming, web development, and problem solving. Experienced in building responsive web applications and developing academic projects. Interested in Artificial Intelligence and focused on creating efficient and practical technology solutions.
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid-2">
        {/* Left column */}
        <div className="left-column">
          {/* Education */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-university"></i> Education</div>
            <div className="item-list">
              <div className="item">
                <div className="item-header">
                  <span className="item-title">B.Tech in Information Technology</span>
                  <span className="item-date pulse">2021 – 2025</span>
                </div>
                <div className="item-sub">APJ Abdul Kalam Technological University (KTU), Kerala</div>
                <div className="item-status">Pursuing</div>
              </div>
              <div className="item">
                <div className="item-header">
                  <span className="item-title">Higher Secondary (Bio-Maths)</span>
                  <span className="item-date pulse">2021 – 2023</span>
                </div>
                <div className="item-sub">NGPM HSS Venchempu, Punalur</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-briefcase"></i> Experience</div>
            <div className="item-list">
              <div className="item item-hover">
                <div className="item-header">
                  <span className="item-title">Cybersecurity Intern</span>
                  <span className="item-date">03/2025 – 02/2025</span>
                </div>
                <div className="item-sub">Cybercy</div>
                <div className="item-desc">Gained exposure to cybersecurity concepts including network security, threat analysis, and basic data protection practices.</div>
              </div>
              <div className="item item-hover">
                <div className="item-header">
                  <span className="item-title">Data Science Intern</span>
                  <span className="item-date">10/2025 – 11/2025</span>
                </div>
                <div className="item-sub">Corizo</div>
                <div className="item-desc">Learned fundamentals of data science, including data analysis, preprocessing, and basic data-driven problem solving.</div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-certificate"></i> Certificates</div>
            <div className="item-list">
              <div className="item item-hover">
                <div className="item-header"><span className="item-title">Voice of Stakeholder (VOS) Training</span></div>
                <div className="item-desc">Young Innovators Program (K-DISC) — practical exposure to understanding user needs.</div>
              </div>
              <div className="item item-hover">
                <div className="item-header"><span className="item-title">Workshop on Anti-Drug Campaign</span></div>
                <div className="item-desc">Qnayds LLP — 2-day workshop focused on awareness & community initiatives.</div>
              </div>
              <div className="item item-hover">
                <div className="item-header"><span className="item-title">UxP: The Level Hunt</span></div>
                <div className="item-desc">uLearn GECI — technical event with problem-solving & collaborative challenges.</div>
              </div>
              <div className="item item-hover">
                <div className="item-header"><span className="item-title">Solving Problems with Creative & Critical Thinking</span></div>
                <div className="item-desc">IBM (Coursera) — logical problem solving & effective thinking.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          {/* Projects */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-code"></i> Projects</div>
            <div className="item-list">
              <div className="item item-hover">
                <div className="item-header"><span className="item-title gradient-text-light">College Department Website</span></div>
                <div className="item-desc">Responsive website showcasing department details, courses, and faculty. Built with HTML, CSS, JavaScript — clean UI & smooth navigation.</div>
              </div>
              <div className="item item-hover">
                <div className="item-header"><span className="item-title gradient-text-light">Smart Timetable Generator</span></div>
                <div className="item-desc">Web app to generate class timetables based on constraints. JavaScript + MongoDB, reducing manual effort.</div>
              </div>
            </div>
          </div>

          {/* Technical skills */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-cogs"></i> Technical Skills</div>
            <div className="skill-tags">
              <span className="skill-tag skill-glow">Responsive Web Design</span>
              <span className="skill-tag skill-glow">Basic UI Development</span>
              <span className="skill-tag skill-glow">Python</span>
              <span className="skill-tag skill-glow">Java</span>
              <span className="skill-tag skill-glow">HTML</span>
              <span className="skill-tag skill-glow">CSS</span>
              <span className="skill-tag skill-glow">JavaScript</span>
            </div>
            <div className="soft-skills-section">
              <div className="soft-skills-label">Soft Skills</div>
              <div className="skill-tags">
                <span className="skill-tag skill-glow">Problem-solving</span>
                <span className="skill-tag skill-glow">Team collaboration</span>
                <span className="skill-tag skill-glow">Project management</span>
              </div>
            </div>
          </div>

          {/* Volunteering */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-hands-helping"></i> Volunteering</div>
            <div className="volunteer-item item-hover">
              <strong>NSS Volunteer</strong> <span className="date-badge pulse">2021 – 2023</span>
              <div className="item-desc">Community service, social awareness, cleanliness drives, outreach — developed leadership & teamwork.</div>
            </div>
            <div className="volunteer-item item-hover">
              <strong>OASIS Pain & Palliative Care Club</strong>
              <div className="item-desc">Supported awareness and outreach activities, organizing programs and community initiatives.</div>
            </div>
          </div>

          {/* Languages */}
          <div className="card fade-in card-hover">
            <div className="section-title"><i className="fas fa-language"></i> Languages</div>
            <div>
              <span className="lang-tag lang-glow">Tamil</span>
              <span className="lang-tag lang-glow">English</span>
              <span className="lang-tag lang-glow">Hindi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-note floating">
        <i className="fas fa-code"></i> built with curiosity <span className="blinking-dot">✦</span>
      </div>
    </div>
  );
}

export default App;