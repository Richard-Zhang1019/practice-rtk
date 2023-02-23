import { useState } from 'react'
import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import Button from 'antd/lib/button/button'

import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/modules/count'

const About = () => {
  const [num, setNum] = useState<number>(1)
  const { value } = useSelector((state: RootState) => state.count)
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
      <input type="text" onChange={e => setNum(Number(e.target.value))} /> 输入一个值 每次运算时加减这个值
      <Button onClick={() => dispatch(increment(num))}>+1</Button>
      <Button onClick={() => dispatch(decrement(num))}>-1</Button>
    </Flex>
  )
}

export default About
