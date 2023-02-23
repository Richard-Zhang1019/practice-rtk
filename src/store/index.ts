import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./features/count";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    count: countSlice
  },
});

export default store;

