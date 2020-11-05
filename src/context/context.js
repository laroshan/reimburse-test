import React, { Component } from "react";
import { linkData } from "./linkData";

const DetailContext = React.createContext();

class DetailProvider extends Component {
  state = {
    navbarOpen: true,
    sidebarOpen: true,
    links: linkData,
    path: "/",
  };
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
    this.setState({ path: "/forms" });
  };

  render() {
    return (
      <DetailContext.Provider
        value={{
          ...this.state,
          handleNavbar: this.handleNavbar,
          handleSidebar: this.handleSidebar,
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
