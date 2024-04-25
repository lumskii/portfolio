import React from 'react'
import './styles.css'

export default function Card({ title, status, description, image1, image2 }) {
    return (
      <>
        <div>
        <ul className="cards">
          <li>
            <div className="card">
            <img src={image1} className="card_image" alt="" />
            <div className="card_overlay">
              <div className="card_header">
                <svg className="card_arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img className="card_thumb" src={image2} alt="" />
                <div className="card_header-text">
                  <h3 className="card_title">{title}</h3>
                  <span className="card_status">
                    {status}
                  </span>
                </div>
              </div>
              <p className="card_description">
                {description}
              </p>
            </div>
            </div>
          </li>
        </ul>
      </div>
      </>
    );
  }
