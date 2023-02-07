import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";
// import Spinner from './Components/Spinner';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Routes>
          <Route path="/" key="general" element={<News country="in"/>} />
          <Route path="/business" element={<News key="business" category="business" country="us"/>} />
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" country="us"/>} />
          <Route path="/general" element={<News key="general" category="general" country="us"/>} />
          <Route path="/health" element={<News key="health" category="health" country="us"/>} />
          <Route path="/science" element={<News key="science" category="science" country="us"/>} />
          <Route path="/technology" element={<News key="technology" category="technology" pageSize="10" country="us"/>} />
          <Route path="/sports" element={<News key="sports" category="sports" country="us"/>} />
          <Route />
        </Routes>
      </>
    );
  }
}