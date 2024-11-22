import React from 'react';

import project01 from '../img/projects/01.jpg';
import project02 from '../img/projects/02.jpg';
import project03 from '../img/projects/03.jpg';
import project04 from '../img/projects/04.jpg';
import project05 from '../img/projects/05.jpg';
import project06 from '../img/projects/06.jpg';
import project07 from '../img/projects/07.jpg';

const Projects = () => {
	return (
		<>
			<main className='section' id='projects'>
				<div className='container'>
					<h2 className='title-1'>Projects</h2>
					<ul className='projects'>
						<li className='project'>
							<a href='https://react-pizza-gules-three.vercel.app/'>
								<img
									src={project01}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Pizza sales React app</h3>
							</a>
						</li>
						<li className='project'>
							<a href='https://anstonebear.github.io/Food.FullProject/'>
								<img
									src={project02}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Calorie calculator JS app</h3>
							</a>
						</li>
						<li className='project'>
							<a href='https://tz-skilla.vercel.app/#'>
								<img
									src={project03}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>React app for call handling</h3>
							</a>
						</li>

						<li className='project'>
							<a href='https://anstonebear.github.io/comics-ref/'>
								<img
									src={project04}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Character card JS app</h3>
							</a>
						</li>
						<li className='project'>
							<a href='https://simple-hotel.vercel.app/mainpage'>
								<img
									src={project05}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Hotel booking React app</h3>
							</a>
						</li>
						<li className='project'>
							<a href='https://anstonebear.github.io/movie/'>
								<img
									src={project06}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Demo movie search app</h3>
							</a>
						</li>
						<li className='project'>
							<a href='https://anstonebear.github.io/UberFood/'>
								<img
									src={project07}
									alt='Project img'
									className='project__img'
								/>
								<h3 className='project__title'>Page food delivery</h3>
							</a>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Projects;
