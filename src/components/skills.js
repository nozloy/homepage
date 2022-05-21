import React from 'react'
import {
	SiReact,
	SiTailwindcss,
	SiChakraui,
	SiFramer,
	SiVuetify,
	SiGit,
	SiThreedotjs,
	SiNextdotjs,
	SiSass,
	SiAdobeaftereffects,
	SiAdobepremierepro,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiBlender,
	SiUnity,
	SiCsharp,
	SiNginx,
	SiDocker,
	SiGooglesheets,
} from 'react-icons/si'

const Skills = () => {
	return (
		<div className='w-full scroll-smooth '>
			<div className='flex flex-col justify-center max-w-md mx-auto md:max-w-xl'>
				<div className='flex justify-center text-2xl text-slate-700 font-bold sm:text-4xl'>
					My skills
				</div>
				<div className='flex flex-wrap justify-center pt-8 sm:pt-12 mx-auto'>
					<div className='skill'>
						<SiReact className='icon' />
						<p className='icontitle'>React</p>
					</div>
					<div className='skill'>
						<SiTailwindcss className='icon' />
						<p className='icontitle'>TailWind</p>
					</div>
					<div className='skill'>
						<SiChakraui className='icon' />
						<p className='icontitle'>ChakraUI</p>
					</div>
					<div className='skill'>
						<SiFramer className='icon' />
						<p className='icontitle'>Framer</p>
					</div>
					<div className='skill'>
						<SiVuetify className='icon' />
						<p className='icontitle'>Vuetify3</p>
					</div>
					<div className='skill'>
						<SiGit className='icon' />
						<p className='icontitle'>Git</p>
					</div>
					<div className='skill'>
						<SiThreedotjs className='icon' />
						<p className='icontitle'>Three.JS</p>
					</div>
					<div className='skill'>
						<SiNextdotjs className='icon' />
						<p className='icontitle'>Next.JS</p>
					</div>
					<div className='skill'>
						<SiSass className='icon' />
						<p className='icontitle'>SASS</p>
					</div>
					<div className='skill'>
						<SiAdobeaftereffects className='icon' />
						<p className='icontitle'>AdobeAE</p>
					</div>
					<div className='skill'>
						<SiAdobepremierepro className='icon' />
						<p className='icontitle'>AdobePr</p>
					</div>
					<div className='skill'>
						<SiAdobephotoshop className='icon' />
						<p className='icontitle'>AdobePs</p>
					</div>
					<div className='skill'>
						<SiAdobeillustrator className='icon' />
						<p className='icontitle'>AdobeAi</p>
					</div>
					<div className='skill'>
						<SiBlender className='icon' />
						<p className='icontitle'>Blender</p>
					</div>
					<div className='skill'>
						<SiUnity className='icon' />
						<p className='icontitle'>Unity3D</p>
					</div>
					<div className='skill'>
						<SiCsharp className='icon' />
						<p className='icontitle'>C#</p>
					</div>
					<div className='skill'>
						<SiNginx className='icon' />
						<p className='icontitle'>NGINX</p>
					</div>
					<div className='skill'>
						<SiDocker className='icon' />
						<p className='icontitle'>Docker</p>
					</div>
					<div className='skill'>
						<SiGooglesheets className='icon' />
						<p className='icontitle'>G-Sheets</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
