import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import HomeIndex from "./component";

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    document.title = "7030 Code Challenge";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HomeIndex />
    </QueryClientProvider>
  );
}

export default App;
