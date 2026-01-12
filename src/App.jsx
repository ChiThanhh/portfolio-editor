import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <div className="bg-[#0b192f] min-h-screen w-full">
      {/* <FadeInSection /> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
