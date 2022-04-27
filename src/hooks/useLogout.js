import { useState } from "react"
import { firebaseAuth, firebaseFirestore } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch, user } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign user out
    try {

      await firebaseAuth.signOut()

      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      setIsPending(false)
      setError(null)
    }
    
    catch(err) {
      setError(err.message)
      setIsPending(false)
    }
  }

  return { isPending, error, logout }
}