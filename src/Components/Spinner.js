import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex container-xxl justify-content-center align-items-center ">
        
          <img src={loading} alt="loading" />
        
      </div>
    );
  }
}

export default Spinner;
