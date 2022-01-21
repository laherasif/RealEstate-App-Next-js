
import Navbar from '../components/Navbar';
// import Slider from '../components/Slider'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Slider1 from '../assests/images/slider-1.jpg'
import PropertiesList from '../components/PropertiesList';
import { baseUrl, fetchApi } from '../ulit/api'
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

const Home = ({ propertiesForRent, propertiesForSale }) => {
  return (
    <Box>
      <MianContent />
      <Flex flexWrap="wrap" justifyContent="center">

        {propertiesForRent && propertiesForRent.map((property) => {
          return (
            <PropertiesList key={property} property={property} />
          )
        })}


      </Flex>
      <MianContent />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale && propertiesForSale.map((property) => {
          return (
            <PropertiesList key={property} property={property} />
          )
        })}


      </Flex>

    </Box>

  )
}

export async function getServerSideProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale.hits,
      propertiesForRent: propertyForRent.hits,
    },
  };
}

export default Home

