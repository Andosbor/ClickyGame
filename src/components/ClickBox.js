import React from "react";
import "../styles/ClickBox.css";

function ClickBox(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} key={props.index} />
        </div>
      </div>
    );
  }

export default ClickBox;