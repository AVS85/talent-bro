import { useState, useEffect } from 'react';
//nextjs
import styles from './Menu.module.scss'
// import styles2 from './Feedback.scss'
//mui
import { Box, Container, TextField } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';
//swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";
// import 'swiper/css';
// import "swiper/css/pagination";
//scroll
import { Link, animateScroll as scroll } from "react-scroll";
//own
import {PopDownList} from './cmpPopDownList/PopDownList'
import {MobilePopup} from './cmpMobilePopup/MobilePopup'
// import {Input} from '../../components/atom/input/Input'
// import {Title} from '../../components/atom/title/Title'
// import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'

//assets
// import bgImage from './assets/bg.jpg'
// import bird from './assets/bird.png'
// import hand from './assets/hand.png'
import burger from './assets/burger.svg'
import close from './assets/close.svg'




export function Menu(){
	const [isMobileActive, setIsMobileActive] = useState(false)
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>

				<Box className={styles.desktopMenu}>
					<Box sx={{ml: '5px'}}>
						<PopDownList title="Резюме" hash="advances"
						items={[
							{title: 'Сделать самому', link: 'https://taalentbro.notion.site/7c5e414fc879482986af1dabd14359ae'},
							{title: 'Тарифы', hash: 'schedulerates'},
							{title: 'Заказать', hash: 'contactform'},
						]} 
						/>
					</Box>
					<Box sx={{ml: '5px'}}>
						<PopDownList title="Тарифы" hash="schedulerates"/>
					</Box>
					<Box sx={{ml: '5px'}}>
						<PopDownList title="Блог" link="https://taalentbro.notion.site/"/>
					</Box>
					<Box sx={{ml: '5px'}}>
						<PopDownList title="Напишите нам" hash="contactform"/>
					</Box>
				</Box>

				<Box className={styles.mobileMenu}>
					<div className={styles.mobileMenuButton}>
						{ (isMobileActive === true) && 
						<img src={close.src} alt="menu" onClick={()=>setIsMobileActive(!isMobileActive)} /> 
						}

						{ (isMobileActive === false) && 
						<img src={burger.src} alt="menu" onClick={()=>setIsMobileActive(!isMobileActive)} /> 
						}
					</div>

					<div className={styles.mobilePopupWrap}>
						<MobilePopup 
						isActive={isMobileActive}
						onClose={()=>setIsMobileActive(false)}
						/>
					</div>
				</Box>

			</Container>
		</section>
	)
} 