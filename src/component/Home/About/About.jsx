import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sonatrachInfo from "../../../Assets/sonatrachImg/sonatrachInfo.jpg";
import right from "../../../Assets/sonatrachImg/right.jpg";
import left from "../../../Assets/sonatrachImg/left.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section
      className="about overflow-hidden px-0 py-0 "
      style={{
        borderTop: "5px solid #666",
        background: "#E2E2E2",
        borderBottom: "5px solid #666",
      }}
    >
      <div className="row w-100 ">
        <div className="row col-md-12 w-100 ">
          <div
            className="col-md-7 img"
            style={{
              marginLeft: "-2%",
            }}
          >
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
                    src={`${sonatrachInfo}`}
                    alt="First slide"
                    style={{ height: "78vh" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${left}`}
                    alt="Second slide"
                    style={{ height: "78vh" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${right}`}
                    alt="Third slide"
                    style={{ height: "78vh", imageRendering: "auto" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Fade>
          </div>
          <div className="col-md-5 p-1" style={{ marginTop: "1%" }}>
            <Fade duration={2000} right>
              <p className="miniTitle">À PROPOS DE SONATRACH</p>
              <h1 className="headerTitle" style={{ fontSize: "28px" }}>
                COMMENT SONATRACH CONTRIBUE-T-ELLE À{" "}
                <span className="headerHighlight"> FAÇONNER UN AVENIR</span>{" "}
                ÉNERGÉTIQUE DURABLE
              </h1>

              <p
                className="headerContent"
                style={{ fontSize: "14px", textAlign: "justify" }}
              >
                Sonatrach est bien plus qu'une entreprise d'hydrocarbures, c'est
                le moteur de l'énergie qui alimente l'avenir. Fondée avec une
                vision de durabilité et d'innovation, Sonatrach a été le pilier
                de l'industrie énergétique en Algérie et dans le monde. Au fil
                des décennies, Sonatrach a été à l'avant-garde de la recherche
                et du développement dans le domaine des énergies renouvelables,
                tout en continuant à fournir une source essentielle de pétrole
                et de gaz naturel. Notre engagement envers la technologie de
                pointe et la responsabilité environnementale a fait de Sonatrach
                un acteur clé dans la transition vers un avenir énergétique plus
                propre et plus durable pour tous.
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

export default About;
