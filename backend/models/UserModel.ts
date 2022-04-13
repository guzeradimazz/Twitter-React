import { model, Schema,Document } from 'mongoose'

interface UserModelInterface{
    email:String,
    fullname:String,
    username:String,
    location?:String,
    password:String,
    confirmed:boolean,
    confirmedHash:String,
    about?:String,
    website?:String,
}
// type UserDocumentType = UserModelInterface & Document;

const UserSchema = new Schema<UserModelInterface>({
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
    location:String,
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
})

export const UserModel = model<UserModelInterface>('User', UserSchema)
