import { Component } from "react";
import ImageGalleryItem from "./image-gallery-item";
import css from "./gallery.module.css";

export default class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}
