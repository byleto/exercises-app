import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { ExerciseList } from "./components/ExerciseList";

const queryClient = new QueryClient();

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getData();

  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ExerciseList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
