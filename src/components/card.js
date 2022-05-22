import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import Links from './links'
import About from './about'
import { motion } from 'framer-motion'

const Card = () => {
	return (
		<div className='w-full scroll-smooth'>
			<motion.div
				initial={{ y: -500 }}
				animate={{ y: 0 }}
				transition={{ delay: 0.4, type: 'spring', ease: 'easeOut' }}
			>
				<div
					className='flex flex-col justify-center max-w-sm mx-auto
             bg-white shadow-xl rounded-xl p-5 sm:max-w-xl'
				>
					<img
						className='w-32 drop-shadow-sm mx-auto shadow-xl rounded-full sm:w-48'
						src={avatar}
						alt='avatar'
					/>
					<div className='text-slate-500 text-center m-1 p-3 text-md border-b-2 sm:text-xl'>
						<h1 className='text-slate-700 text-xl sm:text-2xl'>
							Almir Sadykoff
						</h1>
						<h2>Web-developer</h2>
						<h2>3D-artist</h2>
					</div>
					<Links />
				</div>
			</motion.div>
			<motion.div
				initial={{ y: 500 }}
				animate={{ y: 0 }}
				transition={{
					delay: 0.7,
					type: 'spring',
					ease: 'easeOut',
					damping: 15,
				}}
			>
				<About />
			</motion.div>
		</div>
	)
}
export default Card
