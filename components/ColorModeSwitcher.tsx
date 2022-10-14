import { IconButton, useColorMode } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

const ColorModeSwitcher = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    
    return (
        <IconButton 
      aria-label='dark-light-mode' 
      alignSelf="end"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode} />
    )
}

export default ColorModeSwitcher