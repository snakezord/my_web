import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSlider from "react-awesome-slider";
import {FC, useMemo} from "react";
import {Box} from "@chakra-ui/react";

type Media = { source: string };

const Slider: FC<{ images: string[] }> = ({images}) => {
	const media = useMemo(() => images.reduce((arr, el) => {
		return [...arr, {
			source: el
		}]
	}, [] as Media[]), [images]);

	return (
		<Box w={'100%'} h={'100%'} border={'2px solid #000000A3'}>
			<AwesomeSlider
				media={media}
				transitionDelay={0}
			/>
		</Box>
	)
};


export default Slider;