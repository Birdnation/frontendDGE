import {
  MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardOverlay,
    MDBCardText,
    MDBCardTitle,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselElement,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBContainer,
    MDBRipple,
    MDBRow,
  } from "mdb-react-ui-kit";
  import React from "react";
  import Slider from "react-slick";
  import { host } from "../../public/js/host";
  import TitleLine from "../others/TitleLine";
  import Link from "next/link";
  import Image from "next/image";
  import removeSpecialCharacters from "../../utils/removeSpecialCharacters";
  
  const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} destacado-slide__arrow`}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  };
  
  export const Destacados = ({ titulo1,descripcion1,descripcion2, titulo2, noticias, path }) => {
    const settings = {
      arrowsBlock: false,
      centerPadding: 0,
      dots: true,
      initialSlide: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    };
  
    return (
      <MDBContainer fluid className="mb-3">
        <MDBRow>
          <MDBCol size="12" sm="9" className="p-1" >
            <MDBContainer>
              <TitleLine noLine>{titulo1}</TitleLine>
                <MDBCardBody>{descripcion1}</MDBCardBody>
                <MDBCardBody>{descripcion2}</MDBCardBody>
                <img className="ml-auto mr-auto" src="https://www.noticias.ucn.cl/wp-content/files_mf/cache/th_7445c7bc99903fe147f3c84bdb82a492_tiendauniversitaria4.jpg"
                  alt="Tienda Universitaria Antofagasta" style={{display: "block"}}/> 

                <Link href="https://www.noticias.ucn.cl/wp-content/files_mf/cache/th_7445c7bc99903fe147f3c84bdb82a492_tiendauniversitaria4.jpg">
                  <div className="d-flex justify-content-center">
                    <MDBBtn className="my-1 m-0 p-2 rounded-6">Ir a la Tienda Universitaria</MDBBtn>
                  </div>
                </Link>
                  
            </MDBContainer>
            <Link href="/noticias" passHref>
              <h4 className="destacados__irNoticias">Ver todas las noticias</h4>
            </Link>
          </MDBCol>
          <MDBCol
            size="12"
            sm="3"
            className="index-noticias index-noticias-scroll p-0 m-0"
          >
            <MDBContainer fluid className="p-0 m-0">
              <TitleLine noLine>{titulo2}</TitleLine>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdge.ucn&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                style={{ overflow: "hidden", height: "4000px" }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };