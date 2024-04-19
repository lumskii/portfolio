import React from "react";
import "./styles.css";

export default function ModelBox({ width, height, img, header, text }) {
  return (
    <>
      <div className="container">
        <div
          style={{
            width: width,
            height: height,
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="content">
            <h3>{header}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
