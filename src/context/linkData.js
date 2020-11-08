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
  },
  {
    id: 2,
    text: "Expense",
    icon: <FaListAlt />,
    path: "/ff",
  },
  {
    id: 3,
    text: "Techlead deatils",
    icon: <FaMale />,
    path: "/medicalForm",
  },
  {
    id: 4,
    text: "Employee details",
    icon: <FaAddressCard />,

    path: "/expenseform",
  },
  {
    id: 5,
    text: "report",
    icon: <FaFileAlt />,
    path: "/nn",
  },
];
