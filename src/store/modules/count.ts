import { createSlice } from '@reduxjs/toolkit'

export interface CountState {
  value: number
  title: string
}

const initialState: CountState = {
  value: 0,
  title: 'redux toolkit pre'
}

// 创建一个 Slice
export const countSlice = createSlice({
  name: 'counter',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload || 1
    },
    decrement: (state, { payload }) => {
      state.value -= payload || 1
    }
  }
})

export const { increment, decrement } = countSlice.actions

export default countSlice.reducer
