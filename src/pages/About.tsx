import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from 'react'
import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import Button from 'antd/lib/button/button'

import { useAppSelector, useAppDispatch } from '../store'
import { decrement, increment } from '../store/modules/count'
import { getMovieData } from '../store/modules/movie'

const About = () => {
  const [num, setNum] = useState<number>(1)
  const { value } = useAppSelector(state => state.count)
  const { list } = useAppSelector(state => state.movie)
  const dispatch = useAppDispatch()

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

      <Button onClick={() => dispatch(getMovieData())}>获取电影数据</Button>
      <Box>
        {(list as any[]).map((item: { albumId: Key | null | undefined; albumName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
          return (
            <Box key={item.albumId}>{item.albumName}</Box>
          )
        })}
      </Box>
    </Flex>
  )
}

export default About
