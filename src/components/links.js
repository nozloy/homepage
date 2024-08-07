import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaBehanceSquare } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { IoLogoYoutube } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'

const Links = () => {
	return (
		<div className='flex justify-center mx-auto text-2xl sm:text-4xl '>
			<a className='link' href='https://t.me/nozloy' target='blank'>
				<FaTelegram />
				<span className=' sr-only'>Telegram</span>
			</a>
			<a className='link' href='https://github.com/nozloy' target='blank'>
				<BsGithub />
				<span className=' sr-only'>GitHub</span>
			</a>
			<a className='link' href='https://behance.net/nozloy' target='blank'>
				<FaBehanceSquare />
				<span className=' sr-only'>Behance</span>
			</a>
			<a
				className='link'
				href='https://discordapp.com/users/237260108738985984'
				target='blank'
			>
				<IoLogoDiscord />
				<span className=' sr-only'>Discord</span>
			</a>
			<a
				className='link'
				href='https://www.youtube.com/@kitchenanykey'
				target='blank'
			>
				<IoLogoYoutube />
				<span className=' sr-only'>Youtube</span>
			</a>
			<a
				className='link'
				href='https://instagram.com/a_sadykoff'
				target='blank'
			>
				<AiFillInstagram />
				<span className=' sr-only'>Instagram</span>
			</a>
		</div>
	)
}

export default Links
