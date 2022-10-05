import styles from './ScheduleRatesCard.module.scss'

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
			className={styles.headerCard}
			dangerouslySetInnerHTML={{__html: data.header}}
			/>
			
			{/* {data.badge && <div className={styles.badge} />} */}

			<div className={styles.contentWrapper}>

				<div className={styles.title}
				dangerouslySetInnerHTML={{__html: data.headerItems}}
				/>
				
				<div className={styles.items}>
					
					{data.subHeaderItems &&
					<div className={styles.subHeaderItems}
					dangerouslySetInnerHTML={{__html: data.subHeaderItems}}
					/>
					}

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