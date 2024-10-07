import React, { useEffect, useState } from "react";
import "./index.css";
import splash_azul from "../imagens/splash_azul.jpg";
import fotoLutero from "../imagens/fotoLutero.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faFigma, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

export default function About({ contactRef }) {
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingFinished(true);
    }, 4500); // O tempo aqui deve corresponder ao tempo total da animação
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container">
      <div className="row linha1">
        <div className="col coluna_1">
          <div>
            <h1 className={`titulo ${typingFinished ? "typing-finished" : ""}`}>Olá, eu sou o</h1>
            <h1 className={`titulo ${typingFinished ? "typing-finished" : ""}`}>Marcos Lutero</h1>
            <h5 className="frase">Desenvolvedor Full Stack</h5>
          </div>
          <div className="botao_container">
          <a href="../documents/CurriculumLutero.pdf" download="Curriulum Lutero.pdf" className="neon-bt">
              <span />
              <span />
              <span />
              <span />
              Download CV
            </a>
            <a href="#contato" className="neon-bt" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
              <span />
              <span />
              <span />
              <span />
              Contato
            </a>
          </div>
        </div>
       
        <div className="col coluna_2">
          <div className=" container_img">
            <img src={fotoLutero} alt="foto1" className="foto1" />
            <img src={splash_azul} alt="foto2" className="foto2" />
          </div>
        </div>
      </div>
      <div className="row linha2">
        <div className="text-center sobre_mim">
          <h3 className="titulo_sobre_mim">Sobre mim</h3>
          <p className="sobre_mim_frase">
            Desenvolvedor Front-end com experiência em React.js, JavaScript, TypeScript, Styled Components, Material UI,
            Bootstrap e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui
            experiência em projetos gerenciados por Metodologias Ágeis.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="text-center">
          <h5 className="titulo_habilidades">Habilidades</h5>
        </div>
        <div className="skills-container">
          <div className="skill-card">
            <span className="nome_icone">HTML5</span>
            <FontAwesomeIcon icon={faHtml5} className="icon_habilidade" />
          </div>
          <div className="skill-card">
            <span className="nome_icone">CSS3</span>
            <FontAwesomeIcon icon={faCss3} className="icon_habilidade" />
          </div>
          <div className="skill-card">
            <span className="nome_icone">JavaScript</span>
            <FontAwesomeIcon icon={faJs} className="icon_habilidade" />
          </div>
          <div className="skill-card">
            <span className="nome_icone">React.js</span>
            <FontAwesomeIcon icon={faReact} className="icon_habilidade" />
          </div>
          <div className="skill-card">
            <span className="nome_icone">SASS</span>
            <FontAwesomeIcon icon={faSass} className="icon_habilidade" />
          </div>
          <div className="skill-card">
            <span className="nome_icone">Figma</span>
            <FontAwesomeIcon icon={faFigma} className="icon_habilidade" />
          </div>
        </div>
      </div>
    </div>
  );
}
