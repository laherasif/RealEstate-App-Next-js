import { Flex, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Avatar } from '@chakra-ui/avatar'
import { BsGridFill } from 'react-icons/bs'
import slider2 from '../assests/images/slider-2.jpg'
import { millify } from 'millify';

export default function PropertiesList({ property }) {
    return (
        <Link href="/" passHref>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Image src={slider2} width={400} height={260} alt="product_iamg" />
                </Box>
                <Box w="full">
                    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center" >
                            <Box color="green.400"><GoVerified /></Box>
                            <Text paddingLeft="2">{millify(20000)}</Text>
                        </Flex>
                        <Box >
                            <Avatar size="sm" src={slider2} />
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

            </Flex>
        </Link>
    )
}
