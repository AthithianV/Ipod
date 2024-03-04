import { Component } from "react";
import styles from "./screen.module.css";

export default class Screen extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        {this.props.list ? (
          <>
            <div className={styles.left}>
              <h2 className={styles.title}>Ipod</h2>
              <ul className={styles.list}>
                {this.props.list.map((element, index) => (
                  <li
                    key={index}
                    className={index == this.props.index ? styles.active : ""}
                    style={stylesObj.listItem}
                  >
                    {element}
                    <span className={styles.arrow}>
                      <i class="fa-solid fa-caret-right"></i>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.right}></div>
          </>
        ) : (
          <div className={styles.page}>
            <img
              className={styles.img}
              src={this.props.img}
              alt={this.props.display}
            />
            <h5 style={stylesObj.m0}>{this.props.display}</h5>
          </div>
        )}
      </div>
    );
  }
}

const stylesObj = {
  listItem: {
    padding: "5px 7px 5px 3px",
    display: "flex",
    justifyContent: "space-between",
  },
  m0: {
    margin: "0px",
  },
};
