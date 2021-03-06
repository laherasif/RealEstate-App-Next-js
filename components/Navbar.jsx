// import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, Spacer, IconButton } from '@chakra-ui/react'
// import Link from 'next/link'
// import { FcMenu, FcAbout, FcKey } from 'react-icons/fc'
// import { BsSearch } from 'react-icons/bs'
// import { AiFillHome } from 'react-icons/ai'
// const Navbar = () => {
//     return (
//         <Flex p='4' borderBottom='1px' borderColor='gray.100' zIndex='2'>
//             <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
//                 <Link href='/' paddingLeft='3'>Realtor</Link>
//             </Box>
//             <Spacer />
//             <Box>
//                 <Menu>
//                     <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' />
//                     <MenuList>
//                         <Link href='/' passHref>
//                             <MenuItem icon={<AiFillHome />} >Home</MenuItem>
//                         </Link>
//                         <Link href='/search' passHref>
//                             <MenuItem icon={<BsSearch />} >Search</MenuItem>
//                         </Link>
//                         <Link href='/search?purpose=for-sale' passHref>
//                             <MenuItem icon={<FcAbout />}> Buy Property</MenuItem>
//                         </Link>
//                         <Link href='/search?purpose=for-rent' passHref>
//                             <MenuItem icon={<FcKey />}>Rent Property</MenuItem>
//                         </Link>
//                     </MenuList>
//                 </Menu>
//             </Box>
//         </Flex>
//     )
// }

// export default Navbar

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    MdClose,
    MdArrowForward,
    MdArrowDropDown,
    MdMenu
} from 'react-icons/md';


export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
        >
            <Flex
                bg={useColorModeValue('white', 'gray.300')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <MdClose w={3} h={3} /> : <MdMenu />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontSize='lg'
                        fontWeight="bold"
                        color={useColorModeValue('gray.800', 'white')}>

                        Zameen.com
            </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <Box fontSize="l" fontWeight="bold" color="gray.400">
                            <Link href='/' passHref>Home</Link>
                        </Box>
                        <Box fontSize="l" fontWeight="bold" color="gray.400" marginLeft="3">
                            <Link href='/search?purpose=for-sale' passHref>Buy Property </Link>
                        </Box>
                        <Box fontSize="l" fontWeight="bold" color="gray.400" marginLeft="3">
                            <Link href='/search?purpose=for-rent' passHref>Rent Property</Link>
                        </Box>
                        <Box fontSize="l" fontWeight="bold" color="gray.400" marginLeft="3">
                            <Link href='/search' passHref>Buy Property </Link>
                        </Box>
                    </Flex>

                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        href={'#'}>
                        Sign In
            </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Sign Up
            </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}




const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={'/'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={MdArrowDropDown}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Home',
        link: '/'

    },
    {
        label: 'Buy Property',
        link: '/search?purpose=for-sale'


    },
    {
        label: 'Rent Property',
        link: '/search?purpose=for-rent'

    },
    {
        label: 'Search Property',
        link: '/search'

    },
];


