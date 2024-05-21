import React from 'react'
import strelka from '../../Assets/img/introduction-strelka.png'
import vector7 from "../../Assets/img/Vector 7.png"
import vector8 from '../../Assets/img/Vector 8.png'
import about_img from '../../Assets/img/about-img.png'


const Introduction_about_why = () => {
	return (
		<div id='about'>
			<div className='container'>
				<div className='introduction'>
					<h1>
						INTRODUCTION <br />
						<span>
							TO HYDRA VR <img src={strelka} alt='img' />
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
				<div className='about'>
					<img src={about_img} alt='img' />
					<div className='about-text'>
						<h1>
							ABOUT <br />
							<span>HYDRA VR</span>
						</h1>
						<p>
							Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus{' '}
							<br />
							mattis rhoncus urna neque viverra justo. Vivamus at augue eget
							arcu dictum. Ultrices gravida <br />
							dictum fusce ut placerat orci. Aenean et tortor at risus viverra
							adipiscing at <in className='br'></in> Mattis aliquam faucibus
							purus in massa. Est placerat in egestas erat imperdiet <br />
							sed. Consequat semper viverra nam libero justo laoreet sit amet.
							Aliquam <br />
							etiam erat velit scelerisque in dictum non consectetur a. Laoreet
							sit amet <br />
							cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
							nulla pha <br />
							retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
							sollicitudi <br />n tempor.
						</p>
						<button>LET’S GET IN TOUCH</button>
					</div>
				</div>
			</div>
			<div className='about-line'>
				<img src={vector7} alt='img' />
				<img src={vector8} alt='img' />
			</div>
				<div className='why'>
					<h1>
						WHY BUILD
						<br />
						<span>
							WITH HYDRA?<img src={strelka} alt='img' />
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
			</div>
	)
}

export default Introduction_about_why
