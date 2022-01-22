import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import slider1 from '../assests/images/slider-1.jpg'
import slider2 from '../assests/images/slider-2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
    return (
        <>
            <Box pos="relative" p="0">
                <Carousel>
                    <Box>
                        <Image width="100%" height="40%" layout="responsive" objectFit="cover" src={slider1} />
                    </Box>
                    <Box>
                        <Image width="100%" height="40%" layout="responsive" objectFit="cover" src={slider2} />
                    </Box>
                    <Box>
                        <Image width="100%" height="40%" layout="responsive" objectFit="cover" src={slider2} />
                    </Box>


                </Carousel>
            </Box>
        </>
    )
}
