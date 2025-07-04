import { DropdownMenuItem } from "@/components/ui/dropdown-menu/dropdown-menu.component";
import { logoutService } from "@/infra/http/services/authentication/logout.service";
import { LogOut as LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router";

export function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logoutService()

      navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOutIcon />
      Log out
    </DropdownMenuItem>
  )
}