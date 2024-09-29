import Entries from "../Entries";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card card-body h-100" id="profile-wrapper">
            <img
              id="profile-pic"
              src="https://i.imgur.com/KbYtnmZ.jpeg"
              alt=""
            ></img>
            <hr />
            <h4>Hi, I'm Troy!</h4>
            <p>I love coding, learning, and playing piano.</p>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card card-body h-100">
            <h4>My Journey to Become a Developer</h4>
            <hr />
            <p>
              Graduated from the University of Nevada, Las Vegas in December
              2023 with a BS in Computer Science.
              <br /> <br />
              I’m a Software Engineer who is unafraid to take initiative and
              exceed expectations. When I saw inefficiencies in a marketing
              role, I proposed and built a full-stack application that
              transformed workflows across the company, saving hours of manual
              work. Known as a ”wizard” for delivering fast, effective
              solutions, I lead by doing — whether building an AI search engine
              for a business or driving a capstone project to 2nd place at UNLV.
            </p>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/troy-galicia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="social"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Todorotsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="social"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div class="col-md-6">
          <div class="card card-body h-100">
            <h4>My Experience</h4>
            <hr />
            <p>
              Full stack developer at BulkSupplements.com. <br />
              <br />
              Initiated, designed and implemented software that nearly automated
              the company's label creation process, replacing the need for Adobe
              Photoshop.
              <br /> <br />
              Finished the Lonely Octopus bootcamp in August 2023 and
              successfully delivered a RAG AI Search Engine proof of concept to
              Lixcap, a financial advising firm.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-body h-100">
            <h4>What I Know</h4>
            <hr />
            <p>
              <b>Languages:</b> Python, C/C++/C#, SQL, Java, JavaScript,
              HTML/CSS, BASH
              <br />
              <b>Frameworks:</b> React, Node.js, Flask, Shiny, Streamlit,
              Tailwind CSS
              <br />
              <b>Developer Tools:</b> Git, Figma, Docker, VS Code, Jupyter
              Notebook, OpenAI, IntelliJ, Eclipse, Unity
              <br />
              <b>Libraries:</b> pandas, NumPy, Selenium
              <br />
              <br />I also have experience with prompt engineering and creating
              and integrating AI products!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <h1 className="text-center">Project Showcase</h1>
      </div>
      <Entries />
    </div>
  );
};

export default Home;
