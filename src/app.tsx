import { RouterProvider } from "react-router"
import { router } from "./pages/_routes/router"
import { ThemeProvider } from "./contexts/theme/theme.context"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
