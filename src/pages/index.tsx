import React, { Fragment } from "react";
import Header from "../components/Header/header";
import MyInfo from "../components/MyInfo/MyInfo";
import "../scss/main.scss";

// markup
const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <MyInfo />
      {/* <div>Index Page</div> */}
    </Fragment>
  );
};

export default IndexPage;
