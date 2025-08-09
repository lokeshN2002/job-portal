import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Landingpage from './pages/Landingpage'
import Getjob from './pages/Getjob'
import Postjob from './pages/Postjob'
import Jobdetails from './pages/jobdetails'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  }, {
    path: '/register',
    element: <Register />,
  }, {
    path: '/landingpage',
    element: <Landingpage />,
  }, {
    path: '/getjob',
    element: <Getjob />,
  }, {
    path: '/postjob',
    element: <Postjob />,
  }, {
    path: '/jobdetails/:id',
    element: <Jobdetails />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
