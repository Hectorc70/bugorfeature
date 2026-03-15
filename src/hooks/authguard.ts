import { useEffect, useState } from "react"
import { useUser } from "./use-user"
import { useNavigate } from "react-router"

const RequireAuth = ({ children }: any) => {
  const navigate = useNavigate()
  const { fetchUser } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser()
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return null

  return children
}

export default RequireAuth