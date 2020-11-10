import Login from "./pages/LoginPage";
import Default from "./pages/DefaultPage";
import Expense from "./pages/EmpExpensePage";
import Medical from "./pages/EmpMedicalPage";
import FormSelection from "./pages/EmpFormPage";
import "bootstrap/dist/css/bootstrap.min.css";
import BcgImg from "./images/back.svg";
// import BcgImg2 from "./images/backgrundd.png";
import EmpReport from "./pages/EmpReport";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <section
      class="bg_image"
      style={{
        backgroundImage: `url(${BcgImg})`,
        minHeight: "100vh",
        minWidth: "100vw",
        //color: "#f5f5f5",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
      }}
    >
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forms" component={FormSelection} />
        <Route path="/medicalForm" component={Medical} />
        <Route path="/expenseForm" component={Expense} />
        <Route path="/empReport" component={EmpReport} />
        <Route component={Default} />
      </Switch>
    </section>
  );
}

// const AppWrapper = styled.section``;

export default App;
