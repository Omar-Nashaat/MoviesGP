import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import SearchPage from './pages/SearchPage/SearchPage'

const routes = createBrowserRouter([
  { path: '', element: <Login /> },
  { path: 'login', element: <Login /> },
  {
    path: '', element: <Layout />, children: [

      { path: 'home', element: <Home /> },
      { path: 'filter', element: <SearchPage /> },

      // { path: '*', element: <NotFound /> },
    ]
  }
])

function App() {


  return <RouterProvider router={routes}>

  </RouterProvider>
}

export default App
