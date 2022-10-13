import { useState } from 'react';
//nextjs
import styles from './Menu.module.scss'
//mui
import { Box, Container } from '@mui/material';
//own
import {PopDownList} from './cmpPopDownList/PopDownList'
import {MobileMenu} from './cmpMobileMenu/MobileMenu'

//assets
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

				<Box className={styles.mobileMenuSwitcherWrap}>
					<div className={styles.mobileMenuSwitcher}>
						<img 
							src={isMobileActive ? close.src : burger.src} 
							alt="menu" 
							onClick={()=>setIsMobileActive(!isMobileActive)} 
						/> 
					</div>

				</Box>

			</Container>

			<div className={styles.mobileMenuWrap}>
				<MobileMenu 
				isActive={isMobileActive}
				onClose={()=>setIsMobileActive(false)}
				/>
			</div>

		</section>
	)
} 