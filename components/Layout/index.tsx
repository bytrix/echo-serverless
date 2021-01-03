import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { RiUserSmileLine } from 'react-icons/ri'
import HeaderMenu from '../HeaderMenu'
import Menu from '../Menu'
import Navigation from '../Navigation'

const menu = (
    <Menu>
        <Menu.Item>个人主页</Menu.Item>
        <Menu.Item>收藏夹</Menu.Item>
        <Menu.Item>设置</Menu.Item>
        <Menu.Item>切换账户</Menu.Item>
        <Menu.Item>退出</Menu.Item>
    </Menu>
)

const Layout = (props) => {
    const { children } = props
    return (
        <div
            style={{
                width: 930,
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <h1>小纸团</h1>
                <Navigation>
                    <Navigation.Item href='/'>
                        <AiOutlineHome />
                    </Navigation.Item>
                    <Navigation.Item href='/explore'>
                        <BiSun />
                    </Navigation.Item>
                </Navigation>
                <HeaderMenu>
                    <HeaderMenu.Item>
                        <BsBell />
                    </HeaderMenu.Item>
                    <HeaderMenu.Item
                        popup={menu}
                        popupOffset={[10, 10]}
                    >
                        <RiUserSmileLine />
                    </HeaderMenu.Item>
                </HeaderMenu>
            </div>
            {children}
        </div>
    )
}

export default Layout