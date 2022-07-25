import {FC, Suspense, useRef} from 'react';
import {useLoader, Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, useAnimations, Html, useProgress} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {CircularProgress, useColorModeValue, useMediaQuery} from "@chakra-ui/react";
import Typewriter, {TypewriterClass} from 'typewriter-effect';
import {AnimationClip, Group} from "three";

function Loader() {
	const {progress} = useProgress()
	return (
		<Html center>
			<CircularProgress value={progress} w={'64px'} h={'64px'} color='#F9248FB3'/>
		</Html>
	)
}

const Scene = () => {
	const {scene, animations} = useLoader(GLTFLoader, "./scene.glb");
	return (
		<Canvas>
			<ambientLight intensity={useColorModeValue(1, 0)}/>
			<Suspense fallback={<Loader/>}>
				<Model scene={scene} animations={animations}/>
			</Suspense>
			<OrbitControls enableZoom={false}/>
		</Canvas>
	);
};

const Model: FC<{ scene: Group, animations: AnimationClip[] }> = ({scene, animations}) => {
	const group = useRef<any>(null);
	const {actions} = useAnimations(animations, group);
	const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

	useFrame(() => {
		actions['Take 01']?.setDuration(12).play()
	});

	return (
		<group ref={group} position={[0, isLargerThan1280 ? .5 : 0, isLargerThan1280 ? .6 : 0]} dispose={null}>
			<mesh position={[0, -3, 0]}>
				<primitive object={scene}/>
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
	)
};

export default Scene;