import { useState } from "react";
import Link from "next/link";

const Asistente = (props: any) => {
  const [asistente, setAsistente] = useState(true);
  return (
    <div
      className={`asistente ${props.className} ${
        asistente ? "" : "asistente--off"
      }`}
    >
      <img
        className="asistente__avatar"
        src={props.src}
        alt="imagen asistente"
      />
      <img
        className="asistente__dialogo"
        src="/salud/dialogo.png"
        alt="imagen de asistente"
      />
      <div className="asistente__dialogo-texto">
        <Link href={props.href ? props.href : "/"}>
          <p>{props.children}</p>
        </Link>
      </div>
      <div className="asistente__colider-inferior"></div>
      <i
        className="fas fa-times-circle asistente__cerrar"
        onClick={() => setAsistente(false)}
      ></i>
    </div>
  );
};

export default Asistente;
