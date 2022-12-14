import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../services/CryptoApi";
import { CryptoNewsApi } from "../services/CryptoNewsApi";

export default configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(CryptoNewsApi.middleware)
      .concat(CryptoApi.middleware)
});
