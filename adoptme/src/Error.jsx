import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // TrackJS, NewRelic
    console.error("ErrorBoundary", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Listing Error <Link to="/">Go to HomePage</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
