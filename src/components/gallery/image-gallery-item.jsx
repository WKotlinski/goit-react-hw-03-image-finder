import { Component } from "react";
import css from "./gallery.module.css";

export default class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li
        className={css["gallery-item"]}
        onClick={() => onClick(image.largeImageURL)}
      >
        <img src={image.webformatURL} alt="@" />
      </li>
    );
  }
}
