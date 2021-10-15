import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCardBody } from "mdb-react-ui-kit";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Placeholder } from "rsuite";
import { Secciones } from "../../components/Deportes/Secciones";
import { Destacados } from "../../components/index/Tienda";
import LoadAnuncios from "../../hooks/useLoadAnuncios";
import LoadNoticias from "../../hooks/useLoadNoticias";
import { Modal } from "react-bootstrap";


const Tienda = () => {
    const [isLoadNotice, setisLoadNotice] = useState(false);
    const [noticias, setNoticias] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [anuncioDeportes, setAnuncioDeportes] = useState({ texto: "" });
    useEffect(() => {
      const noticiasListas = async () => {
        const noticiasArray = await LoadNoticias("deportes", "", 1);
        if (noticiasArray.data && noticiasArray.data.length > 0) {
          setisLoadNotice(true);
        }
      };
      noticiasListas();
    }, []);
    return (
      <>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link href="/">Inicio</Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Tienda Universitaria</MDBBreadcrumbItem>
          
        </MDBBreadcrumb>
        
        {isLoadNotice ? (
          <Destacados
            noticias={noticias}
            titulo1="Tienda Universitaria"
            descripcion1="La Tienda Universitaria pertenece a la Dirección General Estudiantil de la Universidad Católica del Norte, ofrece a la comunidad una variedad de productos."
            descripcion2="El principal objetivo de la Tienda Universitaria es fortalecer el sentido de pertenencia de nuestros estudiantes, académicos, administrativos y la comunidad en general al poner a su disposición numerosos artículos con el logotipo de nuestra casa de estudios superiores.   
            Además, facilita la actividad diaria ofreciendo artículos de librería y escritorio."
            titulo2="Destacados"
            path="/tienda-universitaria/"
          />
        ) : (
          <Placeholder.Graph active height={450} />
        )}
      </>
    );
  };
  
  export default Tienda;