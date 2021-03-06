import {
  FaAddressCard,
  FaFileAlt,
  FaListAlt,
  FaNewspaper,
} from "react-icons/fa";

export const linkData = [
  {
    id: 1,
    text: "get started",
    icon: <FaNewspaper />,
    path: "/forms",
    active: true,
  },
  {
    id: 2,
    text: "Progress",
    icon: <FaListAlt />,
    path: "/empReport",
    active: false,
  },

  {
    id: 3,
    text: "Employee details",
    icon: <FaAddressCard />,

    path: "/empDetail",
    active: false,
  },
  {
    id: 4,
    text: "report",
    icon: <FaFileAlt />,
    path: "/empAllReport",
    active: false,
  },
];
