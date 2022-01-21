import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import { useRouter } from 'next/router';

import SearchFilterData from '../components/SearchFilterData'
export default function search() {
    const [searchFilter, setSearchFilter] = useState(false)
    const router = useRouter()
    return (
        <Box>
            <Flex justifyContent="center"
                alignItems="center"
                fontWeight="black"
                p="2"
                fontSize="xlg"
                bg="gray.200"
                onClick={(prv) => setSearchFilter(!prv)}
            >
                <Text>Search Property By Filter </Text>
                <Icon w="75" marginLeft="2" as={BsFilter} />
            </Flex>

            {searchFilter && <SearchFilterData />}

        </Box>
    )
}
