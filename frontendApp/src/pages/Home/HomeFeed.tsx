import { Avatar } from '@mui/material'
import React from 'react'
import { TwitList } from '../../Tweet/TwitList'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddTwit } from '../../store/ducks/twits/actionCreatores'
import Button from '../../UI/Button'
import { UploadImage, UploadImages } from './UploadImages'

export interface ImageObj {
    file: File
    blobUrl: string
}
export const HomeFeed: React.FC = (): React.ReactElement => {
    const [text, setText] = useState<string>('')
    const [images, setImages] = useState<ImageObj[]>([])
    const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget) setText(e.currentTarget.value)
    }

    const dispatch = useDispatch()

    const handleClickAddTwit = async (): Promise<void> => {
        let urls = []
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const { url } = await UploadImage(file)
            urls.push(url)
        }
        dispatch(fetchAddTwit({ text, images: urls }))
        setText('')
        setImages([])
        window.location.reload()
    }

    return (
        <div className="feed">
            <h1>Главная</h1>
            <div className="twit-block">
                <Avatar alt="Remy Sharp" className="userAvatar" />
                <div className="twit-text__body">
                    <input
                        type="text"
                        placeholder="Что происходит?"
                        value={text}
                        onChange={(e) => handleChangeText(e)}
                    />
                    <div className="twit-btns2">
                        <UploadImages
                            images={images.map(i=>i.blobUrl)}
                            onChangeImages={setImages}
                        />
                        <div className="btnAdd">
                            <Button
                                onClick={handleClickAddTwit}
                                classNameProp={'blueBtn blueBtntext'}
                                title={'Твитнуть'}
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tempMargin">
                <TwitList />
            </div>
        </div>
    )
}
