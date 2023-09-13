import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

const FooterInfo = ({ data: { img, icon, info1, info2, id } }) => {
  return (
    <Col md={4}>
      <div
        className={`d-flex fContactInfo fContactInfo${id} align-items-center`}
      >
        <img
          src={img}
          style={{ height: "20%", width: "25%" }}
          alt="logo"
          className={`${id === 1 ? "" : "d-none"}`}
        />
        <FontAwesomeIcon icon={icon} className="fContactIcon" />
        <div>
          <p className={`brnName${id}`}>{info1}</p>
          {info2 && <p>{info2}</p>}
        </div>
      </div>
    </Col>
  );
};

export default FooterInfo;
