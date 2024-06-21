import ReactDOM from 'react-dom/client'
import {router} from "./routes";
import './styles/globals.css'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from "react-helmet-async";
import ThemeProvider from "src/theme";
import {NotistackProvider, ReduxProvider} from "src/components/provider";




ReactDOM.createRoot(document.getElementById('root')!).render(
    <HelmetProvider>
        <ThemeProvider>
            <NotistackProvider>
                <Provider store={store}>
                    <ReduxProvider>
                        <RouterProvider router={router}/>
                    </ReduxProvider>
                </Provider>
            </NotistackProvider>
        </ThemeProvider>
    </HelmetProvider>
)
