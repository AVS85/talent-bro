import { useState, useEffect } from 'react';
//nextjs
import styles from './PopDownList.module.scss'
// import { Box, Container, TextField } from '@mui/material';
//scroll
import { Link, animateScroll as scroll } from "react-scroll";



export function PopDownList({
	title, link, hash, items = null,
}){

	const [isFocusTop, setIsOpenTop] = useState(false)

	function onMouseOver(bool){ setIsOpenTop(bool) }

	return (
		<div className={styles.popDownMenuWrapper}>
			<div 
			className={styles.title}
			onMouseOver={() => onMouseOver(true)}
			onMouseOut={() => onMouseOver(false)}
			>
				{
				link && 
					<a
			    href={link}
					target={"_blank"}
					rel="noreferrer"
					>
						{title}
					</a>
				}

				{
				hash && 
					<Link
			    activeClass="active"
			    to={hash}
			    spy={true}
			    smooth={true}
			    offset={-70}
			    duration={500}
					>
						{title}
					</Link>
				}
				
				<div className={items && styles.itemsBox}>
					{ isFocusTop &&
						items?.map((item, index) => {
							return ( 
								<div className={styles.subitem} key={index}>
									{item?.link && 
										<a
								    href={item.link}
										target={"_blank"}
										rel="noreferrer"
										>
											{item.title}
										</a>
									}

									{item?.hash && 
										<Link
								    activeClass="active"
								    to={item.hash}
								    spy={true}
								    smooth={true}
								    offset={-70}
								    duration={500}
										>
											{item.title}
										</Link>
									}
								</div>
							)
						})
					}
				</div>
			</div>
			
		</div>
	)
}