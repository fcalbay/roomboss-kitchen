import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Home from "./pages/home.page";

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Home />
    </MantineProvider>
  );
}
