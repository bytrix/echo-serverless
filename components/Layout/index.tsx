import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { HTMLAttributes } from 'react'
import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiLogOutCircle, BiSun } from 'react-icons/bi'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { RiUserSmileFill, RiUserSmileLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import HeaderMenu from '../HeaderMenu'
import Menu from '../Menu'
import Navigation from '../Navigation'


const PrimaryMenu = () => {
    const router = useRouter()
    return (
        <Menu>
            <Menu.Item
                onClick={() => {
                    router.push('/create')
                }}
            >
                <AiOutlinePlusCircle />
                发布纸条
            </Menu.Item>
            <Menu.Item>
                <BsBookmark />
                我的收藏
            </Menu.Item>
            <Menu.Item>
                <VscAccount />
                账号设置
            </Menu.Item>
            <Menu.Item>
                <BiLogOutCircle />
                退出登陆
            </Menu.Item>
        </Menu>
    )
}

const Layout = (props: HTMLAttributes<HTMLDivElement>) => {
    const { children } = props
    return (
        <div
            style={{
                width: 930,
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Link href='/'>
                    <h1 style={{
                        cursor: 'pointer'
                    }}>小纸团</h1>
                </Link>
                <Navigation>
                    <Navigation.Item href='/'>
                        <AiOutlineHome />
                    </Navigation.Item>
                    <Navigation.Item href='/explore'>
                        <BiSun />
                    </Navigation.Item>
                </Navigation>
                <HeaderMenu width={160}>
                    <HeaderMenu.Item>
                        <BsBell />
                    </HeaderMenu.Item>
                    <HeaderMenu.Item
                        popup={<PrimaryMenu />}
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