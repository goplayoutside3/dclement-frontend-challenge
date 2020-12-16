import Head from 'next/head'
import styles from '../styles/layouts/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DClement Front End Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is Delilah Clement's completed front end challenge.
        </h1>
      </main>
    </div>
  )
}