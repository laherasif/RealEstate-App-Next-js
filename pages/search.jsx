import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import { useRouter } from 'next/router';

import SearchFilterData from '../components/SearchFilterData'
import PropertiesList from '../components/PropertiesList';
export default function search() {
    const [searchFilter, setSearchFilter] = useState()
    const router = useRouter()
    console.log("router", router)
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
