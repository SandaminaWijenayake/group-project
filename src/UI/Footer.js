import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const url = "#";
  return (
    <div>
      <footer style={{ marginTop: "60px" }}>
        <div className="content">
          <div className="left box">
            <div className="upper ms-5">
              <div className="topic">About us</div>
              <p>
                Kapuwa.LK is the most trusted matrimony website made by Sri
                Lankans for Sri Lankans living in Sri Lanka and overseas. This
                is an SSL secured website built in accordance with global
                standards and with utmost priority for privacy and data
                security.
              </p>
            </div>

            <div className="lower ms-5">
              <div className="topic">Contact us</div>
              <a href={url} className="footerLinks">
                <i className="fas fa-phone-volume"></i>+94 071 345 1260
              </a>
              <div className="emai">
                <a href={url} className="footerLinks">
                  <i className="fas fa-envelope"></i>Kapuwa@gmail.lk
                </a>
              </div>
            </div>
          </div>

          <div className="middle box">
            <div className="topic">Our Services</div>
            <div>
              <a href={url} className="footerLinks">
                Privacy Policy
              </a>
            </div>
            <div>
              <a href={url} className="footerLinks">
                Blog
              </a>
            </div>
            <div>
              <a href={url} className="footerLinks">
                Help
              </a>
            </div>
            <div>
              <a href={url} className="footerLinks">
                Monthly Events
              </a>
            </div>
            <div>
              <a href={url} className="footerLinks">
                Term of Service
              </a>
            </div>
          </div>

          <div className="right box">
            <div className="topic">Connect with us</div>
            <form>
              <div className="media-icons">
                <a href={url}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a href={url}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a href={url}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a href={url}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a href={url}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="bottom ">
          <p>
            Copyright © 2023 <a href={url}>WebXcellence</a> All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
