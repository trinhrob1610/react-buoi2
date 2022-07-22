import React, { Component } from "react";
import g1 from "../assets/glassesImage/g1.jpg";
import g2 from "../assets/glassesImage/g2.jpg";
import g3 from "../assets/glassesImage/g3.jpg";
import g4 from "../assets/glassesImage/g4.jpg";
import g5 from "../assets/glassesImage/g5.jpg";
import g6 from "../assets/glassesImage/g6.jpg";
import g7 from "../assets/glassesImage/g7.jpg";
import g8 from "../assets/glassesImage/g8.jpg";
import g9 from "../assets/glassesImage/g9.jpg";
import v1 from "../assets/glassesImage/v1.png";
import v2 from "../assets/glassesImage/v2.png";
import v3 from "../assets/glassesImage/v3.png";
import v4 from "../assets/glassesImage/v4.png";
import v5 from "../assets/glassesImage/v5.png";
import v6 from "../assets/glassesImage/v6.png";
import v7 from "../assets/glassesImage/v7.png";
import v8 from "../assets/glassesImage/v8.png";
import v9 from "../assets/glassesImage/v9.png";
import Model from "../assets/glassesImage/model.jpg";
import "./Content.css";

export class Content extends Component {
  state = { ImgChange: v1 };
  changeG1 = () => {
    this.setState({
      ImgChange: v1,
    });
  };
  changeG2 = () => {
    this.setState({
      ImgChange: v2,
    });
  };
  changeG3 = () => {
    this.setState({
      ImgChange: v3,
    });
  };
  changeG4 = () => {
    this.setState({
      ImgChange: v4,
    });
  };
  changeG5 = () => {
    this.setState({
      ImgChange: v5,
    });
  };
  changeG6 = () => {
    this.setState({
      ImgChange: v6,
    });
  };
  changeG7 = () => {
    this.setState({
      ImgChange: v7,
    });
  };
  changeG8 = () => {
    this.setState({
      ImgChange: v8,
    });
  };
  changeG9 = () => {
    this.setState({
      ImgChange: v9,
    });
  };
  render() {
    return (
      <div>
        <header className="header">
          <h3>TRY GLASSES APP ONLINE</h3>
        </header>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="img-left col-6">
                <img src={Model} />
                <div className="img-change">
                  <img src={this.state.ImgChange} />
                </div>
              </div>
              <div className="img-right col-6">
                <img src={Model} />
              </div>
              <div className="img-item">
                <img src={g1} onClick={this.changeG1} />
                <img src={g2} onClick={this.changeG2} />
                <img src={g3} onClick={this.changeG3} />
                <img src={g4} onClick={this.changeG4} />
                <img src={g5} onClick={this.changeG5} />
                <img src={g6} onClick={this.changeG6} />
                <img src={g7} onClick={this.changeG7} />
                <img
                  style={{ marginTop: 20 }}
                  src={g8}
                  onClick={this.changeG8}
                />
                <img src={g9} onClick={this.changeG9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
