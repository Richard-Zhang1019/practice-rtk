import { createSlice } from '@reduxjs/toolkit'

export interface CountState {
  value: number
  title: string
}

// 创建一个 Slice
export const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    title: 'redux toolkit pre'
  } as CountState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    increment: (state, param) => {
      state.value += param.payload || 1
    },
    decrement: (state, param) => {
      state.value -= param.payload || 1
    }
  }
})

export const { increment, decrement } = countSlice.actions

export default countSlice.reducer
