import { createContext, useState, useEffect } from 'react'
import { menus as menus_data } from '../data/menus';
import { achievements as achievements_data } from "../data/achievements.js";
import { squad as squad_data } from "../data/squad.js";
import { news as news_data } from "../data/news.js";
import { footer as footer_data } from "../data/footer";

export const Context = createContext();

export function ContextProvider(props) {
    
    const [menus, setMenus] = useState([])
    const [toggleShowMenu, setToggleShowMenu] = useState(false)
    const positions = [
        {   
            id: 1,
            pos: 1,
            club: "Santos",
            jj: 12,
            jg: 8,
            je: 1,
            jp: 3,
            gf: 26,
            gc: 11,
            dif: 15,
            pts: 26,
        },
        {
            id: 2,
            pos: 2,
            club: "Sporting",
            jj: 12,
            jg: 7,
            je: 3,
            jp: 2,
            gf: 17,
            gc: 9,
            dif: 8,
            pts: 24,
        },
        {
            id: 3,
            pos: 3,
            club: "Atletico",
            jj: 12,
            jg: 7,
            je: 1,
            jp: 4,
            gf: 24,
            gc: 14,
            dif: 10,
            pts: 22,
        },
        {
            id: 4,
            pos: 4,
            club: "Racing",
            jj: 12,
            jg: 6,
            je: 3,
            jp: 3,
            gf: 19,
            gc: 16,
            dif: 3,
            pts: 21,
        }
    ]
    const [achievements, setAchievements] = useState([])
    const [squad, setSquad] = useState([])
    const [news, setNews] = useState([])
    const [footer, setFooter] = useState([])

    useEffect(() => {
        setMenus(menus_data)
        setAchievements(achievements_data)
        setSquad(squad_data)
        setNews(news_data)
        setFooter(footer_data)
    }, [])

    return (
        <Context.Provider value={{
            menus,
            toggleShowMenu,
            setToggleShowMenu, 
            positions,
            achievements,
            squad,
            news,
            footer,
        }}>
            {props.children}
        </Context.Provider>
    )
}
