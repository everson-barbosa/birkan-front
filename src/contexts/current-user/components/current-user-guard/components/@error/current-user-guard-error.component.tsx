import { useEffect } from "react"
import { useNavigate } from "react-router"

export function CurrentUserGuardError() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login')
  }, [])

  return 'Error!'
}