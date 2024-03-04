import { Component } from "react";
import styles from "./wheel.module.css";

export default class Wheel extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { handleMenu, handleRotate, handleSelect } = this.props;
    return (
      <>
        <div className={styles.box}>
          <div onMouseOver={(e) => handleRotate(e)} className={styles.buttons}>
            <div onClick={handleSelect} className={styles.circle}></div>
            <div onClick={handleMenu} className={styles.menu}>
              MENU
            </div>
            <div className={styles.prev}>
              <i className="fa-solid fa-backward-fast"></i>
            </div>
            <div className={styles.next}>
              <i className="fa-solid fa-forward-fast"></i>
            </div>
            <div className={styles.play}>
              <i className="fa-solid fa-play"></i>
              <i class="fa-solid fa-pause"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
