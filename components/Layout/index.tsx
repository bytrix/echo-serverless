import { AiOutlineHome } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { RiUserSmileLine } from 'react-icons/ri'
import HeaderMenu, { Item as HeaderMenuItem } from '../HeaderMenu'
import Navigation, { Item as NavigationItem } from '../Navigation'

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
                    <NavigationItem href='/'>
                        <AiOutlineHome />
                    </NavigationItem>
                    <NavigationItem href='/explore'>
                        <BiSun />
                    </NavigationItem>
                </Navigation>
                <HeaderMenu>
                    <HeaderMenuItem>
                        <BsBell />
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        <RiUserSmileLine />
                    </HeaderMenuItem>
                </HeaderMenu>
            </div>
            {children}
        </div>
    )
}

export default Layout