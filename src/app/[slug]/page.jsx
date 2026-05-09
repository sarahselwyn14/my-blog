import React from 'react';
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      
      {/* Top Section: Title & Images */}
      <div className={styles.infoContainer}>
        
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          
          {/* User Details Block */}
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/miffy_avatar.png" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sarah Selwyn</span>
              <span className={styles.date}>4.2.2026</span>
            </div>
          </div>
        </div>

        {/* Main Post Feature Image */}
        <div className={styles.imageContainer}>
          <Image src="/pink.png" alt="" fill className={styles.image} />
        </div>

      </div>

      {/* Bottom Section: Main Blog Content Text */}
      <div className={styles.content}>
        <div className={styles.post}>
            <div className = {styles.description}>
            <h2>header</h2>
            <p>Description Description Description DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription Description</p>
            <h2>header</h2>
            <p>Description Description Description DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription Description</p>
            <h2>header</h2>
            <p>Description Description Description DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription Description</p>
            <h2>header</h2>
            <p>Description Description Description DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription DescriptionDescription Description</p>

            </div>
            <div className = {styles.comment}>
            </div>
        </div>
      </div>

    </div>
  );
};

export default SinglePage;