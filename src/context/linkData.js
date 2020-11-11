import {
  FaAddressCard,
  FaFileAlt,
  FaListAlt,
  FaNewspaper,
  FaMale,
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
    text: "Expense",
    icon: <FaListAlt />,
    path: "/empReport",
    active: false,
  },
  {
    id: 3,
    text: "Techlead deatils",
    icon: <FaMale />,
    path: "/medicalForm",
    active: false,
  },
  {
    id: 4,
    text: "Employee details",
    icon: <FaAddressCard />,

    path: "/expenseform",
    active: false,
  },
  {
    id: 5,
    text: "report",
    icon: <FaFileAlt />,
    path: "/ff",
    active: false,
  },
];
