import "./App.css";
import Login from "./pages/LoginPage";
import Default from "./pages/DefaultPage";
import Expense from "./pages/EmpExpensePage";
import Medical from "./pages/EmpMedicalPage";
import FormSelection from "./pages/EmpFormPage";
import "bootstrap/dist/css/bootstrap.min.css";
//import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BcgImg from "./images/backgrund.png";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <section
      class="bg_image"
      style={{
        backgroundImage: `url(${BcgImg})`,
        height: "100vh",
        //color: "#f5f5f5",
        zIndex: 1,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Navbar className="navbar" />
      <Sidebar className="sidebar" />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forms" component={FormSelection} />
        <Route path="/medicalForm" component={Medical} />
        <Route path="/expenseForm" component={Expense} />
        <Route component={Default} />
      </Switch>
    </section>
  );
}

// const AppWrapper = styled.section``;

export default App;
