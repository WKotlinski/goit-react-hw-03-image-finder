import { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar";
import ImageGallery from "./gallery/image-gallery";
import Modal from "./modal/modal";

const API_KEY = "41167232-e4ed0bcecad469809d9012c23";
const BASE_URL = "https://pixabay.com/api/";

export default class Featcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImageUrl: "",
      isModalOpen: false,
      isLoading: false,
    };
  }

  fetchData = async (query) => {
    const url = `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      this.setState({ images: response.data.hits });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  openModal = (imageUrl) => {
    console.log("Modal działa");
    this.setState({
      selectedImageUrl: imageUrl,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImageUrl: "",
      isModalOpen: false,
    });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.fetchData} />
        <ImageGallery images={this.state.images} onClick={this.openModal} />
      </div>
    );
  }
}