import React, { useContext } from "react";
import "rapidoc"; // <-- import rapidoc
import "./app.css";
import paylivreLogoWihite from "./../../assets/paylivre_logo_white.svg";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import Header from "../../components/Header";
import { API_DOC_BASE_URL } from "../../constants/api_doc";

function Home() {
  const { token } = useContext(AuthGoogleContext);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Header />
      {/* // <SwaggerUI
    //   // spec={swaggerJson}
    //   // url="https://petstore.swagger.io/v2/swagger.json"
    //   url="http://localhost:5000/api-docs/json"
    // /> */}
      <rapi-doc
        // spec-url="https://petstore.swagger.io/v2/swagger.json"
        spec-url={`${API_DOC_BASE_URL}/api-docs/json?access_token=${token}`}
        render-style="read"
        style={{ height: "93vh", width: "100%" }}
        primary-color="#168ce8"
        theme="light"
      >
        <img
          slot="logo"
          alt="logo"
          src={paylivreLogoWihite}
          style={{
            width: "100px",
            height: "auto",
            padding: "0 10px",
            display: "none",
          }}
        />
        <img
          alt="nav logo"
          slot="nav-logo"
          src={paylivreLogoWihite}
          style={{ width: "200px", height: "68px" }}
        />
      </rapi-doc>
    </div>
  );
}

export default Home;
