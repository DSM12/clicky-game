import React from "react";
import "./style.css";


function HerosCard(props) {
  return (
    <div className="card item" onClick={() => props.clickedImage(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HerosCard;