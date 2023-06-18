import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import List from "./List";
import Video from "./Video";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">
            <h1>React v8 - WSOP edition</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<Video />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
