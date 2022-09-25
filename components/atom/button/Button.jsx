import styles from './Button.module.scss'

export function Button({
	title,
	onClick = () => {},
	styleName = 'default'
}){
	return (
		<section className={styles.wrapper}>
			<button className={styles[styleName]} onClick={onClick}>{title}</button>
		</section>
	)
} 