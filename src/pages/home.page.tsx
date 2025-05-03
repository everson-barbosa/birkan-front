import { Link } from "react-router";

export function HomePage() {
  return (
    <div>
      <h3>Home Page</h3>

      <Link to="/login">Log-in</Link>
    </div>
  )
}