import React, { Component } from "react";
import { linkData } from "./linkData";
import { ExpenseData } from "./ExpenseData";

const DetailContext = React.createContext();

class DetailProvider extends Component {
  state = {
    navbarOpen: true,
    sidebarOpen: true,
    links: linkData,
    open: true,
    // isLogged: false,
    expenses: ExpenseData,
  };
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleLogin() {
    this.setState({ isLogged: true });
  }
  render() {
    return (
      <DetailContext.Provider
        value={{
          ...this.state,
          handleNavbar: this.handleNavbar,
          handleSidebar: this.handleSidebar,
          handleOpen: this.handleOpen,
          handelLogin: this.handleLogin,
        }}
      >
        {this.props.children}{" "}
        {/*we are going to wrap all application with provider so wee need children  */}
      </DetailContext.Provider>
    );
  }
}

const DetailConsumer = DetailContext.Consumer;

export { DetailProvider, DetailConsumer };
