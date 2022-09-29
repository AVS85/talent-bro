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

			<div 
			className={styles.header}
			dangerouslySetInnerHTML={{__html: data.header}}
			/>
			
			<div className={styles.contentWrapper}>

				<div className={styles.title}
				dangerouslySetInnerHTML={{__html: data.headerItems}}
				/>
				
				<div className={styles.items}>
					<ul className={styles.ul}>
					{data.items.map( (item, index) => 
						<li 
						key={index}
						className={`${styles.li} ${item.icon ? styles.liOn : styles.liOff}`}
						dangerouslySetInnerHTML={{__html: item.text}} 
						/>
					)}
					</ul>
				</div>
				
				<div 
				className={`${styles.cost}  ${data.styleActive && styles.costActive}`}
				>
					{data.cost}
				</div>
			</div>
		</section>
	)
} 
{/* <div className={styles.subtitle} 
dangerouslySetInnerHTML={{__html: data.subtitle}} /> */}