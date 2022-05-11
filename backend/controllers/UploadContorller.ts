import express from 'express'
import cloudinary from '../core/cloudinary'
// import streamifier from 'streamifier'

class UploadController {
    async upload(req: express.Request, res: express.Response): Promise<void> {
        const file = req.file

        cloudinary.v2.uploader
            .upload_stream({ resource_type: 'auto' }, (error, result) => {
                if (error || !result) {
                    return res.status(500).json({
                        status: 'error',
                        message: error,
                    })
                }
                res.status(201).json({
                    url: result.url,
                    size: Math.round(result.bytes / 1024),
                    height: result.height,
                    width: result.width,
                })
            })
            .end(file?.buffer)
    }
}

export const UploadCrtl = new UploadController()
