import { useState, useEffect } from 'react';
//nextjs
import styles from './Menu.module.scss'
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
// import bgImage from './assets/bg.jpg'
// import bird from './assets/bird.png'
// import hand from './assets/hand.png'
// import bgImage from './assets/bg.jpg'
function CmpPopDownMenu({
	title = 'j',
	items = null,
}){

	const [isFocusTop, setIsOpenTop] = useState(true)

	function onMouseOver(bool){
		setIsOpenTop(bool)
	}

	return (
		<div className={styles.popDownMenuWrapper}>
			<div 
			className={styles.title}
			onMouseOver={() => onMouseOver(true)}
			onMouseOut={() => onMouseOver(false)}
			>
				{title}
				<div className={items && styles.itemsBox}>
					{ isFocusTop &&
						items?.map((item, index) => {
							return <div className={styles.subitem} key={index}>{item.name}</div>
						})
					}
				</div>
			</div>
			
		</div>
	)
}

export function Menu(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>

				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Резюме" 
							items={[
								{name: 'Что это', link: ''},
								{name: 'Примеры', link: ''},
								{name: 'Как лучше', link: ''},
							]} 
							/>
				</Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Тарифы" /></Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Блог" /></Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Напишите нам" /></Box>


{/* 
				<Grid container xs={12}>

	        <Grid item xs={12} md={6} >
						 <CmpItemTop title="dddd" />
	        </Grid>

        </Grid> */}
			</Container>
		</section>
	)
} 