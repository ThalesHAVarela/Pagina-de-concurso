import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Concursos from './routes/Concursos';
import Forms from "./routes/Forms.jsx";
import Meusconcursos from "./routes/Meusconcursos.jsx";
import Root from './routes/root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Concursos", 
        element: <Concursos />,
      },
      {
        path: "/Meusconcursos",
        element: <Meusconcursos />,
      },
      {
        path: "/Forms",
        element: <Forms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
