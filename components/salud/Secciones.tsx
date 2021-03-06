import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRunning,
  faClock,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHubspot } from "@fortawesome/free-brands-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";
import TitleLine from "../others/TitleLine";

export const Secciones = () => {
  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
  ];
  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const Menu = (list, selected) => {
    return [
      <MDBCol key="1">
        <Link passHref href="/salud/atencion">
          <MDBCard className="align-items-center text-center py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faClock}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Solicita Atención</MDBCardTitle>
              <MDBCardTitle>Medica</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
      <MDBCol key="">
        <Link passHref href="/salud/visado-certificados-medicos">
          <MDBCard className="align-items-center text-center  py-2 my-2">
            <FontAwesomeIcon size="3x" icon={faFileAlt}></FontAwesomeIcon>
            <MDBCardBody>
              <MDBCardTitle>Visado de Certificados</MDBCardTitle>
              <MDBCardTitle>Medicos</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>,
    ];
  };

  const MenuItem = ({ text, selected }) => {
    return (
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
    );
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  const selected = "item1";

  let menuItems = Menu(list, selected);

  const menu = menuItems;
  return (
    <MDBContainer fluid className="w-100 p-0 pb-5 bg-light shadow-5 rounded">
      <TitleLine>Secciones</TitleLine>

      <ScrollMenu wrapperClass="w-100" data={menu} />
    </MDBContainer>
  );
};
