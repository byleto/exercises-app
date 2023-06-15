import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  RouterProvider
} from "react-router-dom";
import "./App.css";
import { router } from './routes/exerciseRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
