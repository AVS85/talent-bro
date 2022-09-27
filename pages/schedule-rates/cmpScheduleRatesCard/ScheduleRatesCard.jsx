import styles from './ScheduleRatesCard.module.scss'

//mui
import { Box } from '@mui/material';

export function ScheduleRatesCard({
	data,
	title,
	subtitle,
	styleName = 'default',
	isUnderline = false
}){


	return (
		<section className={`${styles.wrapper} ${data.styleActive && styles.wrapperActive}`}>

			<div className={styles.header}>{data.header}</div>
			<div className={styles.contentWrapper}>
				<div className={styles.title}>{data.headerItems}</div>
				
				<div className={styles.items}>
					<ul className={styles.ul}>
					{data.items.map( item => 
						<li 
							className={`${styles.li} ${item.icon ? styles.liOn : styles.liOff}`}
							dangerouslySetInnerHTML={{__html: item.text}} 
						/>
					)}
					</ul>
				</div>
				
				<div className={styles.cost}>{data.cost}</div>
			</div>
		</section>
	)
} 
{/* <div className={styles.subtitle} 
dangerouslySetInnerHTML={{__html: data.subtitle}} /> */}