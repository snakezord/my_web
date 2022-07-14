import {useRef} from 'react';
import {useLoader, Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, useAnimations, Environment, Html} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useColorMode, useMediaQuery} from "@chakra-ui/react";
import Typewriter, {TypewriterClass} from 'typewriter-effect';

const Scene = () => {
	const {colorMode} = useColorMode();
	return (
		<Canvas>
			<ambientLight intensity={colorMode === 'light' ? .5 : 0}/>
			<Environment preset={colorMode === 'light' ? 'lobby' : 'night'}/>
			<Model/>
			<OrbitControls enableZoom={false}/>
		</Canvas>
	);
};

const Model = () => {
	const mesh = useRef<any>(null);
	const model = useLoader(GLTFLoader, "./scene.glb");
	const {actions} = useAnimations(model.animations, mesh);

	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

	useFrame(() => {
		actions['Take 01']?.setDuration(5).play()
	});

	return (
		<group position={[0, 0, 0]} dispose={null}>
			<mesh ref={mesh} position={[0, -3, 0]}>
				<primitive object={model.scene}/>
			</mesh>
			<Html center position={[-1.1, isLargerThan1280 ? 1 : -1, 0]} id={undefined}>
				<Typewriter
					onInit={(typewriter: TypewriterClass) => {
						typewriter
							.typeString('Welcome!')
							.pauseFor(2500)
							.pause()
							.start();
					}}
				/>
			</Html>
		</group>
	);
};

export default Scene;