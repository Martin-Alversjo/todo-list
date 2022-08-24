import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import Todos from "../containers/Todos/Todos"

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Frontend Mentor Todo app challenge</title>
        <meta name="description" content="Frontend Mentor Todo app challenge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
      <main className={styles.container}>
        <Header />
        <Todos />
      </main>
    </div>
  )
}

export default Home
