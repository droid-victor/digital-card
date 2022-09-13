import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/explore"
        target="_blank"
        rel="noopener noreferrer"
        className="footer--icon"
      >
        <i class="fa-brands fa-square-twitter"></i>
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer--icon"
      >
        <i class="fa-brands fa-square-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/accounts/login/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer--icon"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer--icon"
      >
        <i class="fa-brands fa-square-github"></i>
      </a>
    </div>
  );
}
