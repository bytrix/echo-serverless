import React from 'react'
import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiLogOutCircle, BiSun } from 'react-icons/bi'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { RiUserSmileFill, RiUserSmileLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import HeaderMenu from '../HeaderMenu'
import Menu from '../Menu'
import Navigation from '../Navigation'

const menu = (
    <Menu>
        <Menu.Item>
            <AiOutlinePlusCircle />
            发布纸条
        </Menu.Item>
        <Menu.Item>
            <BsBookmark />
            收藏夹
        </Menu.Item>
        <Menu.Item>
            <VscAccount />
            账号设置
        </Menu.Item>
        <Menu.Item>
            <BiLogOutCircle />
            退出
        </Menu.Item>
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
                        activeItem={<RiUserSmileFill />}
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