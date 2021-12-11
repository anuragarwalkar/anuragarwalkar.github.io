import React from "react";
import Header from "../components/Header/header";
import MyInfo from "../components/MyInfo/MyInfo";
import "../scss/main.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <MyInfo />
      {/* <div>Index Page</div> */}
    </main>
  );
};

export default IndexPage;
