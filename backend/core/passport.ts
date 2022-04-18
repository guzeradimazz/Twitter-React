import passport from 'passport'
import { Strategy as MyStrategy } from 'passport-local'
import { UserDocumentType, UserModel, UserModelInterface } from '../models/UserModel'
import { generateHash } from '../utils/generateHash'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
passport.use(
    new MyStrategy(async (username, password, done) => {
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
passport.use(
    new JWTStrategy(
        {
            secretOrKey: 'topsecret',
            jwtFromRequest: ExtractJwt.fromHeader('token'),
        },
        async (payload: { data: UserDocumentType }, done): Promise<void> => {
            try {
                const user = await UserModel.findById({
                    _id: payload.data._id,
                }).exec()
                
                if (user) return done(null, user)
                else return done(null, false)
            } catch (error) {
                done(error, false)
            }
        }
    )
)
passport.serializeUser((user: any, done) => done(null, user?._id))

passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err: any, user: UserDocumentType) => {
        err ? done(err) : done(null, user)
    })
})
export { passport }
