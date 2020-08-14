import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export interface Teacher {
  id: number;
    avatar: string;
    bio: string;
    name: string;
    subject: string;
    whatsapp: string;
    cost: number;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  return (
    <article className="teacher-item">
          <header>
            <img
              src={teacher.avatar}
              alt="imagem do professor"
            />
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>
          {teacher.bio}

          </p>

          <footer>
            <p>
              Preço/hora<strong>R$ {teacher.cost}</strong>
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
