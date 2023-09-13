import { faMobileAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import sonatrach from "../Assets/sonatrach.png";

export const usefulLink = [
  { name: "A propos de Nous", link: "#about", id: 1 },
  { name: "Rendez-vous", link: "#contact", id: 2 },
  { name: "Activités", link: "#activité", id: 3 },
];
export const ourServices = [
  { name: "service général", link: "#contact", id: 6 },
  { name: "service d'hébergement", link: "#contact", id: 7 },
  { name: "service de transport", link: "#contact", id: 8 },
];
export const otherLinks = [
  { name: "Admin", link: "admin", id: 11 },
  { name: "Agent", link: "agent", id: 12 },
  { name: "Service", link: "service", id: 13 },
];

export const footerInfo = [
  { img: sonatrach, info1: "Sonatrach", id: 1 },
  {
    icon: faMobileAlt,
    info1: "+213 000 000",
    info2: "sonatrach.dz@gmail.com",
    id: 2,
  },
  {
    icon: faMapMarkedAlt,
    info1: "Alger, Hidra",
    id: 3,
  },
];
