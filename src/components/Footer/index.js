import React from 'react'
import vector18 from '../../Assets/img/Vector 18.png'
import vector19 from '../../Assets/img/Vector 19.png'

import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { FaPinterest } from 'react-icons/fa'
import footer_img from "../../Assets/img/footer-img.png"


const Footer = () => {
	return (
		<div id='footer'>
			<div className='container'>
				<div className='input-block'>
					<h1>JOIN HYDRA</h1>
					<div className='input-block-line'></div>
					<h2>Let’s Build Your VR Experience</h2>
					<div className='firs-last'>
						<input type='text' placeholder='First Name' />
						<input type='text' placeholder='Last Name' />
					</div>
					<div className='email-phone'>
						<input type='text' placeholder='Email' />
						<input type='text' placeholder='Phone Number ' />
					</div>
					<input className='subject' type='text' placeholder='Subject' />
					<input
						className='tell'
						type='text'
						placeholder='Tell Us Something...'
					/>
					<button>SEND TO HYDRA</button>
				</div>
				<div className='footer'>
					<img src={footer_img} alt='img' />
					<div className='footer-line'></div>
					<div className='footer-text'>
						<a>ABOUT</a>
						<br />
						<a>SERVICES</a>
						<br />
						<a>TECHNOLOGIES</a>
						<br />
						<a>HOW TO</a>
						<br />
						<a>JOIN HYDRA</a>
					</div>
					<div className='footer-line'></div>
					<div className='footer-text'>
						<a>F.A.Q</a>
						<br />
						<a>SITEMAP</a>
						<br />

						<a>CONDITIONS</a>
						<br />
						<a>LICENSES</a>
					</div>
					<div className='footer-line'></div>
					<div className='footer-right'>
						<h2>SOCIALIZE WITH HYDRA</h2>
						<div className='footer-right-icons'>
							<a>
								<FaFacebook />
							</a>
							<a>
								<FaTwitter />
							</a>
							<a>
								<FaLinkedinIn />
							</a>
							<a>
								<FaYoutube />
							</a>
							<a>
								<RiInstagramFill />
							</a>
							<a>
								<FaPinterest />
							</a>
						</div>
						<button>BUILD YOUR WORLD</button>
					</div>
				</div>
				<div className='footer-footer'>
					<div className='footer-lines'></div>
					<h1>
						2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
						RESERVED{' '}
					</h1>
				</div>
			</div>
			<div className='footer-line-vector'>
				{' '}
				<img className='vector19' src={vector19} alt='img' />
				<img className='vector18' src={vector18} alt='img' />
			</div>
		</div>
	)
}

export default Footer
