import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { useContext } from 'react'
import { FaArrowAltCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
export default function ImageScroll({ photo }) {


    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
      
        return (
          <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
              as={FaArrowAltCircleLeft}
              onClick={() => scrollPrev()}
              fontSize='2xl'
              cursor='pointer'
              d={['none','none','none','block']}
            />
          </Flex>
        );
      }
      
      const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
      
        return (
          <Flex justifyContent='center' alignItems='center' marginLeft='1'>
            <Icon
              as={FaArrowCircleRight}
              onClick={() => scrollNext()}
              fontSize='2xl'
              cursor='pointer'
              d={['none','none','none','block']}
          />
          </Flex>
        );
      }

    return (
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
                {photo.map((item) => (
                    <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
                        <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
                    </Box>
                ))}
            </ScrollMenu>

    )
}
