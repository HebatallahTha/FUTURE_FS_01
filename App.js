import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>Hebatallah Tharhan</h1>
        <p>Software Engineering Student & Developer</p>
      </header>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm Hebatallah Tharhan, a passionate software engineering student
          dedicated to building innovative and efficient solutions. I am
          currently a sophomore and will graduate from the Henry Ford Early
          College Pre-Education/Advanced Manufacturing program in May 2025, with
          high school and college GPAs of 4.27 and 3.66, respectively. I'll also
          be earning a Liberal Arts Associate Degree from Henry Ford College
          before continuing as a junior at the University of Michigan-Dearborn
          in their Bachelors Of Science Software Engineering program. I am
          currently an intern with FutureInterns in their FullStack Web
          Development internship program, and I have recently completed a
          four‑month analytic software engineering internship with
          CoinHeatMap—more information can be seen in my Experience section!
        </p>
        <p>
          With experience in C, C++, Python, Java, SQL, and HTML/CSS, I'm
          constantly expanding my knowledge to build impactful projects.
        </p>
      </section>

      {/* Relevant Courses Section */}
      <section className="courses">
        <h4>Relevant Courses</h4>
        <span>I have completed these courses in the past:</span>
        <ul>
          <li>CIS-111-03: SQL for Database Development</li>
          <li>CIS-126-02: HTML/CSS Web Programming</li>
          <li>CIS-230-01: C++ Programming</li>
          <li>CIS-170-02: C Programming</li>
          <li>CIS-125-01: Principles of Programming Logic</li>
          <li>CIS-100-44: Intro to Information Technology</li>
          <li>MATH-283-70: Linear Algebra</li>
          <li>MATH-275-01: Discrete Mathematics</li>
          <li>MATH-183-02: Calculus II</li>
          <li>MATH-180-02: Calculus I</li>
          <li>MATH-165-70: Mathematics for Calculus</li>
          <li>CIS-221-95: Instructional Tech for Educators</li>
          <li>SPC-131-25: Fundamentals of Speaking</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h4>Project Showcase</h4>
          <p>
            These are three projects I have built and added to GitHub: one in C,
            another in C++, and one in Python.
          </p>
          <ul>
            <li>
              <b>My Computer C Program:</b>{" "}
              <i>
                Reads and displays computer components from external text files.
              </i>{" "}
              <a
                href="https://github.com/HebatallahTha/Computer-Parts-Inventory.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </li>
            <li>
              <b>My Retail Inventory C++ Program:</b>{" "}
              <i>A system to manage product information efficiently.</i>{" "}
              <a
                href="https://github.com/HebatallahTha/RetailInventoryManagement.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </li>
            <li>
              <b>My Python Weather App:</b>{" "}
              <i>
                A weather app built using PyQt5 to fetch real-time weather data.
              </i>{" "}
              <a
                href="https://github.com/HebatallahTha/pyqt-weather-app.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
          <p>More projects are showcased on my GitHub!</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <h3>Skills & Expertise</h3>
          <h4>Programming Languages:</h4>
          <span>💻 C, C++, Python, Java, SQL</span>
          <h4>Web Development:</h4>
          <span>🌐 HTML, CSS</span>
          <h4>Database Management:</h4>
          <span>📊 SQL Server, MySQL</span>
          <h4>Tools & Technologies:</h4>
          <span>🛠️ Microsoft Suite, Google Suite</span>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <h3>📍 CoinHeatMap | Jan 2025 – April 2025</h3>
        <h4>Analytics Software Engineering Intern</h4>
        <p>
          I developed a full‑featured Solana Rich List and Wallet Analytics
          Dashboard that transforms blockchain data into real‑time visual
          insights. Using React, D3.js, and Tailwind CSS, I integrated the
          Helius API to display live wallet balances via an interactive treemap.
          The dashboard analyzes inflows, outflows, and key
          transactions—optimized for clarity and performance. I emphasized
          clean, scalable code with reusable components, responsive design, and
          consistent UI styling. I also leveraged AI tools like ChatGPT to speed
          up development and streamline problem‑solving, contributing to a
          polished MVP for investor demos.
        </p>
        <ul>
          <li>
            Developed a real‑time Solana Rich List and Wallet Analytics
            Dashboard, transforming blockchain data into intuitive visual
            insights using React and D3.js.
          </li>
          <li>
            Integrated the Helius API to fetch live wallet balances, allowing
            users to explore top wallet activity through an interactive treemap.
          </li>
          <li>
            Implemented a dedicated Wallet Dashboard to analyze inflows,
            outflows, and key transactions, optimizing for performance and user
            clarity.
          </li>
          <li>
            Focused on maintainable, scalable code by building reusable
            components, ensuring responsive design and consistent UI styling
            across the app.
          </li>
          <li>
            Leveraged AI tools like ChatGPT to accelerate development and
            enhance problem‑solving.
          </li>
          <li>
            Collaborated in an agile environment, contributing to product demos
            and providing valuable insights for investor presentations.
          </li>
        </ul>

        <h3>📍Volunteer & Tech Assistant</h3>
        <p>
          Since 2017, I’ve volunteered at Al‑Furqan Academy to support early
          education classrooms by providing both technical and educational
          assistance. I help set up and maintain digital tools like Google Docs,
          Google Slides, and Class Dojo, enabling smoother daily workflows for
          teachers. I also design interactive online games to teach Arabic in
          fun, student‑centered ways.
        </p>
        <ul>
          <li>
            Collaborated with teachers since 2017 to support students in Arabic
            literacy and foundational skills.
          </li>
          <li>
            Set up and maintained digital classroom tools such as Google Docs,
            Google Slides, and Class Dojo to streamline communication and
            workflow.
          </li>
          <li>
            Designed engaging online games and interactive resources to enhance
            student learning and boost classroom participation.
          </li>
          <li>
            Assisted in grading, lesson preparation, and online assignment
            management, ensuring smooth operation of virtual and in‑person
            instruction.
          </li>
          <li>
            Provided one‑on‑one tech support to educators and students,
            troubleshooting issues and promoting digital literacy.
          </li>
          <li>
            Demonstrated empathy, patience, and adaptability in a fast‑paced K–8
            environment, supporting diverse learners and fostering a positive
            learning atmosphere.
          </li>
        </ul>
      </section>

      {/* Resume Section */}
      <section className="resume">
        <h2>Resume</h2>
        <a href="HebaTResume.pdf" download>
          Download Resume
        </a>
      </section>

      {/* linkedin and github accts Section */}
      <section className="links">
        <h2>Links!</h2>
        <a href="http://github.com/HebatallahTha">My Github Profile</a>
        <br />
        <a href="www.linkedin.com/in/hebatallah-t-985749339">
          My LinkedIn Profile
        </a>
      </section>

      {/* Contact Form Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <form action="/submit" method="POST">
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
