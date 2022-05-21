import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaBehanceSquare } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

const Links = () => {
	return (
		<div className='flex justify-center mx-auto text-2xl text-slate-700 sm:text-4xl'>
			<a className='m-3' href='https://github.com/nozloy'>
				<BsGithub />
				<span className=' sr-only'>GitHub</span>
			</a>
			<a className='m-3' href='https://behance.net/nozloy'>
				<FaBehanceSquare />
				<span className=' sr-only'>Behance</span>
			</a>
			<a className='m-3' href='https://twitter.com/NoZloy'>
				<AiFillTwitterCircle />
				<span className=' sr-only'>Twitter</span>
			</a>
			<a className='m-3' href='https://www.youtube.com/c/SadykoffFamily'>
				<IoLogoYoutube />
				<span className=' sr-only'>Youtube</span>
			</a>
			<a className='m-3' href='https://instagram.com/a_sadykoff'>
				<AiFillInstagram />
				<span className=' sr-only'>Instagram</span>
			</a>
		</div>
	)
}

export default Links
