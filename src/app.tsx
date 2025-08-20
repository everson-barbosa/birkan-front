import { RouterProvider } from "react-router"
import { router } from "./pages/@routes/router"
import { ThemeProvider } from "./contexts/theme/theme.context"
import { Toaster } from "./components/ui/sooner/sonner.component"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
