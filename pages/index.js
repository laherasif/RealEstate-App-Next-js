
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
          <Text color="gray.400" fontWeight="medium" fontSize="sm">Explore more </Text>
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

