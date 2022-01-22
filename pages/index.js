
import { Flex, Box, Text } from '@chakra-ui/react'
import PropertiesList from '../components/PropertiesList';
import { baseUrl, fetchApi } from '../ulit/api'
import Slider from '../components/Slider';
const MianContent = ({title}) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" textAlign="center" p="2" marginBottom="2" marginTop="2">
        <Text color="black" fontWeight="bold" fontSize="4xl">{title} </Text>
      </Flex>
    </>

  )
}

const Home = ({ propertiesForRent, propertiesForSale }) => {
  return (
    <Box>
      <Slider />
      <MianContent  title={"Property For Rent "}/>
      <Flex flexWrap="wrap" justifyContent="center">

        {propertiesForRent && propertiesForRent.length > 0 ? propertiesForRent.map((property) => {
          return (
            <PropertiesList key={property} property={property} />
          )
        })
          : "loading"
        }


      </Flex>
      <MianContent title={"Property For Sale "} />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale && propertiesForSale.length > 0 ? propertiesForSale.map((property) => {
          return (
            <PropertiesList key={property} property={property} />
          )
        })
          : 'loading'
        }


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

