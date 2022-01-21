
import Navbar from '../components/Navbar';
// import Slider from '../components/Slider'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Slider1 from '../assests/images/slider-1.jpg'
const MianContent = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" textAlign="center" p="2">
      <Image src={Slider1} width={100} height={50} alt="main_image" />
      <Flex flexDirection="column" marginLeft="2">
        <Text>Explore more </Text>
        <Text>Explore more </Text>
        <Text>Explore more </Text>
        <Button>more</Button>
      </Flex>
    </Flex>
  )
}


export default function Home() {
  return (
    <>
      <Navbar />
      <MianContent />


    </>

  )
}
