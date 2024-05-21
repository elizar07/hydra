import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import { MdPhoneInTalk } from 'react-icons/md'
import vector1 from '../../Assets/img/Vector 1.png'
import vector2 from '../../Assets/img/Vector 2.png'
import vector3 from '../../Assets/img/Vector 3.png'
import vector4 from '../../Assets/img/Vector 4.png'
import hero_img from '../../Assets/img/hero-img.png'
import { MdOutlineMailOutline } from 'react-icons/md'

const Hero = () => {
	return (
		<div id='hero'>
			<div className='hero-line'>
				<img className='vector4' src={vector4} alt='img' />
				<img className='vector2' src={vector2} alt='img' />
				<img className='vector3' src={vector3} alt='img' />
				<img className='vector1' src={vector1} alt='img' />
			</div>
			<div className='container'>
				<div className='hero'>
					<div className='hero-text'>
						<h1>
							Dive <span>Into The Depths</span> <br />
							<span>Of</span> Virtual Reality
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
							sed do eiusmod tempor incididunt ut labore et dolore <br />
							nisl tincidunt eget. Lectus mauris eros in vitae .
						</p>
						<div className='hero-text-btn-icon'>
							<button>BUILD YOUR WORLD</button>
							<a>
								<GoArrowRight />
							</a>
						</div>
					</div>
					<div className='hero-img'>
						<img src={hero_img} alt='img' />
					</div>
				</div>
				<div className='hero-outline'>
					<div className='hero-ouline_icon-text'>
						<div className='hero-ouline-icon'>
							<FaMapMarkerAlt />
						</div>
						<div className='hero-ouline-text'>
							<h4>Pay Us a Visit</h4>
							<h5>Union St, Seattle, WA 98101, United States</h5>
						</div>
					</div>
					<div className='hero-outline-line'></div>
					<div className='hero-ouline_icon-text'>
						<div className='hero-ouline-icon'>
							<MdPhoneInTalk />
						</div>
						<div className='hero-ouline-text'>
							<h4>Give Us a Call</h4>
							<h5>(110) 1111-1010</h5>
						</div>
					</div>
					<div className='hero-outline-line'></div>
					<div className='hero-ouline_icon-text'>
						<div className='hero-ouline-icon'>
							<MdOutlineMailOutline />
						</div>
						<div className='hero-ouline-text'>
							<h4>Send Us a Message</h4>
							<h5>Contact@HydraVTech.com</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
