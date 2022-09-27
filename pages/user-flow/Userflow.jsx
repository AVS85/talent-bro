import { useState, useEffect } from 'react';
//nextjs
import styles from './Userflow.module.scss'
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
import {UserflowStep} from './cmpUserflowStep/UserflowStep'

//assets
// import talentbro from './assets/talentbro.svg'
import {userflow} from './assets/userflow'

export function Userflow(){
	const [uf, setUserflow] = useState(userflow || ['d'])

	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<Title
				title="Как все устроено"
				// subtitle="После переработки резюме наши пользователи работают в крупнейших российских и зарубежных компаниях"
				// isUnderline={true}
				/>

				<Box sx={{
					margin: '90px 0'
				}}>
					<Swiper
			      spaceBetween={0}
			      slidesPerView={2}
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
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							998: {
								slidesPerView: 5,
							}
						}}
			    >
						{
							uf.map((item,index) => <SwiperSlide style={{height: 'auto'}} key={index}><UserflowStep data={item} /></SwiperSlide>)
						}
			    </Swiper>
				</Box>
			</Container>
		</section>
	)
} 