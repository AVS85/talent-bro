import { useState, useEffect } from 'react';
//nextjs
import styles from './ScheduleRates.module.scss'
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
import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'

//assets
// import talentbro from './assets/talentbro.svg'
import {scheduleRates} from './assets/scheduleRates'

export function ScheduleRates(){
	const [sr] = useState(scheduleRates || [])

	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<Title
				title="TalentBro поможет создать профессиональное резюме и выиграть у бездушных алгоритмов"
				// subtitle="После переработки резюме наши пользователи работают в крупнейших российских и зарубежных компаниях"
				// isUnderline={true}
				/>

				<Box sx={{
					margin: '64px 0'
				}}>
					<Swiper
			      spaceBetween={30}
			      slidesPerView={1}
			      // onSlideChange={() => console.log('slide change')}
			      // onSwiper={(swiper) => console.log(swiper)}
						// observeSlideChildren={true}
						// observer={true}
						// observerUpdate={() => console.log('slide change')}
						// pagination={pagination}
						// pagination={{
						// 	dynamicBullets: true,
						// }}
						// modules={[Pagination]}
						breakpoints={{
							// when window width is >= 640px
							567: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							998: {
								slidesPerView: 4,
							}
						}}
			    >
						{
							sr.map((item,index) => <SwiperSlide style={{height: 'auto'}} key={index}><ScheduleRatesCard data={item} /></SwiperSlide>)
						}
			    </Swiper>
				</Box>
			</Container>
		</section>
	)
} 