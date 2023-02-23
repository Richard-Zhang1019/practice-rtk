import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import countSlice from './modules/count'
import movieSlice from './modules/movie'

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    count: countSlice,
    movie: movieSlice
  }
})

// hooks
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:() => typeof store.dispatch = useDispatch

export default store
