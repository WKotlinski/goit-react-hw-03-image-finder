import { Component } from "react";
import LoaderSpinner from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <LoaderSpinner
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      </div>
    );
  }
}
