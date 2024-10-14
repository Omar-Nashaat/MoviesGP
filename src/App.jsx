import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const routes = createBrowserRouter([
  { path: '', element: <Login /> },
  { path: 'login', element: <Login /> },
  {
    path: '', element: <Layout />, children: [
<<<<<<< Updated upstream

=======
      { path: 'login', element: <Login /> },
>>>>>>> Stashed changes
      { path: 'home', element: <Home /> },
      // { path: '*', element: <NotFound /> },
    ]
  }
])

function App() {


  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default App
