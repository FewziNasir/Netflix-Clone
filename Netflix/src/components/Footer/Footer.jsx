import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">

          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>

        <div className="footer_data">
          <ul>
            <li>Audio Description</li>
            <li>Investore Relations</li>
            <li>Legal Notice</li>
          </ul>

          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>

          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer_bottom">
          <p className="service_code">
            Service Code
          </p>
          <p className="copy_write">&copy;1997-2024 Netflix Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
