/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth"
import { setLoading, setUser } from "./redux/user/userSlice"
import auth from "./lib/Firebase"
import { Toaster } from "react-hot-toast"



function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

      dispatch(setLoading(true))

      if (user) {
        dispatch(setUser(user.email))
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }

    })
  }, [dispatch])



  return (
    <>

      <MainLayout></MainLayout>
      <Toaster />

    </>
  )
}

export default App
