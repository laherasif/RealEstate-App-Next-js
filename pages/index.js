
import Navbar from '../components/Navbar';
// import Slider from '../components/Slider'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Slider1 from '../assests/images/slider-1.jpg'
import PropertiesList from '../components/PropertiesList';
const MianContent = () => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" textAlign="center" p="2">
        <Image src={Slider1} width={500} height={300} alt="main_image" />
        <Flex flexDirection="column" p="5">
          <Text color="gray.400" fontWeight="medium" fontSize="sm">Explore more </Text>
          <Text fontSize="3xl" fontWeight="bold">Explore more <br /> titlte 2 </Text>
          <Text paddingTop="2" paddingBottom="2" fontSize="lg" color="gray.700" >Explore more <br /> desc2 </Text>
          <Button color="white" fontSize="xlg" bg="blue.200">more</Button>
        </Flex>
      </Flex>



    </>

  )
}


export default function Home() {
  return (
    <Box>
      <Navbar />
      <MianContent />
      <Flex flexWrap="wrap" justifyContent="center">
        <PropertiesList/>
        <PropertiesList/>
        <PropertiesList/>
        <PropertiesList/>
        <PropertiesList/>
        <PropertiesList/>
      </Flex>
      <MianContent />
      <Flex flexWrap="wrap" justifyContent="center">
      <PropertiesList/>
     
      </Flex>

    </Box>

  )
}
