import styles from './LogotypeCarousel.module.scss'
import { useState, useEffect } from 'react';
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
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

	// const Slide = (item, index, styles) => {
	// 	return (
	// 		<dix className={style.slidewrapper}>
	// 			<img src={`/assets/logotypes/${item.logo}`} alt={`${item.alt}`} />
	// 		</dix>
	// 	)
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
		      spaceBetween={40}
					// slidesPerView={"auto"}
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
						// 998: {
						// 	// slidesPerView: 3,
						// 	spaceBetween: 40
						// }
					}}
		    >
					{
						lt.map((item,index) => 
						<SwiperSlide style={{height: 'auto'}} key={index}>
							<dix className={styles.slidewrapper}>
								<img 
									className={styles.img}
									src={`/assets/logotypes/${item.logo}`} 
									alt={`${item.alt}`}
								/>
							</dix>
						</SwiperSlide>)
					}
		    </Swiper>

			</Container>
		</section>
	)
} 