import { RouterProvider } from "react-router"
import { AuthenticationProvider } from "./contexts/authentication/authentication.context"
import { router } from "./routes/router"

function App() {
  return (
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>    
  )
}

export default App
