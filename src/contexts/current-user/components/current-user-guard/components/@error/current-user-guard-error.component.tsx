import { useEffect } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"

export function CurrentUserGuardError() {
  const navigate = useNavigate()

  useEffect(() => {
    toast('Você precisa se autenticar para acessar', {
      dismissible: true,
      position: 'top-right',
    })   
    navigate('/login')
  }, [])

  return null
}