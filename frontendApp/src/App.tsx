import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import { store } from './store/store';
import { TwetPage } from './Tweet/TwetPage';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/home/twit/:_id" element={<TwetPage />} />
                </Routes>
            </Provider>
        </Router>
    );
}

export default App;
