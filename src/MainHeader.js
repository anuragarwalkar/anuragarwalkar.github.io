import React from "react";
import { Helmet } from "react-helmet";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/main.css";

function AppMainHeader() {
  return (
    <Helmet>
      <title>Anurag Arwalkar Portfolio</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default AppMainHeader;
