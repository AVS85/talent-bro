
import styles from './Footer.module.scss'
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
			<Container className={styles.container}>
	      <Grid container 
				xs={12}
				>

	        <Grid item
					className={styles.logotype}
					xs={12}
					md={3}
					>
	          <div>
							<img 
							className={styles.logo} 
							src={logo.src} 
							alt="logo" 
							/>
						</div>
						<div className={styles.copyrightDesktop}>© TalentBro 2022</div>
	        </Grid>

	        <Grid item
					className={styles.documents}
					xs={12}
					md={4}
					>
						<ul>
							<li className={styles.select}><b>Реквизиты</b></li>
							<li>Договор-оферта</li>
							<li>Политика конфиденциальности</li>
							<li>Условия использования</li>
						</ul>
	        </Grid>

	        <Grid item
					className={styles.contacts}
					xs={12}
					md={4} 
					>
						<ul>
							<li><b>Контакты</b></li>
							<li>hello.talentbro@gmail.com</li>
						</ul>
						<div className={styles.social}>
							<a  
							className={styles.link}
							href="https://t.me/talentbro"
							target="_blank"
							>
								<img src={telegram.src} alt="telegram" />
							</a>
						</div>
	        </Grid>

	      </Grid>

				<div className={styles.copyrightMobile}>© TalentBro 2022</div>
			</Container>
			
		</footer>
	)
} 