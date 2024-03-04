import Wheel from "./Wheel UI/wheel";
import styles from "./App.module.css";
import ErrorBoundary from "./ErrorBoundary";
import { Component } from "react";
import Screen from "./screen/screen";
import ZingTouch from "zingtouch";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Cover FLow", "Music", "Games", "Setting"],
      music: ["Songs", "Albums", "Artists", "Playlists"],
      index: 0,
      images: {
        Games: "http://cliparts.co/cliparts/BTa/r9B/BTar9Bopc.jpg",
        Setting:
          "https://static.vecteezy.com/system/resources/previews/000/422/697/original/vector-settings-icon.jpg",
        Songs:
          "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg",
        Albums:
          "https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg",
        Artists: "https://webstockreview.net/images/dj-clipart-dj-logo-11.png",
        Playlists: "https://logodix.com/logo/1219113.png",
      },
      display: "main",
      active: "",
      angle: 0,
    };
  }

  rotate = (event) => {
    let ztRegion = new ZingTouch.Region(event.target);
    let ztRotate = new ZingTouch.Rotate();
    ztRegion.bind(event.target, ztRotate, (event) => {
      const { angle, distanceFromOrigin } = event.detail;
      if (distanceFromOrigin == 0) {
        this.setState({ angle });
      }
      if (parseInt(angle) % 30 == 0) {
        // this.setState({ angle });
        let newIndex = (this.state.index + 1) % 4;
        this.setState({
          index: newIndex,
        });
      }
    });
  };

  handleSelect = () => {
    console.log(this.state);
    if (this.state.display == "main") {
      this.setState({ display: this.state.list[this.state.index] });
    } else if (this.state.display == "Music") {
      this.setState({ display: this.state.music[this.state.index] });
    }
  };

  handleMenu = () => {
    this.setState({ display: "main", index: 0 });
  };

  render() {
    const { list, music, index, display, images } = this.state;
    return (
      <ErrorBoundary>
        <div className={styles.ipod}>
          <div className={styles.container}>
            <Screen
              list={
                display === "main" ? list : display === "Music" ? music : ""
              }
              display={display}
              index={index}
              img={images[display]}
            />
            <Wheel
              handleRotate={this.rotate}
              handleMenu={this.handleMenu}
              handleSelect={this.handleSelect}
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
