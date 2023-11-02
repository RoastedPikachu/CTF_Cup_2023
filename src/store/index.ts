import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import MobileReducer from "@/store/storeReducers/MobileSlice";
import AlertReducer from "@/store/storeReducers/AlertSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mobile: MobileReducer,
  alert: AlertReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
