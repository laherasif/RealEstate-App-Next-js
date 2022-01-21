import { useState, useEffect } from 'react'
import { Flex, Box, Button, Icon, Spinner, Select, Input, Text } from '@chakra-ui/react'
import { filterData, } from '../ulit/filterDataOption'

export default function SearchFilterData() {
    const [Filters] = useState(filterData)
    return (
        <Flex bg='gray.100' p='4' flexWrap="wrap" justifyContent="center"  >
            {Filters.map((filter) => {
                return (
                    <Box>
                        <Select
                            placeholder={filter.placeholder}
                            w="fit-content"
                            p="2" >
                            { filter.items.map((item)=>{
                                return(
                                    <option value={item.value} key={item.value}>
                                        { item.name }
                                    </option>
                                )
                            })}
                        </Select>
                    </Box>
                        )
                    })}
        </Flex>
                )
            }
