import { Box, Flex, Text, } from '@chakra-ui/react'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Avatar } from '@chakra-ui/avatar'
import { BsGridFill } from 'react-icons/bs'
import slider3 from '../../assests/images/slider-3.jpg'
import Image from 'next/image'
import millify from 'millify'
import { fetchApi , baseUrl } from '../../ulit/api'
export default function SingleProduct({property}) {
    console.log("properties" , property)
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

            </Flex>


            <Box marginTop="30">
                <Text fontSize='lg' marginBottom='2' fontWeight='bold'>title</Text>
                <Text lineHeight='2' color='gray.600'>hello des</Text>
            </Box>

            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Type</Text>
                    <Text fontWeight='bold'>type</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>purpose</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    <Text>Furnishing Status</Text>
                    <Text fontWeight='bold'>furnishingStatus</Text>
                </Flex>


            </Flex>

            <Box>
                <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>
                <Flex flexWrap='wrap'>
                    <Text fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                        helow
                                    </Text>
                </Flex>
            </Box>




        </Box>
    )
}


export async function getServerSideProps({params : id }) {

    const data = await fetchApi(`${baseUrl}/properties/detail?locationExternalIDs=${id}`);
    return {
      props: {
        property: data,
      },
    };
  }