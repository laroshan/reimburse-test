import Login from "./pages/LoginPage";
import Default from "./pages/DefaultPage";
import Expense from "./pages/EmpExpensePage";
import Medical from "./pages/EmpMedicalPage";
import FormSelection from "./pages/EmpFormPage";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpReport from "./pages/EmpReport";
import EmpAllReport from "./pages/EmpAllReport";

import EmpDetail from "./pages/EmpDetailPage";

import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/forms" component={FormSelection} />
          <Route path="/medicalForm" component={Medical} />
          <Route path="/expenseForm" component={Expense} />
          <Route path="/empReport" component={EmpReport} />
          <Route path="/empAllReport" component={EmpAllReport} />
          <Route path="/empDetail" component={EmpDetail} />
          <Route component={Default} />
        </Switch>
      </section>
      <Footer />
    </>
  );
}

// const AppWrapper = styled.section``;

export default App;
