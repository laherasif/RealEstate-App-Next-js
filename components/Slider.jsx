import { Box, Flex } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
export default function Slider() {
    return (
        <>
            <Box w="100%" p="3" border="1pt solid">

                <Flex>
                    <BsArrowLeft />

                    <Box>

                    </Box>
                    <BsArrowRight/>

                </Flex>
            </Box>
        </>
    )
}
