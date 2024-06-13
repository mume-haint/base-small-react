import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./routes";
import {RouterProvider} from "react-router-dom";
import './styles/globals.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
