import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Login.module.css'

const LoginPage = () => {
  return (
    <>
    <Head>
      <title>Login</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <div className={styles.left}>
        <div>
          <h1> Login to Codifin Cloud</h1>
          <p className={styles.info}>See your candidates information</p>
        </div>


        <button className={styles.google_btn} onClick={ () => console.log("login with google") }> 
          <img src="https://freesvg.org/img/1534129544.png" alt="google" className={styles.google} />
          Sign in with Google
        </button>

          <div className={styles.email_option_container}>
            <span className={styles.divider}></span>
             <p className={styles.email_option}> Or with email</p>
            <span className={styles.divider}></span>
          </div>

         <form className={styles.form}>
            <input className={styles.input} type="email" placeholder="Email" />
            <input className={styles.input}type="password" placeholder="Password" />
            <button type="submit">Sign in</button>
          </form>

          <p>Don't have an account? <a href="/" className={styles.signup}>Sign up</a></p>
      </div>

      <div className={styles.right}>
      </div>
    </main>
  </>
  )
}

export default LoginPage