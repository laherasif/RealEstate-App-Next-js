import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Real Estate App</title>
            </Head>
            <Box>
                <header >
                    <Navbar />
                </header>
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
