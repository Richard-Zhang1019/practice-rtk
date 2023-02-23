import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Button from 'antd/lib/button/button'

import { useAppSelector, useAppDispatch } from '@/store'
import { decrement, increment } from '../store/modules/count'

const profile = () => {
  const [num, setNum] = useState<number>(1)
  const { value } = useAppSelector(state => state.count)
  const dispatch = useAppDispatch()

  return (
    <Flex justify="center" align="center" direction="column">
      <h1>{value}</h1>
      <input type="text" onChange={e => setNum(Number(e.target.value))} /> 输入一个值 每次运算时加减这个值
      <Button onClick={() => dispatch(increment(num))}>+1</Button>
      <Button onClick={() => dispatch(decrement(num))}>-1</Button>
    </Flex>
  )
}

export default profile
