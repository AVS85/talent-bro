
import styles from './Footer.module.scss'
import Image from 'next/image'
//MUI
import { Container } from '@mui/material';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets

import logo from './assets/TalentBro.png'
import telegram from './assets/telegram.svg'

export function Footer(){
	return (
		<footer className={styles.wrapper} >
			<Container className={styles.footer} sx={{padding: '15px'}}>
	      <Grid container 
				spacing={3} 
				xs={12}
				>

	        <Grid item
					xs={12}
					md={3}
					sx={{
						// border: '1px solid red',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}} 
					>
	          <div><Image src={logo} layout="intrinsic" /></div>
						<div>© TalentBro 2022</div>
	        </Grid>

	        <Grid item
					xs={12}
					md={4}
					// sx={{border: '1px solid red'}} 
					>
						<ul>
							<li className={styles.select}>Реквизиты</li>
							<li>Договор-оферта</li>
							<li>Политика конфиденциальности</li>
							<li>Условия использования</li>
						</ul>
	        </Grid>

	        <Grid
					xs={12}
					md={4}
					// sx={{border: '1px solid red'}} 
					>
						<ul>
							<li>Контакты</li>
							<li>hello.talentbro@gmail.com</li>
						</ul>
						<div className={styles.social}>
							<Image src={telegram} layout="intrinsic" />
						</div>
	        </Grid>

	      </Grid>
			</Container>
			
		</footer>
	)
} 