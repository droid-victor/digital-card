import React from "react";
import photo from "../images/photo.png";

export default function info() {
  return (
    <div className="info">
      <img className="info--photo" src={photo} alt="Arlan Aziz" />
      <h1 className="info--fullname">Arslan Aziz</h1>
      <h5 className="info--role">Front End developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://arslan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          arslanaziz.com
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto: khan.arslanaziz@gmail.com">
            {" "}
            <button className="button button--email">
              <i class="fa-solid fa-envelope"></i>Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/arslan097"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <i class="fa-brands fa-linkedin"></i>linkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
