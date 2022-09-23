import styles from './Button.module.scss'

export function Button({
	title,
	onClick = () => {}
}){
	return (
		<section className={styles.wrapper}>
			<button onClick={onClick}>{title}</button>
		</section>
	)
} 