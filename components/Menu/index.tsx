import React from 'react'
import style from './index.module.css'

const Menu = ({ children }) => {
    return (
        <ul className={style.menuList}>{children}</ul>
    )
}

interface ItemProps {
    children: any
    onClick?: (event: React.MouseEvent) => void
}

const Item = (props: ItemProps) => {
    const { children, onClick } = props
    if(children instanceof Array) {
        return (
            <li
                onClick={onClick}
                className={style.item}>
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