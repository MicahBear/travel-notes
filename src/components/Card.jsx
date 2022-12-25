import React from "react";
// import images from "../images"

export default function Card(props) {
  console.log(props.card.title);
  return (
    <div className="card">
      <img className="card--img" src={`../src/images/${props.card.imageUrl}`} />
      <div className="info">
        <span className="info--location">{props.card.location}</span>
        <a className="info--map">View on Google Maps</a>
        <h2 className="info--title">{props.card.title}</h2>
        <span className="info--date">
          {props.card.startDate} - {props.card.endDate}
        </span>
        <p className="info--description">{props.card.description}</p>
      </div>
    </div>
  );
}
