import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cabins from "./pages/Cabins";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cabins" element={<Cabins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// <GlobalStyles />
// <Row type="horizontal">
//   <Heading as="h1">Hello, world!</Heading>
//   <Heading as="h2">
//     We are currently testing how styled-components work.
//   </Heading>
//   <Heading as="h3">So lets explore the documentation</Heading>
// </Row>
// <Button variations="medium" size="medium">
//   Test
// </Button>
