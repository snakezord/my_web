import "react-image-gallery/styles/css/image-gallery.css";
import { FC, useMemo, useState } from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

export const Slider: FC<{ images: string[]; }> = ({ images }) => {
  const { colorMode } = useColorMode();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const items = useMemo(() => images.reduce((arr, el) => {
    return [...arr, {
      original: el,
    }];
  }, [] as ReactImageGalleryItem[]), [images]);
  console.log(isFullScreen);
  
  return (
    <Box
      minWidth='300px'
      w={'100%'}
      h={'100%'}
      borderRadius={'10px'}
      border={`1px solid ${colorMode === 'dark' ? '#FFD70080' : '#FFD700CC'}`}
    >
      <ImageGallery
        lazyLoad={true}
        renderItem={(item) => <Image src={item.original} loading="lazy" alt={item.original} height={'auto'} maxHeight={isFullScreen ? 'calc(100vh - 80px)' : ['186px', '380px']} width='100%' objectFit={isFullScreen ? 'contain' : "cover"} objectPosition='0 0' borderRadius='10px' />}
        onScreenChange={(isFS) => setIsFullScreen(isFS)}
        items={items}
        showThumbnails={false}
        showPlayButton={false}
        showBullets
        additionalClass={'image-gallery'}
        slideDuration={200}
      />
    </Box>
  );
};


export default Slider;