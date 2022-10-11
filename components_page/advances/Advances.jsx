import { useState, useEffect } from 'react';
//nextjs
import styles from './Advances.module.scss'
// import styles2 from './Feedback.scss'
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

function СmpGRID(props){
	const {title, text} = {...props}
	return (
		<Grid item xs={12} md={6} className={styles.CmpGrid}>
			<div className={styles.cell}>
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{text}</div>
			</div>
		</Grid>
	)
}

export function Advances(){
	return (
		<section id="advances" className={styles.wrapper}>
			<Container className={styles.container}>
				<div className={styles.containerTitle}>
					<Title 
					title="Чем хорошее резюме отличается<br>от собранного за&nbsp;30&nbsp;минут «на&nbsp;коленке»" 
					isUnderline={true}
					/>
				</div>

				<Grid container xs={12}>

					{/* LEFT */}
	        <Grid item xs={12} md={7} >
						<Grid container>
							<СmpGRID 
							title="Общее впечатление" 
							text="Легкость чтения. Аккуратность. Отсутствие грамматических ошибок. Корректный формат" />
							<СmpGRID 
							title="Структура" 
							text="Объем не более 2-х страниц. Информация интуитивно понятна, без визуального шума, ничего лишнего. Сначала важное – навыки, опыт, затем все остальное" />
							<СmpGRID 
							title="Содержание" 
							text="Описаны не только процессы и обязанности, а результаты в цифрах" />
							<СmpGRID 
							title="Релевантность вакансии" 
							text="Контент резюме адаптирован под конкретную должность / роль / индустрию – говорит с нанимателем на одном языке" />
	        	</Grid>
	        </Grid>
					{/* LEFT end */}



					{/* RIGHT */}
					<Grid item xs={12} md={5} className={styles.banner}>
						<img className={styles.bg} src={bgImage.src} alt="" />
	        </Grid>
					{/* RIGHT end */}


        </Grid>

				{/* <Image src={telegram} layout="intrinsic" /> */}
			</Container>
		</section>
	)
} 