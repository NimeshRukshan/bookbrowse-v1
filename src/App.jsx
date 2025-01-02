import { Outlet } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
