import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { NetworkStatus } from "@/core/enums/network-status"
import { loginWithMagicLink } from "@/infra/http/services/authentication/login-with-magic-link.service"
import { ProgressFeedback } from "./components/progress-feedback/progress-feedback.component"

export function MagicLinkRedirectPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<NetworkStatus>(NetworkStatus.IDLE)

  const urlSearchParams = new URLSearchParams(window.location.search)
  const token = urlSearchParams.get('token')

  const handleLoginWithMagicLink = async () => {
    if (!token) {
      navigate('/login')

      return
    }

    setStatus(NetworkStatus.LOADING)

    try {
      await loginWithMagicLink({ token })

      // navigate('/dashboard')

      setStatus(NetworkStatus.SUCCESS)
    } catch (error) {
      console.error(error)

      setStatus(NetworkStatus.ERROR)

      navigate('/login')
    }
  }

  useEffect(() => {
    handleLoginWithMagicLink()
  }, [])

  switch(status) {
    case NetworkStatus.IDLE:
      return <ProgressFeedback text="Idle" value={33} />
    case NetworkStatus.LOADING:
      return <ProgressFeedback text="Loading..." value={33} />
    case NetworkStatus.SUCCESS: 
      return <ProgressFeedback text="Success!" value={100} />
  }

  return (
    <div>
      Magic Link
    </div>
  )
}