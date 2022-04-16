import passport from 'passport'
import { Strategy } from 'passport-local'
import { UserModel, UserModelInterface } from '../models/UserModel'
import { generateHash } from '../utils/generateHash'
passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user = await UserModel.findOne({
                $or: [{ email: username }, { username }],
            }).exec()
            if (!user)
                return done(null, false, { message: 'Incorrect username' })
            else {
                if (user.password === generateHash(password))
                    return done(null, user)
                else return done(null, false)
            }
        } catch (error) {
            return done(error, false)
        }
    })
)
passport.serializeUser((user: any, done) => {
    done(null, user?._id)
})
passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err:any, user:any) => {
        done(err, user.id)
    })
})
export { passport }
