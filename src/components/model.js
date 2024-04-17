import * as THREE from 'three'
import { Fog } from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Sky, Clouds, Cloud, useGLTF } from '@react-three/drei'
import {
	DepthOfField,
	EffectComposer,
	Bloom,
	Noise,
	SSAO,
	ToneMapping,
} from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export function Level() {
	const model = useGLTF('/Tsarevo.glb')
	return <primitive object={model.scene} position={[0, 0, 0]} />
}

// const IsometricCamera = () => {
// 	const { scene, camera } = useThree()
// 	camera.position.set(-40, 0, 0)
// 	camera.rotation.order = 'YXZ'
// 	camera.rotation.y = -Math.PI / 4
// 	camera.rotation.x = Math.atan(-1 / Math.sqrt(2))
// 	camera.translateZ(20)
// 	scene.fog = new Fog(0xffffff, 10, 100)
// 	return null
// }
function MyEffectComposer() {
	return (
		<EffectComposer enableNormalPass>
			<DepthOfField focusDistance={0} focalLength={0.1} bokehScale={7} />
			<ToneMapping
				whitePoint={1}
				middleGrey={1}
				maxLuminance={64}
				averageLuminance={128}
			/>
			<Bloom
				intensity={0.4} // The bloom intensity.
				blurPass={undefined} // A blur pass.
				kernelSize={KernelSize.LARGE} // blur kernel size
				luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
				luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
				mipmapBlur={false} // Enables or disables mipmap blur.
				resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
				resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
			/>
			<Noise opacity={0.02} />
			<SSAO />
		</EffectComposer>
	)
}

const Model = () => {
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ fov: 75, position: [-40, 2, 20] }}>
			<OrbitControls
				enableRotate={true}
				enableZoom={false}
				enablePan={false}
				minPolarAngle={Math.PI / 2 - 0.1}
				maxPolarAngle={Math.PI / 2}
				minAzimuthAngle={-Math.PI / 2 + 0.2}
				maxAzimuthAngle={-Math.PI / 2 + 0.5}
			/>
			{/* <CameraControls
			// minPolarAngle={Math.PI / 2 - 0.1}
			// maxPolarAngle={Math.PI / 2}
			// minAzimuthAngle={-Math.PI / 2 + 0.2}
			// maxAzimuthAngle={-Math.PI / 2 + 0.5}
			/> */}
			<MyEffectComposer />
			{/* <IsometricCamera /> */}
			<Sky
				sunPosition={[1, 0, 0.91]}
				distance={500}
				azimuth={0.55}
				mieCoefficient={0.002}
				mieDirectionalG={0.8}
				rayleigh={4}
				turbidity={20}
			/>
			<ambientLight intensity={1.2} />
			<group scale={1} position={[-15, -7, 10]} castShadow receiveShadow>
				<Level />
			</group>

			<Clouds material={THREE.MeshBasicMaterial}>
				<Cloud
					position={[100, 110, -80]}
					segments={20}
					scale={3}
					bounds={[50, 2, 100]}
					volume={50}
					color='white'
					fade={100}
					speed={0.01}
				/>
			</Clouds>

			{/* <PerspectiveCamera makeDefault position={[0, 0, 18.5]} /> */}
		</Canvas>
	)
}

export default Model
