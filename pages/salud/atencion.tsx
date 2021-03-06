import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import Link from "next/link";
import TitleLine from "../../components/others/TitleLine";
import Recomendaciones from "../../components/salud/Recomendaciones";
import FonoAudiologia from "../../components/salud/FonoAudiologia";
import Nutricionista from "../../components/salud/Nutricionista";
import Psicologia from "../../components/salud/Psicologia";
import Obstetricia from "../../components/salud/Obstetricia";
import Enfermeria from "../../components/salud/Enfermeria";
import Medicina from "../../components/salud/Medicina";
import Odontologia from "../../components/salud/Odontologia";
import Kinesiologia from "../../components/salud/Kinesiologia";
import Image from "next/image";
import alert from "../../public/salud/alert.png";

const Atencion = () => {
  const router = useRouter();
  const [especialidad, setEspecialidad] = useState("");
  useEffect(() => {
    const id = router.query.id ? router.query.id : "";
    setEspecialidad(String(id));
  }, [router]);
  const handleEspecialidad = (e) => {
    const especialidad_ = e.target.value;
    setEspecialidad(especialidad_);
  };

  return (
    <>
      <MDBBreadcrumb className="mb-0">
        <MDBBreadcrumbItem>
          <Link href="/">Inicio</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <Link href="/salud">Salud</Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Solicita Atención Medica</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <div className="salud-atencion">
        <TitleLine className="mb-2">Solicita Atención Medica</TitleLine>
        <div className="salud-atencion__content">
          <div className="salud-atencion__especialidades">
            <div className="salud-atencion__opciones mb-3">
              <div className="salud-atencion__opciones-grupo">
                <button
                  value="fonoaudiologia"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#ffaa4d" }}
                >
                  Fonoaudiología{" "}
                </button>
                <button
                  value="nutricionista"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#00b74f" }}
                >
                  Nutricionista{" "}
                </button>
                <button
                  value="odontologia"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#00b5e2" }}
                >
                  Odontología{" "}
                </button>
                <button
                  value="psicologia"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#FFD100" }}
                >
                  Psicología{" "}
                </button>
              </div>
              <div className="salud-atencion__opciones-grupo">
                <button
                  value="kinesiologia"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#62b5e5" }}
                >
                  Kinesiología{" "}
                </button>
                <button
                  value="obstetricia"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#c5299b" }}
                >
                  Obstetricia{" "}
                </button>
                <button
                  value="enfermeria"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#0097a9" }}
                >
                  Enfermeria{" "}
                </button>
                <button
                  value="medicina"
                  onClick={handleEspecialidad}
                  className="salud-atencion__opcion"
                  style={{ background: "#8246af" }}
                >
                  Medicina{" "}
                </button>
              </div>
            </div>
            {especialidad === "" && (
              <div className="salud-atencion__mensaje-especialidad">
                <p className="salud-atencion__mensaje-alerta">
                  Selecciona Una especialidad
                </p>
                <Image
                  className="salud-atencion__logo-alerta"
                  src={alert}
                  alt="logo alerta"
                  objectFit="fill"
                />
              </div>
            )}
          </div>
          {especialidad === "fonoaudiologia" && <FonoAudiologia />}
          {especialidad === "nutricionista" && <Nutricionista />}
          {especialidad === "odontologia" && <Odontologia />}
          {especialidad === "psicologia" && <Psicologia />}
          {especialidad === "kinesiologia" && <Kinesiologia />}
          {especialidad === "obstetricia" && <Obstetricia />}
          {especialidad === "enfermeria" && <Enfermeria />}
          {especialidad === "medicina" && <Medicina />}
        </div>
        <Recomendaciones />
      </div>
    </>
  );
};

export default Atencion;
