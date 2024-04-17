import './App.css'
import React from 'react'
import Card from './components/card'
import Skills from './components/skills'
import Model from './components/model'

function App() {
	return (
		<div>
			<div className='snap-mandatory snap-y overflow-y-scroll h-screen no-scrollbar'>
				{/* <div className='snap-always snap-start bg-gray-100 h-screen py-10 px-3 sm:px-5 select-none'>
					<Card />
				</div> */}
				<div className='snap-always snap-center bg-white h-screen py-10 px-3 sm:px-5 '>
					<Model />
				</div>
				{/* <div className='snap-always snap-start bg-gray-100 h-screen py-10 px-3 sm:px-5 select-none'>
					<Skills />
				</div> */}
			</div>
		</div>
	)
}

export default App
