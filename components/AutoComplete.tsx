import { Box, Divider, Text, HStack, Icon, Input, InputGroup, InputRightElement, useFocusEffect, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import useDebounce from "../hooks/useDebounce"

const AutoComplete = () => {

    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const debounceValue = useDebounce(search, 500)

    useEffect(() => {

        async function fetchLocation() {
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=gZf375AKxxIi06huEHvU6H7yJG84Cm4A&q=${debounceValue}`
            )
            const data = await response.json()
            setItems(data)
            console.log('data response - ',data)
        }

        if(debounceValue !== '') {
            fetchLocation()
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
        
    }, [debounceValue])
    
    return (
        <Box w="20vw">
            
            <InputGroup>
                <Input 
                aria-controls='autocomplete-location' 
                variant="filled" 
                rounded="2xl"
                placeholder='Search location'
                onChange={e => {
                    setSearch(e.target.value)
                }}
                onBlur={e => {
                    setIsOpen(false)
                }}
                />
                <InputRightElement children={<Icon as={FaSearch} color='gray.400' />} />
            </InputGroup>

            {
                isOpen && (
                    <VStack w="100%" bg="gray.200" mt={1} rounded="md">
                        {
                            items.map((item: any, i) => {
                                return (
                                    <Box 
                                    key={`${item.key}-${i}`}
                                    py={3}
                                    w="100%"
                                    textAlign="center"
                                    style={{cursor: 'pointer'}}>
                                        <Text 
                                        fontSize='sm'>
                                            {`${item.LocalizedName},${item.AdministrativeArea.LocalizedName},${item.Country.ID}`}
                                        </Text>
                                    </Box>
                                )
                            })
                        }
                    </VStack>
                )
            }

            
        </Box>
    )
}

export default AutoComplete