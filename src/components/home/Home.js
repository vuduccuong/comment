import React from "react";

//css
import "./home.css";

const Home = () => {
  return (
    <div className="c-home">
      <div className="container">
        <h1>Danh sách các components</h1>
        <hr />
        <ol>
          <li>
            Component Comment. Cần import các component :
            <ul>
              <li>Component Error : ./components/error</li>
              <li>Component Modal : ./components/modal</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
