import { model, Schema, Document } from 'mongoose'

export interface UserModelInterface {
    _id?: String
    email: String
    fullname: String
    username: String
    location?: String
    password: String
    confirmed: boolean
    confirmedHash: String
    about?: String
    website?: String
}
export type UserDocumentType = UserModelInterface & Document

const UserSchema = new Schema<UserModelInterface>(
    {
        email: {
            unique: true,
            required: true,
            type: String,
        },
        fullname: {
            required: true,
            type: String,
        },
        username: {
            unique: true,
            required: true,
            type: String,
        },
        location: String,
        password: {
            required: true,
            type: String,
        },
        confirmed: {
            default: false,
            type: Boolean,
        },
        confirmedHash: {
            required: true,
            type: String,
        },
        about: String,
        website: String,
    },
    { timestamps: true }
)

UserSchema.set('toJSON', {
    transform: (_, object) => {
        delete object.password
        delete object.confirmedHash
        return object
    },
})

export const UserModel = model<UserModelInterface>('User', UserSchema)
