import React from "react";

import { Footer, Header, Skills, Work } from "./container";
import "./App.scss";

const App = () => (
  <div className="app">
    {/* <Navbar /> */}
    <Header />
    {/* <About /> */}
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
