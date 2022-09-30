import styles from './Button.module.scss'

export function Button({
	title,
	onClick = () => {},
	styleName = 'default',
	type,
	isDisabled = false,
}){
	return (
		<section className={styles.wrapper}>
			<button
			disabled={isDisabled}
			className={`${styles[styleName]}`}
			type={type}
			onClick={onClick}>{title}</button>
		</section>
	)
} 