import {useEffect, useRef} from 'react';
import {useLoader, Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useAnimations} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Scene = () => {
	return (
		<Canvas shadows fallback={null}>
			<ambientLight intensity={0.5}/>
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow/>
			<Environment preset="city"/>
			<Model/>
			<OrbitControls target={[0, 0, 0]}/>
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
		<mesh ref={mesh} position={[0, -3.2, 0]} scale={1.05}>
			<primitive object={model.scene}/>
		</mesh>
	);
};

export default Scene;