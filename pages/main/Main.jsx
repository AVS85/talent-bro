import { useState, useEffect } from 'react';
//nextjs
import styles from './Main.module.scss'
// import styles2 from './Feedback.scss'
import Image from 'next/image'
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'
import {Title} from '../../components/atom/title/Title'
// import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'

//assets
import bgImage from './assets/bg.jpg'
import bird from './assets/bird.png'
import hand from './assets/hand.png'
// import bgImage from './assets/bg.jpg'

export function Main(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>

				<Grid container xs={12}>

					{/* LEFT */}
	        <Grid item xs={12} md={6} >
						<div className={styles.icons}>
							<Image className={styles.icon} src={bird} layout="intrinsic" />
							<Image className={styles.icon} src={hand} layout="intrinsic" />
						</div>
						<div className={styles.title}>TalentBro</div>
						<div className={styles.subtitle}>Сервис профессиональных резюме</div>
						<div className={styles.text}>Сделаем ревью вашего резюме, расскажем, что улучшить или напишем его полностью за вас</div>
						<Button title="Хочу резюме" />
	        </Grid>
					{/* LEFT end */}



					{/* RIGHT */}
					<Grid item xs={12} md={6} className={styles.banner}>
						<Image src={bgImage} layout="intrinsic" />
	        </Grid>
					{/* RIGHT end */}


        </Grid>

				{/* <Image src={telegram} layout="intrinsic" /> */}
			</Container>
		</section>
	)
} 