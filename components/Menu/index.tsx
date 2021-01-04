import React from 'react'
import style from './index.module.css'

const Menu = ({ children }) => {
    return (
        <ul className={style.menuList}>{children}</ul>
    )
}

const Item = ({ children }) => {
    if(children instanceof Array) {
        return (
            <li className={style.item}>
                {React.cloneElement(children[0], {
                    style: {
                        marginRight: 10,
                        verticalAlign: '-0.1rem'
                    }
                })}
                {children[1]}
            </li>
        )
    }
    return (
        <li className={style.item}>{children}</li>
    )
}

Menu.Item = Item

export default Menu