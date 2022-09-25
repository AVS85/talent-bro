import styles from './Input.module.scss'
import { TextField } from '@mui/material';

export function Input({
	id="standard-basic",
	label="E-mail*",
	variant="standard",
	title,
	onClick = () => {},
	styleName = 'default'
}){
	return (
		<section className={styles.wrapper}>
			<TextField id={id} label={label} variant={variant} 
				className={styles.textField}
				// sx={{
				// 	borderBottom: '1px solid red',
				// 	fontSize: '20px',
				// 	width: '100%'
				// }}
				/>
		</section>
	)
} 