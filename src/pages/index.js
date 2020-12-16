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

      // filter out any objects where name property is blank
      const filteredData = parsedData.filter(obj => obj.name && obj.name.length)

      // group objects by listId property
      const listMap = {}
      filteredData.forEach(obj => {
        if (listMap[obj.listId]) listMap[obj.listId].push(obj)
        else (listMap[obj.listId]) = [obj]
      })

      // loadData(filteredData)
    } catch (error) {
      console.log(error)
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
