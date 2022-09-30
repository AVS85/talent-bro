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
// import {Button} from '../../components/atom/button/Button'
// import {Input} from '../../components/atom/input/Input'
// import {Title} from '../../components/atom/title/Title'
// import {ScheduleRatesCard} from './cmpScheduleRatesCard/ScheduleRatesCard'

//assets
// import bgImage from './assets/bg.jpg'
// import bird from './assets/bird.png'
// import hand from './assets/hand.png'
// import bgImage from './assets/bg.jpg'
function CmpPopDownMenu({
	title = 'j',
	link,
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
				<Link
		    activeClass="active"
		    to={link}
		    spy={true}
		    smooth={true}
		    offset={-70}
		    duration={500}
				>{title}
				</Link>
				<div className={items && styles.itemsBox}>
					{ isFocusTop &&
						items?.map((item, index) => {
							return ( 
								<div className={styles.subitem} key={index}>
									<Link
							    activeClass="active"
							    to={item.link}
							    spy={true}
							    smooth={true}
							    offset={-70}
							    duration={500}
									>{item.title}
									</Link>
								</div>
							)
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
				<Box sx={{ml: '5px'}}>
					<CmpPopDownMenu title="Резюме" link="advances"
					items={[
						{title: 'Сделать самому', link: 'https://taalentbro.notion.site/7c5e414fc879482986af1dabd14359ae'},
						{title: 'Тарифы', link: 'schedulerates'},
						{title: 'Заказать', link: 'contactform'},
					]} 
					/>
				</Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Тарифы" link="schedulerates"/></Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Блог" link="https://taalentbro.notion.site/"/></Box>
				<Box sx={{ml: '5px'}}><CmpPopDownMenu title="Напишите нам" link="contactform"/></Box>


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