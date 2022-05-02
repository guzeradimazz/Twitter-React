import express from 'express'
import { v2 as cloudinary } from 'cloudinary'

class UploadController {
    async upload(req: express.Request, res: express.Response): Promise<void> {
        cloudinary.uploader.upload_stream({ resource_type: 'auto' }, () => {})
    }
}

export const UploadCrtl = new UploadController()
