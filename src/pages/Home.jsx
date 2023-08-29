import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div id="main">
        <div className="welcome">
          <h1>Welcome to Shopy Site</h1>
          <h2>my self RAJANI KANT DAS</h2>
          <div className="para">
            <h4 className="justify-content-center d-flex ko">
              Im a fresher Fron-end web developer
            </h4>
          </div>
        </div>
        <span className="para">
          In this app you have a <b>&nbsp;Shopping&nbsp;</b> site and <b>&nbsp;Todo&nbsp;</b> site and
          on contact you can send feedback to us
        </span>
      </div>
    </>
  );
};

export default Home;
