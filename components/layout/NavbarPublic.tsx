import React, { Children } from "react";
import { Toggle, Sidenav, Nav, Icon, Dropdown } from "rsuite";
import { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Logout from "../../hooks/useLogout";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faBasketballBall,
  faGraduationCap,
  faHome,
  faStarOfLife,
  faUniversalAccess,
  faUniversity,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const NavbarPublic = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  const router = useRouter();

  function handleToggle() {
    setExpanded(!expanded);
  }

  function handleSelect(e) {
    setActiveKey(e);
  }
  return (
    <>
      <div className={"sidenav__intranet"}>
        <Sidenav
          className="sidenav__color  scrollable"
          css={css`
            width: ${expanded ? "250px" : "55px"};
            transition-duration: 0.5s;
            transition-property: width;
          `}
          style={{ height: "100vh", overflowX: "hidden" }}
          expanded={expanded}
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Toggle
            className={`${
              expanded ? "navbar__full " : "navbar__mini"
            } navbar__open_transition`}
            style={{ marginTop: "10px", marginBottom: "10px" }}
            onChange={handleToggle}
            checked={expanded}
          />
          <Sidenav.Body className="">
            <Nav className="">
              <Link passHref href="/">
                <Nav.Item
                  className="sidenav__color"
                  icon={
                    <FontAwesomeIcon
                      className="rs-icon"
                      icon={faHome}
                      size="1x"
                    />
                  }
                  eventKey="1"
                >
                  Inicio
                </Nav.Item>
              </Link>

              <hr className="hr-success my-0" />
              <Dropdown
                eventKey="2"
                title="Beneficios"
                open={false}
                onToggle={() => router.push("/beneficios")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faGraduationCap}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/beneficios">
                  <Dropdown.Item eventKey="2-1">Noticias</Dropdown.Item>
                </Link>

                <Dropdown.Item eventKey="2-2">
                  Beneficios Internos
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-3">
                  Beneficios Externos
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-4">
                  Preguntas Frecuentes
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="3"
                title="Salud"
                open={false}
                onToggle={() => router.push("/salud")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faStarOfLife}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/salud">
                  <Dropdown.Item eventKey="3-1">Noticias</Dropdown.Item>
                </Link>
                <Link passHref href="/salud/atencion">
                  <Dropdown.Item eventKey="3-2">Solicitud Hora</Dropdown.Item>
                </Link>
                <Link passHref href="/salud/visado-certificados-medicos">
                  <Dropdown.Item eventKey="3-3">
                    Visado Certificados
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item eventKey="3-4">
                  <Link
                    passHref
                    href="https://beneficiosestudiantilesucn.agendapro.com/cl/workflow?local=6277"
                  >
                    Agenda PRO
                  </Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="4"
                title="Deportes"
                open={false}
                onToggle={() => router.push("/deportes")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faBasketballBall}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/deportes">
                  <Dropdown.Item eventKey="4-1">Noticias</Dropdown.Item>
                </Link>
                <Link passHref href="/deportes/nosotros">
                  <Dropdown.Item eventKey="4-2">
                    Equipo Deportes UCN
                  </Dropdown.Item>
                </Link>
                <Link passHref href="/deportes/deporteselectivo">
                  <Dropdown.Item eventKey="4-3">
                    Deporte Selectivo
                  </Dropdown.Item>
                </Link>
                <Link passHref href="/deportes/deporteinterno">
                  <Dropdown.Item eventKey="4-4">Deporte Interno</Dropdown.Item>
                </Link>
                <Link passHref href="/deportes/actividadescomplementarias">
                  <Dropdown.Item eventKey="4-5">
                    Actividades Complementarias
                  </Dropdown.Item>
                </Link>
                <Link passHref href="/deportes/infraestructura">
                  <Dropdown.Item eventKey="4-6">
                    Infraestructura Deportiva
                  </Dropdown.Item>
                </Link>
              </Dropdown>
              <Dropdown
                eventKey="5"
                title="Arte y Cultura"
                open={false}
                onToggle={() => router.push("/arte-cultura")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faUniversity}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/">
                  <Dropdown.Item eventKey="5-1">Noticias</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="5-2">Link 1</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="5-3">Link 2</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="5-4">Link 3</Dropdown.Item>
                </Link>
              </Dropdown>
              <Dropdown
                eventKey="6"
                title="Jardín infantil Taqinki"
                open={false}
                onToggle={() => router.push("/jardintaquinki")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faBabyCarriage}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/">
                  <Dropdown.Item eventKey="6-1">Noticias</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="6-2">Link 1</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="6-3">Link 2</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="6-4">Link 3</Dropdown.Item>
                </Link>
              </Dropdown>
              <Dropdown
                eventKey="8"
                title="Inclusión UCN"
                open={false}
                onToggle={() => router.push("/inclusion")}
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faUniversalAccess}
                    size="1x"
                  />
                }
              >
                <Link passHref href="/">
                  <Dropdown.Item eventKey="8-1">Noticias</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="8-2">Link 1</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="8-3">Link 2</Dropdown.Item>
                </Link>
                <Link passHref href="/">
                  <Dropdown.Item eventKey="8-4">Link 3</Dropdown.Item>
                </Link>
              </Dropdown>

              <Link passHref href="/tienda-universitaria">
                <Nav.Item
                  className="sidenav__color"
                  icon={
                    <FontAwesomeIcon
                      className="rs-icon"
                      icon={faShoppingCart}
                      size="1x"
                    />
                  }
                  eventKey="1"
                >
                  Tienda Universitaria
                </Nav.Item>
              </Link>

              <hr className="hr-success my-0" />
              <Nav.Item
                className="sidenav__color"
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faFacebook}
                    size="1x"
                  />
                }
                eventKey="1"
              >
                <Link passHref href="https://www.facebook.com/dge.ucn">
                  Facebook DGE
                </Link>
              </Nav.Item>
              <Nav.Item
                className="sidenav__color"
                icon={
                  <FontAwesomeIcon
                    className="rs-icon"
                    icon={faInstagram}
                    size="1x"
                  />
                }
                eventKey="1"
              >
                <Link passHref href="https://www.instagram.com/dgeucn/?hl=es">
                  Instagram DGE
                </Link>
              </Nav.Item>

            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      <main style={{ marginLeft: "65px" }} onClick={() => setExpanded(false)}>
        <Header></Header>
        {children}
        <Footer />
      </main>
    </>
  );
};
