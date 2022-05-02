// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { FetchTags } from '../../store/tags/actionCreatores'

export const HomePlanks = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(FetchTags())
    // }, [dispatch])
    return (
        <div className="planks">
            <input type="text" placeholder="Поиск..." />
            <h2>Актуальная информация</h2>
            <div className="actual-info">
                <div className="actual-info__title">#HandOfRussianHistory</div>
                <p>Твитов: 40</p>
            </div>
            <div className="actual-info">
                <div className="actual-info__title">#Беларусь</div>
                <p>Твитов: 90</p>
            </div>
            <div className="actual-info">
                <div className="actual-info__title">#JAVA</div>
                <p>Твитов: 12</p>
            </div>
            <div className="actual-info">
                <div className="actual-info__title">#Программирование</div>
                <p>Твитов: 233</p>
            </div>
        </div>
    )
}
