import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./routes";
import './styles/globals.css'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import ThemeProvider from 'src/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
)
