import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/22610714?s=460&u=2c96ab4929dc4fa9f0a00f9585981913f3e47ee6&v=4"
              alt="imagem do professor"
            />
            <div>
              <strong>Vania Almeida </strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br />
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências. Mais de 200.000 pessoas já passaram
            por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora<strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp ícone" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
};

export default TeacherItem;
