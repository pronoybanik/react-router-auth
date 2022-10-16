import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main';
import Home from './component/Home';
import Register from './component/Register';
import LogIn from './component/LogIn';
import PrivateRoute from './component/router/PrivateRoute';
import Orders from './component/Orders';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>

      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      }
    ]
  }


])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
