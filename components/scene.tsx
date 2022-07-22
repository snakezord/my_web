import {Suspense, useRef} from 'react';
import {useLoader, Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, useAnimations, Html, useProgress} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {CircularProgress, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import Typewriter, {TypewriterClass} from 'typewriter-effect';

function Loader() {
	const {progress} = useProgress()
	return (
		<Html center>
			<CircularProgress value={progress} w={'64px'} h={'64px'} color='#F9248FB3'/>
		</Html>
	)
}

const Scene = () => {
	return (
		<Canvas>
			<Suspense fallback={<Loader/>}>
				<ambientLight intensity={useColorModeValue(1, 0)}/>
				<Model/>
				<OrbitControls enableZoom={false}/>
			</Suspense>
		</Canvas>
	);
};

const Model = () => {
	const group = useRef<any>(null);
	const model = useLoader(GLTFLoader, "./scene.glb");
	const {actions} = useAnimations(model.animations, group);

	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

	useFrame(() => {
		actions['Take 01']?.setDuration(5).play()
	});

	return (
		<group ref={group} position={[0, isLargerThan1280 ? .5 : 0, isLargerThan1280 ? .6 : 0]} dispose={null}>
			<mesh position={[0, -3, 0]}>
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