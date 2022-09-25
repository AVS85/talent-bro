import { useState } from 'react';
//nextjs
import styles from './Feedback.module.scss'
import Image from 'next/image'
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//assets
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'
import {Title} from '../../components/atom/title/Title'
import {FeedbackClientCard} from './cmpFeedbackClientCard/FeedbackClientCard'

// import logo from './assets/TalentBro.png'
// import talentbro from './assets/talentbro.svg'
import {feedbacks} from './assets/feedbacks'
import { useEffect } from 'react';

export function Feedback(){
	const [fb, setFb] = useState(feedbacks || ['d'])

	// useEffect(()=>{
	// 	console.log('fb', fb);
	// },[feedbacks])

	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<Title
				title="Клиенты говорят нам, что плюсом к резюме они получают свежий взгляд на свой опыт и +100 баллов к самооценке"
				// subtitle="После переработки резюме наши пользователи работают в крупнейших российских и зарубежных компаниях"
				// isUnderline={true}
				/>

				<Box sx={{
					margin: '90px 0'
				}}>
					<Swiper
			      spaceBetween={50}
			      slidesPerView={1}
			      // onSlideChange={() => console.log('slide change')}
			      // onSwiper={(swiper) => console.log(swiper)}
						// observeSlideChildren={true}
						// observer={true}
						// observerUpdate={() => console.log('slide change')}
						breakpoints={{
							// when window width is >= 640px
							768: {
								slidesPerView: 2,
								spaceBetween: 50
							},
							998: {
								slidesPerView: 3,
								spaceBetween: 40
							}
						}}
			    >
						{
							fb.map((item,index) => <SwiperSlide key={index}><FeedbackClientCard data={item} /></SwiperSlide>)
						}
			    </Swiper>
				</Box>

				{
							fb.map(item => {
								<div>sdsds</div>
							})
							// swiper.update()
				}
			</Container>
		</section>
	)
} 