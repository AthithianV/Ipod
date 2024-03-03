import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    console.log("IYfdy");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Info", info);
    console.log("Error", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}
