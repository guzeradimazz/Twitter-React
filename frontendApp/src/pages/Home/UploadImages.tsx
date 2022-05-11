import axios from 'axios'
import { useEffect, useRef } from 'react'
import { ImageObj } from './HomeFeed'

export interface UploadedProps {
    height: number
    width: number
    url: string
}

export const UploadImage = async (image: File): Promise<UploadedProps> => {
    let formData = new FormData()
    formData.append('image', image)

    const { data } = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'miltipart/form-data',
        },
    })
    return data
}

interface UploadProps {
    images: string[]
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}
export const UploadImages: React.FC<UploadProps> = ({
    images,
    onChangeImages,
}) => {
    const refInpt = useRef<HTMLInputElement>(null)

    const handleFileInput = (e: Event) => {
        if (e.target) {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]
            if (file) {
                const fileBlob = new Blob([file])
                onChangeImages((prev) => [
                    ...prev,
                    { blobUrl: URL.createObjectURL(fileBlob), file },
                ])
            }
        }
    }
    useEffect(() => {
        refInpt.current?.addEventListener('change', handleFileInput)
        return () => {
            if (refInpt.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                refInpt.current.removeEventListener('change', handleFileInput)
            }
        }
    })

    return (
        <div className="1">
            <input
                ref={refInpt}
                type="file"
                style={{ display: 'none' }}
                id="upload"
            />
            <label htmlFor="upload" style={{ cursor: 'pointer' }}>
                <div className="twit-btn-image"></div>
            </label>
            <div className="imagesList">
                {images.map((url) => (
                    <img className='img' key={url} src={url} alt="my img" />
                ))}
            </div>
        </div>
    )
}
