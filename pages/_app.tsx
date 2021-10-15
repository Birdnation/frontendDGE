import "../styles/globals.css";
import "../styles/custom.scss";
import Head from "next/head";
import "../styles/rsuite-default.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-toastify/dist/ReactToastify.css";

import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import * as React from "react";
import Footer from "../components/layout/Footer";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/list/main.css";
import "@fullcalendar/timegrid/main.css";

import { useRouter } from "next/router";
import { SidenavIntra } from "../components/Intranet/SidenavIntra";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import Asistente from "../components/others/Asistente";
import { NavbarPublic } from "../components/layout/NavbarPublic";

function MyApp({ Component, pageProps }: AppProps) {
  const { authState } = React.useContext(AuthContext);
  const router = useRouter();
  return (
    <>
      {/* --FRAGMENTO CORRESPONDIENTE AL HEAD DE LA PAGINA -- aca se pueden importar estilos css globales. */}
      <Head>
        <title>Plataforma DGE</title>
        <meta name="description" content="Plataforma DGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/dgeico.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
      </Head>

      <AuthProvider>
        {router.route === "/login" ? (
          <Component {...pageProps} />
        ) : router.route.includes("intranet") ? (
          <SidenavIntra>
            <Component {...pageProps} />
          </SidenavIntra>
        ) : (
          <>
            {!router.route.includes("/intranet") &&
              !router.route.includes("/preguntas-frecuentes") &&
              !router.route.includes("/login") &&
              !router.route.includes("/noticias") &&
              !router.route.includes("/tienda-universitaria") &&
              router.route !== "/" && (
                <Asistente
                  href="/preguntas-frecuentes"
                  src="/salud/avatar-salud.png"
                >
                  Tienes preguntas, haz clic acá…
                </Asistente>
              )}
            <NavbarPublic>
              <Component {...pageProps} />
            </NavbarPublic>
          </>
        )}
      </AuthProvider>
    </>
  );
}
export default MyApp;
