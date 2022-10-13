import styles from './LogotypeCarousel.module.scss'
import { useState, useEffect, useRef } from 'react';
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
//own
import {Title} from '../../components/atom/title/Title'
//assets
import {logotypes} from './assets/logotypes'
import { style } from '@mui/system';



// function Slide(item, index){
// 	return (
// 		<dix className={styles.slidewrapper}>
// 			<img 
// 				className={styles.img}
// 				src={`/assets/logotypes/${item.logo}`} 
// 				alt={`${item.alt}`}
// 			/>
// 		</dix>
// 	)
// }

export function LogotypeCarousel(){
	const [lt] = useState(logotypes || [])

	// const sliderRef = useRef(null) 

	// function onClickNextSlide(){
	// 	console.log('sdsdsd');
	// 	// sliderRef.current.swiper.slidePrev();
	// 	sliderRef.current.swiper.slideNext();
	// }

	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<Box className={styles.titleBox}>
					<Title
					title="Это работает!"
					subtitle="После переработки резюме наши пользователи работают<br>в крупнейших российских и зарубежных компаниях"
					/>
				</Box>

				<Swiper
					// ref={sliderRef}

		      spaceBetween={40}
					// slidesPerView={"auto"}
		      slidesPerView={1}
					speed={1500}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					// loop={true}
		      // onSlideChange={() => console.log('slide change')}
		      // onSwiper={(swiper) => console.log(swiper)}
					// observeSlideChildren={true}
					// observer={true}
					// observerUpdate={() => console.log('slide change')}
					// pagination={pagination}
					// pagination={{
					// 	dynamicBullets: true,
					// }}
					modules={[Autoplay]}
					// navigation={{
					// 	nextEl: navigationNextRef.current,
					// }}
					breakpoints={{
						// when window width is >= 640px
						320: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						567: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						998: {
							slidesPerView: 5,
							spaceBetween: 40
						},
					}}
		    >
					{
						lt.map((item,index) => 
						<SwiperSlide style={{height: 'auto'}} key={index}>
							<div className={styles.slidewrapper}>
								<img 
									className={styles.img}
									src={`/assets/logotypes/${item.logo}`} 
									alt={`${item.alt}`}
								/>
							</div>
						</SwiperSlide>)
					}
		    </Swiper>

				{/* <button 
				className={styles.btnNext}
				onClick={()=>onClickNextSlide()}
				>next</button> */}

			</Container>
		</section>
	)
} 