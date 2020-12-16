import Head from 'next/head';
import styles from '../styles/layouts/home.module.scss';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    getAllData()
  }, [])

  const [fetchedData, loadData] = useState(null)

  const getAllData = async () => {
    // parsedData is an array of objects each with an id, listId, and name
    try {
      const response = await fetch('api/data');
      const parsedData = await response.json();
      loadData(parsedData)
    } catch (error) {
      console.log('Something went wrong')
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DClement Front End Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1>This is Delilah Clement's completed front end challenge.</h1>
        </section>
      </main>
    </div>
  );
}
