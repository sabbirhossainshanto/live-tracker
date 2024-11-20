import ReactDOM from "react-dom/client";
import "./index.css";
import MainRouter from "./routes/MainRouter.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </PersistGate>
    <Toaster />
  </Provider>
);
