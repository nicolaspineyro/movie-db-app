import { AppRoutes } from "./utils/routes";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/ui";
import "./input.css";
import Provider from "react-redux/es/components/Provider";
import store from "./utils/redux/store";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Routes>
          {AppRoutes.map(({ id, compontent, path }) => (
              <Route element={compontent} path={path} key={`${id}-route`} />
            ))}
          </Routes>
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
