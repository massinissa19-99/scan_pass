import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import logoWhite from "../../../Assets/sonatrachImg/logoWhite.png";
import logoTranparent from "../../../Assets/sonatrachImg/logoTransparent.png";
function Feature() {
  return (
    <div
      style={{
        height: "100%",
        background: "rgba(0, 0, 0,0.8)",
        textAlign: "center",
        width: "100%",
        backgroundImage: `url(${logoTranparent})`,
        backgroundRepeat: "round",
        backgroundSize: "4%",
        paddingBottom:"10px"

      }}
    >

      <Col style={{ height: "100%" }}>
        <Col md={12} style={{ height: "100%" }} noGutters>
          <Col
            md={5}
            style={{
              fontWeight: "bolder",
              margin: "0 auto",
            }}
          >
            <h1
              className="headerTitle"
              style={{ fontSize: "30px", color: "#f08000" }}
            >
              <br />
              NOS ACTIVITÉS
            </h1>
          </Col>
          <Col
            className="miniTitle mb-3"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 auto",
              color: "#B8B8B8",
            }}
          >
            SONATRACH couvre l’ensemble de la chaîne de valeur des
            hydrocarbures.
          </Col>
          <Row
            style={{
              margin: "0 auto",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <Col md={5}>
              <Col>
                {" "}
                <Card
                  style={{
                    width: "23rem",
                    margin: "0 auto",
                    marginBottom: "5%",
                    boxShadow: "0 0 10px #fff",
                    background: "#DEDEDE",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Transport Par Canalisations</Card.Title>

                    <Card.Text
                      style={{ textAlign: "justify", color: "#75787F" }}
                    >
                      Le transport par canalisation assure l’acheminement des
                      hydrocarbures liquides et gazeux produits par l’Activité
                      Exploration-Production. Le réseau de canalisations de
                      SONATRACH en Algérie s’étend sur près de 20 000
                      kilomètres.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "23rem",
                    margin: "0 auto",
                    boxShadow: "0 0 10px #fff",
                    background: "#DEDEDE",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Liquéfaction et Séparation</Card.Title>

                    <Card.Text
                      style={{
                        textAlign: "justify",
                        fontSize: "14px",
                        color: "#75787F",
                      }}
                    >
                      Pionnier dans le GNL, SONATRACH s’est hissée parmi les
                      tous premiers acteurs mondiaux dans la production et la
                      commercialisation de produits à forte valeur ajoutée.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col
              md={2}
              style={{
                height: "100%",
                margin: "auto 0",
              }}
            >
              <img
                src={logoWhite}
                alt="logo"
                style={{
                  width: "40%",
                  height: "40%",
                  boxShadow: "0 0 10px #fff",
                }}
              />
            </Col>
            <Col md={5}>
              <Col>
                <Card
                  style={{
                    width: "23rem",
                    margin: "0 auto",
                    marginBottom: "5%",
                    boxShadow: "0 0 10px #fff",
                    background: "#DEDEDE",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Exploration et Production</Card.Title>
                    <Card.Text
                      style={{
                        textAlign: "justify",
                        fontSize: "16px",
                        color: "#75787F",
                      }}
                    >
                      L’Activité Exploration-Production en hydrocarbures est
                      montée en puissance grâce à l’expertise technologique et
                      le savoir-faire des équipes dans la recherche et la
                      découverte de nouveaux gisements sur le territoire
                      national et à travers le monde.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{
                    width: "23rem",
                    margin: "0 auto",
                    boxShadow: "0 0 10px #fff",
                    background: "#DEDEDE",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Raffinage et Pétrochimie</Card.Title>

                    <Card.Text
                      style={{ textAlign: "justify", color: "#75787F" }}
                    >
                      L’activité Raffinage-Pétrochimie a pour mission de
                      valoriser l’approvisionnement du marché domestique en
                      carburants.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
    </div>
  );
}

export default Feature;
