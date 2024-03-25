import './App.css'
import { theme } from "./theme.ts";
import { CssVarsProvider } from '@mui/joy';
import MainRegister from './components/MainRegister.tsx';
import SignIn from './components/SignIn.tsx';
import SignUp from './components/SignUp.tsx';
import AuthPage from "./pages/AuthPage.tsx";
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
const App = () => {

    const routes = createBrowserRouter([
        {
            path: '/main',
            element: <HomePage />
        },
        {
            path: '/auth',
            element: <AuthPage />,
            children: [
                {
                    index: true,
                    element: <MainRegister />,
                },
                {
                    path: 'signin',
                    element: <SignIn />
                },
                {
                    path: 'signup',
                    element: <SignUp />
                }
            ]
        }
    ])

    return (
        <Provider store={store}>
            <CssVarsProvider theme={theme}>
                <RouterProvider router={routes} />
            </CssVarsProvider>
        </Provider>
    )
}

export default App
