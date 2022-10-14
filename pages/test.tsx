import { Box, Input, Menu, MenuDivider, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import AutoComplete from '../components/AutoComplete'


const Test: NextPage = () => {

  return (
    <div>

        <VStack >
            <AutoComplete />
        </VStack>
        
    </div>
  )

}

export default Test
