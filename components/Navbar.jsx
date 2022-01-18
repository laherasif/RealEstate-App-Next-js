import { Box, Flex, Menu ,  MenuButton, MenuList, MenuItem, Spacer, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <Flex p='2' borderBottom='1px' borderColor='gray.100'>
            <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
                <Link href='/' paddingLeft='2'>Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    {/* <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' /> */}
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem >Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem >Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem >Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem >Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar
