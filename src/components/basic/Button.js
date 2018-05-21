import React, { Children } from "react";

class Home extends React.PureComponent {
  render() {
    const { children, ...rest } = this.props;
    return <div {...rest}>{children}</div>;
  }
}

export { Home as default };
