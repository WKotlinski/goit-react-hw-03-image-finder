import { Component } from "react";
import css from "./gallery.module.css";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li
        className={css["gallery-item"]}
        onClick={(e) => {
          if (e.target.tagName !== "IMG") {
            onClick(image.largeImageURL);
          }
        }}
      >
        <img src={image.webformatURL} alt="@" />
      </li>
    );
  }
}
