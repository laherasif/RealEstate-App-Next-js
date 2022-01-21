import { Box , Flex , Text } from '@chakra-ui/react'
import slider3 from '../../assests/images/slider-3.jpg'
export default function SingleProduct() {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
          <Image src={slider3} width={1000} height={500} alt="prduct_image" />   

        </Box>
    )
}
