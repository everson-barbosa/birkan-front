import { ReactNode, useEffect } from "react";
import { useAuthentication } from "../hooks/use-authentication.hook";
import { AuthenticationStatus } from "../authentication.context";
import { useNavigate } from "react-router";

interface AuthenticationGuardProps {
  readonly children: ReactNode
}

export function AuthenticationGuard({ children }: AuthenticationGuardProps) {
  const { status } = useAuthentication() 

  console.log(status)

  switch (status) {
    case AuthenticationStatus.EXPIRED:
      return <ExpiredRedirect />
    case AuthenticationStatus.AUTHENTICATED:
      return children
    case AuthenticationStatus.UNAUTHENTICATED:
      return <UnauthenticatedRedirect />
    default:
      return null
  }
}

export function ExpiredRedirect() {
  const { clearAuthenticationStorage }  = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    console.warn('Sessão expirada')

    navigate('/login')

    clearAuthenticationStorage()
  }, [navigate, clearAuthenticationStorage])

  return 'Sessão expirada'
}

export function UnauthenticatedRedirect() {
  const { clearAuthenticationStorage }  = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    console.warn('Não autenticado')

    navigate('/login')

    clearAuthenticationStorage()
  }, [navigate, clearAuthenticationStorage])

  return 'Não autenticado'
}