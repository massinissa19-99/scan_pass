import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faList,
  faExclamationTriangle,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

import sonatrach from "../../../Assets/sonatrach.png";

const Sidebar = ({ setTitle }) => {
  return (
    <div>
      <div className="sideBrand">
        <div className="sideBrnIcon" style={{ display: "flex" }}>
          {/* <FontAwesomeIcon icon={faBuffer} /> */}
          <img
            src={sonatrach}
            alt="logo"
            style={{ width: "25%", height: "25%" }}
          />
          <h2 style={{ color: "black", marginTop: "3%" }}>
            Sonatrach <span className="navHighlight">Dz</span>
          </h2>
        </div>
      </div>
      <nav id="sideNavbars">
        <ul>
          <>
            <li>
              <NavLink
                onClick={() => setTitle("Listes des employés")}
                activeclassname="activePage"
                to="/dashboard/employeeList"
              >
                <FontAwesomeIcon icon={faList} className="iconCs" />
                List des employés
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setTitle("Confirmation employee")}
                activeclassname="activePage"
                to="/dashboard/addEmployee"
              >
                <FontAwesomeIcon icon={faUserPlus} className="iconCs" />
                Confirmation employee
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setTitle("Signalement de sécurité")}
                activeclassname="activePage"
                to="/dashboard/signal"
              >
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="iconCs"
                />
                Signalement de sécurité
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setTitle("Employes en mission")}
                activeclassname="activePage"
                to="/dashboard/mission"
              >
                <FontAwesomeIcon icon={faSuitcase} className="iconCs" />
                Employes en mission
              </NavLink>
            </li>
          </>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
