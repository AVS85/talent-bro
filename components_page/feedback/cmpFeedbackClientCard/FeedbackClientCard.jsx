import styles from './FeedbackClientCard.module.scss'

//mui
import { Box } from '@mui/material';

export function FeedbackClientCard({
	data,
	title,
	subtitle,
	styleName = 'default',
	isUnderline = false
}){


	return (
		<section className={styles.wrapper}>

			<Box className={styles.personal}>
				<div className={styles.avatart}>
					<img src={`/assets/clients/${data.avatar}`} alt={data.name} />
				</div>
				<div>
					<div className={styles.name}>{data.name}</div>
					<div className={styles.post}>{data.post}</div>
				</div>
			</Box>

			<Box className={styles.feedback}>{data.feedback}</Box>

		</section>
	)
} 