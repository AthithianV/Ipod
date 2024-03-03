import { Component } from "react";
import styles from "./wheel.module.css";
import ZingTouch from "zingtouch";

export default class Wheel extends Component {
  //   constructor() {
  //     super();
  //   }

  componentDidMount() {}

  rotate = (event) => {
    let ztRegion = new ZingTouch.Region(event.target);
    let ztRotate = new ZingTouch.Rotate();
    ztRegion.bind(event.target, ztRotate, (event) => {
      console.log(event.detail);
    });
  };

  render() {
    return (
      <>
        <div className={styles.box}>
          <div onMouseOver={(e) => this.rotate(e)} className={styles.buttons}>
            <div className={styles.circle}></div>
            <div className={styles.menu}>MENU</div>
            <div className={styles.prev}>
              <i className="fa-solid fa-backward-fast"></i>
            </div>
            <div className={styles.next}>
              <i className="fa-solid fa-forward-fast"></i>
            </div>
            <div className={styles.play}>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
