
import styles from './Footer.module.css'
import Image from 'next/image'
//MUI
import { Container } from '@mui/material';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets

import logo from './assets/TalentBro.png'

export function Footer(){
	return (
		<footer className={styles.footer}>
      <Grid container spacing={2} xs={12} sx={{border: '1px solid green'}}>

        <Grid 
				xs
				md
				sx={{
					border: '1px solid red',
					// display: 'flex',
					alignItems: 'space-between'}} 
				>
          <div><Image src={logo} layout="intrinsic" /></div>
					<div>© TalentBro 2022</div>
        </Grid>

        <Grid 
				xs={12}
				md={4}
				sx={{border: '1px solid red'}} 
				>
					<ul>
						<li>Реквизиты</li>
						<li>Договор-оферта</li>
						<li>Политика конфиденциальности</li>
						<li>Условия использования</li>
					</ul>
        </Grid>

        <Grid 
				xs={12}
				md={4}
				sx={{border: '1px solid red'}} 
				>
					<ul>
						<li>Контакты</li>
						<li>hello.talentbro@gmail.com</li>
					</ul>
        </Grid>

      </Grid>
		</footer>
	)
} 