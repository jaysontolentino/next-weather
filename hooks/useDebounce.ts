import { useEffect, useState } from "react"

const useDebounce = (input: string, delay: number) => {

    const [output, setOutput] = useState<string>('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setOutput(state => {
                return input
            })
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [input])

    return output
}

export default useDebounce