import { Component } from "react";
import ReactModal from "react-modal";
import css from "./modal.module.css";

export default class Modal extends Component {
  render() {
    const { isOpen, imageUrl, onClose } = this.props;

    return (
      <ReactModal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal">
        <div className={css.overlay} onClick={onClose}>
          <div className={css.modal}>
            <img src={imageUrl} alt="" />
            <button onClick={onClose}>Zamknij</button>
          </div>
        </div>
      </ReactModal>
    );
  }
}
