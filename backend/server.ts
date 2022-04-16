import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { UserCtrl } from './controllers/UserController'
import { passport } from './core/passport'
require('./core/db')
import { registerValidation } from './validations/register'

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.post('/auth/register', registerValidation, UserCtrl.create)
app.get('/users/:id', registerValidation, UserCtrl.show)
app.get('/auth/verify', registerValidation, UserCtrl.verify)
app.post('/auth/login', passport.authenticate('local'), (req, res) => {
    res.json(req.user)
})
// app.patch('/users',UserCtrl.update)
// app.delete('/users',UserCtrl.delete)

app.listen(process.env.PORT || 8888, (): void => {
    console.log('Server STARTED!!!')
    console.log(process.env.PORT)
})
// https://stackoverflow.com/questions/57856809/installing-mongodb-with-homebrew
