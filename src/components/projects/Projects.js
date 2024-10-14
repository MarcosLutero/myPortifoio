import React, { useEffect, useState } from "react";
import pisp from "../imagens/pisp.jpeg";
import acai from "../imagens/acai.jpeg";
import cssLogo from "../imagens/logocss.png";
import reactLogo from "../imagens/logoreact.png";
import bootstrapLogo from "../imagens/logoreactbootrap.png";
import "./index.css";

export default function Projects() {
  const projects = [
    {
      titulo: "PISP",
      imagem: pisp,
      texto:
        "O PISP (Plataforma Integrada de Segurança Pública) é um sistema criado para melhorar as ações integradas do Sistema Estadual de Segurança Pública e Defesa Social (SIEDS) no estado do Pará",
      link: "https://pisp.segup.pa.gov.br/",
      tecnologias: [
        { nome: "CSS", logo: cssLogo },
        { nome: "ReactJS", logo: reactLogo },
        { nome: "React-Bootstrap", logo: bootstrapLogo }
      ]
    },
    {
      titulo: "Copia site Açai Xingu",
      imagem: acai,
      texto:
        "O site Açai Xingu é um projeto desenvolvido para demonstrar e testar minhas habilidades de front-end, avaliando meu nível de conhecimento em HTML, CSS e JavaScript.",
      link: "https://acaixingucopia.netlify.app/",
      tecnologias: [
        { nome: "CSS", logo: cssLogo },
        { nome: "ReactJS", logo: reactLogo },
        { nome: "React-Bootstrap", logo: bootstrapLogo }
      ]
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = projeto => {
    setCurrentProject(projeto);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  useEffect(
    () => {
      const handleKeyDown = event => {
        if (event.key === "Escape") {
          closeModal();
        }
      };

      if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    },
    [isOpen]
  );

  return (
    <div className="container">
      <div className="card_projetos_container">
        {projects.map((projeto, index) => (
          <div key={index} className="card_projetos" onClick={() => openModal(projeto)}>
            <div className="card_header_projetos">
              <img src={projeto.imagem} alt={projeto.titulo} className="imagem_card" />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal_content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal_image_container">
              <img src={currentProject.imagem} alt={currentProject.titulo} className="modal_image" />
              <div className="modal_text">
                <h2>{currentProject.titulo}</h2>
                <p>{currentProject.texto}</p>
                <div className="tecnologias">
                  <h3>Tecnologias usadas:</h3>
                  <div className="tecnologias_lista">
                    {currentProject.tecnologias.map((tec, idx) => (
                      <div key={idx} className="tecnologia_item">
                        <span className="tecnologia_nome">{tec.nome}</span>
                        <img src={tec.logo} alt={tec.nome} className="tecnologia_logo" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal_footer">
              <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="botao_saiba_mais">
                Acessar projeto
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
