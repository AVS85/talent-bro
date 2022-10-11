import { useState, useEffect } from 'react';
//nextjs
import styles from './Main.module.scss'
// import styles2 from './Feedback.scss'
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
//own
import {Button} from '../../components/atom/button/Button'
// import {Input} from '../../components/atom/input/Input'
// import {Title} from '../../components/atom/title/Title'
// import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'
//scroll
import { Link, animateScroll as scroll } from "react-scroll";
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
							<img className={styles.icon} src={bird.src} alt="bird" />
							<img className={styles.icon} src={hand.src} alt="hand" />
						</div>
						<div className={styles.title}>
							<span className={styles.titleSpan}>TalentBro</span></div>
						<div className={styles.subtitle}>Сервис профессиональных резюме</div>
						<div className={styles.text}><span>Сделаем ревью вашего резюме,<br/>расскажем,&nbsp;что улучшить или напишем<br/>его полностью за вас</span></div>
						<div className={styles.buttonWrapper}>
							<Link
					    activeClass="active"
					    to={'contactform'}
					    spy={true}
					    smooth={true}
					    offset={-70}
					    duration={500}
							>
								<Button 
								title="Хочу резюме" 
								onClick={()=>ym(90739912,'reachGoal','i-want-cv')}
								/>
							</Link>
							
						</div>
	        </Grid>
					{/* LEFT end */}



					{/* RIGHT */}
					<Grid item xs={12} md={6} className={styles.banner}>
						<img className={styles.bg} src={bgImage.src} alt="bgImage" />
	        </Grid>
					{/* RIGHT end */}


        </Grid>

				{/* <Image src={telegram} layout="intrinsic" /> */}
			</Container>
		</section>
	)
} 