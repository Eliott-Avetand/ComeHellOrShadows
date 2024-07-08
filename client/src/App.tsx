import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '@styles/styles.scss';
import Navbar from '@components/Navbar/Navbar';
import Sidebar from '@components/Sidebar/Sidebar';
import Footer from '@components/Footer/Footer';

import styles from './App.module.scss';
import { CustomRoutes } from './routes/Routes';

function App() {
    const routes = CustomRoutes.map(customRoute => (
        <Route
            key={customRoute.path}
            path={customRoute.path}
            element={customRoute.Component}
        />
    ));

    return (
        <div className={styles.root}>
            <Navbar />
            <Sidebar />
            <Routes>{routes}</Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
