import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { TwitCtrl } from './controllers/TwitsController'
import { UserCtrl } from './controllers/UserController'
import { passport } from './core/passport'
require('./core/db')
import { registerValidation } from './validations/register'
import { twitsValidation } from './validations/twits'
import multer from 'multer'
import { UploadCrtl } from './controllers/UploadContorller'

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get(
    '/users/me',
    passport.authenticate('jwt', { session: false }),
    UserCtrl.getUserInfo
)
app.get('/users/:id', UserCtrl.show)

app.get('/twits', TwitCtrl.index)
app.get('/twits/:id', TwitCtrl.show)
app.post(
    '/twits',
    passport.authenticate('jwt'),
    twitsValidation,
    TwitCtrl.create
)
app.post(
    '/twits',
    passport.authenticate('jwt'),
    twitsValidation,
    TwitCtrl.update
)
app.delete('/twits/:id', passport.authenticate('jwt'), TwitCtrl.delete)

app.post('/auth/register', registerValidation, UserCtrl.create)
app.get('/auth/verify', registerValidation, UserCtrl.verify)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin)

const upload = multer({dest:'uploads/'}) 

app.post('/upload', upload.single(''), UploadCrtl.upload)

app.listen(process.env.PORT || 8888, (): void => {
    console.log('Server STARTED!!!')
})
