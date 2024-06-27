import React from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../../utils";

export const Hero = ()=>{
    return (
        <section className={styles.container}>
           <div className={styles.content}>
            <h1 className={styles.title}>Hi,<br></br> I'm Raja Mehdi Ali Khan</h1>
            
            <p className={styles.description}>I'm a Computer Science and Engineering student at NIT Andhra Pradesh with a passion for web development. I enjoy working in teams, am highly motivated, and always eager to learn new things. My dedication to continuous growth and improvement drives me to take on challenges and collaborate effectively with others.
            </p>
            <a className={styles.contactBtn} href="mailto:rajghaznavi7@gmail.com">Contact me</a>
            </div> 
            <img className={styles.heroImg} src={getImageURL("Myimages/image-removebg-preview.png")} alt="my image" />
            <div className={
                styles.topBlur
            } />
            <div className={
                styles.BottomBlur
            } />
        </section>
    );
};