import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import { TwetPage } from './Tweet/TwetPage'

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home/twit/:_id" element={<TwetPage />} />
            </Routes>
        </Router>
    )
}

export default App
