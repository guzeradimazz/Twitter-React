import React, { useEffect } from 'react'
import Button from '../../UI/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddTwit } from '../../store/ducks/twits/actionCreatores'

export const ModalTwit = ({ isOpen, setIsOpen }: any) => {
    const [text, setText] = useState<string>('')
    // const [isEmpty, setEmpty] = useState<boolean>(true)
    const handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget) setText(e.currentTarget.value)
    }
    // useEffect(() => {
    //     if (!!text) setEmpty(false)
    //     else setEmpty(true)
    // }, [text])
    const dispatch = useDispatch()

    const handleClickAddTwit = () => {
        dispatch(fetchAddTwit(text))
    }
    if (!isOpen) return null
    else {
        return (
            <div className={isOpen ? 'modalAddTwit' : 'displayNone'}>
                <div className={isOpen ? 'modalAddTwitContent' : 'displayNone'}>
                    <div
                        className="closeModal"
                        onClick={() => setIsOpen(false)}
                    >
                        <span></span>
                        <span></span>
                    </div>
                    <div className="innerModal">
                        <h1
                            style={{ marginTop: '-80px', marginBottom: '50px' }}
                        >
                            Сделай твит!
                        </h1>
                        <div className="twit-text__body">
                            <input
                                type="text"
                                placeholder="Что происходит?"
                                value={text}
                                onChange={(e) => handleChangeText(e)}
                            />
                            <div
                                className={
                                    // isEmpty ? 'disabledBtn' :
                                    'btnAdd'
                                }
                            >
                                <Button
                                    onClick={handleClickAddTwit}
                                    classNameProp={
                                        // isEmpty
                                        //     ? 'disabledBtn'
                                        // :
                                        'blueBtn blueBtntext'
                                    }
                                    title={'Твитнуть'}
                                ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
