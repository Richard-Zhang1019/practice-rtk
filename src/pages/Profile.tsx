import { Flex } from '@chakra-ui/react'
import Button from 'antd/lib/button/button'
import { useState } from 'react'

const profile = () => {
  const [count, setCount] = useState(0)

  return (
    <Flex justify="center" align="center" direction="column">
      <h1>{count}</h1>
      <Button shape="round" type="link" onClick={() => setCount(count + 1)}>
        count + 1
      </Button>
    </Flex>
  )
}

export default profile
