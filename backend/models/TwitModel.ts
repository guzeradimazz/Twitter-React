import { model, Schema, Document } from 'mongoose'
import { UserDocumentType } from './UserModel'

export interface TwitModelInterface {
    _id?: String
    text: String
    user: UserDocumentType | String
    like: Number
}
export type TwitDocumentType = TwitModelInterface & Document

const TwitSchema = new Schema<TwitModelInterface>(
    {
        text: {
            required: true,
            type: String,
        },
        user: {
            ref: 'User',
            required: true,
            type: Schema.Types.ObjectId,
        },
        like: {
            required: false,
            type: Number,
        },
    },
    { timestamps: true }
)

export const TwitModel = model<TwitModelInterface>('Twit', TwitSchema)
