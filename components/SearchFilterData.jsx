
import { useState, useEffect } from 'react'
import { Flex, Box, Button, Icon, Spinner, Select, Input, Text } from '@chakra-ui/react'
import { filterData, getFilterValues } from '../ulit/filterDataOption'
import { fetchApi, baseUrl } from '../ulit/api'
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md'


export default function SearchFilterData() {
    const [Filters] = useState(filterData)
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState()
    const [showlocation, setShowLocation] = useState(false)
    const [loader, setLoader] = useState(false)


    const router = useRouter()

    const searchFilterValue = (filterValue) => {
        const path = router.pathname;
        const { query } = router

        const value = getFilterValues(filterValue)

        value.forEach(item => {
            query[item.name] = item.value
        });

        router.push({ pathname: path, query })
    }

    useEffect(() => {
        if (search !== '') {
            const fetchData = async () => {
                setLoader(true);
                const data = await fetchApi(`${baseUrl}/auto-complete?query=${search}`);
                setLoader(false);
                setLocation(data ?.hits);
            };

            fetchData();
        }
    }, [search]);




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

            <Flex flexDir="column" marginTop="2" >
                <Button
                    onClick={() => setShowLocation(!showlocation)}
                    borderColor="gray.400"
                    border="1pt solid">Search By Location </Button>
                <Flex flexDir="column" pos="relative" paddingTop="2" >
                    {showlocation && (
                        <Box>
                            <Input
                                w="300px"
                                focusBorderColor="gray.400"
                                placeholder="seach by location "
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {location !== '' &&
                                <Icon
                                    as={MdCancel}
                                    pos="absolute"
                                    w='25px'
                                    top="5"
                                    right="5"
                                    zIndex="2"
                                    cursor="pointer"
                                    onClick={() => setSearch('')}
                                >

                                </Icon>
                            }

                        </Box>
                    )
                    }
                    {loader && <Spinner margin="auto" marginTop="2" color="gray.500" />}
                    {showlocation &&
                        <Box height="300px" overFlow="auto">
                            {location ?.map((location) => (
                                <Box
                                    key={location.id}
                                    onClick={() => {
                                        searchFilterValue({ locationExternalIDs: location.externalID });
                                        setShowLocation(false);
                                        setSearch(location.name);
                                    }}
                                >
                                    <Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
                                        {location.name}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    }
                    <Box>
                    {!loader && !location ?.length && (
                        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                            {/* <Image src={noresult} /> */}
                            <Text fontSize='xl' marginTop='3'>
                                Waiting to search!
                                   </Text>
                        </Flex>
                    )}

                        </Box>
            </Flex>
        </Flex>







            </Flex >
            )
}
