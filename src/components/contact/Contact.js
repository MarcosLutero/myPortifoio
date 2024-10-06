import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

export default function Contact() {
  return (
    <>
      <div className="text-center">
        <h1>Contatos</h1>
      </div>
      <div className="container_contato">
        <a href="https://github.com/MarcosLutero?tab=repositories" target="_blank">
          <div data-text="Github" className="glass">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
        <a href="https://www.instagram.com/luterorocha_/" target="_blank">
          <div data-text="Instagram" className="glass">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/marcos-rocha-418b50147/" target="_blank">
          <div data-text="Linkedin" className="glass">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
      </div>
    </>
  );
}
