import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <ul class="icons">
        <li>
          <a href="#" class="icon brands fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-facebook-f">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon brands fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon solid fa-rss">
            <span class="label">RSS</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon solid fa-envelope">
            <span class="label">Email</span>
          </a>
        </li>
      </ul>
      <p class="copyright">
        &copy; Ashland West
        <br />
        <a href="https://ashlandwest.com/">Portfolio and contact information</a>
        .
      </p>
    </section>
  );
};

export default Footer;
