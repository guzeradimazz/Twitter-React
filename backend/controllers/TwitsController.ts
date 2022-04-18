import express from 'express'
import { UserModel, UserModelInterface } from '../models/UserModel'
import { mongoose } from '../core/db'
import { TwitModel, TwitModelInterface } from '../models/TwitModel'
import { validationResult } from 'express-validator'

export const isValidObjectId = mongoose.Types.ObjectId.isValid

class TwitController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const twits = await TwitModel.find({}).exec()
            res.json({
                status: 'success',
                data: twits,
            })
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }

    async show(req: express.Request, res: express.Response): Promise<void> {
        try {
            const twitId = req.params.id
            if (twitId) {
                const twit = await TwitModel.findById(twitId).exec()
                res.json({
                    status: 'success',
                    data: twit,
                })
            } else return
        } catch (error) {
            res.json({
                status: 'error',
            })
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = req.user as UserModelInterface
            if (user?._id) {
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    res.json({
                        status: 'error',
                    })
                    return
                }
                const data: TwitModelInterface = {
                    text: req.body.text,
                    user: user._id,
                }
                const twit = await TwitModel.create(data)
                res.json({
                    status: 'success',
                    data: twit,
                })
            }
        } catch (error) {}
    }

    async delete(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = req.user as UserModelInterface
            if (user) {
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    res.json({
                        status: 'error',
                    })
                    return
                }
                const twitId = req.params.id
                const twit = await TwitModel.findById({ _id: twitId })
                if (twit) {
                    // if (
                    //     typeof twit.user != 'string' &&
                    //     twit.user._id === user._id
                    // ) {
                        twit.remove()
                        res.send()
                    // }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const TwitCtrl = new TwitController()