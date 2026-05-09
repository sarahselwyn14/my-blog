import React from 'react';
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const categoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        
        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src="/style.png" alt="" width={32} height={32} className={styles.image}/>
            style
          </Link>
        </div>

        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src="/crochet.png" alt="" width={32} height={32} className={styles.image}/>
            Crochet
          </Link>
        </div>

        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src="/music.png" alt="" width={32} height={32} className={styles.image}/>
            Music
          </Link>
        </div>

        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src="/food.png" alt="" width={32} height={32} className={styles.image}/>
            Food
          </Link>
        </div>

        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src="/coding.png" alt="" width={32} height={32} className={styles.image}/>
            Coding
          </Link>
        </div>

      </div>
    </div>
  );
};

export default categoryList;