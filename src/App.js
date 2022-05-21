import './App.css'
import React from 'react'
import Card from './components/card'
import Skills from './components/skills'

function App() {
	return (
		<div>
			<div className='bg-gray-100 min-h-screen py-10 px-3 sm:px-5'>
				<Card />
			</div>
			<div className='bg-gray-600 min-h-screen py-10 px-3 sm:px-5'>
				<Skills />
			</div>
		</div>
	)
}

export default App
