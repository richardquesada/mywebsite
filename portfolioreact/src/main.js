import React from "react";
import { Link } from "react-router-dom";
import project1 from "./img/projects/project1.jpg";
import project2 from "./img/projects/project2.jpg";

class Main extends React.Component {
  render() {
    return (
      <div className="Index">
        <main id="home">
          <div className="headings">
            <h1 className="lg-heading">
              <span className="lg-heading text">
                {" "}
                <span className="first-h1-word"> Richard </span>
                <span className="text-secondary">Quesada </span>
              </span>
            </h1>
            <h2 className="sm-heading">
              <span className="first-word"> Web Developer, </span>
              <span className="second-word">Programmer, </span>
              <span className="third-word">Prodigy.</span>
            </h2>
          </div>
          <div className="icons">
            <Link to={"./html/#!"}>
              {" "}
              <i className="fab fa-github fa-2x" />{" "}
            </Link>
          </div>
          <div className="container">
            <div className="about-me">
              <span className="about-me-header">
                <Link to={"./html/about.html"} className="about-link">
                  About
                  <span className="text-secondary"> Me</span>
                </Link>
              </span>
              <div className="about-me-text">
                <Link to={"./html/about.html"} className="about-link2">
                  <p>
                    <i>
                      Richard Quesada is man who gauges his self-worth on the
                      cleanliness and brevity of his code. Beyond that he brings
                      a keen eye for design as well as a strong foundation in
                      various web development technologies to create modern
                      websites & web applications that come to life and stand
                      out from the rest.
                    </i>
                  </p>
                </Link>
              </div>
            </div>
            <div className="my-websites">
              <span className="about-me-header">
                <Link to={"./html/work.html"}>
                  My <span className="text-secondary">Work ></span>
                </Link>
              </span>

              <div className="projects">
                <div className="item">
                  <div className="website-image">
                    <Link to={"./html/#!"}>
                      <img src={project1} alt="Project" />
                    </Link>
                    <div className="website-buttons">
                      <Link to={"./html/#"} className="btn-light">
                        {" "}
                        <i className="fas fa-eye" />
                      </Link>
                      <Link to={"./html/#"} className="btn-dark">
                        <i className="fab fa-github" />
                      </Link>
                    </div>
                  </div>
                  <div className="website-description">
                    <Link to={"./html/index.html"}>RichardQuesada.com</Link>
                    <h6>Features:</h6>
                    <ul className="list">
                      <li>UI built in React</li>
                      <li>Dynamic &lt;Canvas&gt; Background</li>
                      <li>CSS Grid/Flexbox</li>
                    </ul>
                  </div>
                </div>

                <div className="item">
                  <div className="website-image">
                    <Link to={"./html/#!"}>
                      <img src={project2} alt="Project" />
                    </Link>
                    <div className="website-buttons">
                      <Link to={"./html/#"} className="btn-light">
                        {" "}
                        <i className="fas fa-eye" />
                      </Link>
                      <Link to={"./html/#"} className="btn-dark">
                        <i className="fab fa-github" />
                      </Link>
                    </div>
                  </div>
                  <div className="website-description">
                    <Link to={"./html//"}>Hotboy9000.com</Link>
                    <h6>Features:</h6>
                    <ul className="list">
                      <li>SEO-optimized website for a touring band</li>
                      <li>
                        E-commerce component built with PHP, MySQL, & React
                      </li>
                      <li>UI built entirely in React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn-container">
                <div> </div>
                <div> </div>
                <div>
                  <Link to={"./html/work.html"} className="btn-dark view">
                    More >
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
