
import styles from './Banner.module.scss'
//MUI
import { Container } from '@mui/material';
// import Grid from '@mui/material/Grid'; // Grid version 1
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets
//own
import {Button} from '../../components/atom/button/Button'

// import logo from './assets/TalentBro.png'
// import telegram from './assets/telegram.svg'

export function Banner(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<header>Поверь в свой талант с TalentBro!</header>
				<Button title="Хочу резюме" />
			</Container>
		</section>
	)
} 