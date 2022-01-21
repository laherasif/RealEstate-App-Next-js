import { Flex, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Avatar } from '@chakra-ui/avatar'
import { BsGridFill } from 'react-icons/bs'
import slider2 from '../assests/images/slider-2.jpg'
import { millify } from 'millify';

export default function PropertiesList({ property: { agency, rentFrequency , area, baths, rooms , title ,  coverPhoto, externalID, price, isVarified } }) {
    return (
        <Link href={`/property/${123}`} passHref>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
                <Box>
                <Image src={coverPhoto ? coverPhoto.url : slider2} width={400} height={260} />
                </Box>
                <Box w="full">
                    <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center" >
                            <Box color="green.400">{isVarified && <GoVerified />}</Box>
                            <Text paddingLeft="2">PKR {price} {rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box >
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                </Box>

                <Flex justifyContent="space-between" alignItems="center" p="1" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqrt <BsGridFill />
                </Flex>
                <Text>
                    { title.length > 30 ?  title.substring(0, 30) + '...'  :  title}
            </Text>

            </Flex>
        </Link>
    )
}
