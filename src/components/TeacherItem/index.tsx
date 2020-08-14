import React from "react";
import api from "../../services/api";

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
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const handleCreateNewConnection = () => {
    api.post("connections", {
      user_id: teacher.id,
    });
  };
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="imagem do professor" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora<strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
