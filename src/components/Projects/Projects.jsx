import React from "react";
import projects from "../../data/projects.json"
import { getImageURL } from "../../../utils";
import { ProjCard } from "./ProjCard";
import styles from "./Projects.module.css";

export const Projects = ()=>{
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((proj, id)=>{
                    return (
                        <ProjCard key={id} proj = {proj}/>
                    );
                })}
            </div>
        </section>
    );
}