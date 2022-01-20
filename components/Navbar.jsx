import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, Spacer, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { FcMenu, FcAbout, FcKey } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
const Navbar = () => {
    return (
        <Flex p='4' borderBottom='1px' borderColor='gray.100' marginBottom='20rem'>
            <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
                <Link href='/' paddingLeft='3'>Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' />
                    <MenuList>
                        <Link href='/' passHref>
                            <MenuItem icon={<AiFillHome />} >Home</MenuItem>
                        </Link>
                        <Link href='/search' passHref>
                            <MenuItem icon={<BsSearch />} >Search</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <MenuItem icon={<FcAbout />}> Buy Property</MenuItem>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <MenuItem icon={<FcKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar
