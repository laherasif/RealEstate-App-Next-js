import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer';

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
                   <Footer/>
                </footer>
            </Box>
        </>
    )
}
