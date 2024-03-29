// import { useState, useEffect } from 'react';
//nextjs
import styles from './MobileMenu.module.scss'
// import { Box, Container, TextField } from '@mui/material';
//scroll
import { Link, animateScroll as scroll } from "react-scroll";
//assets
// import line2 from './assets/line3.png'


export function MobileMenu({
	isActive = false,
	onClose = () => {}
}){
	
	function scrollToHash(hash){
		const coord = document.getElementById(hash).getBoundingClientRect()
		hash && scroll.scrollTo(coord.y, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -50, // Scrolls to element + 50 pixels down the page
		})
	}

	return (
		<div 
		className={`${styles.popupLayer} ${isActive && styles.popupLayerActive}`}
		onClick={() => onClose()}
		>
			{/* <div className={styles.closeWrap}>
				<img src={close.src} alt="close" />
			</div> */}

				<div className={styles.menuItem} onClick={()=>scrollToHash('advances')}>Резюме</div>
				<div className={styles.menuItem} onClick={()=>scrollToHash('schedulerates')}>Тарифы</div>
				<div className={styles.menuItem} onClick={()=>scrollToHash('contactform')}>Напишите нам</div>

				<div className={styles.hr} />

				<a className={styles.menuItem}
				href="https://taalentbro.notion.site/7c5e414fc879482986af1dabd14359ae" 
				target="_blank" rel="noopener noreferrer">Сделать самому</a>
				<a className={styles.menuItem}
				href="https://taalentbro.notion.site/"
				target="_blank" rel="noopener noreferrer">Блог</a>

		</div>
	)
}