import { getCurrentUserService } from "@/infra/http/services/authentication/get-current-user.service";

export function DashboardPage() {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>

      <button onClick={() => getCurrentUserService()}>Enviar</button>
    </div>
  )
}