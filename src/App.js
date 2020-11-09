import "./App.css";
import Login from "./pages/LoginPage";
import Default from "./pages/DefaultPage";
import Expense from "./pages/EmpExpensePage";
import Medical from "./pages/EmpMedicalPage";
import FormSelection from "./pages/EmpFormPage";
import "bootstrap/dist/css/bootstrap.min.css";
import BcgImg from "./images/backgrundd.png";

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
        position: "absolut",
      }}
    >
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
