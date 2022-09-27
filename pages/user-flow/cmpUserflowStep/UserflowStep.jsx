import styles from './UserflowStep.module.scss'

//mui
import { Box } from '@mui/material';

export function UserflowStep({
	data,
	title,
	subtitle,
	styleName = 'default',
	isUnderline = false
}){


	return (
		<section className={styles.wrapper}>

			<div className={styles.id}>{data.id}</div>

			<div className={styles.linewrapper}>
				<div className={styles.line}>
					<div className={styles.circleOutside}>
						<div className={styles.circleInside}></div>
					</div>
				</div>
			</div>

			<div className={styles.titlewrapper}>
				<div className={styles.title} 
				dangerouslySetInnerHTML={{__html: data.title}} />
				<div className={styles.subtitle} 
				dangerouslySetInnerHTML={{__html: data.subtitle}} />
			</div>
		</section>
	)
} 