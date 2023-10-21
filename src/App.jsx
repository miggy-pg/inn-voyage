import Heading from "./components/Heading";
import Row from "./components/Row";
import Button from "./components/Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
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
