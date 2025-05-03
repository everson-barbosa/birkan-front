import { Link, Outlet } from "react-router";
import { AuthenticationGuard } from "../../../contexts/authentication/components/authentication-guard.component";

export function PrivateLayout() {
  return (
    <div>
      <h3>Authentication Layout</h3>
      <Link to='/'>Go home</Link>

      <AuthenticationGuard>
        <Outlet />
      </AuthenticationGuard>
    </div>
  )
}