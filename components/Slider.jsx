import { Box, Flex } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import slider1 from '../assests/images/slider-1.jpg'
import slider2 from '../assests/images/slider-1.jpg'
import slider3 from '../assests/images/slider-1.jpg'
export default function Slider() {
    return (
        <>
            <Box w="100%" p="3"  position='relative'>

                <Flex flexDirection="row" justifyContent="space-between">
                    <BsArrowLeft position='absolute' border='1pt solid' zIndex="2" top="120px"/>
                    <Flex flexDirection='row' >
                        <Box w="full" h="400" >
                            <Image src={slider1}  layout="fill" objectFit="cover" alt="slider_image" />
                            <Image src={slider1}  layout="fill" objectFit="cover" alt="slider_image" />
                            <Image src={slider1}  layout="fill" objectFit="cover" alt="slider_image" />
                        </Box>
                    </Flex>
                    <BsArrowRight />

                </Flex>
            </Box>
        </>
    )
}
