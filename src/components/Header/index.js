import React from 'react'
import { Link } from 'react-router-dom'
import hydra_header from '../../Assets/img/hydra-header.png'
import icon_header from '../../Assets/img/icon-header.png'

const Header = () => {
	return (
		<div id='header'>
			<div className='container'>
				<div className='header'>
					<div className='header-icon'>
						<img src={icon_header} alt='img' />
						<img src={hydra_header} alt='img' />
					</div>
					<div className='header-nav'>
						<Link>ABOUT</Link>
						<Link>SERVICES</Link>
						<Link>TECHNOLOGIES</Link>
						<Link>HOW TO</Link>
					</div>
					<div className='header-btn'>
						<button className='header-left-btn'>CONTACT US</button>
						<button className='header-right-btn'>JOIN HYDRA</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
