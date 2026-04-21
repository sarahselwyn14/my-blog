import React from 'react'
import styles from "./authLinks.module.css"
import AuthLinks from "@/components/authLinks/authLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link"
const Navbar = () => {
    return (
<div className={styles.container}>
  <div className={styles.social}>
    <img src="https://img.freepik.com/premium-vector/art-illustration_1166422-336.jpg?semt=ais_hybrid&w=740&q=80" alt="" width={24} height={24} />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png" alt="" width={24} height={24} />
  </div>
  <div className={styles.logo}>Sarah's Studio</div>
  <div className={styles.links}>
  <ThemeToggle/>
  <link href = "/">Homepage</link>
  <link href = "/">About me</link>
  <authLinks/>

  </div>
</div>
    )
}

export default Navbar