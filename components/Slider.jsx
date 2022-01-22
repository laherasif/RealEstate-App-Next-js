import { Box, Flex } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import slider1 from '../assests/images/slider-1.jpg'
import slider2 from '../assests/images/slider-2.jpg'
import slider3 from '../assests/images/slider-3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
    return (
        <>
                <Carousel>
                    <Box>
                        <Image w={1000} height={500} objectFit="cover" src={slider1} />
                    </Box>
                    <Box>
                        <Image w={100} height={500} objectFit="cover" src={slider2} />
                    </Box>
                    <Box>
                        <Image w={100} height={500} objectFit="cover" src={slider3} />
                    </Box>


                </Carousel>

        </>
    )
}
