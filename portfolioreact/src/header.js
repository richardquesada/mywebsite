import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="menu-btn">
          <div class="btn-line" />
          <div class="btn-line" />
          <div class="btn-line" />
        </div>

        <nav class="menu">
          <div class="menu-branding">
            <div class="portrait" />
          </div>
          <ul class="menu-nav">
            <li class="nav-item current">
              <a href="/" class="nav-link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">
                {" "}
                About Me{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="work.html" class="nav-link">
                {" "}
                My Work{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
