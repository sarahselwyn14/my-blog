import React from 'react';
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
    return (
    <div className = {styles.container}>
        <h1 className={styles.title}><b>Hello!</b>Welcome to Sarah's Studio!</h1>

    


<div className={styles.post}>
  <div className={styles.imgContainer}>
    <Image src="/p1.jpeg" alt="" fill className = {styles.image} /> 
  </div>
  <div className={styles.textContainer}>
    <h1 className={styles.postTitle}>LKJFLKDJDFKLJKFJKFJFJSKfl dj</h1>
    <p className={styles.postDesc}>
       LOrieajrj eijri hufihfija djdsfhiaewu dasofijoif fij
    </p>
    <button className={styles.button}>Read More</button>
  </div>
</div>
</div>

         );
        };

export default Featured