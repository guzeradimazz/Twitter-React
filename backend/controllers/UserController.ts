import express from 'express'
import { validationResult } from 'express-validator'
import { UserModel } from '../models/UserModel'
import { generateHash } from '../utils/generateHash'
import { SendMail } from '../utils/SendMail'

class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec()
            res.json({
                status: 'success',
                data: users,
            })
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }

    async show(req: express.Request, res: express.Response): Promise<void> {
        try {
            const userId = req.params.id
            if (userId) {
                const user = await UserModel.findById(userId).exec()
                res.json({
                    status: 'success',
                    data: user,
                })
            }
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({
                    status: 'error',
                    errors: errors.array(),
                })
                return
            }
            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: generateHash(req.body.password),
                confirmedHash: generateHash(Math.random().toString()),
            }
            const user = await UserModel.create(data)

            SendMail(
                {
                    emailFrom: 'admin@test.com',
                    emailTo: data.email,
                    subject: 'Подтверждение почты Twitter',
                    html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${
                        process.env.PORT || 8888
                    }/users/verify?hash=${
                        data.confirmedHash
                    }">по этой ссылке</a>`,
                },
                (err: Error | null) => {
                    if (err) {
                        res.json({
                            status: 'error',
                        })
                    } else {
                        res.json({
                            status: 'success',
                            data: user,
                        })
                    }
                }
            )
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }

    async verify(req: express.Request, res: express.Response): Promise<void> {
        const hash = req.query.hash
        if (!hash) {
            res.json({
                message: 'no hash',
                status: 'error',
            })
            return
        }
        try {
            const user = await UserModel.findOne({ confirmedHash: hash }).exec()

            if (user) {
                user.confirmed = true
                user.save()
                res.json({
                    status: 'success',
                    data: user,
                })
            }
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }
}

export const UserCtrl = new UserController()
