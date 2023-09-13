import React from "react";
import Carousel from "react-bootstrap/Carousel";

import protect1 from "../../../Assets/sonatrachEngagement/protect1.jpg";
import protect2 from "../../../Assets/sonatrachEngagement/protect2.jpg";
import protect3 from "../../../Assets/sonatrachEngagement/protect3.jpg";
import protect4 from "../../../Assets/sonatrachEngagement/protect4.jpg";
import protect5 from "../../../Assets/sonatrachEngagement/protect5.jpg";
import Fade from "react-reveal/Fade";

const Protect = () => {
  return (
    <section
      className="about overflow-hidden px-0 py-0 "
      style={{
        borderTop: "5px solid #666",
        background: "#E2E2E2",
        borderBottom: "5px solid #666",
        boxShadow: "2px 20px 26px 7px rgba(255,255,255,0.75)",
      }}
    >
      <div className="row w-100 ">
        <div className="row col-md-12 w-100 ">
          <div className="col-md-6 img">
            <Fade duration={2000} left>
              {/* <img src={`${sonatrachInfo}`} alt="info" className="img-fluid" /> */}
              <Carousel
                data-bs-theme="dark"
                controls={false}
                indicators={false}
                style={{ boxShadow: "1px 0 9px 6px #666" }}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${protect1}`}
                    alt="First slide"
                    style={{ height: "78vh" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${protect2}`}
                    alt="Second slide"
                    style={{ height: "78vh" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${protect3}`}
                    alt="Third slide"
                    style={{ height: "78vh", imageRendering: "auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${protect4}`}
                    alt="Third slide"
                    style={{ height: "78vh", imageRendering: "auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${protect5}`}
                    alt="Third slide"
                    style={{ height: "78vh", imageRendering: "auto" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Fade>
          </div>
          <div className="col-md-6 p-1" style={{ marginTop: "1%" }}>
            <Fade duration={2000} right>
              <p className="miniTitle">NOTRE ENGAGEMENT</p>
              <h1 className="headerTitle" style={{ fontSize: "28px" }}>
                POUR LA PROTECTION DU PATRIMOINE
                <span className="headerHighlight">
                  {" "}
                  MATÉRIAL ET IMMATÉRIEL
                </span>{" "}
                AINSI QU'À L'ÉPANOUISSEMENT DES ALGÉRIENS{" "}
              </h1>

              <p
                className="headerContent"
                style={{ fontSize: "14px", textAlign: "justify" }}
              >
                Sonatrach, à travers sa Fondation SONATRACH-Tassili et ses
                actions de sponsoring et de mécénat, s'engage pleinement en
                Algérie. Son objectif est la préservation du patrimoine national
                et l'amélioration de la vie sociale. La Fondation soutient
                diverses initiatives culturelles et éducatives à travers le pays
                pour préserver le riche patrimoine historique de l'Algérie. De
                plus, Sonatrach établit des partenariats avec des institutions
                éducatives, des organisations caritatives et des événements
                culturels, favorisant ainsi le développement social du pays. Son
                engagement ne se limite pas à l'industrie énergétique, mais
                s'étend à la responsabilité envers la communauté. Sonatrach est
                un acteur clé dans la préservation de l'héritage culturel et
                dans l'amélioration de la qualité de vie de la population
                algérienne. Son impact positif contribue à façonner un avenir
                meilleur pour l'Algérie en renforçant la connexion avec le passé
                et en soutenant des initiatives éducatives, artistiques et
                humanitaires essentielles à la société.
              </p>
              <button
                className="branBtn"
                style={{
                  background: "#f08000",
                  ":hover": { background: "#a85f0b" },
                }}
              >
                     Découvrir encore plus
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protect;
