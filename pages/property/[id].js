import { Box, Flex, Text } from '@chakra-ui/react'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Avatar } from '@chakra-ui/avatar'
import { BsGridFill } from 'react-icons/bs'
import slider3 from '../../assests/images/slider-3.jpg'
import Image from 'next/image'
import millify from 'millify'
export default function SingleProduct() {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            <Flex flexWrap='wrap'>
                <Box>
                    <Image src={slider3} width={1000} height={500} alt="product_iamg" />
                </Box>
                <Box w="full">
                    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center" >
                            <Box color="green.400"><GoVerified /></Box>
                            <Text paddingLeft="2">{millify(20000)}</Text>
                        </Flex>
                        <Box >
                            <Avatar size="sm" src={slider3} />
                        </Box>
                    </Flex>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" p="1" w="250px" color="blue.400">
                    300 <FaBed /> | 12 <FaBath /> | {millify(3000)} sqrt <BsGridFill />
                </Flex>
                <Text>
                    {/* { title.length > 30 ?  title.substring(0, 30) + '...'  :  title} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat aut voluptates deleniti nostrum cumque molestias architecto saepe, omnis debitis, laboriosam, quidem corporis corrupti autem provident ut numquam excepturi. Distinctio.
                </Text>
                 <Text>
                    {/* { title.length > 30 ?  title.substring(0, 30) + '...'  :  title} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat aut voluptates deleniti nostrum cumque molestias architecto saepe, omnis debitis, laboriosam, quidem corporis corrupti autem provident ut numquam excepturi. Distinctio.
                </Text>

            </Flex>

        </Box>
    )
}
