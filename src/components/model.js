import { Canvas } from '@react-three/fiber'
import {
	OrbitControls,
	useGLTF,
	Environment,
	Outlines,
} from '@react-three/drei'
import {
	DepthOfField,
	EffectComposer,
	Noise,
	SSAO,
	ToneMapping,
} from '@react-three/postprocessing'

export function Level() {
	const model = useGLTF('/Tsarevo.glb')
	return <primitive object={model.scene} position={[0, 0, 0]} />
}

function MyEffectComposer() {
	return (
		<EffectComposer enableNormalPass>
			<DepthOfField focusDistance={0} focalLength={0.1} bokehScale={7} />
			<ToneMapping middleGrey={1.0} maxLuminance={1} />
			<Noise opacity={0.02} />
			{/* <SSAO /> */}
		</EffectComposer>
	)
}

const Model = () => {
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ fov: 75, position: [-20, 5, -10] }}>
			<Environment
				files='./noon_grass_1k.hdr'
				background={true}
				environmentIntensity={0}
			/>
			<OrbitControls
				enableRotate={true}
				enableZoom={false}
				enablePan={false}
				minPolarAngle={Math.PI / 4 + 0.4}
				maxPolarAngle={Math.PI / 4 + 0.7}
				minAzimuthAngle={-Math.PI + 1}
				maxAzimuthAngle={0 - 1.7}
			/>
			<MyEffectComposer />
			<ambientLight intensity={1} />
			<group scale={1} position={[0, 0, -2]} castShadow receiveShadow>
				<Level />
			</group>
		</Canvas>
	)
}

export default Model
