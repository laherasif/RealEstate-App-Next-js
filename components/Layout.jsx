import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'

export default function Layout() {
    return (
        <>
            <Head>
                <title>Real Estate App</title>
            </Head>
            <Box w="1280px">
                <head>
                    <Navbar />
                </head>
                <main>
                    {children}
                </main>
                <footer>
                    footer section
                </footer>
            </Box>
        </>
    )
}
