import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          <a
            href="#"
            target="_blank"
          >
            Ekta
          </a>
          , Project
        </p>
      </footer>
    );
  }
}

export default Footer;
