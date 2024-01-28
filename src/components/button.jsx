import { Component } from "react";

export default class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    );
  }
}
