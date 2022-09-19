import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Footer} from '../components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Bro</title>
        <meta name="description" content="Talent Bro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				456
      </main>

			<Footer/>
    </div>
  )
}
