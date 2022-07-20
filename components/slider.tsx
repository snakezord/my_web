import "react-image-gallery/styles/css/image-gallery.css";
import {FC, useMemo} from "react";
import {Box, useColorMode} from "@chakra-ui/react";
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';

export const Slider: FC<{ images: string[] }> = ({images}) => {
	const {colorMode} = useColorMode();

	const items = useMemo(() => images.reduce((arr, el) => {
		return [...arr, {
			original: el,
		}]
	}, [] as ReactImageGalleryItem[]), [images]);

	return (
		<Box
			w={'100%'}
			h={'100%'}
			borderRadius={'10px'}
			p={1}
			boxShadow={
				`2px 2px 4px ${colorMode === 'light' ? '#b6b3ac' : '#022133'}, ` +
				`-2px -2px 4px ${colorMode === 'light' ? '#ffffff' : '#023753'}`
			}
		>
			<ImageGallery
				lazyLoad={true}
				items={items}
				showThumbnails={false}
				showPlayButton={false}
				showBullets
				additionalClass={'image-gallery'}
				slideDuration={200}
			/>
		</Box>
	)
}


export default Slider;