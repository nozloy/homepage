import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import Links from './links'
import About from './about'

const Card = () => {
	return (
		<div className='w-full scroll-smooth'>
			<div
				className='flex flex-col justify-center max-w-sm mx-auto
             bg-white shadow-xl rounded-xl p-5 sm:max-w-md'
			>
				<img
					className='w-32 drop-shadow-sm mx-auto shadow-xl rounded-full sm:w-48'
					src={avatar}
					alt='avatar'
				/>
				<div className='text-slate-500 text-center m-1 p-3 text-md border-b-2 sm:text-xl'>
					<h1 className='text-slate-700 text-xl sm:text-2xl'>Almir Sadykoff</h1>
					<h2>Web-developer</h2>
					<h2>3D-artist</h2>
				</div>
				<Links />
			</div>
			<About />
		</div>
	)
}
export default Card
