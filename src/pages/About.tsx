import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import Button from 'antd/lib/button/button'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/count'

const About = () => {
  const { value } = useSelector(store => store.count)
  const dispatch = useDispatch()

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  `

  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <Box animation={`${rotate} 4s linear infinite`} h={50}>
        <FaReact size={50} />
      </Box>
      <h1>Yu-React-template</h1>
      <Box>{value}</Box>

      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
    </Flex>
  )
}

export default About
