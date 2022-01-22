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
            <Box w="100%" p="3" position='relative'>
                <Carousel>
                    <div>
                        <Image w={1000} height={500} src={slider1} />
                    </div>
                    <div>
                        <Image w={1000} height={500} src={slider2} />
                    </div>
                    <div>
                        <Image w={1000} height={500} src={slider3} />
                    </div>
                </Carousel>

            </Box>
        </>
    )
}
