import { Flex } from '@chakra-ui/react'
import Button from 'antd/lib/button/button'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/count'

const profile = () => {
  const { value } = useSelector(store => store.count)
  const dispatch = useDispatch()

  return (
    <Flex justify="center" align="center" direction="column">
      <h1>{value}</h1>
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
    </Flex>
  )
}

export default profile
