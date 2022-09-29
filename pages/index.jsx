import styles from '../styles/Home.module.css'
import Head from 'next/head'

import {Menu} from '../components/menu/Menu'
import {Main} from '../components_page/main/Main'
import {Advances} from '../components_page/advances/Advances'
import {Advances2} from '../components_page/advances2/Advances2'
import {ScheduleRates} from '../components_page/schedule-rates/ScheduleRates'
import {Userflow} from '../components_page/user-flow/Userflow'
import {LogotypeCarousel} from '../components_page/logotype-carousel/LogotypeCarousel'
import {Feedback} from '../components_page/feedback/Feedback'
import {ContactForm} from '../components_page/contact-form/ContactForm'
import {Banner} from '../components_page/banner/Banner'
import {Footer} from '../components_page/footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talent Bro</title>
        <meta name="description" content="Talent Bro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



			<Menu />
			{/* <Main />
			<Advances />
			<Advances2 /> */}
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
