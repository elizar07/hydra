import React from 'react'
import { HiArrowSmallRight } from 'react-icons/hi2'
import hydra_icons1 from '../../Assets/img/Hydra-icons1.png'
import hydra_icons2 from '../../Assets/img/Hydra-icons2.png'
import hydra_icons3 from '../../Assets/img/Hydra-icons3.png'
import hydra_icons4 from '../../Assets/img/Hydra-icons4.png'
import vector15 from '../../Assets/img/Vector 15.png'
import strelka from '../../Assets/img/introduction-strelka.png'

const Icon_text_circle = () => {
	return (
		<div id='Icon_text_circle'>
			<div className='container'>
				<div className='hydra-icons'>
					<img src={hydra_icons1} alt='img' />
					<img src={hydra_icons2} alt='img' />
					<img src={hydra_icons3} alt='img' />
					<img src={hydra_icons4} alt='img' />
				</div>

				<div className='build'>
					<h1>
						HOW WE BUILD
						<br />
						<span>
							WITH HYDRA VR? <img src={strelka} alt='img' />
						</span>
					</h1>
					<p>
						Vitae sapien pellentesque habitant morbi tristique senectus et netus
						et. Feugiat <br />
						nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
						commodo <br />
						quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
						tellus. Ornare <br />
						lectus sit amet est placerat in. Lectus magna fringilla urna
						porttitor rhoncus vitae.
					</p>
				</div>
				<div className='circles_1234'>
					<div className='circle_1234'>
						<div className='circle_1234-shadow'>
							<div className='circle_1234-shadow-circle'>
								<h1>01</h1>
							</div>
						</div>
						<h2>
							<span>
								<HiArrowSmallRight />
							</span>
							3D Conception <br /> & Design
						</h2>
					</div>
					<div className='circle_1234'>
						<div className='circle_1234-shadow'>
							<div className='circle_1234-shadow-circle'>
								<h1>02</h1>
							</div>
						</div>
						<h2>
							<span>
								<HiArrowSmallRight />
							</span>
							Interaction <br /> Design
						</h2>
					</div>{' '}
					<div className='circle_1234'>
						<div className='circle_1234-shadow'>
							<div className='circle_1234-shadow-circle'>
								<h1>03</h1>
							</div>
						</div>
						<h2>
							<span>
								<HiArrowSmallRight />
							</span>
							VR World <br />
							User Testing
						</h2>
					</div>{' '}
					<div className='circle_1234'>
						<div className='circle_1234-shadow'>
							<div className='circle_1234-shadow-circle'>
								<h1>04</h1>
							</div>
						</div>
						<h2>
							<span>
								<HiArrowSmallRight />
							</span>
							Hydra VR
							<br />
							Deploy
						</h2>
					</div>
				</div>
			</div>
			<img className='vector15' src={vector15} alt='img' />
		</div>
	)
}

export default Icon_text_circle
