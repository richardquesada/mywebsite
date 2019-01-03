"use strict";

const e = React.createElement;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div className="Index">
        <main id="home">
          <div class="headings">
            <h1 class="lg-heading">
              <span class="lg-heading text">
                {" "}
                <span class="first-h1-word"> Richard </span>
                <span class="text-secondary">Quesada </span>
              </span>
            </h1>
            <h2 class="sm-heading">
              <span class="first-word"> Web Developer, </span>
              <span class="second-word">Programmer, </span>
              <span class="third-word">Prodigy.</span>
            </h2>
          </div>
          <div class="icons">
            <a href="#!">
              {" "}
              <i class="fab fa-github fa-2x" />{" "}
            </a>
          </div>
          <div class="container">
            <div class="about-me">
              <span class="about-me-header">
                <a href="about.html" class="about-link">
                  About
                  <span class="text-secondary">Me</span>
                </a>
              </span>
              <div class="about-me-text">
                <a href="about.html" class="about-link2">
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
                </a>
              </div>
            </div>
            <div class="my-websites">
              <span class="about-me-header">
                <a href="work.html">
                  My <span class="text-secondary">Work ></span>
                </a>
              </span>

              <div class="projects">
                <div class="item">
                  <div class="website-image">
                    <a href="#!">
                      <img src="img/projects/project1.jpg" alt="Project" />
                    </a>
                    <div class="website-buttons">
                      <a href="#" class="btn-light">
                        {" "}
                        <i class="fas fa-eye" />
                      </a>
                      <a href="#" class="btn-dark">
                        <i class="fab fa-github" />
                      </a>
                    </div>
                  </div>
                  <div class="website-description">
                    <a href="index.html">RichardQuesada.com</a>
                    <h6>Features:</h6>
                    <ul class="list">
                      <li>UI built in React</li>
                      <li>Dynamic &lt;Canvas&gt; Background</li>
                      <li>CSS Grid/Flexbox</li>
                    </ul>
                  </div>
                </div>

                <div class="item">
                  <div class="website-image">
                    <a href="#!">
                      <img src="img/projects/project2.jpg" alt="Project" />
                    </a>
                    <div class="website-buttons">
                      <a href="#" class="btn-light">
                        {" "}
                        <i class="fas fa-eye" />
                      </a>
                      <a href="#" class="btn-dark">
                        <i class="fab fa-github" />
                      </a>
                    </div>
                  </div>
                  <div class="website-description">
                    <a href="/">Hotboy9000.com</a>
                    <h6>Features:</h6>
                    <ul class="list">
                      <li>SEO-optimized website for a touring band</li>
                      <li>
                        E-commerce component built with PHP, MySQL, & React
                      </li>
                      <li>UI built entirely in React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="btn-container">
                <div> </div>
                <div> </div>
                <div>
                  <a href="work.html" class="btn-dark view">
                    More >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
