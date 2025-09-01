import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { RequestStatus } from "@/core/enums/request-status"
import { loginWithMagicLink } from "@/services/authentication/login-with-magic-link.service"
import { ProgressFeedback } from "./components/progress-feedback/progress-feedback.component"

export default function MagicLinkRedirectPage() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE)

  const urlSearchParams = new URLSearchParams(window.location.search)
  const token = urlSearchParams.get('token')

  const handleLoginWithMagicLink = async () => {
    if (!token) {
      navigate('/login')

      return
    }

    setStatus(RequestStatus.LOADING)

    try {
      await loginWithMagicLink({ token })

      setStatus(RequestStatus.SUCCESS)
      
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
    } catch (error) {
      console.error(error)

      setStatus(RequestStatus.ERROR)

      navigate('/login')
    }
  }

  useEffect(() => {
    handleLoginWithMagicLink()
  }, [])

  switch(status) {
    case RequestStatus.IDLE:
      return <ProgressFeedback text="Idle" value={33} />
    case RequestStatus.LOADING:
      return <ProgressFeedback text="Loading..." value={66} />
    case RequestStatus.SUCCESS: 
      return <ProgressFeedback text="Success!" value={100} />
  }

  return (
    <div>
      Magic Link
    </div>
  )
}