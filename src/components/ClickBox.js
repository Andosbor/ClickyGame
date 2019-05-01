import React from "react";
import "../styles/ClickBox.css";

function ClickBox(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }

export default ClickBox;