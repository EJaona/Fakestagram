import React from "react";

const authenticate = Component1 => Component2 =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({
          isLoggedIn: false
        });
      } else
        this.setState({
          isLoggedIn: true
        });
    }
    render() {
      if (this.state.isLoggedIn) return <Component1 />;
      return <Component2 />;
    }
  };

export default authenticate;
