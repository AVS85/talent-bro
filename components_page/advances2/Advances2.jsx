import { useState, useEffect } from 'react';
//nextjs
import styles from './Advances2.module.scss'
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
import {Title} from '../../components/atom/title/Title'
// import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'
//scroll
import { Link, animateScroll as scroll } from "react-scroll";
//assets
import bgImage from './assets/bg.png'

export function Advances2(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>


				<Grid container 
				spacing={3} 
				xs={12}
				>

	        <Grid item
						xs={12}
						md={6}
						sx={{
							// border: '1px solid red',
							display: { xs: 'none', md: 'block' },
							backgroundImage: `url(${bgImage.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center'
						}} 
					>
	        </Grid>

	        <Grid item
					xs={12}
					md={6}
					// sx={{border: '1px solid red'}} 
					>
						<Title 
						title="Однако хорошего резюме уже недостаточно" 
						subtitle="Чтобы получать приглашения на&nbsp;интервью,<br>важно адаптировать резюме под каждую вакансию и&nbsp;понимать, как работают алгоритмы работных сайтов"
						/>
						<ul>
							<li>Алгоритмы джоббордов (hh, superjob, Lnkdn и др.) заточены под поиск ключевых слов, соответствующих  вакансии.</li>
							<li>Чем больше совпадений, тем выше резюме в выдаче. Минимум совпадений - резюме не попадает в ТОП списка и остается не просмотренным. Отсюда низкая конверсия в просмотры и интервью.</li>
							<li>Мы поможем решить эту задачу. И вас научим.</li>
						</ul>

						<div className={styles.buttonWrapper}>
							<Link
						    activeClass="active"
						    to={'contactform'}
						    spy={true}
						    smooth={true}
						    offset={-70}
						    duration={500}
								>
								<Button title={'Заказать'} />
							</Link>
						</div>

	        </Grid>

        </Grid>

			</Container>
		</section>
	)
} 