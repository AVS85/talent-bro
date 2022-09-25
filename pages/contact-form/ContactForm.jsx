
import styles from './ContactForm.module.scss'
import Image from 'next/image'
//MUI
import { Box, Container, TextField } from '@mui/material';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'

// import logo from './assets/TalentBro.png'
import talentbro from './assets/talentbro.svg'

export function ContactForm(){
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
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
					>
						<div className={styles.titleWrapper}>
							<div className={styles.title}>Доверьте ваше<br/>резюме</div>
						</div>
						<div className={styles.logo}>
							<Image src={talentbro} layout="responsive"/>
						</div>
	        </Grid>

	        <Grid item
					xs={12}
					md={6}
					// sx={{border: '1px solid red'}} 
					>
						<Box>
							<Input id="standard-basic" label="Ваше имя*" variant="standard" />
						</Box>
						<Box>
							<Input id="standard-basic" label="E-mail*" variant="standard"/>
						</Box>
						<Box>
							<Input id="standard-basic" label="Телефон" variant="standard"/>
						</Box>
						<Box>
							<div>Прикрепите резюме<br />PDF, DOCX</div>
							<Button styleName={'alt'} title={'Загрузить файлы'}></Button>
						</Box>
	        </Grid>

	      </Grid>
			</Container>
		</section>
	)
} 