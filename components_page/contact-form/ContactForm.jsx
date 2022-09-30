
import styles from './ContactForm.module.scss'
import { useState } from 'react';
//MUI
import { Box, Container, TextField } from '@mui/material';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
//assets
//own
import {Button} from '../../components/atom/button/Button'
import {Input} from '../../components/atom/input/Input'

// import logo from './assets/TalentBro.png'
import talentbro from './assets/talentbro.svg'
import axios from 'axios';

export function ContactForm(){

	const [isAccept, setIsAccept] = useState(true)
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [phone, setPhone] = useState(null)

	async function onSendForm(){
		//TODO проверка на заполнение формы
		let data = {
			name,
			email,
			phone,
			// "g-recaptcha-response": this.token
			// "g-recaptcha-response": grecaptcha.getResponse()
		}

		const response = await axios({
      method: "POST",
      url: `https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a`,
      data
    })
    .then(response => {
			console.log('[then - response]', response)
			return response
		})
    .catch((error) => {
      console.warn("[catch - error.response]", error.response)
      if (error.response) {
				return error.response
			} else {
				return error
			}
    });

		switch (response.status) {
			case 200:
				console.log('Успешно отправлено')
				break;
			case 429:
				console.log('Таймаут 60 сек')
				break;
		
			default:
				console.log('Похоже что то пошло не так... попробуйте позднее')
				break;
		}
	
	}



	return (
		<section id="contactform" className={styles.wrapper}>
			<Container className={styles.container}>
			<Grid container 
				spacing={3} 
				xs={12}
				>

	        <Grid item
					xs={12}
					md={6}
					sx={{
						// border: '1px solid red',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center'
					}}
					>
						<div className={styles.titleWrapper}>
							<div className={styles.title}>Доверьте ваше<br/>резюме</div>
						</div>
						<div className={styles.logo}>
							<img src={talentbro.src} alt="" />
						</div>
	        </Grid>

	        <Grid item
					xs={12}
					md={6}
					// sx={{border: '1px solid red'}} 
					>
			      {/* <form
		        action="https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a"
		        encType="multipart/form-data"
		        method="POST"
		        target="_blank"
						className={styles.formWrapper}
			      > */}
						<div className={styles.formWrapper}>
							<Box sx={{pb: '20px'	}}>
								<Input type="text" name="name" placeholder="Ваше имя*"
								onChange={(e)=> setName(e.target.value)} 
								/>
							</Box>

							<Box sx={{pb: '20px'	}}>
								<Input type="email" name="email" placeholder="E-mail*"
								onChange={(e)=> setEmail(e.target.value)} 
								/>
							</Box>

							<Box sx={{pb: '20px'	}}>
								<Input type="text" name="phone" placeholder="Телефон" 
								onChange={(e)=> setPhone(e.target.value)} 
								/>
							</Box>

							<Box className={styles.attachedBox}>
								<div>
									<span>Прикрепите&nbsp;резюме<br />PDF, DOCX</span>
								</div>
								<div>
									<input 
									type="file" 
									name="file" 
									accept=".pdf, .doc, .docx" 
									placeholder="Телефон"
									/>
								</div>
							</Box>


							<Box sx={{
								m: '30px 0',
								display: 'flex',
							}}>
								<input 
								type="checkbox" 
								checked={isAccept} 
								onChange={() => setIsAccept(!isAccept)} 
								/>
								<div>Я принимаю условия оферты</div>
							</Box>

							<Button 
							isDisabled={!isAccept}
							// type="submit" 
							// styleName="alt" 
							title="Отправить" 
							onClick={onSendForm}
							/>
						</div>
						{/* </form> */}
						
	        </Grid>

	      </Grid>
      {/* <form
        action="https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a"
        enctype="multipart/form-data"
        method="POST"
        target="_blank"
      >
        <div
          class="form-group"
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
          />
        </div>
        <div
          class="form-group"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <input
          type="file"
          name="file"
        />
        <button type="submit">
          Send
        </button>
      </form> */}

			</Container>
		</section>
	)
} 