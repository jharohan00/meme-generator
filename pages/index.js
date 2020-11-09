import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from "./App"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meme-Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <App />
        </div>
      </main>

    </div>
  )
}
