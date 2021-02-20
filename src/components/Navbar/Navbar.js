import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h3 className="Navbar-logo">
          Dhimitris Portfolio <i class="fas fa-home"></i>
        </h3>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link className="Nav-items" to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link className="Nav-items" to="/aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="Nav-items" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="Nav-items" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
