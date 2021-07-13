import React from "react";
import Logo from "../IMG/logo.svg";
import Errow from "../IMG/icon-error.svg";
import Hero from "../IMG/hero-desktop.jpg";
import Arrow from "../IMG/icon-arrow.svg";
import Pattern from "../IMG/bg-pattern-desktop.svg";

class Main extends React.Component {
  constructor(props) {
    super();
    this.state = {
      errow: false,
    };
  }

  onErrow = () => {
    this.setState({
      errow: true,
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <img src={Pattern} alt="" style={styles.iconPattern} />
          <div style={styles.header}>
            <img src={Logo} alt="" />
          </div>
          <div style={styles.body}>
            <div style={styles.layoutTitle}>
              <div style={styles.title1}>We' re</div>
              <div style={styles.title2}>Comming </div>
              <div style={styles.title2}> soon</div>
            </div>
          </div>
          <div style={styles.body1}>
            <div style={styles.layoutTitle2}>
              <span style={styles.title3}>
                Hello fellow shopper! We're currently buiding our new fashion
                store. Add your email below to stay up-to-date with,
                announcements and our launch deals.
              </span>
              <div style={styles.layoutInput}>
                <input style={styles.input}></input>
                {this.state.errow && (
                  <img src={Errow} alt="" style={styles.iconError} />
                )}
                <div style={styles.button} onClick={this.onErrow}>
                  <img src={Arrow} alt="" style={styles.iconArrow} />
                </div>
              </div>
              {this.state.errow && (
                <div style={styles.text}>Please provide a valid email</div>
              )}
            </div>
          </div>
        </div>
        <img src={Hero} alt="" style={styles.bgImg} />
      </div>
    );
  }
}
const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  container: {
    flex: 1,
    height: "100%",
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "27%",
    paddingTop: 30,
  },
  bgImg: {
    flex: 1,
    height: "100%",
    // backgroundColor: "blue",
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  body1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
  },
  layoutTitle: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // padding: "0px 20px 0px 20px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  layoutTitle2: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title1: {
    fontSize: 80,
    fontWeight: 300,
    color: "#caa1a4",
  },
  title2: {
    fontSize: 70,
    fontWeight: 500,
    color: "#464040",
  },
  title3: {
    fontSize: 20,
    color: "#cebbba",
  },
  layoutInput: {
    width: "100%",
    height: 50,
    display: "flex",
    borderRadius: "30px",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #cf7d85",
    paddingRight: "20%",
    position: "relative",
    margin: "20px 0px 0px 0px",
  },
  input: {
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    border: "none",
    padding: "0px 20px",
    fontSize: 16,
  },
  iconError: {
    width: 30,
    height: 30,
  },
  button: {
    width: "30%",
    height: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "-13%",
    borderRadius: "30px",
    backgroundColor: "pink",
    cursor: "pointer",
    zIndex: 1,
    boxShadow: "5px 5px #eecfce",
  },
  iconArrow: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: "18px",
    color: "#d48e97",
    marginLeft: 25,
  },
  iconPattern: {
    flex: 1,
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
};

export default Main;
