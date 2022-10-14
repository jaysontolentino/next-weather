import {useState, useEffect} from 'react'
import {useCombobox} from 'downshift'
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import useDebounce from '../hooks/useDebounce'


const AutoCompleteLocation = () => {

  const [search, setSearch] = useState<string>('')
  const [items, setItems] = useState<any>([])

    const {
      isOpen,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items,
      onInputValueChange: ({inputValue}) => {
        // setInputItems(
        //   items.filter((item) =>
        //     item.toLowerCase().includes(inputValue as string),
        //   ),
        // )
        setSearch(inputValue as string)
      },
    })

    const debounceValue = useDebounce(search, 500)

    useEffect(() => {

      async function fetchLocation() {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=gZf375AKxxIi06huEHvU6H7yJG84Cm4A&q=manila`
        )

        const data = await response.json()

        setItems(data)

        console.log('data response - ',data)
      }

      fetchLocation()

    }, [debounceValue])

    return (
      <div>

        <div  {...getComboboxProps()}>
          <InputGroup>
            <Input 
            aria-controls='autocomplete-location' 
            variant="filled" 
            rounded="2xl"
            placeholder='Search location'
            {...getInputProps()} 
            />
            <InputRightElement children={<Icon as={FaSearch} color='gray.400' />} />
          </InputGroup>
        </div>

        <ul >
          {isOpen &&
            items.map((item: any, index: number) => (
              <li key={`${item.key}`} {...getItemProps({item, index})}>
                {item.LocalizedName}
              </li>
            ))}
        </ul>
      </div>
    )
}

export default AutoCompleteLocation