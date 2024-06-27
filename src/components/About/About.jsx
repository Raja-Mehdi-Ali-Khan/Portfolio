import React from "react";
import { getImageURL } from "../../../utils";
import styles from "./About.module.css"

export const About = ()=>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>    
                <img  src={getImageURL("Myimages/image-removebg-preview (1).png")} alt="my image" className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img  src={getImageURL("about/cursorIcon.png")} alt="cursor icon image"/>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Development</h3>
                            <p>I'm a Front-End Developer with a passion for creating intuitive and responsive web applications. I thrive on learning new technologies and collaborating with teams to deliver high-quality user experiences..</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img  src={getImageURL("about/serverIcon.png")} alt="server icon image" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-End Development</h3>
                            <p>As a back-end developer, I specialize in creating robust server-side applications and ensuring seamless integration with front-end systems. I am passionate about optimizing performance and security in web applications.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img  src={getImageURL("about/uiIcon.png")} alt="ui icon image" />
                        <div className={styles.aboutItemText}>
                            <h3>Web-Scraping</h3>
                            <p>As a web scraper, I efficiently extract and analyze data from various websites to provide actionable insights. My expertise ensures accurate and reliable data collection for diverse applications.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>    
    );
}