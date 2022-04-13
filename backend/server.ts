import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { UserCtrl } from './controllers/UserController'
require('./core/db')
import { registerValidation } from './validations/register'

const app = express()

app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/users', registerValidation, UserCtrl.create)
app.get('/users/verify', registerValidation, UserCtrl.verify)
// app.patch('/users',UserCtrl.update)
// app.delete('/users',UserCtrl.delete)

app.listen(process.env.PORT || 8888, (): void => {
    console.log('Server STARTED!!!')
    console.log(process.env.PORT)
})
// https://stackoverflow.com/questions/57856809/installing-mongodb-with-homebrew
