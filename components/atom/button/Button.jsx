import styles from './Button.module.scss'

export function Button({
	title,
	onClick = () => {},
	styleName = 'default',
	type,
	isDisabled = false,
}){

	console.log('styleName', styleName);
	return (
		<section className={styles.wrapper}>
			<button
			disabled={isDisabled}
			className={`
			${styles.button}
			${styles[styleName]}
			`}
			type={type}
			onClick={onClick}>{title}</button>
		</section>
	)
} 