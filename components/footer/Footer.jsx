
import styles from './Footer.module.css'
import Image from 'next/image'
//MUI
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1

export function Footer(){
	return (
		<footer className={styles.footer}>
			<Grid container spacing={2}>
			  <Grid xs={2}>
			    {/* <Item>xs=8</Item> */}
					8
			  </Grid>
			  <Grid xs={5}>
			    {/* <Item>xs=4</Item> */}
					4
			  </Grid>
			  <Grid xs={5}>
			    {/* <Item>xs=4</Item> */}
					4
			  </Grid>
			</Grid>
		</footer>
	)
} 