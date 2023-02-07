import "react-image-gallery/styles/css/image-gallery.css";
import { FC, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

export const Slider: FC<{ images: string[]; }> = ({ images }) => {
  const items = useMemo(() => images.reduce((arr, el) => {
    return [...arr, {
      original: el,
    }];
  }, [] as ReactImageGalleryItem[]), [images]);

  return (
    <Box
      minWidth='300px'
      minHeight='230px'
      w={'100%'}
      h={'100%'}
      borderRadius={'10px'}
      p={1}
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
  );
};


export default Slider;