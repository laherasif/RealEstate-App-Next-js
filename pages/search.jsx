import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import { useRouter } from 'next/router';

import SearchFilterData from '../components/SearchFilterData'
import PropertiesList from '../components/PropertiesList';
import { fetchApi , baseUrl } from '../ulit/api';
export default function search({ properties }) {
    const [searchFilter, setSearchFilter] = useState()
    const router = useRouter()
    
    console.log("router", properties)
    return (
        <Box>
            <Flex justifyContent="center"
                alignItems="center"
                fontWeight="black"
                p="2"
                fontSize="xlg"
                bg="gray.200"
                onClick={() => setSearchFilter(!searchFilter)}
            >
                <Text>Search Property By Filter </Text>
                <Icon w="75" marginLeft="2" as={BsFilter} />
            </Flex>

            {searchFilter && <SearchFilterData />}

            <Text fontSize="2xl" p="2" fontWeight="bold">
                Property {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {[].map((property) => <PropertiesList property={property} key={property.id} />)}
            </Flex>

            {[].length === 0 && (
                <Text textAlign="center" fontSize="xl" fontWeight='medium'>
                    No Properties Here
                </Text>

            )}


        </Box>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }