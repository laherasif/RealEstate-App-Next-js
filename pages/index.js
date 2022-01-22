
import { Flex, Box, Text } from '@chakra-ui/react'
import PropertiesList from '../components/PropertiesList';
import { baseUrl, fetchApi } from '../ulit/api'
import Slider from '../components/Slider';
const MianContent = () => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" textAlign="center" p="2" marginBottom="2" marginTop="2">
          <Text color="black" fontWeight="bold" fontSize="4xl">Explore more </Text>
      </Flex>
    </>

  )
}

const Home = ({ propertiesForRent, propertiesForSale }) => {
  return (
    <Box>
      <Slider/>
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

