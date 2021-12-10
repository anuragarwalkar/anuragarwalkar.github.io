import React from "react";
import MainBody from "../components/Body/MainBody";
import Header from "../components/Header/Header";
import AppMainHeader from "../MainHeader";

// markup
const IndexPage = () => {
  return (
    <main>
      <AppMainHeader />
      <Header />
      <MainBody />
    </main>
  );
};

export default IndexPage;
