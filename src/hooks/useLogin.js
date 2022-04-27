import { useState, useEffect } from "react"
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [unMounted, setUnMounted] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await firebaseAuth.signInWithEmailAndPassword(email, password)
      
      if(!res) {
        throw new Error('Could not complete login')
      }

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!unMounted) {
        setError(null)
        setIsPending(false)
      }
    }
    catch (err) {
      if (!unMounted) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setUnMounted(true)
  },[])

  return { isPending, error, login }
}