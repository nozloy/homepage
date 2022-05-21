import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import Links from './links'

const Card = () => {
	return (
		<div className='w-full'>
			<div
				className='flex flex-col justify-center max-w-sm mx-auto
             bg-white shadow-xl rounded-xl p-5 sm:max-w-md'
			>
				<img
					className='w-32 drop-shadow-sm mx-auto shadow-xl rounded-full sm:w-48'
					src={avatar}
					alt='avatar'
				/>
				<div className='text-slate-500 text-center m-1 p-3 text-md sm:text-xl border-b-2'>
					<div className='text-slate-700 text-xl sm:text-2xl'>
						Almir Sadykoff
					</div>
					<p>Web-developer</p>
					<p>3D-artist</p>
				</div>
				<Links />
			</div>
		</div>
	)
}
export default Card
