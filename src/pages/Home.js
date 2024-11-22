import React from 'react';

import Header from '../components/header/Header';

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2' id='skills'>
								Skills
							</h2>
							<p>
								JavaScript, TypeScript, ReactJS, NextJS, Redux Toolkit, HTML,
								CSS, Sass, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS,
								StyledComponents, NGINX, Webpack Module Federation, Jest.js, RTK
								Query, React Query, Apollo GraphQL, Git, Rx.js
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2' id='about'>
								About me
							</h2>
							<p>
								My name is Mikhailov Anton, I am 24 years old. I have been
								professionally involved in frontend development for over two
								years. During this time, I have successfully solved many
								problems and completed a number of courses, which significantly
								expanded my knowledge and honed my skills. I am ready to
								implement interesting projects in a team with talented people.
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
