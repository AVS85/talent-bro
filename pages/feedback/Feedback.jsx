
import styles from './Feedback.module.scss'
import Image from 'next/image'
//MUI
import { Box, Container, TextField } from '@mui/material';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'
import {Title} from '../../components/atom/title/Title'

// import logo from './assets/TalentBro.png'
// import talentbro from './assets/talentbro.svg'

export function Feedback(){
	return (
		<section className={styles.wrapper}>
			<Container className={styles.container}>
				<Title
				title="Клиенты говорят нам, что плюсом к резюме они получают свежий взгляд на свой опыт и +100 баллов к самооценке"
				// subtitle="После переработки резюме наши пользователи работают в крупнейших российских и зарубежных компаниях"
				// isUnderline={true}
				/>
				<Box>
					slider
				</Box>


			</Container>
		</section>
	)
} 