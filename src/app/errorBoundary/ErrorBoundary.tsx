import React from "react";

import { ErrorIndicator } from "./ErrorIndicator";

interface IState {
  hasError: boolean;
}

interface IProps {}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}
