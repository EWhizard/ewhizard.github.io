import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Components */
import Root from './routes/root'
import ErrorPage from './error-page'
import Counter from './routes/counter'
import Gallery from './routes/Gallery'
import Contacts from './routes/Contacts'
import Services from './routes/Services'

/* Loader */
import { loader as countLoader } from './routes/counter'

/* Styles */
import './style.css'

/* Router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/counter/:id',
        element: <Counter />,
        loader: countLoader,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

const root = document.getElementById('root') as HTMLElement

/* DOM Creation */
ReactDOM.createRoot(root) //
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
