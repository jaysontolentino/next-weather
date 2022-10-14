import { Button, Heading, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AutoCompleteLocation from '../components/AutoCompleteLocation'
import ColorModeSwitcher from '../components/ColorModeSwitcher'


const Home: NextPage = () => {

  console.log(process.env.NEXT_PUBLIC_HELLO)

  return (
    <VStack p={4}>
      <Heading>Next Weather App</Heading>

      <VStack 
      p={4} 
      w="50vw" 
      bg="gray.50"
      rounded="lg"
      alignItems="stretch"
      minHeight="30vh">

        <HStack >
          <AutoCompleteLocation />
          <Spacer />
          <ColorModeSwitcher />
        </HStack>

        <Menu>
        <MenuButton as={Button} >
    Actions
  </MenuButton>

          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

      </VStack>


    </VStack>
  )

}

export const getServerSideProps = () => {

  console.log(process.env.HELLO)

  return {
    props: {

    }
  }
}

export default Home
