import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import Image from 'next/image'

import {Feedback} from './feedback/Feedback'
import {ContactForm} from './contact-form/ContactForm'
import {Banner} from './banner/Banner'
import {Footer} from './footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Bro</title>
        <meta name="description" content="Talent Bro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
				main
      </main>

			<Feedback />
			<Banner />
			<ContactForm />
			<Footer />
    </div>
  )
}
