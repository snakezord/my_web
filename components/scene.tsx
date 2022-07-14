import {useEffect, useRef} from 'react';
import {useLoader, Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useAnimations} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useColorMode} from "@chakra-ui/react";

const Scene = () => {
	const {colorMode} = useColorMode();
	return (
		<Canvas>
			<ambientLight intensity={0.5}/>
			<spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow/>
			<Environment preset={colorMode === 'light' ? 'sunset' : 'night'}/>
			<Model/>
			<OrbitControls enableZoom={false}/>
		</Canvas>
	);
};

const Model = () => {
	const mesh = useRef<any>(null);
	const model = useLoader(GLTFLoader, "./rhetorician/scene.gltf");
	const {actions} = useAnimations(model.animations, mesh);

	useEffect(() => {
		actions['Take 01']?.setDuration(5).play()
	}, [actions]);

	return (
		<mesh ref={mesh} position={[-.5, -2.7, .5]} scale={1.04}>
			<primitive object={model.scene} dispose={null}/>
		</mesh>
	);
};

export default Scene;