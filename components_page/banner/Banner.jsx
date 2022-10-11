
import styles from './Banner.module.scss'
//MUI
import { Container } from '@mui/material'
// import Grid from '@mui/material/Grid'; // Grid version 1
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';
//assets
//own
import {Button} from '../../components/atom/button/Button'
//scroll
import { Link, animateScroll as scroll } from "react-scroll"

// import logo from './assets/TalentBro.png'
// import telegram from './assets/telegram.svg'

export function Banner(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<header className={styles.header}>
					Поверь в свой талант с TalentBro!
				</header>
				<Link
			    // activeClass="active"
			    to={'contactform'}
			    spy={true}
			    smooth={true}
			    offset={-70}
			    duration={500}
					>
					<Button 
					title="Хочу резюме" 
					styleName={"alt"} 
					onClick={()=>ym(90739912,'reachGoal','i-want-cv')}
					/>
				</Link>
			</Container>
		</section>
	)
} 