import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import Image from 'next/image'

import {Main} from './main/Main'
import {Advances} from './advances/Advances'
import {Advances2} from './advances2/Advances2'
import {ScheduleRates} from './schedule-rates/ScheduleRates'
import {Userflow} from './user-flow/Userflow'
import {LogotypeCarousel} from './logotype-carousel/LogotypeCarousel'
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



			<Main />
			<Advances />
			<Advances2 />
			<ScheduleRates />
			<Userflow />
			<LogotypeCarousel />
			<Feedback />
			<Banner />
			<ContactForm />
			<Footer />
    </div>
  )
}
