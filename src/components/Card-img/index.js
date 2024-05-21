import React from 'react';
import card_img1 from '../../Assets/img/card-img1.png'
import card_img2 from '../../Assets/img/card-img2.png'
import card_img3 from '../../Assets/img/card-img3.png'
import card_img4 from '../../Assets/img/card-img4.png'
import vector14 from "../../Assets/img/Vector 14.png"
import technologies from "../../Assets/img/technologies.png"
import { HiOutlineChevronDown } from "react-icons/hi2";



const Card_img = () => {
	return (
		<div id='card-img'>
			<img className='vector14' src={vector14} alt='img' />
			<div className='container'>
				<div className='cards'>
					<div className='card'>
						<div className='circle'>
							<img src={card_img1} alt='img' />
						</div>
						<h1>SIMULATION</h1>
						<div className='card-line'></div>
						<p>
							Vitae sapien pellentesque habitant morbi <br />
							nunc. Viverra aliquet porttitor rhoncus <br />
							libero justo laoreet sit amet vitae.
						</p>
						<button>TRY IT NOW</button>
					</div>
					<div className='card'>
						<div className='circle'>
							<img src={card_img2} alt='img' />
						</div>
						<h1>EDUCATION</h1>
						<div className='card-line'></div>
						<p>
							Vitae sapien pellentesque habitant morbi <br />
							nunc. Viverra aliquet porttitor rhoncus <br />
							libero justo laoreet sit amet vitae.
						</p>
						<button>TRY IT NOW</button>
					</div>{' '}
					<div className='card'>
						<div className='circle'>
							<img src={card_img3} alt='img' />
						</div>
						<h1>SELF-CARE</h1>
						<div className='card-line'></div>
						<p>
							Vitae sapien pellentesque habitant morbi <br />
							nunc. Viverra aliquet porttitor rhoncus <br />
							libero justo laoreet sit amet vitae.
						</p>
						<button>TRY IT NOW</button>
					</div>{' '}
					<div className='card'>
						<div className='circle'>
							<img src={card_img4} alt='img' />
						</div>
						<h1>OUTDOOR</h1>
						<div className='card-line'></div>
						<p>
							Vitae sapien pellentesque habitant morbi <br />
							nunc. Viverra aliquet porttitor rhoncus <br />
							libero justo laoreet sit amet vitae.
						</p>
						<button>TRY IT NOW</button>
					</div>
				</div>
				<div className='img-technologies'>
					<img src={technologies} alt='img' />
					<div className='img-technologies-text'>
						<h1>TECHNOLOGIES & HARDWARE</h1>
						<h2>USED BY HYDRA VR.</h2>
						<div className='img-technologies-text-icon'>
							<div className='img-technologies-text-icon-circle'>
								<HiOutlineChevronDown />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Card_img;
