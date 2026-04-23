import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link';
const AuthLinks = () => {
  const status = "notauthenticated";
  
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  ); // The return ends here
};   // THIS is where the function brace from line 4 should close

export default AuthLinks;
