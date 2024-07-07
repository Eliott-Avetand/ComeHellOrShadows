import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import store from '@config/configureStore'
import { ThemeContextProvider } from '@contexts/Theme.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </BrowserRouter>
    </Provider>
)
