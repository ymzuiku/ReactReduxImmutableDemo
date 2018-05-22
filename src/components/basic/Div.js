import React from 'react';

class Div extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return <Div {...rest}>{children}</Div>;
  }
}

export default Div;
