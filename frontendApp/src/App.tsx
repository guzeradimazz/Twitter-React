import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogInApi } from './core/LogInApi'
import { Home } from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import { store } from './store/store'
import { TwetPage } from './Tweet/TwetPage'
import { setUserData } from './store/ducks/user/actionCreatores'

function App() {
    const dispatch = useDispatch()
    const checkAuth = async () => {
        try {
            const { data } = await LogInApi.getMe()
            dispatch(setUserData(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
    )
}

export default App
