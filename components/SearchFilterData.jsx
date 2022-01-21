
import { useState, useEffect } from 'react'
import { Flex, Box, Button, Icon, Spinner, Select, Input, Text } from '@chakra-ui/react'
import { filterData, getFilterValues } from '../ulit/filterDataOption'
import { useRouter } from 'next/router';


export default function SearchFilterData() {
    const [Filters] = useState(filterData)

    const router = useRouter()

    const searchFilterValue = (filterValue) => {
        const path = router.pathname;
        const { query } = router
        
        const value = getFilterValues(filterValue)
    
        value.forEach(item => {
             query[item.name] = item.value
        });

        router.push({ pathname : path , query })
    }
    return (
        <Flex bg='gray.100' p='4' flexWrap="wrap" justifyContent="center"  >
            {Filters.map((filter) => {
                return (
                    <Box>
                        <Select
                            placeholder={filter.placeholder}
                            onChange={(e) => searchFilterValue({ [filter.queryName]: e.target.value })}
                            w="fit-content"
                            p="2" >
                            {filter.items.map((item) => {
                                return (
                                    <option value={item.value} key={item.value}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Select>
                    </Box>
                )
            })}
            <Flex flexDir="column" >
            <Button borderColor="gray.400">Search By Location </Button>
            </Flex>







        </Flex>
    )
}
