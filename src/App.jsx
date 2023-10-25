import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CabinsPage from "./pages/CabinsPage";
import AppLayout from "./components/AppLayout";
import { Toaster } from "react-hot-toast";
import BookPage from "./pages/BookPage";

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
            <Route path="book" element={<BookPage />} />
            <Route path="cabins" element={<CabinsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "600px",
            padding: "16px 24px",
            background: "#363636",
            color: "#fff",
          },
        }}
      />
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
