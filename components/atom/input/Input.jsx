import styles from './Input.module.scss'
import { TextField } from '@mui/material';

export function Input({
	id="standard-basic",
	label="E-mail*",
	type="text",
	name,
	accept,
	placeholder,
	title,
	onClick = () => {},
	onChange = () => {},
	onInput = () => {},
	styleName = 'default',
	required = false,
	defaultValue,
	inpRef, 
}){
	return (
		<section className={styles.wrapper}>
			<input 
			className={styles.input} 
			defaultValue={defaultValue}
			ref={inpRef}
			type={type} 
			name={name}
			accept={accept}
			placeholder={placeholder} 
			onClick={onClick}
			onChange={onChange}
			onInput={onInput}
			required={required && 'required'}
			/>
		</section>
	)
} 