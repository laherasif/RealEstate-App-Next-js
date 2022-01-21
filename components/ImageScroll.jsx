import { Flex, Text, Box , Icon } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Avatar } from '@chakra-ui/avatar'
import { BsGridFill } from 'react-icons/bs'
import {ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu'
import { useContext } from 'react'
import { FaArrowAltCircleLeft , FaArrowCircleRight } from 'react-icons/fa'
export default function ImageScroll() {


      const LeftArrow = () =>{
          const { scrollPrv } = useContext(VisibilityContext)

          return (
              <Flex justifyContent="center" alignItems="center" marginLeft="1">
                  <Icon
                  as={FaArrowAltCircleLeft}
                  fontSize="2xl"
                  cursor="pointer"
                  onClick={scrollPrv}
                  />
              </Flex>
          )
      }

      const LeftRight = () =>{
        const { scrollNext } = useContext(VisibilityContext)

        return (
            <Flex justifyContent="center" alignItems="center" marginLeft="1">
                <Icon
                as={FaArrowAltCircleRight}
                fontSize="2xl"
                cursor="pointer"
                onClick={scrollNext}
                />
            </Flex>
        )
    }

    return (
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                
            </ScrollMenu>
    )
}
