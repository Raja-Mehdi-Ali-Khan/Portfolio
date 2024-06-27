import React from "react";

import styles from "./Contact.module.css";
import { getImageURL } from "../../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rajghaznavi7@gmail.com">rajghaznavi7@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/posts/raja-mehdi-ali-khan-2998a6297_webscraping-python-datascience-activity-7208069203281539072-RUFH?utm_source=share&utm_medium=member_android">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Raja-Mehdi-Ali-Khan">github.com</a>
        </li>
      </ul>
    </footer>
  );
};
