import React from "react";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import Payment from "./components/Payment";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <HeroPage />
        <Payment />
      </div>
    </>
  );
};

export default App;
