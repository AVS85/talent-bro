import styles from './Title.module.scss'
//assets
// import talentbro from './assets/talentbro.svg'

export function Title({
	title,
	subtitle,
	styleName = 'default',
	isUnderline = false, //показать подчеркивание
}){
	return (
		<section className={styles.wrapper}>
			<div className={`${styles.title} ${isUnderline ? styles.underline : ''}` }>{title}</div>
			{subtitle && <div className={styles.subtitle}>{subtitle}</div>}
		</section>
	)
} 