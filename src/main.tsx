import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./routes";
import './styles/globals.css'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from "react-helmet-async";
import ThemeProvider from "src/theme";
import NotistackProvider from "src/components/NotistackProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider>
                <NotistackProvider>
                    <Provider store={store}>
                        <RouterProvider router={router}/>
                    </Provider>
                </NotistackProvider>
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
