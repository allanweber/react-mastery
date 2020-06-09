import React from "react";

const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      let reqHeader = new Headers();
      reqHeader.append(
        "Content-Type",
        "text/json",
        "Access-Control-Allow-Origin"
      );
      let initObject = {
        method: "GET",
        headers: reqHeader,
      };

      setTimeout(() => {
        fetch(this.props.dataSource, initObject)
          .then((response) => response.json())
          .then((data) => this.setState({ data: data.slice(0, 3) }));
      }, 1500);
    }

    render() {
      const { dataSource, ...otherProps } = this.props;

      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
  }

  return WithData;
};

export default withData;
