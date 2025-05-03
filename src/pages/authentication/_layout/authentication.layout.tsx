import { Link, Outlet } from "react-router";

export function AuthenticationLayout() {
  return (
    <div>
      <h3>Authentication Layout</h3>
      <header>
        <Link to='/'>Go home</Link>

        <Outlet />
      </header>
    </div>
  )
}