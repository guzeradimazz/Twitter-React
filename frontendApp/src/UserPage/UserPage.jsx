import React, { useEffect, useState } from 'react'
import { ModalTwit } from '../pages/Home/ModalTwit'
import { HomeNavBar } from '../pages/Home/HomeNavBar'
import { HomePlanks } from '../pages/Home/HomePlanks'
import './UserPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { SelectTwitsItems } from '../store/ducks/twits/selectors'
import { Twit } from '../Tweet/Twit'
import { FetchTwits } from '../store/ducks/twits/actionCreatores'
import { Avatar } from '@mui/material'

export const UserPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const twits = useSelector(SelectTwitsItems)
    const userId = window.localStorage.getItem('ID')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchTwits())
        setFilteredTwits(twits.filter((i) => i.user._id === userId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    const avatarka = window.localStorage.getItem('AVATAR')
    const confirmed = window.localStorage.getItem('CONFIRMED')
        ? window.localStorage.getItem('CONFIRMED')
        : false

    console.log(confirmed)
    const [filteredTwits, setFilteredTwits] = useState([])

    return (
        <section className="home">
            <ModalTwit isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
            <HomeNavBar setIsOpenModal={setIsOpenModal} />
            <div className="feed">
                <div className="userinfo">
                    <Avatar
                        className="avatar"
                        alt="Remy Sharp"
                        src={avatarka ? avatarka : undefined}
                    />
                    <div className="userinfo-text">
                        <div
                            style={{
                                width: '500px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            {' '}
                            <h3>{window.localStorage.getItem('FULLNAME')}</h3>
                            {confirmed === true ? (
                                <img
                                    style={{ width: '50px', height: '50px' }}
                                    src="https://cdn-icons-png.flaticon.com/512/1271/1271306.png"
                                    alt="confirmed"
                                />
                            ) : null}
                        </div>
                        <h4>{window.localStorage.getItem('USERNAME')}</h4>
                        <h5>E-Mail: {window.localStorage.getItem('EMAIL')}</h5>
                        <div
                            style={{
                                width: '500px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            {' '}
                            <h5>Город: Минск</h5>
                            <h5>Возраст: 20 лет</h5>
                        </div>
                        <div
                            style={{
                                width: '500px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            {' '}
                            <h5>Страна: Беларусь</h5>
                            <h5>Телефон: +375(29)299-99-99</h5>
                        </div>
                    </div>
                </div>
                <div className="tempMagin">
                    {filteredTwits.map((twit) => (
                        <Twit
                            _id={twit._id}
                            key={twit._id}
                            user={twit.user}
                            text={twit.text}
                            createdAt={twit.createdAt}
                            avatarUrl={twit.user.avatarUrl}
                            like={twit.like}
                            images={twit.images}
                        />
                    ))}
                </div>
            </div>
            <HomePlanks />
        </section>
    )
}
