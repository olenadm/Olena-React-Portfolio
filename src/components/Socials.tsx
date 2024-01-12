import React from "react";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";
import { GIT_URL } from "@/data/projects-data";

export default function Socials() {
  return (
    <div className="side d-none d-sm-block">
      <ul className="social">
        <li>
          <a href={GIT_URL} target="_blank">
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/olenadm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/olena-dmytrenko-ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:olenad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
        </li>
      </ul>
    </div>
  );
}
