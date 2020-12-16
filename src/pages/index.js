import Head from 'next/head';
import styles from '../styles/layouts/home.module.scss';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    getAllData();
  }, []);

  const [fetchedData, loadData] = useState(null);

  const getAllData = async () => {
    try {
      const response = await fetch('api/data');
      const parsedData = await response.json();

      // filter out any objects where name property is blank or null
      // group objects by listId property
      const listMap = {};
      parsedData.forEach((obj) => {
        if (obj.name && obj.name.length) {
          if (listMap[obj.listId]) listMap[obj.listId].push(obj);
          else listMap[obj.listId] = [obj];
        }
      });

      // for each group in listMap, sort objects by their id
      for (let group in listMap) {
        listMap[group].sort((a, b) => a.id - b.id);
      }

      loadData(listMap);
    } catch (error) {
      console.log(error);
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
          <ul>
            {fetchedData &&
              Object.keys(fetchedData).map((group) => (
                <ul key={group}>
                  <h2>List ID: {group}</h2>
                  {fetchedData[group].map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
