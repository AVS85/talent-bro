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
	title,
	link,
	hash,
	items = null,
}){

	const [isFocusTop, setIsOpenTop] = useState(false)

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
				{
				link && 
					<a
			    href={link}
					target={"_blank"}
					>
						{title}
					</a>
				}

				{
				hash && 
					<Link
			    activeClass="active"
			    to={hash}
			    spy={true}
			    smooth={true}
			    offset={-70}
			    duration={500}
					>
						{title}
					</Link>
				}
				
				<div className={items && styles.itemsBox}>
					{ isFocusTop &&
						items?.map((item, index) => {
							return ( 
								<div className={styles.subitem} key={index}>
									{item?.link && 
										<a
								    href={item.link}
										target={"_blank"}
										>
											{item.title}
										</a>
									}

									{item?.hash && 
										<Link
								    activeClass="active"
								    to={item.hash}
								    spy={true}
								    smooth={true}
								    offset={-70}
								    duration={500}
										>
											{item.title}
										</Link>
									}
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
					<CmpPopDownMenu title="Резюме" hash="advances"
					items={[
						{title: 'Сделать самому', link: 'https://taalentbro.notion.site/7c5e414fc879482986af1dabd14359ae'},
						{title: 'Тарифы', hash: 'schedulerates'},
						{title: 'Заказать', hash: 'contactform'},
					]} 
					/>
				</Box>
				<Box sx={{ml: '5px'}}>
					<CmpPopDownMenu title="Тарифы" hash="schedulerates"/>
				</Box>
				<Box sx={{ml: '5px'}}>
					<CmpPopDownMenu title="Блог" link="https://taalentbro.notion.site/"/>
				</Box>
				<Box sx={{ml: '5px'}}>
					<CmpPopDownMenu title="Напишите нам" hash="contactform"/>
				</Box>
			</Container>
		</section>
	)
} 