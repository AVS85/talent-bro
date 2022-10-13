import { useState, useEffect } from 'react';
//nextjs
import styles from './Feedback.module.scss'
// import styles2 from './Feedback.scss'
//mui
import { Box, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'
import {Title} from '../../components/atom/title/Title'
import {FeedbackClientCard} from './cmpFeedbackClientCard/FeedbackClientCard'

//assets
// import talentbro from './assets/talentbro.svg'
import {feedbacks} from './assets/feedbacks'

export function Feedback(){
	const [fb, setFb] = useState(feedbacks || ['d'])

	// useEffect(()=>{
	// 	console.log('fb', fb);
	// },[feedbacks])

  const pagination = {
		dynamicBullets: true,
		dynamicMainBullets: 1,
		// type: 'progressbar',
    clickable: true,
		// el: '.fffff'
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + (index + 1) + "</span>";
      // return `<span class="${className}"></span>`;
      return `<div class="${className}"></div>`;
    },
  };

	function resizePersonalHeight(swiper){
		// Task: установить одинаковую высоту заголовков на всех карточках клиентов
		try {
			let maxRealHeight = 0 // макс высота элемента
			const {slides} = swiper

			if (!slides) throw "params";

			slides.forEach(slide => {
				// получить элемент personal
				const elPersonal = slide.querySelector('[class*=personal]')
				// сброс minHeight элемента (чтобы узнать реально занимаемую им высоту)
				elPersonal.style.minHeight = 0 + 'px'
				// получить высоту элемента 
				const h = elPersonal.getBoundingClientRect().height
				// обновить максимум 
				if ( h > maxRealHeight) maxRealHeight = h
				// console.log(h);
			});

			// console.log('maxRealHeight', maxRealHeight);
			
			// установить всем элементам одинаковую (наибольшую) высоту
			slides.forEach(slide => {
				// получить элемент personal
				const elPersonal = slide.querySelector('[class*=personal]')
				// установить макс высоту
				elPersonal.style.minHeight = maxRealHeight + 'px'
			});
		}
		catch(error){
			console.log("[resizePersonalHeight]", error);
		}
	}

	return (
		<section id="feedback" className={styles.wrapper}>
			<Container className={styles.container}>
				<Box className={styles.titleBox}>
					<Title
					title="Клиенты говорят нам, что плюсом к резюме они получают свежий взгляд на свой опыт и +100 баллов к самооценке"
					/>
				</Box>

				<div className="fffff"> </div>

				<Swiper
				className='swiperFeedBack'
		      spaceBetween={40}
		      slidesPerView={1}
					onResize={(swiper) => resizePersonalHeight(swiper)}
		      // onSlideChange={() => console.log('slide change')}
		      // onSwiper={(swiper) => console.log(swiper)}
					// observeSlideChildren={true}
					// observer={true}
					// observerUpdate={() => console.log('slide change')}
					pagination={pagination}
					modules={[Pagination]}
					breakpoints={{
						// when window width is >= 640px
						768: {
							slidesPerView: 2,
							spaceBetween: 40
						},
						998: {
							slidesPerView: 3,
							spaceBetween: 40
						}
					}}
		    >
					{
						fb.map((item,index) => <SwiperSlide style={{height: 'auto'}} key={index}><FeedbackClientCard data={item} /></SwiperSlide>)
					}
		    </Swiper>

			</Container>
		</section>
	)
} 