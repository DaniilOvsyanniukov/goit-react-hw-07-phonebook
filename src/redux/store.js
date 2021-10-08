import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["inputValue"],
// };
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

// const store = configureStore({
//   reducer: persistReducer(persistConfig, phonebookReducer),
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// const persistor = persistStore(store);

// const storeExport = { store, persistor };

// export default storeExport;

const store = configureStore({
  reducer: {
    data: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const storeExport = { store };
export default storeExport;
