import { Box, Flex } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import slider1 from '../assests/images/slider-1.jpg'
import slider2 from '../assests/images/slider-1.jpg'
import slider3 from '../assests/images/slider-1.jpg'
export default function Slider() {
    return (
        <>
            <Box w="100%" p="3" border="1pt solid">

                <Flex flexDirection="row" justifyContent="space-between">
                    <BsArrowLeft />
                    <Flex>
                        <Box w="full" h="40">
                            <Image src={slider1} width="100%" height="100%" layout="responsive" objectFit="cover" alt="slider_image" />
                            <Image src={slider1} width="100%" height="100%" layout="responsive" objectFit="cover" alt="slider_image" />
                            <Image src={slider1} width="100%" height="100%" layout="responsive" objectFit="cover" alt="slider_image" />
                        </Box>
                    </Flex>
                    <BsArrowRight />

                </Flex>
            </Box>
        </>
    )
}
