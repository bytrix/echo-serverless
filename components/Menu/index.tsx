import style from './index.module.css'

const Menu = ({ children }) => {
    return (
        <ul className={style.menuList}>{children}</ul>
    )
}

const Item = ({ children }) => {
    return (
        <li className={style.item}>{children}</li>
    )
}

Menu.Item = Item

export default Menu