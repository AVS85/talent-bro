
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
	          <div className={styles.logo}>TalentBro</div>
						<div className={styles.copyrightDesktop}>© TalentBro 2022</div>
	        </Grid>

	        <Grid item
					className={styles.documents}
					xs={12}
					md={4}
					>
						<ul className={styles.ul}>
							<li className={styles.li}>Реквизиты</li>
							<li className={styles.li}>
								<a className={styles.alink}
								href="/assets/documents/privacy_policy.pdf"
								target="_blank">Политика конфиденциальности</a>
							</li>
							<li className={styles.li}>
								<a className={styles.alink}
								href="/assets/documents/terms_of_service.pdf"
								target="_blank">Условия использования</a>
							</li>
						</ul>
	        </Grid>

	        <Grid item
					className={styles.contacts}
					xs={12}
					md={4} 
					>
						<ul className={styles.ul}>
							<li className={styles.li}>Контакты</li>
							<li className={styles.li}>
								<a className={styles.alink}
								href="mailto:hello.talentbro@gmail.com">hello.talentbro@gmail.com</a>
							</li>
						</ul>
						<div className={styles.social}>
							<a  
							className={styles.alink}
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