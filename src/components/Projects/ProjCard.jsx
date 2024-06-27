import React from "react";
import { getImageURL } from "../../../utils";
import styles from "./ProjCard.module.css";

export const ProjCard = ({proj})=>{
    return(
        <div  className={styles.container}>
            <img src={getImageURL(proj.imageSrc)} alt={proj.title}
             className={styles.image} />
            <h3  className={styles.title}>{proj.title}</h3>
            <p className={styles.description}>{proj.description}</p>
            <ul className={styles.skills}>{
                proj.skills.map((skill, id)=>{
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })
            }</ul>
            <div className={styles.links}>
                <a href={proj.demo} className={styles.link}>Demo</a>
                <a href={proj.source} className={styles.link}>Source</a>
            </div>
        </div>
    );
}