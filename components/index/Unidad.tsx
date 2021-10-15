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
  faUniversity,
  faStarOfLife,
  faBasketballBall,
  faGraduationCap,
  faBabyCarriage,
  faUniversalAccess,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Link from "next/link";
import TitleLine from "../others/TitleLine";

export const Unidad = () => {
  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
  ];
  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const Menu = (list, selected) => {
    return [
      <MDBCol key="1">
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faGraduationCap}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/beneficios/">Beneficios</Link>
            </MDBCardTitle>
            <MDBCardText>Beneficios Externos</MDBCardText>
            <MDBCardText>Beneficios Internos</MDBCardText>
            <MDBCardText>Renovación de beneficios</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="2">
        <MDBCard className="align-items-center text-center  my-2">
          <FontAwesomeIcon size="6x" icon={faStarOfLife}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/salud/">Salud</Link>
            </MDBCardTitle>

            <MDBCardText>
              <Link href="/salud/atencion">Solicitud hora online</Link>
            </MDBCardText>

            <MDBCardText>
              {" "}
              <Link href="/salud/visado-certificados-medicos">
                Visado licencias medicas
              </Link>
            </MDBCardText>

            <MDBCardText>
              <Link href="/salud/atencion?id=psicologia">
                Solicitud hora Psicólogo
              </Link>
            </MDBCardText>

            <MDBCardText>
              <Link href="/salud/">Más... </Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="3">
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faBasketballBall}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/deportes">Deportes</Link>
            </MDBCardTitle>
            <MDBCardText>
              <Link href="/deportes/deporteselectivo">Deporte Selectivo</Link>
            </MDBCardText>
            <MDBCardText>
              <Link href="/deportes/deporteinterno">Deporte Interno</Link>
            </MDBCardText>
            <MDBCardText>
              <Link href="/deportes/actividadescomplementarias">
                Actividades Complementarias
              </Link>
            </MDBCardText>
            <MDBCardText>
              <Link href="/deportes">Más...</Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="4">
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faUniversity}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/artecultura/">Arte y Cultura</Link>
            </MDBCardTitle>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="5">
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faBabyCarriage}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/jardininfantil/">Jardín Infantil Taqinki</Link>
            </MDBCardTitle>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="6">
        <MDBCard className="align-items-center text-center my-2">
          <FontAwesomeIcon size="6x" icon={faUniversalAccess}></FontAwesomeIcon>
          <MDBCardBody>
            <MDBCardTitle>
              <Link href="/inclusion/">Inclusión</Link>
            </MDBCardTitle>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>En Construcción...</MDBCardText>
            <MDBCardText>Más...</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>,
      <MDBCol key="7">
      <MDBCard className="align-items-center text-center my-2">
        <FontAwesomeIcon size="6x" icon={faShoppingCart}></FontAwesomeIcon>
        <MDBCardBody>
          <MDBCardTitle>
            <Link href="/tienda-universitaria/">Tienda Universitaria</Link>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
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
    <MDBContainer fluid className="w-100 p-0">
      <TitleLine>Unidad de servicio y apoyo estudiantil UCN</TitleLine>

      <ScrollMenu
        wrapperClass="w-100"
        dragging
        wheel={false}
        inertiaScrolling
        data={menu}
      />
    </MDBContainer>
  );
};
